"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LandingMotion() {
  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const landingVideo = document.querySelector<HTMLVideoElement>("[data-landing-video]");

    if (reduceMotion) {
      landingVideo?.pause();
      return;
    }

    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTimeline
      .from(".cinematic-hero-copy > *", {
        y: 26,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
      })
      .from("[data-hero-media]", {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        duration: 1.15,
      }, "-=0.65");

    const revealWords = gsap.utils.toArray<HTMLElement>("[data-reveal-word]");
    if (revealWords.length) {
      gsap.fromTo(
        revealWords,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-reveal-copy]",
            start: "top 78%",
            end: "bottom 52%",
            scrub: 0.6,
          },
        },
      );
    }

    gsap.utils.toArray<HTMLElement>("[data-motion-media]").forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.86, opacity: 0.35 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            end: "top 42%",
            scrub: 0.7,
          },
        },
      );
      gsap.to(element, {
        opacity: 0.22,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "bottom 28%",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-motion-card]").forEach((card, index) => {
      gsap.from(card, {
        y: 54,
        opacity: 0,
        duration: 0.9,
        delay: Math.min(index * 0.06, 0.24),
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 88%", once: true },
      });
    });
  }, []);

  return null;
}
