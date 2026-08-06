import type { Language } from "@/lib/site";
import { BASE_PATH, LINKS, VERSION } from "@/lib/site";
import { HeaderControls } from "./HeaderControls";

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

export function SiteHeader({ lang, searchIndex }: { lang: Language; searchIndex: SearchItem[] }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={`${BASE_PATH}/${lang}/`} aria-label="きせった (Kisetter) 가이드 홈">
          <img src={`${BASE_PATH}/assets/brand/kisetter-logo.png`} alt="" />
          <span><strong>きせった (Kisetter)</strong><small>Guide · v{VERSION}</small></span>
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