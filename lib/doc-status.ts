import { SUPPORTED_LANGUAGES, type Language } from "./site";

const DISABLED_DOC_SLUGS = new Set(["manual-fitting"]);

// Remove a restriction when the corresponding translations are ready.
const DOC_LANGUAGES: Partial<Record<string, readonly Language[]>> = {};

export function isDocDisabled(slug: string): boolean {
  return DISABLED_DOC_SLUGS.has(slug);
}

export function getDocLanguages(slug: string): readonly Language[] {
  if (isDocDisabled(slug)) return [];
  return DOC_LANGUAGES[slug] ?? SUPPORTED_LANGUAGES;
}

export function filterEnabledDocs<T extends { slug: string }>(docs: T[], lang: Language): T[] {
  return docs.filter((doc) => getDocLanguages(doc.slug).includes(lang));
}
