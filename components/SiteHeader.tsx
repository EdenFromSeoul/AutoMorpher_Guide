import type { Language } from "@/lib/site";
import { BASE_PATH, LINKS } from "@/lib/site";
import { HeaderControls } from "./HeaderControls";

type SearchItem = {
  title: string;
  slug: string;
  category: string;
  description: string;
  plainText: string;
};

export function SiteHeader({ lang, searchIndex }: { lang: Language; searchIndex: SearchItem[] }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={`${BASE_PATH}/${lang}/`} aria-label="Auto Morpher 가이드 홈">
          <img src={`${BASE_PATH}/assets/brand/eden-labs-logo.png`} alt="" />
          <span><strong>Auto Morpher</strong><small>Guide · v3.0.7</small></span>
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          <a href={`${BASE_PATH}/${lang}/docs/getting-started/`}>시작하기</a>
          <a href={`${BASE_PATH}/${lang}/docs/auto-fitting/`}>사용 가이드</a>
          <a href={LINKS.booth} target="_blank" rel="noreferrer">Booth ↗</a>
          <a href={LINKS.discord} target="_blank" rel="noreferrer">지원 ↗</a>
        </nav>
        <HeaderControls lang={lang} searchIndex={searchIndex} />
      </div>
    </header>
  );
}