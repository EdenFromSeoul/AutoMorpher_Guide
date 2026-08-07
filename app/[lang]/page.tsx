import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LandingMotion } from "@/components/LandingMotion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { HOME_COPY } from "@/lib/home-copy";
import { homeMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import { BASE_PATH, LINKS, isLanguage, type Language } from "@/lib/site";
import { X_REVIEW_POSTS } from "@/lib/x-review-posts";
import { REVIEWS_COPY } from "@/lib/reviews-copy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return isLanguage(lang) ? homeMetadata(lang) : {};
}

function safeJsonLd(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function revealSegments(text: string, lang: Language): string[] {
  const segmenter = new Intl.Segmenter(lang, { granularity: "word" });
  return Array.from(segmenter.segment(text), (segment) => segment.segment);
}

export default async function LanguageHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = HOME_COPY[lang];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="landing-main">
      <LandingMotion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(softwareApplicationJsonLd(lang)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />

      <section className="cinematic-hero" aria-labelledby="landing-title">
        <div className="cinematic-hero-copy">
          <p className="product-kicker"><i aria-hidden="true" />きせった <span>Kisetter</span></p>
          <h1 id="landing-title">{copy.hero.title[0]}<br />{copy.hero.title[1]}</h1>
          <p className="hero-lede">{copy.hero.description}</p>
          <div className="cinematic-actions">
            <a className="button landing-primary" href={LINKS.boothLanding} target="_blank" rel="noreferrer">
              {copy.hero.primary}<span aria-hidden="true">↗</span>
            </a>
            <a className="button landing-secondary" href="#guide">
              {copy.hero.secondary}<span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className="hero-editorial-visual" data-hero-media>
          <div className="hero-editorial-frame">
            <Image
              src={`${BASE_PATH}/assets/brand/kisetter-thumbnail.png`}
              alt={copy.hero.videoLabel}
              fill
              priority
              sizes="(max-width: 1120px) 92vw, 46vw"
            />
          </div>

        </figure>
      </section>

      <div className="capability-marquee" aria-label={copy.marquee.join(", ")}>
        <div className="capability-marquee-track">
          {[0, 1].map((group) => (
            <div className="capability-marquee-group" aria-hidden={group === 1} key={group}>
              {copy.marquee.map((item) => <span key={`${group}-${item}`}>{item}</span>)}
            </div>
          ))}
        </div>
      </div>

      <section className="quick-guide-section" id="guide">
        <div className="quick-guide-inner">
          <div className="chapter-heading">
            <p className="chapter-mark">{copy.guide.label}</p>
            <h2>{copy.guide.heading}</h2>
            <p>{copy.guide.description}</p>
            <a className="guide-link" href={`${BASE_PATH}/${lang}/docs/auto-fitting/`}>
              {copy.guide.link}<span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="quick-guide-video" data-motion-media>
            <video
              data-landing-video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`${BASE_PATH}/assets/brand/kisetter-thumbnail.png`}
              aria-label={copy.hero.videoLabel}
            >
              <source src={`${BASE_PATH}/media/kisetter-landing-demo.mp4`} type="video/mp4" />
            </video>
          </div>
          <ol className="quick-guide-list">
            {copy.guide.steps.map((step, index) => (
              <li key={step.title} data-motion-card>
                <span>{copy.guide.itemLabel} {String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="landing-chapter testimonial-section" id="reviews">
        <div className="chapter-heading split-heading">
          <div>
            <p className="chapter-mark">Verified voices</p>
            <h2>{copy.reviews.heading}</h2>
          </div>
          <p>{copy.reviews.description}</p>
        </div>
        <TestimonialCarousel
          items={copy.reviews.items}
          previousLabel={copy.reviews.previous}
          nextLabel={copy.reviews.next}
          imageLabel={copy.reviews.imageLabel}
          postUrls={X_REVIEW_POSTS}
          lang={lang}
        />
        <a className="reviews-page-link" href={`${BASE_PATH}/${lang}/reviews/`}>
          {REVIEWS_COPY[lang].viewAll}<span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="landing-chapter manual-fitting-section" id="manual-fitting">
        <div className="manual-fitting-heading" data-reveal-copy>
          <p className="chapter-mark">{copy.manualFitting.label}</p>
          <h2>
            {copy.manualFitting.title.map((line, lineIndex) => (
              <span className="manual-fitting-title-line" key={line}>
                {revealSegments(line, lang).map((segment, segmentIndex) => (
                  <span data-reveal-word key={lineIndex + "-" + segment + "-" + segmentIndex}>{segment}</span>
                ))}
              </span>
            ))}
          </h2>
          <p>{copy.manualFitting.description}</p>
        </div>

        <div className="manual-fitting-grid">
          {copy.manualFitting.items.map((item) => (
            <article className="manual-fitting-card" key={item.kind} data-motion-card>
              <div className="manual-fitting-media" data-motion-media>
                <video data-landing-video autoPlay muted loop playsInline preload="metadata" aria-label={item.videoLabel}>
                  <source src={BASE_PATH + "/media/" + item.video} type="video/mp4" />
                </video>
              </div>
              <div className="manual-fitting-copy">
                <p>{item.kind}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-chapter documentation-section">
        <div className="chapter-heading split-heading">
          <div>
            <p className="chapter-mark">Documentation</p>
            <h2>{copy.docs.heading}</h2>
          </div>
          <p>{copy.docs.description}</p>
        </div>
        <div className="resource-accordions">
          {copy.docs.cards.map((card) => {
            const isDiscord = card.slug === "discord";
            return (
              <a
                href={isDiscord ? LINKS.discord : `${BASE_PATH}/${lang}/docs/${card.slug}/`}
                key={card.slug}
                data-motion-card
                target={isDiscord ? "_blank" : undefined}
                rel={isDiscord ? "noreferrer" : undefined}
              >
                <span aria-hidden="true">↗</span>
                <div><h3>{card.title}</h3><p>{card.text}</p></div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="landing-chapter faq-section" id="qa">
        <div className="chapter-heading">
          <p className="chapter-mark">{copy.faq.label}</p>
          <h2>{copy.faq.heading}</h2>
        </div>
        <div className="faq-list">
          {copy.faq.items.map((item) => (
            <details key={item.question} data-motion-card>
              <summary>{item.question}<span aria-hidden="true">＋</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="landing-action" id="discord">
        <div>
          <p className="chapter-mark">Eden Labs</p>
          <h2>{copy.support.heading}</h2>
          <p>{copy.support.text}</p>
        </div>
        <div className="landing-action-buttons">
          <a className="button landing-primary" href={LINKS.boothLanding} target="_blank" rel="noreferrer">
            {copy.support.primary}<span aria-hidden="true">↗</span>
          </a>
          <a className="button landing-outline" href={LINKS.discord} target="_blank" rel="noreferrer">
            {copy.support.secondary}<span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
