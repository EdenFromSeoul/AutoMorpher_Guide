"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BASE_PATH,
  LANGUAGE_LABELS,
  SUPPORTED_LANGUAGES,
  type Language,
} from "@/lib/site";

type SearchItem = {
  title: string;
  slug: string;
  category: string;
  description: string;
  plainText: string;
};

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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchIndex.slice(0, 6);
    return searchIndex
      .filter((item) =>
        `${item.title} ${item.category} ${item.description} ${item.plainText}`
          .toLowerCase()
          .includes(normalized),
      )
      .slice(0, 8);
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
    localStorage.setItem("auto-morpher-theme", nextDark ? "dark" : "light");
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
          className="icon-button mobile-menu-button"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-menu"
          aria-label="사이트 메뉴"
        >
          <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-site-menu" className="mobile-site-menu" aria-label="모바일 메뉴">
          <a href={`${BASE_PATH}/${lang}/`} onClick={() => setMobileOpen(false)}>홈</a>
          <a href={`${BASE_PATH}/${lang}/docs/getting-started/`} onClick={() => setMobileOpen(false)}>가이드 시작</a>
          <a href="https://edenlabs.booth.pm/items/7721082" target="_blank" rel="noreferrer">Booth</a>
          <a href="https://discord.com/invite/JFzDGrN2bF" target="_blank" rel="noreferrer">Discord</a>
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
                placeholder="기능, 파라미터, 오류 메시지 검색"
                aria-label="검색어"
              />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="검색 닫기">ESC</button>
            </div>
            <div className="search-results">
              {results.length ? (
                results.map((item) => (
                  <a key={item.slug} href={`${BASE_PATH}/${lang}/docs/${item.slug}/`}>
                    <small>{item.category}</small>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
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