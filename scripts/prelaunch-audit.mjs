const base = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3000";
const productionOrigin = "https://www.arktechmold.com";

function decodeHtml(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');
}

function extractAll(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => decodeHtml(match[1]));
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
const pageResults = new Map();
const failures = [];
const canonicalFailures = [];
const h1Failures = [];
const developmentUrlLeaks = [];
const pageLinks = [];
const assetUrls = new Set();

for (const path of sitemapPaths) {
  const { response, text } = await read(`${base}${path}`);
  pageResults.set(path, text);
  if (response.status !== 200) failures.push({ path, status: response.status });

  const canonical = extractAll(text, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/g)[0];
  const expected = `${productionOrigin}${path === "/" ? "" : path}`;
  if (canonical !== expected) canonicalFailures.push({ path, expected, actual: canonical || null });

  const h1Count = (text.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) h1Failures.push({ path, h1Count });

  const leaks = [...new Set(extractAll(text, /(?:href|src|content)="([^"]*(?:localhost|vercel\.app|staging|preview)[^"]*)"/gi))];
  if (leaks.length) developmentUrlLeaks.push({ path, values: leaks });

  for (const href of extractAll(text, /<a[^>]+href="([^"]+)"/g)) {
    const target = localUrl(href, path);
    if (target) pageLinks.push({ from: path, href, target });
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

const robotsResult = await read(`${base}/robots.txt`);
const robotsOk = robotsResult.response.status === 200 && /Allow:\s*\//i.test(robotsResult.text) && robotsResult.text.includes(`${productionOrigin}/sitemap.xml`) && !/Disallow:\s*\/(?:\s|$)/i.test(robotsResult.text);
const sitemapOk = sitemapResult.response.status === 200 && sitemapProductionUrls.every((url) => url.startsWith(productionOrigin));

const rfqMissingFields = await fetch(`${base}/api/rfq`, { method: "POST", body: new FormData() });
const configuredTest = new FormData();
configuredTest.set("name", "Launch Test");
configuredTest.set("email", "launch-test@example.com");
configuredTest.set("project-summary", "Non-confidential technical smoke test; do not treat as a customer inquiry.");
configuredTest.set("source", "Automated pre-launch audit");
const rfqDeliveryCheck = await fetch(`${base}/api/rfq`, { method: "POST", body: configuredTest });
const rfqDeliveryBody = await rfqDeliveryCheck.json().catch(() => ({}));

console.log(JSON.stringify({
  base,
  sitemapRoutes: sitemapPaths.length,
  pageFailures: failures,
  canonicalFailures,
  h1Failures,
  developmentUrlLeaks,
  internalLinksChecked: pageLinks.length,
  uniqueInternalDestinations: fetchedPaths.size,
  linkFailures,
  anchorFailures,
  assetsChecked: assetUrls.size,
  assetFailures,
  robotsOk,
  sitemapOk,
  rfqValidationStatus: rfqMissingFields.status,
  rfqDeliveryStatus: rfqDeliveryCheck.status,
  rfqDeliveryMessage: rfqDeliveryBody.message || null
}, null, 2));
