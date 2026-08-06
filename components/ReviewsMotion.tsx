"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ReviewsMotion() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".reviews-hero-copy > *", { y: 34, opacity: 0, duration: 0.9, stagger: 0.1 })
      .from(".reviews-hero-side > *", { y: 24, opacity: 0, duration: 0.75, stagger: 0.08 }, "-=0.55");

    gsap.utils.toArray<HTMLElement>(".reviews-grid-card").forEach((card, index) => {
      gsap.from(card, {
        y: 46,
        opacity: 0,
        duration: 0.85,
        delay: Math.min(index * 0.04, 0.16),
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 92%", once: true },
      });
    });

  }, []);

  return null;
}
