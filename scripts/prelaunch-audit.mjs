import { readFile, readdir } from "node:fs/promises";

const base = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3000";
const productionOrigin = process.env.PRODUCTION_ORIGIN || "https://www.arktechmold.com";
const expectIndexable = process.env.AUDIT_EXPECT_INDEXABLE === "true";
const checkRfqDelivery = process.env.AUDIT_CHECK_RFQ_DELIVERY === "true";
const summaryOnly = process.argv.includes("--summary");

function decodeHtml(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');
}

function extractAll(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => decodeHtml(match[1]));
}

function visibleText(html) {
  return decodeHtml(html)
    .replace(/<(?:script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/(?:script|style|template|noscript|svg)>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function localUrl(value, currentPath = "/") {
  try {
    const resolved = new URL(value, `${productionOrigin}${currentPath}`);
    if (resolved.origin !== productionOrigin) return null;
    return new URL(`${resolved.pathname}${resolved.search}${resolved.hash}`, base);
  } catch {
    return null;
  }
}

async function read(url, init) {
  const response = await fetch(url, init);
  return { response, text: await response.text() };
}

const sitemapResult = await read(`${base}/sitemap.xml`);
const sitemapProductionUrls = extractAll(sitemapResult.text, /<loc>([^<]+)<\/loc>/g);
const sitemapPaths = sitemapProductionUrls.map((url) => new URL(url).pathname);
const prerenderManifest = JSON.parse(await readFile(".next/prerender-manifest.json", "utf8"));
const excludedBuildRoutes = new Set(["/_global-error", "/_not-found", "/robots.txt", "/sitemap.xml", "/rfq"]);
const builtPublicRoutes = Object.keys(prerenderManifest.routes)
  .filter((path) => !excludedBuildRoutes.has(path))
  .sort();
const routePaths = [...new Set([...sitemapPaths, ...builtPublicRoutes])].sort();
const sitemapMissingRoutes = builtPublicRoutes.filter((path) => !sitemapPaths.includes(path));
const pageResults = new Map();
const failures = [];
const canonicalFailures = [];
const h1Failures = [];
const blankPageSuspicions = [];
const pageMetrics = [];
const developmentUrlLeaks = [];
const indexabilityFailures = [];
const pageLinks = [];
const externalLinks = new Map();
const assetUrls = new Set();

for (const path of routePaths) {
  const { response, text } = await read(`${base}${path}`);
  pageResults.set(path, text);
  if (response.status !== 200) failures.push({ path, status: response.status });

  const canonical = extractAll(text, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/g)[0];
  const finalPath = new URL(response.url).pathname;
  const expected = `${productionOrigin}${finalPath === "/" ? "" : finalPath}`;
  if (canonical !== expected) canonicalFailures.push({ path, expected, actual: canonical || null });

  const h1Count = (text.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) h1Failures.push({ path, h1Count });

  const mainHtml = extractAll(text, /<main\b[^>]*>([\s\S]*?)<\/main>/gi)[0] || "";
  const mainText = visibleText(mainHtml);
  const linkCount = (mainHtml.match(/<a(?:\s|>)/g) || []).length;
  const loadingOnly = /(?:loading|skeleton)/i.test(mainText) && mainText.length < 160;
  const metric = { path, status: response.status, h1Count, mainTextLength: mainText.length, linkCount };
  pageMetrics.push(metric);
  if (response.status === 200 && (!mainHtml || mainText.length < 80 || loadingOnly)) {
    blankPageSuspicions.push({ ...metric, reason: !mainHtml ? "missing-main" : loadingOnly ? "loading-only" : "insufficient-main-content" });
  }

  const leaks = [...new Set(extractAll(text, /(?:href|src|content)="([^"]*(?:localhost|vercel\.app|staging|preview)[^"]*)"/gi))];
  if (leaks.length) developmentUrlLeaks.push({ path, values: leaks });

  const robotsMeta = extractAll(text, /<meta[^>]+name="robots"[^>]+content="([^"]+)"/gi)[0] || "";
  const noindex = /noindex/i.test(robotsMeta);
  if ((expectIndexable && noindex) || (!expectIndexable && !noindex)) {
    indexabilityFailures.push({ path, expected: expectIndexable ? "index" : "noindex", actual: robotsMeta || null });
  }

  for (const href of extractAll(text, /<a[^>]+href="([^"]+)"/g)) {
    const target = localUrl(href, path);
    if (target) pageLinks.push({ from: path, href, target });
    else {
      try {
        const external = new URL(href, `${productionOrigin}${path}`);
        if (["http:", "https:"].includes(external.protocol)) {
          const sources = externalLinks.get(external.href) || new Set();
          sources.add(path);
          externalLinks.set(external.href, sources);
        }
      } catch { /* invalid and non-HTTP links are covered by the source scan */ }
    }
  }
  for (const source of extractAll(text, /<(?:img|video|source)[^>]+(?:src|poster)="([^"]+)"/g)) {
    const target = localUrl(source, path);
    if (target && !target.pathname.startsWith("/_next/image")) assetUrls.add(target.pathname + target.search);
  }
}

