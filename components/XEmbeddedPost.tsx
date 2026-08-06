"use client";

import { useEffect, useRef, useState } from "react";

type XWidgets = {
  createTweet: (
    postId: string,
    container: HTMLElement,
    options?: Record<string, string | boolean>,
  ) => Promise<HTMLElement | undefined>;
};

declare global {
  interface Window {
    twttr?: { widgets?: XWidgets };
  }
}

let widgetsPromise: Promise<XWidgets> | null = null;

function loadXWidgets(): Promise<XWidgets> {
  if (window.twttr?.widgets) return Promise.resolve(window.twttr.widgets);
  if (widgetsPromise) return widgetsPromise;

  widgetsPromise = new Promise<XWidgets>((resolve, reject) => {
    const scriptId = "x-widgets-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    const timeoutId = window.setTimeout(() => reject(new Error("X widget timed out")), 10000);

    const finish = () => {
      window.clearTimeout(timeoutId);
      if (window.twttr?.widgets) resolve(window.twttr.widgets);
      else reject(new Error("X widget API is unavailable"));
    };
    const fail = () => {
      window.clearTimeout(timeoutId);
      reject(new Error("X widget failed to load"));
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.head.appendChild(script);
    }

    script.addEventListener("load", finish, { once: true });
    script.addEventListener("error", fail, { once: true });
  }).catch((error) => {
    widgetsPromise = null;
    throw error;
  });

  return widgetsPromise;
}

function getPostId(url: string): string | null {
  return url.match(/\/status\/(\d+)/)?.[1] ?? null;
}

export function XEmbeddedPost({ url, fallbackLabel }: { url: string; fallbackLabel: string }) {
  const embedRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");

  useEffect(() => {
    const container = embedRef.current;
    const postId = getPostId(url);
    let cancelled = false;

    if (!container || !postId) {
      setStatus("failed");
      return;
    }

    container.replaceChildren();
    setStatus("loading");

    loadXWidgets()
      .then((widgets) => widgets.createTweet(postId, container, {
        theme: "light",
        conversation: "none",
        cards: "visible",
        align: "center",
        dnt: true,
      }))
      .then((element) => {
        if (!cancelled) setStatus(element ? "ready" : "failed");
      })
      .catch(() => {
        if (!cancelled) setStatus("failed");
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <>
      {status === "loading" && <div className="x-post-skeleton" aria-hidden="true" />}
      <div ref={embedRef} className="x-post-embed" hidden={status === "failed"} />
      {status === "failed" && (
        <a className="x-post-fallback" href={url} target="_blank" rel="noreferrer">
          {fallbackLabel} <span aria-hidden>{"\u2197"}</span>
        </a>
      )}
    </>
  );
}
