import { LATEST_VERSION } from "./generated-version";

export const SITE_NAME = "きせった (Kisetter) Guide";
export const PRODUCT_NAME = "きせった (Kisetter)";
export const COMPANY_NAME = "Eden Labs";
export const VERSION = LATEST_VERSION;
export const REPOSITORY_NAME = "AutoMorpher_Guide";
export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://edenfromseoul.github.io"
).replace(/\/$/, "");
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
export const BASE_PATH = (
  configuredBasePath ??
  (process.env.NODE_ENV === "production" ? `/${REPOSITORY_NAME}` : "")
).replace(/\/$/, "");
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

export const SUPPORTED_LANGUAGES = ["ko", "ja", "en"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = "ja";

export const LANGUAGE_LABELS: Record<Language, string> = {
  ko: "한국어",
  ja: "日本語",
  en: "English",
};

export const LINKS = {
  booth: "https://edenlabs.booth.pm/items/7721082",
  boothLanding: "https://edenlabs.booth.pm/items/7721082?utm_source=kisetter_site&utm_medium=referral&utm_campaign=kisetter_landing_page&utm_content=main_page",
  boothReviews: "https://edenlabs.booth.pm/items/7721082?utm_source=kisetter_site&utm_medium=referral&utm_campaign=kisetter_landing_page&utm_content=reviews_page",
  discord: "https://discord.com/invite/JFzDGrN2bF",
  x: "https://x.com/EDEN_LABS_JP",
} as const;

export function withBasePath(pathname = "/"): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${BASE_PATH}${path}`;
}

export function absoluteUrl(pathname = "/"): string {
  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function localizedPath(lang: Language, suffix = ""): string {
  const normalizedSuffix = suffix ? `/${suffix.replace(/^\/+|\/+$/g, "")}` : "";
  return `/${lang}${normalizedSuffix}/`;
}

export function languageAlternates(suffix = ""): Record<string, string> {
  const alternates = Object.fromEntries(
    SUPPORTED_LANGUAGES.map((lang) => [
      lang,
      absoluteUrl(localizedPath(lang, suffix)),
    ]),
  );
  return {
    ...alternates,
    "x-default": absoluteUrl(localizedPath(DEFAULT_LANGUAGE, suffix)),
  };
}

export function isLanguage(value: string): value is Language {
  return SUPPORTED_LANGUAGES.includes(value as Language);
}
