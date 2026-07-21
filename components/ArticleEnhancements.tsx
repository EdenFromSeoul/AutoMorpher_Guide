"use client";

import { useEffect, useState } from "react";

export function ArticleEnhancements() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".doc-content");
    if (!article) return;

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
    return () => article.removeEventListener("click", onClick);
  }, []);

  if (!preview) return null;
  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="이미지 확대" onClick={() => setPreview(null)}>
      <button type="button" onClick={() => setPreview(null)} aria-label="이미지 닫기">×</button>
      <img src={preview.src} alt={preview.alt} onClick={(event) => event.stopPropagation()} />
    </div>
  );
}