export const SITE_NAME = "Ataîru";
export const SITE_ORIGIN = "https://fabiobeider.github.io";
export const SITE_BASE_PATH = "/atairu-site";
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}`;
export const DEFAULT_OG_IMAGE_URL = `${SITE_URL}/favicon.png`;

export type SupportedLanguage = "pt" | "en" | "es";

export const LANGUAGE_TO_HTML_LANG: Record<SupportedLanguage, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export const LANGUAGE_TO_OG_LOCALE: Record<SupportedLanguage, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export const ALTERNATE_OG_LOCALES = Object.values(LANGUAGE_TO_OG_LOCALE);

export const normalizeRoutePath = (path: string) => {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const buildCanonicalUrl = (path: string) => {
  const normalizedPath = normalizeRoutePath(path);

  if (normalizedPath === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${normalizedPath}`;
};

export const getSupportedLanguage = (language?: string): SupportedLanguage => {
  const normalizedLanguage = language?.split("-")[0];

  if (normalizedLanguage === "en" || normalizedLanguage === "es") {
    return normalizedLanguage;
  }

  return "pt";
};
