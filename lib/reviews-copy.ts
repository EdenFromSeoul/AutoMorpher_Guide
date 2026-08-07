import type { Language } from "./site";

export type ReviewsCopy = {
  eyebrow: string;
  title: [string, string];
  description: string;
  countLabel: string;
  originalNotice: string;
  originalLink: string;
  shopLabel: string;
  shopTitle: string;
  shopDescription: string;
  boothButton: string;
  viewAll: string;
  loadMore: string;
  finalTitle: string;
  finalDescription: string;
  backToLanding: string;
  metaTitle: string;
  metaDescription: string;
};

export const REVIEWS_COPY: Record<Language, ReviewsCopy> = {
  ja: {
    eyebrow: "Kisetter User Stories",
    title: ["きせったを使った人たちの", "声を見てみましょう。"],
    description: "実際のユーザーがXに投稿した、きせった（Kisetter）の使用感や衣装対応の仕上がりをご紹介します。気になる投稿から元のポストも確認できます。",
    countLabel: "Xで共有されたユーザーレビュー",
    originalNotice: "投稿を選択するとXの元投稿へ移動します。",
    originalLink: "Xで元投稿を見る",
    shopLabel: "Available on Booth",
    shopTitle: "非対応衣装を、好きなアバターへ。",
    shopDescription: "アバターと衣装があれば、きせったですぐに衣装対応を始められます。",
    boothButton: "Boothで購入する",
    viewAll: "すべての使用レビューを見る",
    loadMore: "もっと見る",
    finalTitle: "次に着せたい衣装を、あなたのアバターへ。",
    finalDescription: "ユーザーの仕上がりを確認したら、きせったであなたの衣装対応を始めましょう。",
    backToLanding: "きせったの機能を見る",
    metaTitle: "使用レビュー | きせった (Kisetter)",
    metaDescription: "きせった（Kisetter）を利用したユーザーのX投稿と、非対応衣装をアバターへ変換した実例を紹介します。",
  },
  ko: {
    eyebrow: "Kisetter User Stories",
    title: ["きせった를 사용한 사람들의", "후기를 둘러보세요."],
    description: "실제 사용자가 X에 공유한 きせった(Kisetter)의 사용 경험과 의상 대응 결과를 모았습니다. 마음에 드는 후기에서 원문도 바로 확인할 수 있습니다.",
    countLabel: "X에서 공유된 사용자 후기",
    originalNotice: "게시물을 선택하면 X의 원문으로 이동합니다.",
    originalLink: "X에서 원문 보기",
    shopLabel: "Available on Booth",
    shopTitle: "비전용 의상을, 원하는 아바타에.",
    shopDescription: "아바타와 의상만 준비하면 きせった로 바로 의상 대응을 시작할 수 있습니다.",
    boothButton: "Booth에서 구매하기",
    viewAll: "모든 사용 후기 보기",
    loadMore: "더보기",
    finalTitle: "다음에 입히고 싶은 의상을, 당신의 아바타에.",
    finalDescription: "사용자들의 결과를 확인했다면, 이제 きせった로 당신의 의상 대응을 시작해 보세요.",
    backToLanding: "きせった 기능 살펴보기",
    metaTitle: "사용 후기 | きせった (Kisetter)",
    metaDescription: "きせった(Kisetter)를 사용한 사용자들의 X 후기와 비전용 의상을 아바타에 변환한 실제 사례를 확인하세요.",
  },
  en: {
    eyebrow: "Kisetter User Stories",
    title: ["See what people create", "with Kisetter."],
    description: "Explore real experiences and outfit fitting results shared by Kisetter users on X. Open any review to see the original post and media.",
    countLabel: "User reviews shared on X",
    originalNotice: "Select a post to open the original on X.",
    originalLink: "View the original on X",
    shopLabel: "Available on Booth",
    shopTitle: "Fit unsupported outfits to the avatar you want.",
    shopDescription: "With an avatar and an outfit ready, you can start fitting immediately with Kisetter.",
    boothButton: "Buy on Booth",
    viewAll: "View all user reviews",
    loadMore: "Load more",
    finalTitle: "Bring the next outfit to your avatar.",
    finalDescription: "Once you have seen what users create, start your own outfit fitting workflow with Kisetter.",
    backToLanding: "Explore Kisetter features",
    metaTitle: "User Reviews | Kisetter",
    metaDescription: "Explore X posts from Kisetter users and real examples of unsupported outfits converted for other avatars.",
  },
};
