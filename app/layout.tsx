import type { Metadata } from "next";
import "./globals.css";
import { HOME_SEO, organizationJsonLd } from "@/lib/seo";
import { BASE_PATH, GOOGLE_ANALYTICS_ID, SITE_URL } from "@/lib/site";

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

const googleAnalyticsScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(GOOGLE_ANALYTICS_ID)});`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        />
        <script dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }} />
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
