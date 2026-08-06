import type { Metadata } from "next";
import "./globals.css";
import { BASE_PATH, SITE_URL, VERSION } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "きせった (Kisetter) Guide | Eden Labs",
    template: "%s | きせった (Kisetter) Guide",
  },
  description: `きせった (Kisetter) ${VERSION} 공식 설치, 의상 대응, BlendShape 및 문제 해결 가이드입니다.`,
  icons: {
    icon: `${BASE_PATH}/assets/brand/kisetter-logo.png`,
  },
  openGraph: {
    title: "きせった (Kisetter) Guide",
    description: `아바타 의상 대응을 더 빠르고 정교하게. きせった (Kisetter) ${VERSION} 공식 가이드.`,
    url: `${SITE_URL}/en/`,
    siteName: "きせった (Kisetter) Guide",
    images: [{ url: `${SITE_URL}/assets/brand/kisetter-thumbnail.png`, width: 2160, height: 2160 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "きせった (Kisetter) Guide",
    description: `きせった (Kisetter) ${VERSION} 공식 가이드`,
    images: [`${SITE_URL}/assets/brand/kisetter-thumbnail.png`],
  },
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
    <html lang="ko" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}