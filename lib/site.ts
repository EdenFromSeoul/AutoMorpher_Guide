import { LATEST_VERSION } from "./generated-version";

export const SITE_NAME = "きせった (Kisetter) Guide";
export const PRODUCT_NAME = "きせった (Kisetter)";
export const COMPANY_NAME = "Eden Labs";
export const VERSION = LATEST_VERSION;
export const REPOSITORY_NAME = "AutoMorpher_Guide";
export const SITE_ORIGIN = "https://edenfromseoul.github.io";
export const SITE_URL = `${SITE_ORIGIN}/${REPOSITORY_NAME}`;

export const BASE_PATH =
  process.env.NODE_ENV === "production" ? `/${REPOSITORY_NAME}` : "";

export const SUPPORTED_LANGUAGES = ["ko", "ja", "en"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  ko: "한국어",
  ja: "日本語",
  en: "English",
};

export const LINKS = {
  booth: "https://edenlabs.booth.pm/items/7721082",
  discord: "https://discord.com/invite/JFzDGrN2bF",
  x: "https://x.com/EDEN_LABS_JP",
} as const;

export function isLanguage(value: string): value is Language {
  return SUPPORTED_LANGUAGES.includes(value as Language);
}