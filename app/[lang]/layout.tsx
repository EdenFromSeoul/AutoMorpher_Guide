import { notFound } from "next/navigation";
import { getSearchIndex } from "@/lib/content";
import { isLanguage, SUPPORTED_LANGUAGES } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const searchIndex = getSearchIndex(lang);
  const languageScript = `document.documentElement.lang=${JSON.stringify(lang)};`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      <div className="site-frame" lang={lang}>
        <SiteHeader lang={lang} searchIndex={searchIndex} />
        {children}
        <SiteFooter lang={lang} />
      </div>
    </>
  );
}
