import type { Metadata } from "next";
import "./globals.css";
import { HOME_SEO, organizationJsonLd } from "@/lib/seo";
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
  verification: { google: "tRBKOUaTFbd_qiJgAG7VZt3CxCYs2iBuhHSTnhgH9ac" },
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
    <html suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