const linkFailures = [];
const anchorFailures = [];
const fetchedPaths = new Map();
for (const { from, href, target } of pageLinks) {
  const key = `${target.pathname}${target.search}`;
  let result = fetchedPaths.get(key);
  if (!result) {
    const response = await fetch(`${base}${key}`);
    result = { status: response.status, finalPath: new URL(response.url).pathname, text: await response.text() };
    fetchedPaths.set(key, result);
  }
  if (result.status !== 200) linkFailures.push({ from, href, status: result.status });
  if (target.hash && result.status === 200) {
    const id = decodeURIComponent(target.hash.slice(1));
    const ids = new Set(extractAll(result.text, /\sid="([^"]+)"/g));
    if (!ids.has(id)) anchorFailures.push({ from, href, missingId: id });
  }
}

const assetFailures = [];
for (const asset of assetUrls) {
  const response = await fetch(`${base}${asset}`, { method: "HEAD" });
  if (response.status !== 200) assetFailures.push({ asset, status: response.status });
}

const externalLinkResults = [];
for (const [href, sources] of externalLinks) {
  try {
    let response = await fetch(href, { method: "HEAD", redirect: "follow" });
    if ([403, 405].includes(response.status)) response = await fetch(href, { redirect: "follow" });
    externalLinkResults.push({ href, sources: [...sources], status: response.status, finalUrl: response.url });
  } catch (error) {
    externalLinkResults.push({ href, sources: [...sources], status: null, error: String(error) });
  }
}

async function collectFiles(root) {
  const entries = await readdir(root, { withFileTypes: true }).catch(() => []);
  const files = [];
  for (const entry of entries) {
    const path = `${root}/${entry.name}`;
    if (entry.isDirectory()) files.push(...await collectFiles(path));
    else files.push(path);
  }
  return files;
}

const publicFiles = await collectFiles("public");
const publicAssetPaths = new Set(publicFiles.map((path) => `/${path.slice("public/".length)}`));
const sourceFiles = (await Promise.all(["app", "components", "lib", "generated"].map(collectFiles)))
  .flat()
  .filter((path) => /\.(?:[cm]?[jt]sx?|css|json|mdx?)$/.test(path));
