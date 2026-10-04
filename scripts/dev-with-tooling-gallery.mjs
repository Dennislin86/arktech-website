import { spawn } from "node:child_process";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { generateToolingGallery } from "./generate-tooling-gallery.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceFolders = [
  path.join(projectRoot, "public", "images", "tooling-gallery", "Mould"),
  path.join(projectRoot, "public", "images", "tooling-gallery", "Plastic part")
];
const metadataFile = path.join(projectRoot, "public", "images", "tooling-gallery", "metadata.json");

await generateToolingGallery();

let running = false;
let queued = false;

async function sourceFingerprint() {
  const records = [];
  for (const folder of sourceFolders) {
    const filenames = (await readdir(folder)).filter((filename) => !filename.startsWith(".")).sort();
    for (const filename of filenames) {
      const details = await stat(path.join(folder, filename));
      records.push(`${folder}:${filename}:${details.size}:${details.mtimeMs}`);
    }
  }
  const metadataDetails = await stat(metadataFile);
  records.push(`${metadataFile}:${metadataDetails.size}:${metadataDetails.mtimeMs}`);
  return records.join("|");
}

async function regenerate() {
  if (running) {
    queued = true;
    return;
  }
  running = true;
  try {
    await generateToolingGallery();
  } catch (error) {
    console.error("[tooling-gallery] development refresh failed", error);
  } finally {
    running = false;
    if (queued) {
      queued = false;
      await regenerate();
    }
  }
}

let previousFingerprint = await sourceFingerprint();
const poller = setInterval(async () => {
  try {
    const nextFingerprint = await sourceFingerprint();
    if (nextFingerprint !== previousFingerprint) {
      previousFingerprint = nextFingerprint;
      await regenerate();
    }
  } catch (error) {
    console.error("[tooling-gallery] source check failed", error);
  }
}, 1000);
poller.unref();

const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextBin, "dev", "--webpack", ...process.argv.slice(2)], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env
});

function shutdown(signal) {
  clearInterval(poller);
  if (!child.killed) child.kill(signal);
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
child.on("exit", (code, signal) => {
  clearInterval(poller);
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 0);
});
