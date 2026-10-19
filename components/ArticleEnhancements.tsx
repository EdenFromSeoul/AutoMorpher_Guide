"use client";

import { useEffect, useState } from "react";

export function ArticleEnhancements() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".doc-content");
    if (!article) return;

    let scrollFrame = 0;
    const revealHashTarget = (hash: string) => {
      let id: string;
      try {
        id = decodeURIComponent(hash.slice(1));
      } catch {
        return false;
      }
      let target = document.getElementById(id);
      if (!target || !article.contains(target)) return false;

      // Old shared URLs can point to a section that is now inside a disclosure.
      const aliasTarget = target.dataset.anchorTarget;
      if (aliasTarget) {
        const destination = document.getElementById(aliasTarget);
        if (!destination || !article.contains(destination)) return false;
        target = destination;
      }

      let details = target.closest<HTMLDetailsElement>("details");
      while (details) {
        details.open = true;
        details = details.parentElement?.closest<HTMLDetailsElement>("details") ?? null;
      }
      const destination = target instanceof HTMLDetailsElement
        ? target.querySelector<HTMLElement>(":scope > summary") ?? target
        : target;

      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        if (!destination.matches("summary, a[href], button, input, select, textarea, [tabindex]")) {
          destination.tabIndex = -1;
        }
        destination.focus({ preventScroll: true });
        destination.scrollIntoView({ block: "start" });
      });
      return true;
    };

    const onHashChange = () => revealHashTarget(window.location.hash);
    const onHashLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
      if (!revealHashTarget(url.hash)) return;
      event.preventDefault();
      if (window.location.hash !== url.hash) window.history.pushState(null, "", url.hash);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target instanceof HTMLImageElement) {
        setPreview({ src: target.currentSrc || target.src, alt: target.alt });
      }
      const button = target.closest<HTMLButtonElement>(".copy-code-button");
      if (button) {
        const code = button.parentElement?.querySelector("code")?.textContent ?? "";
        navigator.clipboard.writeText(code).then(() => {
          button.textContent = "복사됨";
          window.setTimeout(() => (button.textContent = "복사"), 1200);
        });
      }
      const closeButton = target.closest<HTMLButtonElement>("[data-details-close]");
      if (closeButton) {
        const details = closeButton.closest<HTMLDetailsElement>("details");
        if (details) {
          details.open = false;
          details.querySelector<HTMLElement>(":scope > summary")?.focus();
        }
      }
    };

    const blocks = article.querySelectorAll("pre");
    blocks.forEach((block) => {
      if (block.querySelector(".copy-code-button")) return;
      const button = document.createElement("button");
      button.className = "copy-code-button";
      button.type = "button";
      button.textContent = "복사";
      button.setAttribute("aria-label", "코드 복사");
      block.appendChild(button);
    });

    article.addEventListener("click", onClick);
    document.addEventListener("click", onHashLinkClick);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => {
      article.removeEventListener("click", onClick);
      document.removeEventListener("click", onHashLinkClick);
      window.removeEventListener("hashchange", onHashChange);
      cancelAnimationFrame(scrollFrame);
    };
  }, []);

  if (!preview) return null;
  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="이미지 확대" onClick={() => setPreview(null)}>
      <button type="button" onClick={() => setPreview(null)} aria-label="이미지 닫기">×</button>
      <img src={preview.src} alt={preview.alt} onClick={(event) => event.stopPropagation()} />
    </div>
  );
}