const sourceAssetReferences = [];
for (const sourceFile of sourceFiles) {
  const source = await readFile(sourceFile, "utf8");
  for (const match of source.matchAll(/["'`](\/(?:images|videos|video|media)\/[^"'`?#)]+)["'`]/g)) {
    if (match[1].includes("${")) continue;
    let assetPath = match[1];
    try { assetPath = decodeURIComponent(assetPath); } catch { /* report the literal path below */ }
    sourceAssetReferences.push({ sourceFile, assetPath });
  }
}
const missingSourceAssets = sourceAssetReferences.filter(({ assetPath }) => !publicAssetPaths.has(assetPath));

const robotsResult = await read(`${base}/robots.txt`);
const productionRobotsOk = /Allow:\s*\//i.test(robotsResult.text) && robotsResult.text.includes(`${productionOrigin}/sitemap.xml`) && !/Disallow:\s*\/(?:\s|$)/i.test(robotsResult.text);
const previewRobotsOk = /Disallow:\s*\/(?:\s|$)/i.test(robotsResult.text) && !robotsResult.text.includes("Sitemap:");
const robotsOk = robotsResult.response.status === 200 && (expectIndexable ? productionRobotsOk : previewRobotsOk);
const sitemapOk = sitemapResult.response.status === 200 && sitemapProductionUrls.every((url) => url.startsWith(productionOrigin));

const routesManifest = JSON.parse(await readFile(".next/routes-manifest.json", "utf8"));
const redirectSamples = {
  "/tooling-examples/:slug": "/tooling-examples/precision-injection-molds"
};
const redirectResults = [];
for (const rule of routesManifest.redirects.filter((item) => !item.internal)) {
  const source = redirectSamples[rule.source] || rule.source;
  if (source.includes(":")) continue;
  const query = "route-qa=1";
  let current = new URL(`${source}?${query}`, base);
  const hops = [];
  for (let hop = 0; hop < 5; hop += 1) {
    const response = await fetch(current, { redirect: "manual" });
    const location = response.headers.get("location");
    hops.push({ url: current.pathname + current.search, status: response.status, location });
    if (![301, 302, 303, 307, 308].includes(response.status) || !location) break;
    current = new URL(location, current);
  }
  const final = hops.at(-1);
  redirectResults.push({
    source: rule.source,
    expectedStatus: rule.statusCode,
    hopCount: Math.max(0, hops.length - 1),
    finalStatus: final?.status ?? null,
    finalPath: final?.url ?? null,
    queryPreserved: final?.url?.includes(query) ?? false,
    hops
  });
}

const dynamicPrefixes = [
  "/case-studies",
  "/industries",
  "/injection-molds",
  "/resources",
  "/resources/injection-molding",
  "/resources/injection-molds",
  "/resources/materials",
  "/seo",
  "/services",
  "/solutions"
];
const unknownSlugResults = [];
for (const prefix of dynamicPrefixes) {
  const response = await fetch(`${base}${prefix}/__route-qa-missing__`, { redirect: "manual" });
  unknownSlugResults.push({ path: `${prefix}/__route-qa-missing__`, status: response.status });
}

const rfqMissingFields = await fetch(`${base}/api/rfq`, { method: "POST", body: new FormData() });
const invalidEmailTest = new FormData();
invalidEmailTest.set("name", "Launch Test");
invalidEmailTest.set("email", "invalid-email");
const rfqInvalidEmail = await fetch(`${base}/api/rfq`, { method: "POST", body: invalidEmailTest });
const invalidFileTest = new FormData();
invalidFileTest.set("name", "Launch Test");
invalidFileTest.set("email", "launch-test@arktechmold.invalid");
invalidFileTest.set("cad-files", new File(["safe audit fixture"], "unsupported.exe", { type: "application/octet-stream" }));
const rfqInvalidFile = await fetch(`${base}/api/rfq`, { method: "POST", body: invalidFileTest });
const rfqCrossOrigin = await fetch(`${base}/api/rfq`, {
  method: "POST",
  body: new FormData(),
  headers: { Origin: "https://malicious.invalid" }
});
let rfqDeliveryStatus = null;
let rfqDeliveryMessage = "Skipped; set AUDIT_CHECK_RFQ_DELIVERY=true only when a real test submission is approved.";
if (checkRfqDelivery) {
  const configuredTest = new FormData();
  configuredTest.set("name", "Launch Test");
  configuredTest.set("email", "launch-test@arktechmold.invalid");
  configuredTest.set("project-summary", "Non-confidential technical smoke test; do not treat as a customer inquiry.");
  configuredTest.set("source", "Automated pre-launch audit");
  const rfqDeliveryCheck = await fetch(`${base}/api/rfq`, { method: "POST", body: configuredTest });
  const rfqDeliveryBody = await rfqDeliveryCheck.json().catch(() => ({}));
  rfqDeliveryStatus = rfqDeliveryCheck.status;
  rfqDeliveryMessage = rfqDeliveryBody.message || null;
}

console.log(JSON.stringify({
  base,
  builtPublicRoutes: builtPublicRoutes.length,
  routesAudited: routePaths.length,
  sitemapRoutes: sitemapPaths.length,
  sitemapMissingRoutes,
  pageFailures: failures,
  canonicalFailures,
  h1Failures,
  blankPageSuspicions,
  ...(summaryOnly ? {} : { pageMetrics }),
  developmentUrlLeaks,
  indexabilityFailures,
  internalLinksChecked: pageLinks.length,
  uniqueInternalDestinations: fetchedPaths.size,
  linkFailures,
  anchorFailures,
  externalLinkResults,
  assetsChecked: assetUrls.size,
  assetFailures,
  sourceAssetReferencesChecked: sourceAssetReferences.length,
  missingSourceAssets,
  robotsOk,
  sitemapOk,
  redirectResults,
  unknownSlugResults,
  rfqValidationStatus: rfqMissingFields.status,
  rfqInvalidEmailStatus: rfqInvalidEmail.status,
  rfqInvalidFileStatus: rfqInvalidFile.status,
  rfqCrossOriginStatus: rfqCrossOrigin.status,
  rfqDeliveryStatus,
  rfqDeliveryMessage
}, null, 2));
