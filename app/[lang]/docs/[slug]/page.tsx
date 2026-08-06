import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleEnhancements } from "@/components/ArticleEnhancements";
import { DocSidebar } from "@/components/DocSidebar";
import { TableOfContents } from "@/components/TableOfContents";
import { getDoc, getDocs } from "@/lib/content";
import { breadcrumbJsonLd, docMetadata, techArticleJsonLd } from "@/lib/seo";
import { BASE_PATH, LINKS, isLanguage, SUPPORTED_LANGUAGES, VERSION, type Language } from "@/lib/site";

export const dynamicParams = false;

const UI_COPY: Record<Language, {
  menu: string;
  basedOn: string;
  pagination: string;
  previous: string;
  next: string;
  help: string;
  contact: string;
}> = {
  ja: { menu: "ドキュメントメニュー", basedOn: "対応", pagination: "前後のドキュメント", previous: "前のドキュメント", next: "次のドキュメント", help: "問題が解決しませんか？", contact: "Discord Helpチャンネルで問い合わせる" },
  ko: { menu: "문서 메뉴", basedOn: "기준", pagination: "이전 및 다음 문서", previous: "이전 문서", next: "다음 문서", help: "문제가 해결되지 않나요?", contact: "Discord Help 채널에서 문의하기" },
  en: { menu: "Documentation menu", basedOn: "documentation", pagination: "Previous and next documents", previous: "Previous document", next: "Next document", help: "Still need help?", contact: "Ask in the Discord Help channel" },
};

function safeJsonLd(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.flatMap((lang) =>
    getDocs(lang).map((doc) => ({ lang, slug: doc.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) return {};
  const doc = getDoc(lang, slug);
  return doc ? docMetadata(lang, slug, doc.title, doc.description) : {};
}

export default async function DocPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  const docs = getDocs(lang);
  const doc = docs.find((item) => item.slug === slug);
  if (!doc) notFound();
  const index = docs.findIndex((item) => item.slug === slug);
  const previous = docs[index - 1];
  const next = docs[index + 1];
  const ui = UI_COPY[lang];

  return (
    <main className="docs-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(techArticleJsonLd(lang, doc.title, doc.description, slug)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd(lang, doc.title, slug)) }}
      />
      <details className="mobile-doc-nav">
        <summary>{ui.menu}</summary>
        <DocSidebar docs={docs} lang={lang} activeSlug={slug} />
      </details>
      <div className="docs-layout">
        <aside className="sidebar-column"><DocSidebar docs={docs} lang={lang} activeSlug={slug} /></aside>
        <article className="doc-article">
          <header className="doc-header">
            <span>{doc.category}</span>
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
            <small>きせった (Kisetter) {VERSION} {ui.basedOn}</small>
          </header>
          <div className="doc-content" dangerouslySetInnerHTML={{ __html: doc.html }} />
          <nav className="doc-pagination" aria-label={ui.pagination}>
            {previous ? (
              <a href={`${BASE_PATH}/${lang}/docs/${previous.slug}/`}><small>{ui.previous}</small><strong>← {previous.title}</strong></a>
            ) : <span />}
            {next ? (
              <a className="next" href={`${BASE_PATH}/${lang}/docs/${next.slug}/`}><small>{ui.next}</small><strong>{next.title} →</strong></a>
            ) : <span />}
          </nav>
          <div className="doc-help">{ui.help} <a href={LINKS.discord} target="_blank" rel="noreferrer">{ui.contact} ↗</a></div>
          <ArticleEnhancements />
        </article>
        <aside className="toc-column"><TableOfContents items={doc.toc} /></aside>
      </div>
    </main>
  );
}
