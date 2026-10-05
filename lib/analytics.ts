export const GA_MEASUREMENT_ID = "G-RQKG6P2KHG";
export const ANALYTICS_CONSENT_STORAGE_KEY = "arktech-analytics-consent";
export const ANALYTICS_EVENT_NAME = "arktech:analytics-event";
export const ANALYTICS_SETTINGS_EVENT_NAME = "arktech:analytics-settings";

export type AnalyticsConsent = "granted" | "denied" | "unknown";

const productionHosts = new Set(["arktechmold.com", "www.arktechmold.com"]);

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

export function trackGenerateLead() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(ANALYTICS_EVENT_NAME, { detail: { eventName: "generate_lead" } }));
}
