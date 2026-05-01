import { useEffect } from "react";
import { getSeoMetadata, SeoRouteKey } from "@/lib/seo";
import {
  ALTERNATE_OG_LOCALES,
  LANGUAGE_TO_HTML_LANG,
  LANGUAGE_TO_OG_LOCALE,
  SITE_NAME,
  SupportedLanguage,
} from "@/lib/site";

type SEOProps = {
  routeKey: SeoRouteKey;
  language: SupportedLanguage;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const upsertMeta = (selector: string, attribute: "name" | "property", value: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    element.dataset.seoManaged = "true";
    document.head.appendChild(element);
  }

  element.content = content;
};

const upsertLink = (selector: string, rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    element.dataset.seoManaged = "true";
    document.head.appendChild(element);
  }

  element.href = href;
};

const syncAlternateLocales = (currentLocale: string) => {
  document.head
    .querySelectorAll('meta[property="og:locale:alternate"]')
    .forEach((element) => element.remove());

  ALTERNATE_OG_LOCALES.filter((locale) => locale !== currentLocale).forEach((locale) => {
    const element = document.createElement("meta");
    element.setAttribute("property", "og:locale:alternate");
    element.content = locale;
    element.dataset.seoManaged = "true";
    document.head.appendChild(element);
  });
};

const syncStructuredData = (entries: Array<Record<string, unknown>>) => {
  document.head
    .querySelectorAll('script[type="application/ld+json"][data-seo-managed="true"]')
    .forEach((element) => element.remove());

  entries.forEach((entry, index) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoManaged = "true";
    script.dataset.seoIndex = String(index);
    script.text = JSON.stringify(entry);
    document.head.appendChild(script);
  });
};

export const SEO = ({ routeKey, language, structuredData = [] }: SEOProps) => {
  useEffect(() => {
    const metadata = getSeoMetadata(routeKey, language);
    const currentLocale = LANGUAGE_TO_OG_LOCALE[language];

    document.title = metadata.title;
    document.documentElement.lang = LANGUAGE_TO_HTML_LANG[language];

    upsertMeta('meta[name="description"]', "name", "description", metadata.description);
    upsertMeta('meta[name="author"]', "name", "author", SITE_NAME);
    upsertMeta('meta[name="robots"]', "name", "robots", "index,follow");
    upsertMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", metadata.type);
    upsertMeta('meta[property="og:url"]', "property", "og:url", metadata.canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    upsertMeta('meta[property="og:image"]', "property", "og:image", metadata.imageUrl);
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", currentLocale);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", metadata.imageUrl);
    upsertLink('link[rel="canonical"]', "canonical", metadata.canonicalUrl);
    syncAlternateLocales(currentLocale);

    const entries = Array.isArray(structuredData) ? structuredData : [structuredData];
    syncStructuredData(entries);
  }, [language, routeKey, structuredData]);

  return null;
};
