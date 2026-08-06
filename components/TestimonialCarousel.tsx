"use client";

import Image from "next/image";
import { useRef } from "react";
import { XEmbeddedPost } from "./XEmbeddedPost";
import type { Language } from "@/lib/site";

type ReviewItem = { quote: string; source: string; image?: string; imageAlt?: string };

export function TestimonialCarousel({
  items,
  previousLabel,
  nextLabel,
  imageLabel,
  postUrls = [],
  lang,
}: {
  items: ReviewItem[];
  previousLabel: string;
  nextLabel: string;
  imageLabel: string;
  postUrls?: readonly string[];
  lang: Language;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const labels = {
    ja: { notice: "\u6295\u7a3f\u3092\u9078\u629e\u3059\u308b\u3068X\u306e\u5143\u6295\u7a3f\u3078\u79fb\u52d5\u3057\u307e\u3059\u3002", link: "X\u3067\u5143\u6295\u7a3f\u3092\u898b\u308b" },
    ko: { notice: "\uac8c\uc2dc\ubb3c\uc744 \uc120\ud0dd\ud558\uba74 X\uc758 \uc6d0\ubb38\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.", link: "X\uc5d0\uc11c \uc6d0\ubb38 \ubcf4\uae30" },
    en: { notice: "Select a post to open the original on X.", link: "View the original on X" },
  }[lang];

  function move(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".x-review-card, .testimonial-card");
    rail.scrollBy({ left: direction * ((card?.offsetWidth ?? 360) + 18), behavior: "smooth" });
  }

  return (
    <div className="testimonial-carousel">
      {(postUrls.length || items.length) > 1 && <div className="testimonial-controls">
        <button type="button" onClick={() => move(-1)} aria-label={previousLabel}>←</button>
        <button type="button" onClick={() => move(1)} aria-label={nextLabel}>→</button>
      </div>}
      <div className={`testimonial-rail${(postUrls.length || items.length) === 1 ? " is-single" : ""}`} ref={railRef}>
        {postUrls.length > 0 ? postUrls.map((url) => (
          <article className="x-review-card" key={url} data-motion-card>
            <XEmbeddedPost url={url} fallbackLabel={labels.link} />
            <a className="x-review-link" href={url} target="_blank" rel="noreferrer">
              {labels.notice} <span aria-hidden>{"\u2197"}</span>
            </a>
          </article>
        )) : items.map((item, index) => (
          <article className="testimonial-card" key={`${item.source}-${index}`} data-motion-card>
            <div
              className={`testimonial-media${item.image ? "" : " is-placeholder"}`}
              aria-label={item.image ? undefined : `${imageLabel} ${index + 1}`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  fill
                  sizes="(max-width: 700px) 86vw, (max-width: 980px) 50vw, 33vw"
                />
              ) : (
                <span>{imageLabel} {String(index + 1).padStart(2, "0")}</span>
              )}
            </div>
            <div className="testimonial-body">
              <blockquote>{item.quote}</blockquote>
              <p>{item.source}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}