import { createHash } from "node:crypto";
import { access, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultGalleryRoot = path.join(projectRoot, "public", "images", "tooling-gallery");
const defaultManifestPath = path.join(projectRoot, "generated", "tooling-gallery-manifest.json");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const categories = [
  { folder: "Mould", key: "mould", prefix: "arktech-mould", defaultAlt: "Arktech injection mold" },
  { folder: "Plastic part", key: "plastic-part", prefix: "arktech-plastic-part", defaultAlt: "Arktech molded plastic part" }
];

function slugify(value) {
  const slug = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^\d+[\s._-]*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
  return slug || "gallery-image";
}

function orderFromName(filename) {
  const match = filename.match(/^(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

async function loadMetadata(metadataPath) {
  try {
    return JSON.parse(await readFile(metadataPath, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return {};
    throw new Error(`Unable to read ${metadataPath}: ${error.message}`);
  }
}

async function ensureFolder(folder) {
  await mkdir(folder, { recursive: true });
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function optimizeImage(sourcePath, outputPath) {
  const image = sharp(sourcePath, { animated: false, failOn: "warning" });
  const metadata = await image.metadata();
  const width = metadata.width ?? 1;
  const height = metadata.height ?? 1;
  const longest = Math.max(width, height);
  const resize = longest > 1200
    ? width >= height ? { width: 1200 } : { height: 1200 }
    : undefined;

  const result = await image
    .rotate()
    .resize({ ...resize, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 5, alphaQuality: 90 })
    .toFile(outputPath);

  return { width: result.width, height: result.height, size: result.size };
}

export async function generateToolingGallery({
  quiet = false,
  galleryRoot = defaultGalleryRoot,
  manifestPath = defaultManifestPath,
  publicBasePath = "/images/tooling-gallery/optimized"
} = {}) {
  const outputRoot = path.join(galleryRoot, "optimized");
  const metadataPath = path.join(galleryRoot, "metadata.json");
  await ensureFolder(outputRoot);
  await ensureFolder(path.dirname(manifestPath));
  const metadataOverrides = await loadMetadata(metadataPath);
  const items = [];
  const expectedOutputs = new Set();
  let optimizedCount = 0;
  let cachedCount = 0;

  for (const category of categories) {
    const sourceFolder = path.join(galleryRoot, category.folder);
    await ensureFolder(sourceFolder);
    const filenames = (await readdir(sourceFolder))
      .filter((filename) => !filename.startsWith(".") && supportedExtensions.has(path.extname(filename).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }));

    for (const filename of filenames) {
      const sourcePath = path.join(sourceFolder, filename);
      const relativeKey = `${category.folder}/${filename}`;
      const override = metadataOverrides[relativeKey] ?? {};
      const source = await readFile(sourcePath);
      const hash = createHash("sha256").update(source).digest("hex").slice(0, 12);
      const slug = slugify(path.parse(filename).name);
      const outputName = `${category.prefix}-${slug}-${hash}.webp`;
      const outputPath = path.join(outputRoot, outputName);
      expectedOutputs.add(outputName);

      let optimized;
      if (await exists(outputPath)) {
        const outputMetadata = await sharp(outputPath).metadata();
        optimized = {
          width: outputMetadata.width ?? 1,
          height: outputMetadata.height ?? 1,
          size: (await stat(outputPath)).size
        };
        cachedCount += 1;
      } else {
        optimized = await optimizeImage(sourcePath, outputPath);
        optimizedCount += 1;
      }

      const stableId = `${category.key}-${slug}`;
      const caseStudyUrl = typeof override.caseStudyUrl === "string" && override.caseStudyUrl.startsWith("/")
        ? override.caseStudyUrl
        : undefined;

      items.push({
        id: stableId,
        category: category.key,
        image: `${publicBasePath}/${outputName}`,
        width: optimized.width,
        height: optimized.height,
        ...(typeof override.title === "string" && override.title.trim() ? { title: override.title.trim() } : {}),
        alt: typeof override.alt === "string" && override.alt.trim() ? override.alt.trim() : category.defaultAlt,
        ...(caseStudyUrl ? { caseStudyUrl } : {}),
        order: Number.isFinite(override.order) ? override.order : orderFromName(filename),
        source: relativeKey,
        contentHash: hash
      });
    }
  }

  const staleOutputs = (await readdir(outputRoot)).filter((filename) => filename.endsWith(".webp") && !expectedOutputs.has(filename));
  await Promise.all(staleOutputs.map((filename) => rm(path.join(outputRoot, filename))));

  items.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.order - b.order || a.source.localeCompare(b.source, "en", { numeric: true });
  });

  const manifest = {
    schemaVersion: 1,
    items
  };
  const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
  let current = "";
  try { current = await readFile(manifestPath, "utf8"); } catch {}
  if (current !== serialized) await writeFile(manifestPath, serialized);

  if (!quiet) {
    console.log(`[tooling-gallery] ${items.length} images; ${optimizedCount} optimized; ${cachedCount} cached; ${staleOutputs.length} stale removed.`);
  }
  return manifest;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  generateToolingGallery().catch((error) => {
    console.error("[tooling-gallery] generation failed", error);
    process.exitCode = 1;
  });
}
