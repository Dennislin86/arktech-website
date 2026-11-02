import { access, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = path.join(projectRoot, "public");
const sourceBase = path.join(publicRoot, "images", "Image show");
const outputRoot = path.join(publicRoot, "images", "portfolio", "20261006");
const optimizedOutputRoot = path.join(publicRoot, "images", "portfolio", "optimized");
const metadataPath = path.join(projectRoot, "source-assets", "portfolio", "metadata.json");
const manifestPath = path.join(projectRoot, "generated", "portfolio-gallery-manifest.json");
const unmatchedReportPath = path.join(projectRoot, "generated", "portfolio-unmatched-images-report.json");
const publicOutputParts = ["images", "portfolio", "20261006"];
const publicOptimizedOutputParts = ["images", "portfolio", "optimized"];
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const categoryFolders = ["Mold", "Plastic"];

function encodePublicPath(parts) {
  return `/${parts.map((part) => encodeURIComponent(part)).join("/")}`;
}

function slug(value) {
  return value
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "portfolio-item";
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readPreviousManifest() {
  try {
    return JSON.parse(await readFile(manifestPath, "utf8"));
  } catch {
    return { items: [] };
  }
}

async function imageDetails(filePath) {
  const [metadata, file] = await Promise.all([sharp(filePath, { animated: false, failOn: "none" }).metadata(), stat(filePath)]);
  if (!metadata.width || !metadata.height) throw new Error(`Unable to read image dimensions: ${filePath}`);
  return { width: metadata.width, height: metadata.height, size: file.size };
}

async function main() {
  const metadata = JSON.parse(await readFile(metadataPath, "utf8"));
  const records = metadata.records ?? {};
  const previousManifest = await readPreviousManifest();
  const previousBySource = new Map((previousManifest.items ?? []).map((item) => [item.source, item]));
  const webNameUseCount = new Map();

  for (const record of Object.values(records)) {
    webNameUseCount.set(record.webFileName, (webNameUseCount.get(record.webFileName) ?? 0) + 1);
  }

  await mkdir(path.dirname(manifestPath), { recursive: true });
  const items = [];
  const metadataWithoutFiles = [];
  const matchedSources = new Set();
  const rawSourceAssetsUsed = [];
  const optimizedAssetsUsed = [];
  const assetsOver300KB = [];

  for (const [source, record] of Object.entries(records)) {
    const [folder, ...filenameParts] = source.split("/");
    const filename = filenameParts.join("/");
    const sourcePath = path.join(sourceBase, folder, "20261006", filename);
    if (!(await exists(sourcePath))) {
      metadataWithoutFiles.push({
        source,
        originalFileName: record.originalFileName,
        action: "Skipped; the Excel Original File Name has no exact case-sensitive source-file match."
      });
      continue;
    }

    matchedSources.add(source);
    const previous = previousBySource.get(source);
    const previousUsesOptimizedAsset = previous?.image?.startsWith("/images/portfolio/optimized/");
    const optimizedName = previousUsesOptimizedAsset ? path.basename(previous.image) : record.webFileName;
    const optimizedPath = path.join(optimizedOutputRoot, optimizedName);
    const optimizedIsOwnedByRecord = previousUsesOptimizedAsset && await exists(optimizedPath);
    const outputPath = path.join(outputRoot, record.webFileName);
    const outputIsOwnedByRecord = previous?.image?.startsWith("/images/portfolio/20261006/") && previous.webFileName === record.webFileName;
    const outputNameIsUnique = webNameUseCount.get(record.webFileName) === 1;
    const useExistingWebp = await exists(outputPath) && (outputIsOwnedByRecord || outputNameIsUnique);
    const assetPath = optimizedIsOwnedByRecord ? optimizedPath : useExistingWebp ? outputPath : sourcePath;
    const image = optimizedIsOwnedByRecord
      ? encodePublicPath([...publicOptimizedOutputParts, optimizedName])
      : useExistingWebp
        ? encodePublicPath([...publicOutputParts, record.webFileName])
        : encodePublicPath(["images", "Image show", folder, "20261006", filename]);
    const details = await imageDetails(assetPath);

    const item = {
      id: `${folder.toLowerCase()}-${record.sortOrder}-${slug(record.webFileName)}`,
      ...record,
      webFileName: optimizedIsOwnedByRecord ? optimizedName : record.webFileName,
      assetSource: optimizedIsOwnedByRecord || useExistingWebp ? "optimized-web" : "original-source",
      image,
      ...details,
      source
    };
    items.push(item);

    const assetRecord = { source, image, size: details.size };
    if (optimizedIsOwnedByRecord || useExistingWebp) optimizedAssetsUsed.push(assetRecord);
    else rawSourceAssetsUsed.push(assetRecord);
    if (details.size > 300 * 1024) assetsOver300KB.push(assetRecord);
  }

  const filesWithoutMetadata = [];
  for (const folder of categoryFolders) {
    const sourceFolder = path.join(sourceBase, folder, "20261006");
    if (!(await exists(sourceFolder))) continue;
    const filenames = (await readdir(sourceFolder))
      .filter((filename) => supportedExtensions.has(path.extname(filename).toLowerCase()))
      .sort((left, right) => left.localeCompare(right, "en", { numeric: true, sensitivity: "base" }));

    for (const filename of filenames) {
      const source = `${folder}/${filename}`;
      if (!matchedSources.has(source) && !records[source]) {
        filesWithoutMetadata.push({
          source,
          originalFileName: filename,
          category: folder === "Mold" ? "Injection Molds" : "Plastic Parts",
          action: "Not published; no exact record exists in the selected Excel workbook."
        });
      }
    }
  }

  items.sort((left, right) =>
    left.category.localeCompare(right.category) ||
    left.sortOrder - right.sortOrder ||
    left.originalFileName.localeCompare(right.originalFileName, "en", { numeric: true })
  );

  const manifest = {
    schemaVersion: 2,
    generatedFromWorkbook: metadata.sourceWorkbook,
    generatedFromSheet: metadata.sourceSheet,
    items
  };
  const report = {
    schemaVersion: 2,
    selectedWorkbook: metadata.sourceWorkbook,
    workbookRecordCount: Object.keys(records).length,
    publishedImageCount: items.length,
    optimizedAssetCount: optimizedAssetsUsed.length,
    originalSourceAssetCount: rawSourceAssetsUsed.length,
    metadataWithoutFiles,
    filesWithoutMetadata,
    duplicateWebFileNames: [...webNameUseCount.entries()]
      .filter(([, count]) => count > 1)
      .map(([webFileName, count]) => ({ webFileName, count })),
    assetsOver300KB,
    rawSourceAssetsUsed,
    optimizedAssetsUsed
  };

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  await writeFile(unmatchedReportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`[portfolio] ${Object.keys(records).length} Excel records; ${items.length} published; ${optimizedAssetsUsed.length} existing WebP assets reused; ${rawSourceAssetsUsed.length} originals referenced without recompression; ${metadataWithoutFiles.length} missing source files.`);
}

main().catch((error) => {
  console.error("[portfolio] import failed", error);
  process.exitCode = 1;
});
