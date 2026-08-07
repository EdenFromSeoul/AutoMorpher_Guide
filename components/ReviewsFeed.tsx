"use client";

import { useState } from "react";
import { XEmbeddedPost } from "./XEmbeddedPost";

const PAGE_SIZE = 12;

export function ReviewsFeed({
  posts,
  originalNotice,
  originalLink,
  loadMore,
}: {
  posts: readonly string[];
  originalNotice: string;
  originalLink: string;
  loadMore: string;
}) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const visiblePosts = posts.slice(0, visible);
  const hasMore = visible < posts.length;

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
      {hasMore && (
        <div className="reviews-load-more">
          <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            {loadMore}
          </button>
        </div>
      )}
    </div>
  );
}
