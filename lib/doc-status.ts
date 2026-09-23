const DISABLED_DOC_SLUGS = new Set(["manual-fitting"]);

export function isDocDisabled(slug: string): boolean {
  // Keep the Mesh Studio guide and its editing modes local until publication is approved.
  if (slug === "mesh-editing" || slug.startsWith("mesh-editing-")) {
    return process.env.NODE_ENV !== "development";
  }
  return DISABLED_DOC_SLUGS.has(slug);
}

export function filterEnabledDocs<T extends { slug: string }>(docs: T[]): T[] {
  return docs.filter((doc) => !isDocDisabled(doc.slug));
}
