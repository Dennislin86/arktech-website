import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceBase = path.join(projectRoot, "public", "images", "Image show");
const outputRoot = path.join(projectRoot, "public", "images", "portfolio", "20261006");
const metadataPath = path.join(projectRoot, "source-assets", "portfolio", "metadata.json");
const manifestPath = path.join(projectRoot, "generated", "portfolio-gallery-manifest.json");
const unmatchedReportPath = path.join(projectRoot, "generated", "portfolio-unmatched-images-report.json");
const publicBasePath = "/images/portfolio/20261006";
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const categories = [
  { folder: "Mold", sourceFolder: path.join(sourceBase, "Mold", "20261006") },
  { folder: "Plastic", sourceFolder: path.join(sourceBase, "Plastic", "20261006") }
];

async function optimizeImage(sourcePath, outputPath) {
  const result = await sharp(sourcePath, { animated: false, failOn: "none" })
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 5, alphaQuality: 90 })
    .toFile(outputPath);

  return { width: result.width, height: result.height, size: result.size };
}

async function main() {
  const metadata = JSON.parse(await readFile(metadataPath, "utf8"));
  const records = metadata.records ?? {};
  await mkdir(outputRoot, { recursive: true });
  await mkdir(path.dirname(manifestPath), { recursive: true });

  const items = [];
  const scannedKeys = new Set();
  const expectedOutputs = new Set();
  const filesWithoutMetadata = [];
  const outputOwners = new Map();

  for (const category of categories) {
    const filenames = (await readdir(category.sourceFolder))
      .filter((filename) => supportedExtensions.has(path.extname(filename).toLowerCase()))
      .sort((left, right) => left.localeCompare(right, "en", { numeric: true, sensitivity: "base" }));

    for (const filename of filenames) {
      const key = `${category.folder}/${filename}`;
      scannedKeys.add(key);
      const record = records[key];
      if (!record || record.metadataSource !== "excel") {
        filesWithoutMetadata.push({
          source: key,
          originalFileName: filename,
          category: category.folder === "Mold" ? "Injection Molds" : "Plastic Parts",
          reason: "No exact Ready Excel record matched this Original File Name; retained for a later spreadsheet update."
        });
        continue;
      }

      const outputName = record.webFileName;
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.webp$/.test(outputName)) {
        throw new Error(`Invalid portfolio WebP filename for ${key}: ${outputName}`);
      }
      if (outputOwners.has(outputName)) {
        throw new Error(`Duplicate portfolio WebP filename ${outputName}: ${outputOwners.get(outputName)} and ${key}`);
      }
      outputOwners.set(outputName, key);
      expectedOutputs.add(outputName);

      const sourcePath = path.join(category.sourceFolder, filename);
      const outputPath = path.join(outputRoot, outputName);
      const optimized = await optimizeImage(sourcePath, outputPath);
      items.push({
        id: `${category.folder.toLowerCase()}-${path.parse(outputName).name}`,
        ...record,
        image: `${publicBasePath}/${outputName}`,
        width: optimized.width,
        height: optimized.height,
        size: optimized.size,
        source: key
      });
    }
  }

  const staleOutputs = (await readdir(outputRoot))
    .filter((filename) => filename.endsWith(".webp") && !expectedOutputs.has(filename));
  await Promise.all(staleOutputs.map((filename) => rm(path.join(outputRoot, filename))));

  items.sort((left, right) =>
    left.category.localeCompare(right.category) ||
    left.sortOrder - right.sortOrder ||
    left.originalFileName.localeCompare(right.originalFileName, "en", { numeric: true })
  );

  const metadataWithoutFiles = Object.keys(records)
    .filter((key) => records[key]?.metadataSource === "excel" && !scannedKeys.has(key))
    .map((key) => ({ source: key, reason: "Metadata record has no matching image file." }));
  const imagesWithoutExcelRows = filesWithoutMetadata.map((item) => ({
    source: item.source,
    originalFileName: item.originalFileName,
    category: item.category,
    action: "Not published; awaiting a completed Excel SEO record with an exact Original File Name match."
  }));

  const manifest = {
    schemaVersion: 1,
    generatedFromBatch: "BATCH-2026-10-06",
    items
  };
  const report = {
    schemaVersion: 1,
    scannedImageCount: scannedKeys.size,
    publishedImageCount: items.length,
    excelMatchedImageCount: items.filter((item) => item.metadataSource === "excel").length,
    imagesWithoutExcelRows,
    filesWithoutMetadata,
    metadataWithoutFiles,
    staleGeneratedFilesRemoved: staleOutputs
  };

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  await writeFile(unmatchedReportPath, `${JSON.stringify(report, null, 2)}\n`);

  const totalBytes = (await Promise.all(items.map((item) => stat(path.join(outputRoot, item.webFileName)))))
    .reduce((total, entry) => total + entry.size, 0);
  console.log(`[portfolio] ${scannedKeys.size} scanned; ${items.length} optimized; ${report.excelMatchedImageCount} Excel matches; ${imagesWithoutExcelRows.length} awaiting Excel data; ${(totalBytes / 1024 / 1024).toFixed(2)} MiB total.`);
}

main().catch((error) => {
  console.error("[portfolio] import failed", error);
  process.exitCode = 1;
});
