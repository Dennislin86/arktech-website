"use client";

import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  ANALYTICS_EVENT_NAME,
  ANALYTICS_SETTINGS_EVENT_NAME,
  classifyAnalyticsClick,
  GA_MEASUREMENT_ID,
  isProductionAnalyticsHost,
  sanitizedPath,
  shouldEnableAnalytics,
  type AnalyticsConsent
} from "@/lib/analytics";

type Gtag = (...args: unknown[]) => void;
const consentChangeEventName = "arktech:analytics-consent-change";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function analyticsDisabledKey() {
  return `ga-disable-${GA_MEASUREMENT_ID}`;
}

function setAnalyticsDisabled(disabled: boolean) {
  (window as unknown as Record<string, unknown>)[analyticsDisabledKey()] = disabled;
}

function ensureGtag() {
  window.dataLayer ??= [];
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  return window.gtag;
}

function safePageReferrer() {
  if (!document.referrer) return "";

  try {
    const referrer = new URL(document.referrer);
    return referrer.origin === window.location.origin
      ? `${referrer.origin}${referrer.pathname}`
      : referrer.origin;
  } catch {
    return "";
  }
}

function expireAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  for (const name of cookieNames) {
    for (const domain of ["", ".arktechmold.com", "arktechmold.com"]) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}

function readStoredConsent(): AnalyticsConsent {
  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : "unknown";
  } catch {
    return "unknown";
  }
}

function subscribeToConsent(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === ANALYTICS_CONSENT_STORAGE_KEY) callback();
  };
  window.addEventListener(consentChangeEventName, callback);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(consentChangeEventName, callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function subscribeToStableBrowserState() {
  return () => undefined;
}

export function AnalyticsManager({ vercelProduction }: { vercelProduction: boolean }) {
  const pathname = usePathname();
  const initializedRef = useRef(false);
  const lastPageViewRef = useRef("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const runtimeEligible = useSyncExternalStore(
    subscribeToStableBrowserState,
    () => vercelProduction && isProductionAnalyticsHost(window.location.hostname),
    () => false
  );
  const consent = useSyncExternalStore<AnalyticsConsent>(
    subscribeToConsent,
    readStoredConsent,
    () => "unknown"
  );
  const runtimeHostname = typeof window === "undefined" ? "" : window.location.hostname;

  useEffect(() => {
    if (!runtimeEligible) return;

    const openSettings = () => setSettingsOpen(true);

    window.addEventListener(ANALYTICS_SETTINGS_EVENT_NAME, openSettings);
    return () => {
      window.removeEventListener(ANALYTICS_SETTINGS_EVENT_NAME, openSettings);
    };
  }, [runtimeEligible]);

  const analyticsEnabled = runtimeEligible
    && shouldEnableAnalytics(vercelProduction, runtimeHostname, consent);

  useEffect(() => {
    if (!analyticsEnabled) return;

    setAnalyticsDisabled(false);
    const gtag = ensureGtag();
    gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });

    if (!initializedRef.current) {
      initializedRef.current = true;
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID, {
        send_page_view: false,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    } else {
      gtag("consent", "update", { analytics_storage: "granted" });
    }
  }, [analyticsEnabled]);

  useEffect(() => {
    if (!analyticsEnabled || !window.gtag) return;

    const pagePath = sanitizedPath(pathname);
    if (lastPageViewRef.current === pagePath) return;
    lastPageViewRef.current = pagePath;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: `${window.location.origin}${pagePath}`,
      page_referrer: safePageReferrer()
    });
  }, [analyticsEnabled, pathname]);

  useEffect(() => {
    if (!analyticsEnabled || !window.gtag) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!target) return;

      const tracked = classifyAnalyticsClick(target.getAttribute("href") ?? "", window.location.href);
      if (tracked) window.gtag?.("event", tracked.eventName, tracked.parameters);
    };

    const handleAnalyticsEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ eventName?: string }>).detail;
      if (detail?.eventName !== "generate_lead") return;
      window.gtag?.("event", "generate_lead", { source_path: sanitizedPath(window.location.pathname) });
    };

    document.addEventListener("click", handleClick);
    window.addEventListener(ANALYTICS_EVENT_NAME, handleAnalyticsEvent);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener(ANALYTICS_EVENT_NAME, handleAnalyticsEvent);
    };
  }, [analyticsEnabled]);

  function saveConsent(nextConsent: Exclude<AnalyticsConsent, "unknown">) {
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, nextConsent);
    } catch {
      if (nextConsent === "denied") setAnalyticsDisabled(true);
      return;
    }
    window.dispatchEvent(new Event(consentChangeEventName));
    setSettingsOpen(false);

    if (nextConsent === "denied") {
      setAnalyticsDisabled(true);
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      expireAnalyticsCookies();
      lastPageViewRef.current = "";
    }
  }

  if (!runtimeEligible) return null;

  return (
    <>
      {analyticsEnabled ? (
        <Script
          id="arktech-google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      ) : null}

      {consent === "unknown" || settingsOpen ? (
        <section
          aria-label="Analytics cookie preferences"
          className="fixed inset-x-4 bottom-4 z-[190] mx-auto max-w-3xl rounded-md border border-[var(--line)] bg-white p-5 shadow-2xl sm:flex sm:items-center sm:justify-between sm:gap-6"
          role="region"
        >
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-[var(--brand-dark)]">Analytics preferences</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              With your permission, Arktech uses Google Analytics to understand page visits and inquiry actions. Analytics stays off until you accept. No RFQ form contents or uploaded-file details are sent.
              {" "}<Link className="focus-ring rounded-sm font-bold text-[var(--brand)] hover:underline" href="/cookie-policy">Cookie Policy</Link>
            </p>
          </div>
          <div className="mt-4 flex shrink-0 flex-col gap-2 sm:mt-0 sm:flex-row">
            <button className="focus-ring min-h-11 rounded-sm border border-[var(--brand-dark)] px-4 text-sm font-bold text-[var(--brand-dark)] hover:bg-[var(--surface-soft)]" onClick={() => saveConsent("denied")} type="button">Decline analytics</button>
            <button className="focus-ring min-h-11 rounded-sm bg-[var(--brand)] px-4 text-sm font-bold text-white hover:bg-[var(--brand-hover)]" onClick={() => saveConsent("granted")} type="button">Accept analytics</button>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function AnalyticsPreferencesButton({ enabled }: { enabled: boolean }) {
  const visible = useSyncExternalStore(
    subscribeToStableBrowserState,
    () => enabled && isProductionAnalyticsHost(window.location.hostname),
    () => false
  );

  if (!visible) return null;

  return (
    <button
      className="focus-ring rounded-sm transition hover:text-white"
      onClick={() => window.dispatchEvent(new Event(ANALYTICS_SETTINGS_EVENT_NAME))}
      type="button"
    >
      Analytics Preferences
    </button>
  );
}
