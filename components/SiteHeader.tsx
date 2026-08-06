import type { Language } from "@/lib/site";
import { HOME_COPY } from "@/lib/home-copy";
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
  const nav = HOME_COPY[lang].nav;
  const landingPath = `${BASE_PATH}/${lang}/`;
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={landingPath} aria-label="きせった (Kisetter)">
          <img src={`${BASE_PATH}/assets/brand/kisetter-logo.png`} alt="" width="36" height="36" />
          <span><strong>きせった (Kisetter)</strong><small>Guide · v{VERSION}</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href={LINKS.booth} target="_blank" rel="noreferrer">{nav.booth} ↗</a>
          <a href={`${landingPath}#reviews`}>{nav.reviews}</a>
          <a href={`${BASE_PATH}/${lang}/docs/getting-started/`}>{nav.guide}</a>
          <a href={`${BASE_PATH}/${lang}/docs/faq/`}>{nav.faq}</a>
          <a href={LINKS.discord} target="_blank" rel="noreferrer">{nav.discord} ↗</a>
        </nav>
        <HeaderControls lang={lang} searchIndex={searchIndex} />
      </div>
    </header>
  );
}
