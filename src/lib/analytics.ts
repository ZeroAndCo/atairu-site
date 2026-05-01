import { buildCanonicalUrl, normalizeRoutePath, SupportedLanguage } from "@/lib/site";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }

  interface ImportMetaEnv {
    readonly VITE_GA_MEASUREMENT_ID?: string;
  }
}

export type AnalyticsEventName =
  | "map_filter_used"
  | "heritage_detail_opened"
  | "language_changed"
  | "contact_cta_clicked"
  | "contact_form_submitted"
  | "newsletter_subscribed";

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
let analyticsInitialized = false;

export const isAnalyticsEnabled = Boolean(measurementId);

const ensureGtag = () => {
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
  }

  return window.gtag;
};

export const initAnalytics = () => {
  if (!isAnalyticsEnabled || analyticsInitialized || typeof window === "undefined") {
    return;
  }

  const existingScript = document.querySelector<HTMLScriptElement>('script[data-analytics="ga4"]');

  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.analytics = "ga4";
    document.head.appendChild(script);
  }

  const gtag = ensureGtag();
  gtag("js", new Date());
  gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });

  analyticsInitialized = true;
};

export const trackPageView = (path: string, language: SupportedLanguage) => {
  if (!isAnalyticsEnabled || typeof window === "undefined" || !window.gtag) {
    return;
  }

  const normalizedPath = normalizeRoutePath(path.split("?")[0] || "/");

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_path: path,
    page_location: `${buildCanonicalUrl(normalizedPath)}${window.location.search}${window.location.hash}`,
    language,
  });
};

export const trackEvent = (eventName: AnalyticsEventName, params: AnalyticsParams = {}) => {
  if (!isAnalyticsEnabled || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, params);
};
