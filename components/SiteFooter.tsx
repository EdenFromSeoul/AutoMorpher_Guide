import { BASE_PATH, LINKS, type Language } from "@/lib/site";

export function SiteFooter({ lang }: { lang: Language }) {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand" href={`${BASE_PATH}/${lang}/`}>
          <img src={`${BASE_PATH}/assets/brand/eden-labs-logo.png`} alt="Eden Labs" />
          <span><strong>Eden Labs</strong><small>Auto Morpher Documentation</small></span>
        </a>
        <nav aria-label="외부 링크">
          <a href={LINKS.booth} target="_blank" rel="noreferrer">Booth</a>
          <a href={LINKS.discord} target="_blank" rel="noreferrer">Discord</a>
          <a href={LINKS.x} target="_blank" rel="noreferrer">X</a>
        </nav>
      </div>
      <p>© 2026 Eden Labs. Auto Morpher 3.0.7.</p>
    </footer>
  );
}