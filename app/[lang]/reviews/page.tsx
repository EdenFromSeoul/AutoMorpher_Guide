import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ReviewsMotion } from "@/components/ReviewsMotion";
import { XEmbeddedPost } from "@/components/XEmbeddedPost";
import { REVIEWS_COPY } from "@/lib/reviews-copy";
import { X_REVIEW_POSTS } from "@/lib/x-review-posts";
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
      <ReviewsMotion />

      <section className="reviews-hero">
        <div className="reviews-hero-copy">
          <p>{copy.eyebrow}</p>
          <h1>
            <span>{copy.title[0]}</span>
            <span className="reviews-title-with-image">
              <i
                aria-hidden="true"
                style={{ backgroundImage: `url(${BASE_PATH}/assets/brand/kisetter-thumbnail.png)` }}
              />
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
        <div className="reviews-feed">
          {X_REVIEW_POSTS.map((url) => (
            <article className="reviews-grid-card" key={url}>
              <XEmbeddedPost url={url} fallbackLabel={copy.originalLink} />
              <a href={url} target="_blank" rel="noreferrer">
                {copy.originalNotice}<span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

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
