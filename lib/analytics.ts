export const GA_MEASUREMENT_ID = "G-RQKG6P2KHG";
export const ANALYTICS_CONSENT_STORAGE_KEY = "arktech-analytics-consent";
export const ANALYTICS_EVENT_NAME = "arktech:analytics-event";
export const ANALYTICS_SETTINGS_EVENT_NAME = "arktech:analytics-settings";

export type AnalyticsConsent = "granted" | "denied" | "unknown";
export type AnalyticsCadFileType = "step" | "stp" | "x_t" | "x_b" | "iges" | "igs" | "stl" | "pdf" | "dwg" | "dxf" | "zip" | "other";
export type AnalyticsEventDetail =
  | { eventName: "generate_lead"; hasCadUpload: boolean }
  | { eventName: "cad_upload"; fileType: AnalyticsCadFileType; fileCount: number };

const productionHosts = new Set(["arktechmold.com", "www.arktechmold.com"]);
const analyticsCadFileTypes = new Set<AnalyticsCadFileType>([
  "step",
  "stp",
  "x_t",
  "x_b",
  "iges",
  "igs",
  "stl",
  "pdf",
  "dwg",
  "dxf",
  "zip",
  "other"
]);

export function isProductionAnalyticsHost(hostname: string) {
  return productionHosts.has(hostname.toLowerCase());
}

export function shouldEnableAnalytics(
  vercelProduction: boolean,
  hostname: string,
  consent: AnalyticsConsent
) {
  return vercelProduction && isProductionAnalyticsHost(hostname) && consent === "granted";
}

export function sanitizedPath(urlOrPath: string, base = "https://www.arktechmold.com") {
  try {
    return new URL(urlOrPath, base).pathname || "/";
  } catch {
    return "/";
  }
}

type TrackedClick = {
  eventName: "rfq_cta_click" | "email_click" | "telephone_click";
  parameters: Record<string, string>;
};

export function classifyAnalyticsClick(rawHref: string, currentUrl: string): TrackedClick | null {
  const sourcePath = sanitizedPath(currentUrl);
  const normalizedHref = rawHref.trim();

  if (normalizedHref.toLowerCase().startsWith("mailto:")) {
    return { eventName: "email_click", parameters: { source_path: sourcePath } };
  }

  if (normalizedHref.toLowerCase().startsWith("tel:")) {
    return { eventName: "telephone_click", parameters: { source_path: sourcePath } };
  }

  try {
    const current = new URL(currentUrl);
    const destination = new URL(normalizedHref, current);
    if (destination.origin !== current.origin) return null;

    const destinationPath = destination.pathname.replace(/\/+$/, "") || "/";
    if (destinationPath !== "/request-a-quote" && destinationPath !== "/rfq") return null;

    return {
      eventName: "rfq_cta_click",
      parameters: {
        source_path: sourcePath,
        destination_path: destination.pathname || "/"
      }
    };
  } catch {
    return null;
  }
}

export function isAnalyticsCadFileType(value: string): value is AnalyticsCadFileType {
  return analyticsCadFileTypes.has(value as AnalyticsCadFileType);
}

export function normalizeAnalyticsCadFileType(fileName: string): AnalyticsCadFileType {
  const extension = fileName.trim().toLowerCase().split(".").pop() ?? "";
  return isAnalyticsCadFileType(extension) ? extension : "other";
}

function dispatchAnalyticsEvent(detail: AnalyticsEventDetail) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<AnalyticsEventDetail>(ANALYTICS_EVENT_NAME, { detail }));
}

export function trackGenerateLead({ hasCadUpload }: { hasCadUpload: boolean }) {
  dispatchAnalyticsEvent({ eventName: "generate_lead", hasCadUpload });
}

export function trackCadUpload({ fileTypes, fileCount }: { fileTypes: AnalyticsCadFileType[]; fileCount: number }) {
  const uniqueFileTypes = [...new Set(fileTypes)];
  const fileType = uniqueFileTypes.length === 1 ? uniqueFileTypes[0] : "other";

  dispatchAnalyticsEvent({
    eventName: "cad_upload",
    fileType,
    fileCount: Math.max(1, Math.floor(fileCount))
  });
}
