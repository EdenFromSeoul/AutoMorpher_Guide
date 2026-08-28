import { BASE_PATH, type Language } from "@/lib/site";

const TAB_COPY: Record<Language, { all: string; avatars: string }> = {
  ko: { all: "전체 사용 후기", avatars: "아바타별 후기" },
  ja: { all: "すべての使用レビュー", avatars: "アバター別レビュー" },
  en: { all: "All user reviews", avatars: "By target avatar" },
};

export function ReviewSectionTabs({ lang, active }: { lang: Language; active: "all" | "avatars" }) {
  const copy = TAB_COPY[lang];
  return (
    <nav className="reviews-section-tabs" aria-label="Review views">
      <a href={`${BASE_PATH}/${lang}/reviews/`} aria-current={active === "all" ? "page" : undefined}>
        {copy.all}
      </a>
      <a
        href={`${BASE_PATH}/${lang}/reviews/community/`}
        aria-current={active === "avatars" ? "page" : undefined}
      >
        {copy.avatars}
      </a>
    </nav>
  );
}
