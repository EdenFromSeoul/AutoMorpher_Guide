import type { Language } from "./site";

export type HomeCopy = {
  nav: { reviews: string; guide: string; faq: string; booth: string; discord: string };
  hero: {
    title: [string, string];
    description: string;
    primary: string;
    secondary: string;
    caption: string;
    videoLabel: string;
  };
  marquee: string[];
  intro: { heading: string; description: string };
  features: Array<{ title: string; text: string; detail: string }>;
  reviews: {
    heading: string;
    description: string;
    previous: string;
    next: string;
    imageLabel: string;
    items: Array<{ quote: string; source: string; image?: string; imageAlt?: string }>;
  };
  guide: {
    heading: string;
    description: string;
    steps: Array<{ title: string; text: string }>;
    link: string;
  };
  docs: {
    heading: string;
    description: string;
    cards: Array<{ title: string; text: string; slug: string }>;
  };
  faq: {
    heading: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  support: {
    heading: string;
    text: string;
    primary: string;
    secondary: string;
  };
};

export const HOME_COPY: Record<Language, HomeCopy> = {
  ja: {
    nav: { reviews: "使用レビュー", guide: "使用ガイド", faq: "Q&A", booth: "Booth", discord: "Discord" },
    hero: {
      title: ["非対応衣装を、", "好きなアバターへ。"],
      description: "きせった（Kisetter）は、VRChatのアバター改変・衣装改変を支えるUnity衣装対応ツールです。Humanoidアバター間の体型差を解析し、衣装のボーン、メッシュ、ウェイトをまとめて調整します。",
      primary: "Boothで購入する",
      secondary: "仕組みを見る",
      caption: "Unity Humanoid対応 · Windows / Linux · Auto / Manual Fitting",
      videoLabel: "きせったによる非対応衣装のフィッティングデモ",
    },
    marquee: ["AUTO FITTING", "MANUAL FITTING", "BLENDSHAPE", "AVATAR PROFILE", "FBX EXPORT"],
    intro: {
      heading: "衣装対応にかかる時間を、つくる時間へ。",
      description: "元のアバターと着せたいアバターの差を読み取り、繰り返しになりやすい調整を自動化。最後のシルエットはManual Fittingで直接追い込めます。",
    },
    features: [
      { title: "Auto Fitting", text: "体型差を解析し、衣装のBone・Mesh・Weightを自動調整します。", detail: "自動衣装対応" },
      { title: "Manual Fitting", text: "ボーンを直接動かし、衣装のシルエットや細部を調整できます。", detail: "手動補正" },
      { title: "Avatar Profiles", text: "対応Profileがあるアバターなら、元アバターを置かずに作業を始められます。", detail: "反復作業を短縮" },
      { title: "BlendShape Tools", text: "アバターのBlendShapeを衣装へ追加し、まとめて操作できます。", detail: "表情・体型連動" },
      { title: "FBX形式で出力", text: "調整した衣装をFBX形式で書き出し、Unityのワークフローで利用できます。", detail: "FBXエクスポート" },
    ],
    reviews: {
      heading: "使った人の言葉で、使い心地を確認。",
      description: "このエリアはBooth購入者の実レビューをハードコードで追加できるように用意しています。公開前に引用許可と表記を確認してください。",
      previous: "前のレビュー",
      next: "次のレビュー",
      imageLabel: "レビュー画像",
      items: [
        { quote: "購入者レビューと写真を掲載できるスペースです。", source: "Booth購入者レビュー 01" },
        { quote: "購入者レビューと写真を掲載できるスペースです。", source: "Booth購入者レビュー 02" },
        { quote: "購入者レビューと写真を掲載できるスペースです。", source: "Booth購入者レビュー 03" },
      ],
    },
    guide: {
      heading: "3ステップで、衣装対応を始める。",
      description: "Unity上でSourceとTargetを指定し、Fittingを実行。結果を確認して必要な部分だけ調整します。",
      steps: [
        { title: "Sourceを用意", text: "元のアバターと対応衣装、または対応Avatar Profileを準備します。" },
        { title: "Targetを選択", text: "衣装を着せたいHumanoidアバターをシーンで指定します。" },
        { title: "実行して仕上げる", text: "Auto Fittingを実行し、必要に応じてManual Fittingで整えます。" },
      ],
      link: "Auto Fittingの詳しい手順を見る",
    },
    docs: {
      heading: "迷ったときは、必要な答えへ。",
      description: "導入から詳細設定、トラブルシューティングまで、言語別の公式ガイドを用意しています。",
      cards: [
        { title: "インストールと開始", text: "UnityPackageの導入と初回セットアップ", slug: "getting-started" },
        { title: "Manual Fitting", text: "ボーンを直接調整する仕上げ方", slug: "manual-fitting" },
        { title: "パラメーター", text: "FittingとWeighting設定の詳細", slug: "parameters" },
        { title: "Q&A・エラー解決", text: "よくある疑問とエラーへの対応", slug: "faq" },
      ],
    },
    faq: {
      heading: "購入前に知りたいこと。",
      description: "対応範囲とワークフローについて、よくある質問をまとめました。",
      items: [
        { question: "きせったは何をするツールですか？", answer: "あるHumanoidアバター向けの衣装を、別のHumanoidアバターへ対応させるためのUnity Editorツールです。" },
        { question: "どのアバターでも使用できますか？", answer: "配布元にかかわらずHumanoidアバターを対象にできます。改変済みやキメラアバターにも対応しますが、モデル構造によって追加調整が必要です。" },
        { question: "元のアバターは必ず必要ですか？", answer: "基本的にはTarget、衣装、Sourceが必要です。対応Avatar Profileが含まれている場合は、Sourceの代わりにProfileを利用できます。" },
        { question: "すべて自動で完成しますか？", answer: "多くの調整を自動化しますが、衣装や体型によっては自然な仕上がりのためにManual Fittingやオプション調整が必要です。" },
        { question: "対応するUnity環境は？", answer: "VRChat向けUnity 2022.3.22f1、Warudo向け2021.3.18f1、Unity 6000系を案内しています。WindowsとLinuxで利用できます。" },
        { question: "問題が解決しない場合は？", answer: "公式ドキュメントのQ&Aを確認した後、Eden Labs公式DiscordのHelpチャンネルから問い合わせできます。" },
      ],
    },
    support: {
      heading: "次の衣装改変を、もっと自由に。",
      text: "きせったをBoothで入手するか、導入前の疑問をDiscordで相談できます。",
      primary: "Boothで購入する",
      secondary: "Discordで問い合わせる",
    },
  },
  ko: {
    nav: { reviews: "사용 후기", guide: "사용 가이드", faq: "Q&A", booth: "Booth", discord: "Discord" },
    hero: {
      title: ["비전용 의상을,", "원하는 아바타에."],
      description: "きせった(Kisetter)는 VRChat 아바타 개변과 의상 개변을 위한 Unity 의상 대응 툴입니다. Humanoid 아바타 사이의 체형 차이를 분석해 의상 본, 메시와 웨이트를 한 번에 조정합니다.",
      primary: "Booth에서 구매하기",
      secondary: "작동 방식 보기",
      caption: "Unity Humanoid 지원 · Windows / Linux · Auto / Manual Fitting",
      videoLabel: "きせった를 이용한 비전용 의상 피팅 데모",
    },
    marquee: ["AUTO FITTING", "MANUAL FITTING", "BLENDSHAPE", "AVATAR PROFILE", "FBX EXPORT"],
    intro: {
      heading: "의상 대응에 쓰던 시간을, 창작하는 시간으로.",
      description: "원본 아바타와 대상 아바타의 차이를 분석해 반복적인 조정을 자동화합니다. 마지막 실루엣은 Manual Fitting으로 직접 정교하게 다듬을 수 있습니다.",
    },
    features: [
      { title: "Auto Fitting", text: "체형 차이를 분석해 의상의 Bone, Mesh와 Weight를 자동 조정합니다.", detail: "자동 의상 대응" },
      { title: "Manual Fitting", text: "본을 직접 움직여 의상 실루엣과 세부 형태를 조정합니다.", detail: "수동 보정" },
      { title: "Avatar Profiles", text: "지원 Profile이 있다면 원본 아바타를 배치하지 않고 작업을 시작할 수 있습니다.", detail: "반복 작업 단축" },
      { title: "BlendShape Tools", text: "아바타 BlendShape를 의상에 추가하고 함께 제어할 수 있습니다.", detail: "표정·체형 연동" },
      { title: "FBX 형태로 출력", text: "조정한 의상을 FBX 형태로 내보내 Unity 워크플로에서 사용할 수 있습니다.", detail: "FBX 내보내기" },
    ],
    reviews: {
      heading: "사용한 사람의 말로 확인하세요.",
      description: "Booth 구매자의 실제 후기를 하드 코딩으로 추가할 수 있도록 준비한 영역입니다. 공개 전 인용 허가와 표기를 확인해 주세요.",
      previous: "이전 후기",
      next: "다음 후기",
      imageLabel: "후기 이미지",
      items: [
        { quote: "구매자 후기와 사진을 넣을 자리입니다.", source: "Booth 구매자 후기 01" },
        { quote: "구매자 후기와 사진을 넣을 자리입니다.", source: "Booth 구매자 후기 02" },
        { quote: "구매자 후기와 사진을 넣을 자리입니다.", source: "Booth 구매자 후기 03" },
      ],
    },
    guide: {
      heading: "세 단계로 의상 대응을 시작하세요.",
      description: "Unity에서 Source와 Target을 지정해 Fitting을 실행하고, 결과를 확인한 뒤 필요한 부분만 조정합니다.",
      steps: [
        { title: "Source 준비", text: "원본 아바타와 대응 의상 또는 지원 Avatar Profile을 준비합니다." },
        { title: "Target 선택", text: "의상을 입힐 Humanoid 아바타를 Scene에서 지정합니다." },
        { title: "실행하고 마무리", text: "Auto Fitting 후 필요한 부분을 Manual Fitting으로 다듬습니다." },
      ],
      link: "Auto Fitting 상세 과정 보기",
    },
    docs: {
      heading: "막히는 순간, 필요한 답으로.",
      description: "설치부터 상세 설정과 문제 해결까지 언어별 공식 가이드를 제공합니다.",
      cards: [
        { title: "설치 및 시작", text: "UnityPackage 설치와 첫 설정", slug: "getting-started" },
        { title: "Manual Fitting", text: "본을 직접 조정하는 마무리 방법", slug: "manual-fitting" },
        { title: "파라미터", text: "Fitting과 Weighting 설정 상세", slug: "parameters" },
        { title: "Q&A 및 오류 해결", text: "자주 묻는 질문과 오류 대응", slug: "faq" },
      ],
    },
    faq: {
      heading: "구매 전에 알고 싶은 내용.",
      description: "지원 범위와 실제 작업 흐름에 관한 자주 묻는 질문입니다.",
      items: [
        { question: "きせった는 어떤 도구인가요?", answer: "한 Humanoid 아바타용 의상을 다른 Humanoid 아바타에 대응시키는 Unity Editor 툴입니다." },
        { question: "어떤 아바타에 사용할 수 있나요?", answer: "배포처와 관계없이 Humanoid 아바타를 대상으로 할 수 있습니다. 개변·키메라 아바타도 지원하지만 모델 구조에 따라 추가 조정이 필요합니다." },
        { question: "원본 아바타가 반드시 필요한가요?", answer: "기본적으로 Target, 의상과 Source가 필요합니다. 지원 Avatar Profile이 포함된 경우 Source 대신 Profile을 사용할 수 있습니다." },
        { question: "모든 작업이 자동으로 완성되나요?", answer: "많은 조정을 자동화하지만 의상과 체형에 따라 자연스러운 결과를 위해 Manual Fitting이나 옵션 조정이 필요할 수 있습니다." },
        { question: "지원 Unity 환경은 무엇인가요?", answer: "VRChat용 Unity 2022.3.22f1, Warudo용 2021.3.18f1과 Unity 6000 계열을 안내하며 Windows와 Linux를 지원합니다." },
        { question: "문제가 해결되지 않으면 어디에 문의하나요?", answer: "공식 문서의 Q&A를 확인한 뒤 Eden Labs 공식 Discord Help 채널에서 문의할 수 있습니다." },
      ],
    },
    support: {
      heading: "다음 의상 개변을 더 자유롭게.",
      text: "きせった를 Booth에서 구매하거나, 도입 전 궁금한 점을 Discord에서 문의할 수 있습니다.",
      primary: "Booth에서 구매하기",
      secondary: "Discord에서 문의하기",
    },
  },
  en: {
    nav: { reviews: "Reviews", guide: "User guide", faq: "Q&A", booth: "Booth", discord: "Discord" },
    hero: {
      title: ["Fit unsupported outfits", "to the avatar you want."],
      description: "Kisetter is a Unity clothing fitting tool for VRChat avatar and outfit customization. It analyzes differences between Humanoid avatars and adjusts clothing bones, meshes, and weights together.",
      primary: "Buy on Booth",
      secondary: "See how it works",
      caption: "Unity Humanoid · Windows / Linux · Auto / Manual Fitting",
      videoLabel: "Unsupported avatar clothing fitting demo with Kisetter",
    },
    marquee: ["AUTO FITTING", "MANUAL FITTING", "BLENDSHAPE", "AVATAR PROFILE", "FBX EXPORT"],
    intro: {
      heading: "Spend less time adapting outfits. More time creating.",
      description: "Kisetter reads the differences between the source and target avatar, automates repetitive adjustments, and leaves final silhouette control in your hands with Manual Fitting.",
    },
    features: [
      { title: "Auto Fitting", text: "Analyzes body differences and adjusts clothing bones, meshes, and weights.", detail: "Automated conversion" },
      { title: "Manual Fitting", text: "Move bones directly to refine the outfit silhouette and small details.", detail: "Precise correction" },
      { title: "Avatar Profiles", text: "Start without placing the source avatar when a supported Profile is available.", detail: "Faster repeat work" },
      { title: "BlendShape Tools", text: "Add avatar BlendShapes to clothing and control them together.", detail: "Shape synchronization" },
      { title: "Export as FBX", text: "Export the fitted outfit as FBX and continue working with it in Unity.", detail: "FBX export" },
    ],
    reviews: {
      heading: "See the workflow through the people who use it.",
      description: "This area is ready for hard-coded reviews from verified Booth buyers. Confirm quotation permission and attribution before publishing.",
      previous: "Previous review",
      next: "Next review",
      imageLabel: "Review image",
      items: [
        { quote: "A buyer photo and review can be added here.", source: "Booth buyer review 01" },
        { quote: "A buyer photo and review can be added here.", source: "Booth buyer review 02" },
        { quote: "A buyer photo and review can be added here.", source: "Booth buyer review 03" },
      ],
    },
    guide: {
      heading: "Start fitting in three steps.",
      description: "Choose a Source and Target in Unity, run Fitting, inspect the result, and refine only what needs attention.",
      steps: [
        { title: "Prepare the Source", text: "Use the original avatar and outfit, or a supported Avatar Profile." },
        { title: "Choose the Target", text: "Select the Humanoid avatar that should wear the outfit." },
        { title: "Run and refine", text: "Run Auto Fitting, then use Manual Fitting where necessary." },
      ],
      link: "View the full Auto Fitting guide",
    },
    docs: {
      heading: "Find the answer when you need it.",
      description: "The multilingual official guide covers installation, detailed controls, and troubleshooting.",
      cards: [
        { title: "Install and start", text: "UnityPackage setup and your first workflow", slug: "getting-started" },
        { title: "Manual Fitting", text: "Refine results by adjusting bones directly", slug: "manual-fitting" },
        { title: "Parameters", text: "Detailed Fitting and Weighting settings", slug: "parameters" },
        { title: "Q&A and errors", text: "Common questions and troubleshooting", slug: "faq" },
      ],
    },
    faq: {
      heading: "What to know before buying.",
      description: "Common questions about compatibility and the fitting workflow.",
      items: [
        { question: "What does Kisetter do?", answer: "It is a Unity Editor tool for adapting clothing made for one Humanoid avatar to another Humanoid avatar." },
        { question: "Can I use it with any avatar?", answer: "Humanoid avatars can be used regardless of marketplace. Modified and chimera avatars are supported, though some model structures need extra adjustment." },
        { question: "Do I always need the source avatar?", answer: "Normally you need the target, clothing, and source. A bundled supported Avatar Profile can replace the source avatar." },
        { question: "Does it finish everything automatically?", answer: "It automates many adjustments, but some outfit and body combinations need Manual Fitting or option changes for a natural result." },
        { question: "Which Unity environments are supported?", answer: "The guide covers Unity 2022.3.22f1 for VRChat, 2021.3.18f1 for Warudo, and Unity 6000 on Windows and Linux." },
        { question: "Where can I get help?", answer: "Check the official Q&A documentation, then contact the Help channel in the official Eden Labs Discord if needed." },
      ],
    },
    support: {
      heading: "Make the next outfit yours.",
      text: "Get Kisetter on Booth or ask a question in Discord before you begin.",
      primary: "Buy on Booth",
      secondary: "Ask on Discord",
    },
  },
};
