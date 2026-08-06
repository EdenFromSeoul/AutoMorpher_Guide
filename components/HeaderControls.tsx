"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BASE_PATH,
  LANGUAGE_LABELS,
  SUPPORTED_LANGUAGES,
  type Language,
} from "@/lib/site";

type SearchItem = {
  id: string;
  title: string;
  slug: string;
  anchor?: string;
  category: string;
  description: string;
  plainText: string;
  documentTitle?: string;
};

type SearchResult = SearchItem & {
  snippet: string;
  score: number;
};

function normalizeSearchText(value: string) {
  return value.normalize("NFKC").toLocaleLowerCase().replace(/\s+/g, " ").trim();
}

function createSearchSnippet(item: SearchItem, normalizedQuery: string) {
  const body = item.plainText.replace(/\s+/g, " ").trim();
  const normalizedBody = normalizeSearchText(body);
  const terms = normalizedQuery.split(" ").filter(Boolean);
  let matchIndex = normalizedBody.indexOf(normalizedQuery);

  if (matchIndex === -1) {
    matchIndex = terms
      .map((term) => normalizedBody.indexOf(term))
      .filter((index) => index >= 0)
      .sort((a, b) => a - b)[0] ?? -1;
  }
  if (matchIndex === -1) return item.description;

  const start = Math.max(0, matchIndex - 52);
  const end = Math.min(body.length, matchIndex + normalizedQuery.length + 96);
  return `${start > 0 ? "…" : ""}${body.slice(start, end).trim()}${end < body.length ? "…" : ""}`;
}

export function HeaderControls({
  lang,
  searchIndex,
}: {
  lang: Language;
  searchIndex: SearchItem[];
}) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        if (document.getElementById("mobile-site-menu")) menuButtonRef.current?.focus();
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !mobileMenuRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [mobileOpen]);

  const results = useMemo<SearchResult[]>(() => {
    const normalizedQuery = normalizeSearchText(query);
    if (!normalizedQuery) {
      return searchIndex
        .filter((item) => !item.anchor)
        .slice(0, 6)
        .map((item) => ({
          ...item,
          snippet: item.description,
          score: 0,
        }));
    }

    const terms = normalizedQuery.split(" ").filter(Boolean);
    return searchIndex
      .map((item): SearchResult | null => {
        const title = normalizeSearchText(item.title);
        const documentTitle = normalizeSearchText(item.documentTitle ?? "");
        const category = normalizeSearchText(item.category);
        const description = normalizeSearchText(item.description);
        const body = normalizeSearchText(item.plainText);
        const searchable = `${title} ${documentTitle} ${category} ${description} ${body}`;
        if (!terms.every((term) => searchable.includes(term))) return null;

        let score = 0;
        for (const term of terms) {
          if (title.includes(term)) score += 12;
          if (category.includes(term)) score += 6;
          if (documentTitle.includes(term)) score += 3;
          if (description.includes(term)) score += 4;
          if (body.includes(term)) score += 1;
        }
        if (title.includes(normalizedQuery)) score += 10;

        return {
          ...item,
          snippet: createSearchSnippet(item, normalizedQuery),
          score,
        };
      })
      .filter((item): item is SearchResult => item !== null)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 20);
  }, [query, searchIndex]);

  function languageHref(target: Language) {
    const withoutBase = BASE_PATH && pathname.startsWith(BASE_PATH)
      ? pathname.slice(BASE_PATH.length)
      : pathname;
    const nextPath = withoutBase.match(/^\/(ko|ja|en)(\/|$)/)
      ? withoutBase.replace(/^\/(ko|ja|en)/, `/${target}`)
      : `/${target}/`;
    return `${BASE_PATH}${nextPath}`;
  }

  function toggleTheme() {
    const nextDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    localStorage.setItem("kisetter-theme", nextDark ? "dark" : "light");
  }

  return (
    <>
      <div className="header-controls">
        <button
          className="icon-button search-button"
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="문서 검색"
        >
          <span aria-hidden="true">⌕</span>
          <span className="search-label">검색</span>
          <kbd>⌘K</kbd>
        </button>
        <div className="language-menu">
          <label htmlFor="language-select" className="sr-only">언어 선택</label>
          <select
            id="language-select"
            value={lang}
            onChange={(event) => {
              window.location.href = languageHref(event.target.value as Language);
            }}
          >
            {SUPPORTED_LANGUAGES.map((code) => (
              <option key={code} value={code}>
                {LANGUAGE_LABELS[code]}
              </option>
            ))}
          </select>
        </div>
        <button
          className="icon-button theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label="색상 테마 전환"
        >
          <span aria-hidden="true">◐</span>
        </button>
        <button
          ref={menuButtonRef}
          className="icon-button mobile-menu-button"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-menu"
          aria-haspopup="menu"
          aria-label="사이트 메뉴"
        >
          <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <nav
          ref={mobileMenuRef}
          id="mobile-site-menu"
          className="mobile-site-menu"
          aria-label="주요 메뉴"
        >
          <a href={`${BASE_PATH}/${lang}/docs/getting-started/`} onClick={() => setMobileOpen(false)}>시작하기</a>
          <a href={`${BASE_PATH}/${lang}/docs/auto-fitting/`} onClick={() => setMobileOpen(false)}>사용 가이드</a>
          <a href="https://edenlabs.booth.pm/items/7721082" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>Booth ↗</a>
          <a href="https://discord.com/invite/JFzDGrN2bF" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>지원 ↗</a>
          <div className="mobile-language-row">
            {SUPPORTED_LANGUAGES.map((code) => (
              <a key={code} href={languageHref(code)} aria-current={code === lang ? "page" : undefined}>
                {LANGUAGE_LABELS[code]}
              </a>
            ))}
          </div>
        </nav>
      )}

      {searchOpen && (
        <div className="search-overlay" role="presentation" onMouseDown={() => setSearchOpen(false)}>
          <section
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="문서 검색"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-input-row">
              <span aria-hidden="true">⌕</span>
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="제목, 기능, 문서 본문 검색"
                aria-label="검색어"
              />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="검색 닫기">ESC</button>
            </div>
            <div className="search-results">
              {results.length ? (
                results.map((item) => (
                  <a
                    key={item.id}
                    href={`${BASE_PATH}/${lang}/docs/${item.slug}/${item.anchor ? `#${item.anchor}` : ""}`}
                  >
                    <small>{item.documentTitle ? `${item.documentTitle} · ${item.category}` : item.category}</small>
                    <strong>{item.title}</strong>
                    <span className="search-result-snippet">{item.snippet}</span>
                  </a>
                ))
              ) : (
                <p className="search-empty">일치하는 문서를 찾지 못했습니다.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}