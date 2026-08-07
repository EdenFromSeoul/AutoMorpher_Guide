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
    title: "きせった (Kisetter)",
    description:
      "VRChatの衣装対応をもっと簡単に。きせった（Kisetter）は、アバターと衣装を用意するだけで、非対応衣装を手軽に着せられるUnity向け変換ツールです。複雑な作業は必要ありません。",
    locale: "ja_JP",
    keywords: SHARED_KEYWORDS,
  },
  ko: {
    title: "きせった (Kisetter)",
    description:
      "VRChat 의상 대응을 더 간단하게. きせった(Kisetter)는 아바타와 의상만 준비하면 비전용 의상을 손쉽게 입힐 수 있는 Unity용 변환 도구입니다. 복잡한 작업은 필요하지 않습니다.",
    locale: "ko_KR",
    keywords: ["VRChat 비전용 의상", "아바타 개변", "의상 개변", "Unity 의상 변환", ...SHARED_KEYWORDS],
  },
  en: {
    title: "きせった (Kisetter)",
    description:
      "Make VRChat outfit fitting easier. Kisetter is a Unity conversion tool that lets you fit unsupported outfits simply by preparing an avatar and outfit. No complicated workflow is required.",
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
    offers: [
      {
        "@type": "Offer",
        name: "きせった (Kisetter)",
        price: "1500",
        priceCurrency: "JPY",
        url: "https://edenlabs.booth.pm/items/7721082",
      },
      {
        "@type": "Offer",
        name: "Full Set: きせった (Kisetter) + Mesh Studio",
        price: "2500",
        priceCurrency: "JPY",
        url: "https://edenlabs.booth.pm/items/7721082",
      },
    ],
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

export function reviewsItemListJsonLd(lang: Language, posts: readonly string[]) {
  const names: Record<Language, string> = {
    ja: "きせった ユーザーレビュー",
    ko: "きせった 사용자 후기",
    en: "Kisetter User Reviews",
  };
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: names[lang],
    inLanguage: lang,
    url: absoluteUrl(localizedPath(lang, "reviews")),
    numberOfItems: posts.length,
    itemListElement: posts.map((url, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/assets/brand/kisetter-logo.png"),
    sameAs: ["https://x.com/EDEN_LABS_JP", "https://edenlabs.booth.pm/"],
  };
}

export function faqDocJsonLd(lang: Language, items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
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
