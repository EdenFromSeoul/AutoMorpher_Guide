import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommunityReviewsExplorer } from "@/components/CommunityReviewsExplorer";
import { ReviewSectionTabs } from "@/components/ReviewSectionTabs";
import { isLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "아바타별 후기 | きせった (Kisetter)",
  description: "Target Avatar별로 정리한 Kisetter 사용자 후기와 변환 팁을 확인하세요.",
};

export default async function CommunityReviewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    <main className="community-reviews-page">
      <section className="community-reviews-intro">
        <ReviewSectionTabs lang={lang} active="avatars" />
      </section>
      <CommunityReviewsExplorer lang={lang} />
    </main>
  );
}
