import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = path.join(projectRoot, "public");
const sourceRoot = path.join(publicRoot, "images", "Image show");
const outputRoot = path.join(publicRoot, "images", "portfolio", "optimized");
const manifestPath = path.join(projectRoot, "generated", "portfolio-gallery-manifest.json");
const unmatchedReportPath = path.join(projectRoot, "generated", "portfolio-unmatched-images-report.json");
const optimizationReportPath = path.join(projectRoot, "generated", "portfolio-image-optimization-report.json");
const heroSourcePath = path.join(publicRoot, "images", "portfolio", "mirror-polished-injection-mold-transparent-plastic-parts.png");
const heroOutputPath = path.join(publicRoot, "images", "portfolio", "mirror-polished-injection-mold-transparent-plastic-parts.webp");

function withSuffix(filename, suffix) {
  const extension = path.extname(filename);
  return `${path.basename(filename, extension)}-${suffix}${extension}`;
}

async function imageDetails(filePath) {
  const [metadata, file] = await Promise.all([
    sharp(filePath, { animated: false, failOn: "error" }).metadata(),
    stat(filePath)
  ]);
  if (!metadata.width || !metadata.height) throw new Error(`Unable to read image dimensions: ${filePath}`);
  return { width: metadata.width, height: metadata.height, size: file.size };
}

async function writeWebp({ sourcePath, outputPath, maxEdge, qualities, targetBytes }) {
  let details;
  let qualityUsed = qualities.at(-1);

  for (const quality of qualities) {
    await sharp(sourcePath, { animated: false, failOn: "error" })
      .rotate()
      .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
      .webp({ quality, effort: 6, smartSubsample: true })
      .toFile(outputPath);
    details = await imageDetails(outputPath);
    qualityUsed = quality;
    if (details.size <= targetBytes) break;
  }

  return { ...details, quality: qualityUsed };
}

async function main() {
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const unmatchedReport = JSON.parse(await readFile(unmatchedReportPath, "utf8"));
  await mkdir(outputRoot, { recursive: true });

  const targets = manifest.items.filter((item) =>
    item.assetSource === "original-source" || item.image.startsWith("/images/portfolio/optimized/")
  );
  const targetIds = new Set(targets.map((item) => item.id));
  const reservedNames = new Set(
    manifest.items
      .filter((item) => !targetIds.has(item.id))
      .map((item) => path.basename(item.image))
  );
  const assignedNames = new Set();
  const outputNameBySource = new Map();

  for (const item of targets) {
    const existingName = item.image.startsWith("/images/portfolio/optimized/")
      ? path.basename(item.image)
      : null;
    let outputName = existingName ?? item.webFileName;
    let suffix = 2;
    while (reservedNames.has(outputName) || assignedNames.has(outputName)) {
      outputName = withSuffix(item.webFileName, suffix);
      suffix += 1;
    }
    assignedNames.add(outputName);
    outputNameBySource.set(item.source, outputName);
  }

  const mappings = [];
  const updatedItems = [];

  for (const item of manifest.items) {
    const outputName = outputNameBySource.get(item.source);
    if (!outputName) {
      updatedItems.push(item);
      continue;
    }

    const [categoryFolder, ...filenameParts] = item.source.split("/");
    const sourcePath = path.join(sourceRoot, categoryFolder, "20261006", filenameParts.join("/"));
    const outputPath = path.join(outputRoot, outputName);
    const before = await imageDetails(sourcePath);
    const after = await writeWebp({
      sourcePath,
      outputPath,
      maxEdge: 1200,
      qualities: [82, 80, 78, 76, 74, 72],
      targetBytes: 200 * 1024
    });
    const image = `/images/portfolio/optimized/${outputName}`;

    updatedItems.push({
      ...item,
      webFileName: outputName,
      assetSource: "optimized-web",
      image,
      width: after.width,
      height: after.height,
      size: after.size
    });
    mappings.push({
      source: item.source,
      suggestedWebFileName: item.suggestedWebFileName,
      outputFileName: outputName,
      image,
      before,
      after
    });
  }

  const heroBefore = await imageDetails(heroSourcePath);
  const heroAfter = await writeWebp({
    sourcePath: heroSourcePath,
    outputPath: heroOutputPath,
    maxEdge: 1800,
    qualities: [84, 82, 80, 78, 76],
    targetBytes: 250 * 1024
  });

  manifest.items = updatedItems;
  unmatchedReport.publishedImageCount = updatedItems.length;
  unmatchedReport.optimizedAssetCount = updatedItems.filter((item) => item.assetSource === "optimized-web").length;
  unmatchedReport.originalSourceAssetCount = updatedItems.filter((item) => item.assetSource === "original-source").length;
  unmatchedReport.assetsOver300KB = updatedItems
    .filter((item) => item.size > 300 * 1024)
    .map(({ source, image, size }) => ({ source, image, size }));
  unmatchedReport.rawSourceAssetsUsed = updatedItems
    .filter((item) => item.assetSource === "original-source")
    .map(({ source, image, size }) => ({ source, image, size }));
  unmatchedReport.optimizedAssetsUsed = updatedItems
    .filter((item) => item.assetSource === "optimized-web")
    .map(({ source, image, size }) => ({ source, image, size }));

  const optimizationReport = {
    schemaVersion: 1,
    gallery: {
      convertedImageCount: mappings.length,
      existingWebpReusedCount: updatedItems.length - mappings.length,
      beforeBytes: mappings.reduce((total, item) => total + item.before.size, 0),
      afterBytes: mappings.reduce((total, item) => total + item.after.size, 0),
      mappings
    },
    hero: {
      source: "/images/portfolio/mirror-polished-injection-mold-transparent-plastic-parts.png",
      output: "/images/portfolio/mirror-polished-injection-mold-transparent-plastic-parts.webp",
      before: heroBefore,
      after: heroAfter
    }
  };

  await Promise.all([
    writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`),
    writeFile(unmatchedReportPath, `${JSON.stringify(unmatchedReport, null, 2)}\n`),
    writeFile(optimizationReportPath, `${JSON.stringify(optimizationReport, null, 2)}\n`)
  ]);

  console.log(`[portfolio] converted ${mappings.length} gallery images to WebP and optimized the Portfolio hero.`);
}

main().catch((error) => {
  console.error("[portfolio] image optimization failed", error);
  process.exitCode = 1;
});
