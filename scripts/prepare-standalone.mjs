import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  throw new Error("Next.js standalone output was not generated. Check next.config.ts.");
}

const publicSource = join(root, "public");
if (existsSync(publicSource)) {
  cpSync(publicSource, join(standalone, "public"), { recursive: true, force: true });
}

const staticSource = join(root, ".next", "static");
if (existsSync(staticSource)) {
  const nextTarget = join(standalone, ".next");
  mkdirSync(nextTarget, { recursive: true });
  cpSync(staticSource, join(nextTarget, "static"), { recursive: true, force: true });
}
