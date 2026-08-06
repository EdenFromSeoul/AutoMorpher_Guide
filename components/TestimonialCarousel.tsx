"use client";

import Image from "next/image";
import { useRef } from "react";

type ReviewItem = { quote: string; source: string; image?: string; imageAlt?: string };

export function TestimonialCarousel({
  items,
  previousLabel,
  nextLabel,
  imageLabel,
}: {
  items: ReviewItem[];
  previousLabel: string;
  nextLabel: string;
  imageLabel: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".testimonial-card");
    rail.scrollBy({ left: direction * ((card?.offsetWidth ?? 360) + 18), behavior: "smooth" });
  }

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-controls">
        <button type="button" onClick={() => move(-1)} aria-label={previousLabel}>←</button>
        <button type="button" onClick={() => move(1)} aria-label={nextLabel}>→</button>
      </div>
      <div className="testimonial-rail" ref={railRef}>
        {items.map((item, index) => (
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