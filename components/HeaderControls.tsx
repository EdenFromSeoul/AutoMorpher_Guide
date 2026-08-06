"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { HOME_COPY } from "@/lib/home-copy";
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

const HEADER_UI_COPY: Record<Language, {
  search: string;
  searchAria: string;
  language: string;
  theme: string;
  menu: string;
  navigation: string;
  placeholder: string;
  close: string;
  empty: string;
}> = {
  ja: {
    search: "検索",
    searchAria: "ドキュメントを検索",
    language: "言語を選択",
    theme: "カラーテーマを切り替える",
    menu: "サイトメニュー",
    navigation: "メインナビゲーション",
    placeholder: "タイトル、機能、ドキュメント本文を検索",
    close: "検索を閉じる",
    empty: "一致するドキュメントが見つかりませんでした。",
  },
  ko: {
    search: "검색",
    searchAria: "문서 검색",
    language: "언어 선택",
    theme: "색상 테마 전환",
    menu: "사이트 메뉴",
    navigation: "주요 메뉴",
    placeholder: "제목, 기능, 문서 본문 검색",
    close: "검색 닫기",
    empty: "일치하는 문서를 찾지 못했습니다.",
  },
  en: {
    search: "Search",
    searchAria: "Search documentation",
    language: "Select language",
    theme: "Switch color theme",
    menu: "Site menu",
    navigation: "Primary navigation",
    placeholder: "Search titles, features, and documentation",
    close: "Close search",
    empty: "No matching documentation found.",
  },
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
  const nav = HOME_COPY[lang].nav;
  const ui = HEADER_UI_COPY[lang];
  const landingPath = `${BASE_PATH}/${lang}/`;

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
          aria-label={ui.searchAria}
        >
          <span aria-hidden="true">⌕</span>
          <span className="search-label">{ui.search}</span>
          <kbd>⌘K</kbd>
        </button>
        <nav className="language-menu language-links" aria-label={ui.language}>
          {SUPPORTED_LANGUAGES.map((code) => (
            <a
              key={code}
              href={languageHref(code)}
              aria-current={code === lang ? "page" : undefined}
              title={LANGUAGE_LABELS[code]}
            >
              {code.toUpperCase()}
            </a>
          ))}
        </nav>
        <button
          className="icon-button theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={ui.theme}
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
          aria-label={ui.menu}
        >
          <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <nav
          ref={mobileMenuRef}
          id="mobile-site-menu"
          className="mobile-site-menu"
          aria-label={ui.navigation}
        >
          <a href="https://edenlabs.booth.pm/items/7721082" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>{nav.booth} ↗</a>
          <a href={`${landingPath}#reviews`} onClick={() => setMobileOpen(false)}>{nav.reviews}</a>
          <a href={`${BASE_PATH}/${lang}/docs/getting-started/`} onClick={() => setMobileOpen(false)}>{nav.guide}</a>
          <a href={`${BASE_PATH}/${lang}/docs/faq/`} onClick={() => setMobileOpen(false)}>{nav.faq}</a>
          <a href="https://discord.com/invite/JFzDGrN2bF" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>{nav.discord} ↗</a>
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
            aria-label={ui.searchAria}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-input-row">
              <span aria-hidden="true">⌕</span>
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={ui.placeholder}
                aria-label={ui.searchAria}
              />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label={ui.close}>ESC</button>
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
                <p className="search-empty">{ui.empty}</p>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
