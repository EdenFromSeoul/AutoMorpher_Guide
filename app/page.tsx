import type { Metadata } from "next";
import { HOME_SEO } from "@/lib/seo";
import { absoluteUrl, localizedPath, withBasePath } from "@/lib/site";

const target = withBasePath("/ja/");

export const metadata: Metadata = {
  title: HOME_SEO.ja.title,
  description: HOME_SEO.ja.description,
  robots: { index: false, follow: true },
  alternates: { canonical: absoluteUrl(localizedPath("ja")) },
};

export default function DefaultLanguageRedirect() {
  const redirectScript = `window.location.replace(${JSON.stringify(target)});`;
  return (
    <main className="redirect-page" lang="ja">
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <div className="redirect-card">
        <span className="loading-mark">き</span>
        <h1>きせった (Kisetter)</h1>
        <p>日本語のページへ移動します。</p>
        <nav aria-label="言語を選択">
          <a href={withBasePath("/ja/")}>日本語</a>
          <a href={withBasePath("/ko/")}>한국어</a>
          <a href={withBasePath("/en/")}>English</a>
        </nav>
      </div>
    </main>
  );
}
