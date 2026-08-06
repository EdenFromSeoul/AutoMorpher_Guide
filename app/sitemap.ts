import type { MetadataRoute } from "next";
import { getDocs } from "@/lib/content";
import {
  SUPPORTED_LANGUAGES,
  absoluteUrl,
  languageAlternates,
  localizedPath,
} from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return SUPPORTED_LANGUAGES.flatMap((lang) => {
    const landingPage: MetadataRoute.Sitemap[number] = {
      url: absoluteUrl(localizedPath(lang)),
      changeFrequency: "weekly",
      priority: lang === "ja" ? 1 : 0.9,
      alternates: { languages: languageAlternates() },
    };
    const reviewsPage: MetadataRoute.Sitemap[number] = {
      url: absoluteUrl(localizedPath(lang, "reviews")),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: languageAlternates("reviews") },
    };
    const docs = getDocs(lang).map((doc) => {
      const suffix = `docs/${doc.slug}`;
      return {
        url: absoluteUrl(localizedPath(lang, suffix)),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages: languageAlternates(suffix) },
      };
    });
    return [landingPage, reviewsPage, ...docs];
  });
}
