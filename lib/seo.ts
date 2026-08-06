import type { Metadata } from "next";
import {
  COMPANY_NAME,
  PRODUCT_NAME,
  SITE_NAME,
  VERSION,
  absoluteUrl,
  languageAlternates,
  localizedPath,
  type Language,
} from "./site";

type SeoCopy = {
  title: string;
  description: string;
  locale: string;
  keywords: string[];
};

const SHARED_KEYWORDS = [
  "VRChat",
  "Booth",
  "Unity",
  "非対応衣装",
  "衣装対応ツール",
  "アバター 衣装変換",
  "衣装改変",
  "アバター改変",
  "MochiFitter",
  "もちふぃった",
  "Alterith",
  "きせった",
  "Kisetter",
];

export const HOME_SEO: Record<Language, SeoCopy> = {
  ja: {
    title: "非対応衣装をアバターに対応させるUnityツール | きせった",
    description:
      "きせった（Kisetter）は、VRChat向けの非対応衣装をHumanoidアバターへフィッティングするUnity衣装対応ツールです。ボーン、メッシュ、ウェイト調整を効率化します。",
    locale: "ja_JP",
    keywords: SHARED_KEYWORDS,
  },
  ko: {
    title: "VRChat 비전용 의상 대응 Unity 툴 | きせった Kisetter",
    description:
      "きせった(Kisetter)는 VRChat 비전용 의상을 Humanoid 아바타에 맞게 변환하는 Unity 의상 대응 툴입니다. 본, 메시, 웨이트 조정을 효율화합니다.",
    locale: "ko_KR",
    keywords: ["VRChat 비전용 의상", "아바타 개변", "의상 개변", "Unity 의상 변환", ...SHARED_KEYWORDS],
  },
  en: {
    title: "VRChat Avatar Clothing Converter for Unity | Kisetter",
    description:
      "Kisetter is a Unity clothing fitting tool that adapts unsupported outfits to Humanoid avatars for VRChat, adjusting bones, meshes, and weights efficiently.",
    locale: "en_US",
    keywords: ["VRChat clothing converter", "Unity avatar outfit fitting", "avatar clothing conversion", ...SHARED_KEYWORDS],
  },
};

const SOCIAL_IMAGE = absoluteUrl("/assets/brand/kisetter-thumbnail.png");

export function homeMetadata(lang: Language): Metadata {
  const seo = HOME_SEO[lang];
  const canonical = absoluteUrl(localizedPath(lang));
  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: languageAlternates(),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: seo.locale,
      alternateLocale: Object.values(HOME_SEO)
        .map((item) => item.locale)
        .filter((locale) => locale !== seo.locale),
      type: "website",
      images: [{ url: SOCIAL_IMAGE, width: 2160, height: 2160, alt: `${PRODUCT_NAME} by ${COMPANY_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [SOCIAL_IMAGE],
    },
  };
}

export function docMetadata(
  lang: Language,
  slug: string,
  title: string,
  description: string,
): Metadata {
  const suffix = `docs/${slug}`;
  const canonical = absoluteUrl(localizedPath(lang, suffix));
  const localizedTitle = `${title} | ${PRODUCT_NAME} Guide`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(suffix),
    },
    openGraph: {
      title: localizedTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: HOME_SEO[lang].locale,
      type: "article",
      images: [{ url: SOCIAL_IMAGE, width: 2160, height: 2160, alt: `${PRODUCT_NAME} ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: localizedTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}

export function softwareApplicationJsonLd(lang: Language) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: PRODUCT_NAME,
    alternateName: "Kisetter",
    description: HOME_SEO[lang].description,
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Unity Editor Tool",
    operatingSystem: ["Windows", "Linux"],
    softwareVersion: VERSION,
    inLanguage: lang,
    url: absoluteUrl(localizedPath(lang)),
    author: { "@type": "Organization", name: COMPANY_NAME },
    sameAs: ["https://edenlabs.booth.pm/items/7721082", "https://x.com/EDEN_LABS_JP"],
  };
}

export function breadcrumbJsonLd(lang: Language, title: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: PRODUCT_NAME,
        item: absoluteUrl(localizedPath(lang)),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: absoluteUrl(localizedPath(lang, `docs/${slug}`)),
      },
    ],
  };
}

export function techArticleJsonLd(
  lang: Language,
  title: string,
  description: string,
  slug: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    inLanguage: lang,
    mainEntityOfPage: absoluteUrl(localizedPath(lang, `docs/${slug}`)),
    author: { "@type": "Organization", name: COMPANY_NAME },
    publisher: { "@type": "Organization", name: COMPANY_NAME },
  };
}
