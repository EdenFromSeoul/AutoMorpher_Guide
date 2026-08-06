import type { Language } from "./site";

type HomeCopy = {
  hero: {
    title: string;
    accent: string;
    description: string;
    start: string;
    download: string;
    latest: string;
    imageAlt: string;
  };
  trustLabel: string;
  featuresHeading: [string, string];
  featuresDescription: string;
  features: Array<{ icon: string; title: string; text: string }>;
  workflowHeading: string;
  steps: Array<[string, string, string]>;
  workflowLink: string;
  docsHeading: string;
  cards: Array<{ label: string; title: string; text: string; slug: string }>;
  support: { title: [string, string]; text: string; button: string };
};

export const HOME_COPY: Record<Language, HomeCopy> = {
  ko: {
    hero: {
      title: "아바타 의상 대응을",
      accent: "더 빠르고 정교하게.",
      description: "きせった (Kisetter)는 Unity Humanoid 아바타 사이의 체형 차이를 분석해 의상 Bone, Mesh, Weight를 자동으로 조정합니다.",
      start: "가이드 시작하기",
      download: "Booth에서 다운로드 ↗",
      latest: "최신 가이드",
      imageAlt: "きせった (Kisetter) 대표 이미지",
    },
    trustLabel: "주요 지원 기능",
    featuresHeading: ["의상 대응의 전 과정을", "하나의 도구에서."],
    featuresDescription: "반복 작업은 자동화하고, 결과에 중요한 세부 조정은 직접 제어할 수 있습니다.",
    features: [
      { icon: "◇", title: "자동 의상 대응", text: "아바타 체형에 맞춰 의상의 Bone, Mesh, Weight를 자동으로 조정합니다." },
      { icon: "⌁", title: "정교한 수동 보정", text: "Manual Fitting Mode에서 본을 직접 조정해 원하는 실루엣을 완성합니다." },
      { icon: "◈", title: "BlendShape 도구", text: "변형 결과 저장부터 아바타 BlendShape의 의상 추가와 일괄 제어까지 지원합니다." },
    ],
    workflowHeading: "처음 사용해도 흐름은 단순합니다.",
    steps: [
      ["01", "Source 준비", "원본 아바타와 대응 의상을 Scene에 배치합니다."],
      ["02", "Target 선택", "의상을 입힐 Humanoid 아바타를 설정합니다."],
      ["03", "Fitting 실행", "자동 또는 수동 모드로 변형을 진행합니다."],
      ["04", "결과 확인", "관통과 형태를 확인하고 필요하면 옵션을 조정합니다."],
    ],
    workflowLink: "Auto Fitting 전체 과정 보기 →",
    docsHeading: "필요한 문서부터 바로 시작하세요.",
    cards: [
      { label: "시작하기", title: "설치 및 빠른 시작", text: "UnityPackage 설치부터 첫 작업 선택까지", slug: "getting-started" },
      { label: "사용 가이드", title: "Manual Fitting", text: "본을 직접 조정하는 정교한 대응 방법", slug: "manual-fitting" },
      { label: "참조", title: "파라미터 설명", text: "Fitting과 Weighting 옵션 상세 안내", slug: "parameters" },
      { label: "문제 해결", title: "Q&A 및 오류 해결", text: "대표 오류 메시지와 해결 방법", slug: "faq" },
    ],
    support: { title: ["해결되지 않는 문제는", "Discord에서 도와드릴게요."], text: "Eden Labs 공식 Discord의 Help 채널을 이용해 주세요.", button: "Discord 참여하기 ↗" },
  },
  ja: {
    hero: {
      title: "アバター衣装対応を",
      accent: "より速く、より精密に。",
      description: "きせった (Kisetter)はUnity Humanoidアバター間の体型差を分析し、衣装のBone、Mesh、Weightを自動で調整します。",
      start: "ガイドを始める",
      download: "Boothでダウンロード ↗",
      latest: "最新ガイド",
      imageAlt: "きせった (Kisetter) メイン画像",
    },
    trustLabel: "主な対応機能",
    featuresHeading: ["衣装対応の全工程を", "ひとつのツールで。"],
    featuresDescription: "繰り返し作業を自動化し、仕上がりに重要な細部は直接調整できます。",
    features: [
      { icon: "◇", title: "衣装の自動フィッティング", text: "アバターの体型に合わせて衣装のBone、Mesh、Weightを自動調整します。" },
      { icon: "⌁", title: "精密な手動補正", text: "Manual Fitting Modeでボーンを直接調整し、理想のシルエットに仕上げます。" },
      { icon: "◈", title: "BlendShapeツール", text: "変形結果の保存から、アバターBlendShapeの衣装への追加と一括操作まで対応します。" },
    ],
    workflowHeading: "初めてでも作業の流れはシンプルです。",
    steps: [
      ["01", "Sourceを準備", "元のアバターと対応する衣装をSceneに配置します。"],
      ["02", "Targetを選択", "衣装を着せるHumanoidアバターを設定します。"],
      ["03", "Fittingを実行", "自動または手動モードで変形を進めます。"],
      ["04", "結果を確認", "貫通や形状を確認し、必要に応じてオプションを調整します。"],
    ],
    workflowLink: "Auto Fittingの全手順を見る →",
    docsHeading: "必要なドキュメントから始めましょう。",
    cards: [
      { label: "はじめに", title: "インストールとクイックスタート", text: "UnityPackageの導入から最初の作業選択まで", slug: "getting-started" },
      { label: "使用ガイド", title: "Manual Fitting", text: "ボーンを直接調整する精密な対応方法", slug: "manual-fitting" },
      { label: "リファレンス", title: "パラメーターの説明", text: "FittingとWeightingオプションの詳細", slug: "parameters" },
      { label: "トラブルシューティング", title: "Q&A・エラー解決", text: "代表的なエラーメッセージと解決方法", slug: "faq" },
    ],
    support: { title: ["解決しない問題は", "Discordでサポートします。"], text: "Eden Labs公式DiscordのHelpチャンネルをご利用ください。", button: "Discordに参加 ↗" },
  },
  en: {
    hero: {
      title: "Fit avatar clothing",
      accent: "faster and more precisely.",
      description: "きせった (Kisetter) analyzes body-shape differences between Unity Humanoid avatars and automatically adjusts clothing bones, meshes, and weights.",
      start: "Start the Guide",
      download: "Download on Booth ↗",
      latest: "Latest guide",
      imageAlt: "きせった (Kisetter) featured image",
    },
    trustLabel: "Main supported features",
    featuresHeading: ["The complete clothing-fitting workflow", "in one tool."],
    featuresDescription: "Automate repetitive work while keeping direct control over the details that shape the final result.",
    features: [
      { icon: "◇", title: "Automatic clothing fitting", text: "Automatically adjusts clothing bones, meshes, and weights to the avatar's body shape." },
      { icon: "⌁", title: "Precise manual correction", text: "Adjust bones directly in Manual Fitting Mode to create the silhouette you want." },
      { icon: "◈", title: "BlendShape tools", text: "Save fitting results, add avatar BlendShapes to clothing, and control them together." },
    ],
    workflowHeading: "A simple workflow, even on your first try.",
    steps: [
      ["01", "Prepare the Source", "Place the original avatar and its clothing in the Scene."],
      ["02", "Select the Target", "Choose the Humanoid avatar that will wear the clothing."],
      ["03", "Run Fitting", "Use Auto or Manual mode to perform the fitting."],
      ["04", "Check the Result", "Check clipping and shape, then adjust options if needed."],
    ],
    workflowLink: "View the full Auto Fitting workflow →",
    docsHeading: "Start with the documentation you need.",
    cards: [
      { label: "Getting Started", title: "Installation and Quick Start", text: "From UnityPackage installation to choosing your first task", slug: "getting-started" },
      { label: "User Guide", title: "Manual Fitting", text: "A precise fitting workflow with direct bone adjustments", slug: "manual-fitting" },
      { label: "Reference", title: "Parameter Description", text: "Detailed Fitting and Weighting options", slug: "parameters" },
      { label: "Troubleshooting", title: "Q&A and Error Solutions", text: "Common error messages and how to resolve them", slug: "faq" },
    ],
    support: { title: ["Still need help?", "We can help on Discord."], text: "Visit the Help channel on the official Eden Labs Discord.", button: "Join Discord ↗" },
  },
};
