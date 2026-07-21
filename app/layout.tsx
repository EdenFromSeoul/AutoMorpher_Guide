import type { Metadata } from "next";
import "./globals.css";
import { BASE_PATH, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "Auto Morpher Guide | Eden Labs",
    template: "%s | Auto Morpher Guide",
  },
  description: "Auto Morpher 3.0.7 공식 설치, 의상 대응, BlendShape 및 문제 해결 가이드입니다.",
  icons: {
    icon: `${BASE_PATH}/assets/brand/eden-labs-logo.png`,
  },
  openGraph: {
    title: "Auto Morpher Guide",
    description: "아바타 의상 대응을 더 빠르고 정교하게. Auto Morpher 3.0.7 공식 가이드.",
    url: `${SITE_URL}/en/`,
    siteName: "Auto Morpher Guide",
    images: [{ url: `${SITE_URL}/assets/brand/automorpher-thumbnail.jpg`, width: 1024, height: 1024 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Morpher Guide",
    description: "Auto Morpher 3.0.7 공식 가이드",
    images: [`${SITE_URL}/assets/brand/automorpher-thumbnail.jpg`],
  },
};

const themeScript = `(() => {
  try {
    const saved = localStorage.getItem('auto-morpher-theme');
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