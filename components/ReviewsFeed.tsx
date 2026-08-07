"use client";

import { useEffect, useRef, useState } from "react";
import { XEmbeddedPost } from "./XEmbeddedPost";

const PAGE_SIZE = 12;

export function ReviewsFeed({
  posts,
  originalNotice,
  originalLink,
}: {
  posts: readonly string[];
  originalNotice: string;
  originalLink: string;
}) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const visiblePosts = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  useEffect(() => {
    if (!hasMore) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(posts.length);
      return;
    }

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setVisible((current) => Math.min(current + PAGE_SIZE, posts.length));
      },
      { rootMargin: "0px 0px 720px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, posts.length]);

  return (
    <div className="reviews-feed-wrapper">
      <div className="reviews-feed">
        {visiblePosts.map((url) => (
          <article className="reviews-grid-card" key={url}>
            <XEmbeddedPost url={url} fallbackLabel={originalLink} />
            <a href={url} target="_blank" rel="noreferrer">
              {originalNotice}<span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      {hasMore && <div ref={sentinelRef} className="reviews-feed-sentinel" aria-hidden="true" />}
    </div>
  );
}
