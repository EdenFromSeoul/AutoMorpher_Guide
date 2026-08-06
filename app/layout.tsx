import type { Metadata } from "next";
import "./globals.css";
import { HOME_SEO } from "@/lib/seo";
import { BASE_PATH, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: HOME_SEO.ja.title,
    template: "%s | きせった (Kisetter)",
  },
  description: HOME_SEO.ja.description,
  applicationName: "きせった (Kisetter)",
  authors: [{ name: "Eden Labs", url: "https://x.com/EDEN_LABS_JP" }],
  creator: "Eden Labs",
  publisher: "Eden Labs",
  robots: { index: true, follow: true },
  icons: { icon: `${BASE_PATH}/assets/brand/kisetter-logo.png` },
};

const themeScript = `(() => {
  try {
    const saved = localStorage.getItem('kisetter-theme');
    const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  } catch (_) {}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
