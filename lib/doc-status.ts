const DISABLED_DOC_SLUGS = new Set(["manual-fitting"]);

export function isDocDisabled(slug: string): boolean {
  return DISABLED_DOC_SLUGS.has(slug);
}

export function filterEnabledDocs<T extends { slug: string }>(docs: T[]): T[] {
  return docs.filter((doc) => !isDocDisabled(doc.slug));
}
