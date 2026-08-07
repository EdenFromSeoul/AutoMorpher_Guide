import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ReviewsFeed } from "@/components/ReviewsFeed";
import { ReviewsMotion } from "@/components/ReviewsMotion";
import { REVIEWS_COPY } from "@/lib/reviews-copy";
import { X_REVIEW_POSTS } from "@/lib/x-review-posts";
import { reviewsItemListJsonLd } from "@/lib/seo";
import {
  BASE_PATH,
  LINKS,
  SITE_NAME,
  absoluteUrl,
  isLanguage,
  languageAlternates,
  localizedPath,
} from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const copy = REVIEWS_COPY[lang];
  const canonical = absoluteUrl(localizedPath(lang, "reviews"));
  const image = absoluteUrl("/assets/brand/kisetter-thumbnail.png");

  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDescription,
    alternates: { canonical, languages: languageAlternates("reviews") },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: image, width: 2160, height: 2160, alt: "きせった (Kisetter)" }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [image],
    },
  };
}

export default async function ReviewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = REVIEWS_COPY[lang];

  return (
    <main className="reviews-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsItemListJsonLd(lang, X_REVIEW_POSTS)).replace(/</g, "\\u003c") }}
      />
      <ReviewsMotion />

      <section className="reviews-hero">
        <div className="reviews-hero-copy">
          <p>{copy.eyebrow}</p>
          <h1>
            <span>{copy.title[0]}</span>
            <span className="reviews-title-with-image">
              {copy.title[1]}
            </span>
          </h1>
        </div>
        <div className="reviews-hero-side">
          <p>{copy.description}</p>
          <div>
            <strong>{String(X_REVIEW_POSTS.length).padStart(2, "0")}</strong>
            <span>{copy.countLabel}</span>
          </div>
        </div>
      </section>

      <div className="reviews-marquee" aria-hidden="true">
        <div>
          <span>REAL USERS</span><i />
          <span>REAL FITS</span><i />
          <span>VRCHAT OUTFIT STORIES</span><i />
          <span>REAL USERS</span><i />
          <span>REAL FITS</span><i />
          <span>VRCHAT OUTFIT STORIES</span><i />
        </div>
      </div>

      <section className="reviews-content" aria-label={copy.countLabel}>
        <ReviewsFeed
          posts={X_REVIEW_POSTS}
          originalNotice={copy.originalNotice}
          originalLink={copy.originalLink}
        />

        <aside className="reviews-shop-column">
          <div className="reviews-shop-card">
            <div className="reviews-shop-media">
              <Image
                src={`${BASE_PATH}/assets/brand/kisetter-thumbnail.png`}
                alt="きせった (Kisetter)"
                fill
                sizes="(max-width: 1050px) 92vw, 330px"
                priority
              />
            </div>
            <div className="reviews-shop-copy">
              <p>{copy.shopLabel}</p>
              <h2>{copy.shopTitle}</h2>
              <span>{copy.shopDescription}</span>
              <a href={LINKS.boothReviews} target="_blank" rel="noreferrer">
                {copy.boothButton}<b aria-hidden="true">↗</b>
              </a>
            </div>
          </div>
        </aside>
      </section>

    </main>
  );
}
