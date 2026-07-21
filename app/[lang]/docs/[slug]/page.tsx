import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleEnhancements } from "@/components/ArticleEnhancements";
import { DocSidebar } from "@/components/DocSidebar";
import { TableOfContents } from "@/components/TableOfContents";
import { getDoc, getDocs } from "@/lib/content";
import { BASE_PATH, isLanguage, SUPPORTED_LANGUAGES } from "@/lib/site";

export const dynamicParams = false;

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
  return doc ? { title: doc.title, description: doc.description } : {};
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

  return (
    <main className="docs-main">
      <details className="mobile-doc-nav">
        <summary>문서 메뉴</summary>
        <DocSidebar docs={docs} lang={lang} activeSlug={slug} />
      </details>
      <div className="docs-layout">
        <aside className="sidebar-column"><DocSidebar docs={docs} lang={lang} activeSlug={slug} /></aside>
        <article className="doc-article">
          <header className="doc-header">
            <span>{doc.category}</span>
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
            <small>Auto Morpher 3.0.7 기준</small>
          </header>
          <div className="doc-content" dangerouslySetInnerHTML={{ __html: doc.html }} />
          <nav className="doc-pagination" aria-label="이전 및 다음 문서">
            {previous ? (
              <a href={`${BASE_PATH}/${lang}/docs/${previous.slug}/`}><small>이전 문서</small><strong>← {previous.title}</strong></a>
            ) : <span />}
            {next ? (
              <a className="next" href={`${BASE_PATH}/${lang}/docs/${next.slug}/`}><small>다음 문서</small><strong>{next.title} →</strong></a>
            ) : <span />}
          </nav>
          <div className="doc-help">문제가 해결되지 않나요? <a href="https://discord.com/invite/JFzDGrN2bF" target="_blank" rel="noreferrer">Discord Help 채널에서 문의하기 ↗</a></div>
          <ArticleEnhancements />
        </article>
        <aside className="toc-column"><TableOfContents items={doc.toc} /></aside>
      </div>
    </main>
  );
}
