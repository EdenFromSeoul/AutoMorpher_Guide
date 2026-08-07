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
  manualFitting: {
    label: string;
    title: [string, string];
    description: string;
    items: Array<{ kind: string; title: string; text: string; video: string; videoLabel: string }>;
  };
  reviews: {
    label: string;
    heading: string;
    description: string;
    previous: string;
    next: string;
    imageLabel: string;
    items: Array<{ quote: string; source: string; image?: string; imageAlt?: string }>;
  };
  guide: {
    label: string;
    itemLabel: string;
    heading: string;
    description: string;
    steps: Array<{ title: string; text: string }>;
    link: string;
  };
  docs: {
    label: string;
    heading: string;
    description: string;
    cards: Array<{ title: string; text: string; slug: string }>;
  };
  faq: {
    label: string;
    heading: string;
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
      title: ["非対応衣装を、", "あなたのアバターに。"],
      description: "きせった (Kisetter)は、特定のアバター向けに制作された衣装を、\n対応していないアバターでも着られるように変換する\nUnity向けの非対応衣装変換ツールです。\n\n複雑な作業は必要ありません。\nアバターと衣装を用意し、数回クリックするだけで変換できます。",
      primary: "Boothで購入する",
      secondary: "仕組みを見る",
      caption: "Unity Humanoid対応 · Windows / Linux · Auto / Manual Fitting",
      videoLabel: "きせったによる非対応衣装のフィッティングデモ",
    },
    marquee: ["AUTO FITTING", "MANUAL FITTING", "BLENDSHAPE", "AVATAR PROFILE", "FBX EXPORT"],
    manualFitting: {
      label: "Manual Fitting Mode",
      title: ["変換後の仕上がりを、", "もっと自分好みに。"],
      description: "Manual Fitting Modeなら、変換した衣装を簡単な操作で細かく調整できます。シルエットやフィット感を整えて、理想の仕上がりに近づけられます。",
      items: [
        { kind: "ボーン調整", title: "衣装のシルエットを、\n思いどおりに", text: "ボーンを直接調整して、袖の長さや靴のサイズ、衣装全体のシルエットを自分好みに整えられます。", video: "manual-bone-adjust.mp4", videoLabel: "Manual Fitting Modeで衣装のボーンとシルエットを調整するデモ" },
        { kind: "メッシュ修正", title: "気になる部分を整えて、\nより自然な仕上がりに", text: "変換後に気になる貫通やメッシュの歪みも、専用ツールを使って手軽に修正できます。", video: "manual-mesh-edit.mp4", videoLabel: "Manual Fitting Modeで衣装メッシュの貫通や歪みを修正するデモ" },
      ],
    },
    reviews: {
      label: "ご利用者の声",
      heading: "実際に使った方の声から、使い心地をチェック。",
      description: "Xに投稿された利用者の声を、投稿者名や写真・動画とともにご紹介しています。カードを選ぶと、Xの元の投稿をご覧いただけます。",
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
      label: "衣装変換",
      itemLabel: "準備物",
      heading: "必要なものは\n3つだけ",
      description: "衣装を着せたいアバター\n変換したい衣装\n変換元アバター\n\nこの3つがあれば、準備完了！",
      steps: [
        { title: "Sourceアバター", text: "衣装が対応している元のアバターを用意します。元のアバターをお持ちでない場合は、Avatar Profileを代わりに使用できます。" },
        { title: "着せたい衣装", text: "自分のアバターに着せたい衣装を用意します。" },
        { title: "着せたいアバター", text: "衣装を着せたいアバターを用意します。Humanoid形式のアバターであれば、きせった（Kisetter）を使って非対応衣装をそのアバター向けに変換できます。" },
      ],
      link: "Auto Fittingの詳しい手順を見る",
    },
    docs: {
      label: "ガイド・サポート",
      heading: "お困りのときは",
      description: "インストール方法から基本的な使い方、トラブルシューティングまで、多言語対応の公式ガイドをご用意しています。ガイドで解決しない場合は、Discordの専用サポートチャンネルから開発者に直接ご相談いただけます。",
      cards: [
        { title: "インストールと開始", text: "UnityPackageの導入と初回セットアップ", slug: "getting-started" },
        { title: "Auto Fitting ガイド", text: "自動フィッティングの手順", slug: "auto-fitting" },
        { title: "Manual Fitting ガイド", text: "ボーンとメッシュを調整する方法", slug: "manual-fitting" },
        { title: "パラメーター説明", text: "FittingとWeighting設定の詳細", slug: "parameters" },
        { title: "Q&A", text: "よくある疑問とエラーへの対応", slug: "faq" },
        { title: "Discord", text: "専用チャンネルで開発者に相談", slug: "discord" },
      ],
    },
    faq: {
      label: "よくあるご質問",
      heading: "よくある質問をまとめました。",
      items: [
        { question: "きせった（Kisetter）はどのようなツールですか？", answer: "きせった（Kisetter）は、非対応衣装を別のアバター向けに変換できるUnityツールです。衣装の対応元アバターと着せたい衣装を用意するだけで、衣装を着せたいアバターの体型に合わせて自動で変形します。" },
        { question: "どのようなアバターに使用できますか？", answer: "BOOTH、VRoid、Fury、Gumroad、Jinxxyなど、アバターの入手先を問わず、Unity上でHumanoidとして設定された人型アバターに使用できます。" },
        { question: "衣装の対応元アバターは必ず必要ですか？", answer: "基本的には、衣装の対応元となるアバターが必要です。ただし、一部のアバターには、対応元アバターがなくても変換できるAvatar Profileをご用意しています。現在提供しているAvatar Profileの一覧は、BOOTHの商品ページでご確認ください。" },
        { question: "きせった（Kisetter）は衣装をどのように変換しますか？", answer: "衣装を着せたいアバターの体型に合わせてメッシュを変形し、動きに自然に追従するようウェイトを再計算します。さらに、衣装のアーマチュアを対象アバターの構造に合わせて再構築します。" },
        { question: "どの環境で使用できますか？", answer: "Unity 2021以降で使用できます。正式対応バージョンは、Unity 2022.3.22f1およびUnity 6000です。WindowsとLinuxに対応しています。" },
        { question: "使用中に問題が発生した場合は、どこに問い合わせればよいですか？", answer: "まずは、公式ドキュメントのQ&Aをご確認ください。症状ごとの解決方法をご案内しています。それでも解決しない場合は、公式DiscordのHelpチャンネルから開発者に直接ご相談いただけます。" },
      ],
    },
    support: {
      heading: "衣装改変を、もっと簡単に。",
      text: "きせったはBOOTHからご購入いただけます。導入前に気になることがある場合は、Discordからお気軽にご相談ください。",
      primary: "BOOTHで購入する",
      secondary: "Discordで相談する",
    },
  },
  ko: {
    nav: { reviews: "사용 후기", guide: "사용 가이드", faq: "Q&A", booth: "Booth", discord: "Discord" },
    hero: {
      title: ["비전용 의상을,", "원하는 아바타에."],
      description: "きせった(Kisetter)는 특정 아바타용으로 제작된 의상을, 해당 의상에서 지원하지 않는 다른 아바타도 착용할 수 있도록 변환해 주는 Unity용 비전용 의상 변환 도구입니다.\n\n복잡한 작업은 필요하지 않습니다. 아바타와 의상만 있다면 바로 시작할 수 있습니다!",
      primary: "Booth에서 구매하기",
      secondary: "작동 방식 보기",
      caption: "Unity Humanoid 지원 · Windows / Linux · Auto / Manual Fitting",
      videoLabel: "きせった를 이용한 비전용 의상 피팅 데모",
    },
    marquee: ["AUTO FITTING", "MANUAL FITTING", "BLENDSHAPE", "AVATAR PROFILE", "FBX EXPORT"],
    manualFitting: {
      label: "Manual Fitting Mode",
      title: ["대응된 결과가 아쉬운가요?", "당신이 원하는 형태로 입히실 수 있습니다."],
      description: "대응된 결과가 아쉬우셨나요? 당신이 원하는 모습으로 입혀보세요.\nManual Fitting Mode에서 간단하게 조작하여 당신이 원하는 형태로 의상을 수정할 수 있는 기능을 제공합니다.",
      items: [
        { kind: "Bone 조정", title: "의상을 원하는 형태로", text: "Bone을 직접 조정해 소매 길이, 신발 크기와 의상의 전체적인 실루엣을 원하는 형태로 다듬을 수 있습니다.", video: "manual-bone-adjust.mp4", videoLabel: "Manual Fitting Mode에서 Bone을 조정해 의상 실루엣을 변경하는 과정" },
        { kind: "Mesh 수정", title: "간단하게 더 자연스럽게", text: "변환 후 발생할 수 있는 작은 뚫림이나 메시 왜곡을 전용 수정 도구로 손쉽게 보정할 수 있습니다.", video: "manual-mesh-edit.mp4", videoLabel: "Manual Fitting Mode에서 의상의 뚫림과 메시 왜곡을 수정하는 과정" },
      ],
    },
    reviews: {
      label: "이용자 후기",
      heading: "사용한 사람의 말로 확인하세요.",
      description: "X에 게시된 실제 사용 후기를 작성자, 본문, 사진·영상과 함께 확인할 수 있습니다. 카드를 선택하면 X의 원문으로 이동합니다.",
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
      label: "의상 변환",
      itemLabel: "준비물",
      heading: "대응에 필요한 것은 딱 3가지",
      description: "의상 대응에 필요한 것은 세 가지뿐입니다. 의상의 원본에 대응되는 Source 아바타, 입히고 싶은 의상, 그리고 당신의 아바타. 준비가 끝나면 きせった(Kisetter)로 바로 변환을 시작할 수 있습니다.",
      steps: [
        { title: "Source 아바타", text: "의상의 원본에 대응되는 아바타를 준비합니다. 원본 아바타가 없어도 대응할 수 있도록 Avatar Profile 기능을 제공합니다." },
        { title: "입힐 의상", text: "당신의 아바타에 입힐 의상을 준비합니다." },
        { title: "당신의 아바타", text: "Humanoid 아바타라면 어떤 아바타든 きせった(Kisetter)를 통해 의상을 입힐 수 있습니다." },
      ],
      link: "Auto Fitting 상세 과정 보기",
    },
    docs: {
      label: "가이드 문서",
      heading: "도움이 필요하신가요?",
      description: "설치부터 사용 방법과 문제 해결 방법까지 언어별 공식 가이드를 제공하며, Discord의 전용 문의 채널에서 개발자가 직접 문제 해결을 도와드립니다.",
      cards: [
        { title: "설치 및 시작", text: "UnityPackage 설치와 첫 설정", slug: "getting-started" },
        { title: "Auto Fitting 가이드", text: "자동 의상 대응 과정과 사용 방법", slug: "auto-fitting" },
        { title: "Manual Fitting 가이드", text: "Bone과 Mesh를 직접 조정하는 방법", slug: "manual-fitting" },
        { title: "파라미터 설명", text: "Fitting과 Weighting 설정 상세", slug: "parameters" },
        { title: "Q&A", text: "자주 묻는 질문과 오류 해결 방법", slug: "faq" },
        { title: "Discord", text: "전용 문의 채널에서 개발자에게 문의", slug: "discord" },
      ],
    },
    faq: {
      label: "QUICK Q&A",
      heading: "궁금한 점을\n빠르게 확인하세요.",
      items: [
        { question: "きせった (Kisetter)는 어떤 도구인가요?", answer: "きせった (Kisetter)는 Unity에서 비전용 의상을 다른 아바타에 대응해 주는 툴입니다.\n원본이 되는 아바타와 의상만 있으면 의상을 당신의 아바타에 맞게 자동으로 변형해 줍니다." },
        { question: "어떤 아바타에 사용할 수 있나요?", answer: "Booth, VRoid, Fury, Gumroad, Jinxxy 등의 배포·판매 플랫폼과 관계없이,\nUnity Humanoid Animator가 설정된 인간형 아바타라면 사용할 수 있습니다." },
        { question: "의상의 원본 아바타가 반드시 필요한가요?", answer: "기본적으로는 의상의 원본이 되는 아바타가 필요합니다.\n다만, 일부 아바타는 원본 아바타가 없어도 의상을 입힐 수 있도록 Profile 기능을 제공하고 있습니다.\n제공 중인 Profile 목록은 Booth 페이지에서 확인해 주세요." },
        { question: "きせった (Kisetter)는 어떤 걸 해주나요?", answer: "대상 아바타의 체형에 맞춰 의상 Mesh를 변형하고, 움직임을 자연스럽게 따라가도록 Weight를 재계산합니다. 또한 의상의 Armature를 대상 아바타 구조에 맞게 재구성합니다." },
        { question: "지원하는 환경은 무엇인가요?", answer: "Unity Version: Unity 2021 이상의 버전에서 사용할 수 있습니다.\n정식 지원 Unity Version: Unity 2022.3.22f1 & Unity 6000\nOS: Windows와 Linux에서 사용할 수 있습니다." },
        { question: "사용에 문제가 생겼어요. 어디에 문의하나요?", answer: "공식 문서의 Q&A에서 다양한 문제 상황별 해결 방법을 안내합니다.\n문서로 해결되지 않는 경우, 공식 Discord의 Help 채널에서 개발자에게 직접 도움을 받을 수 있습니다." },
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
      description: "Kisetter is a Unity tool that converts outfits made for a specific avatar so they can be worn by other avatars the outfit does not officially support.\n\nNo complicated workflow is required. If you have the avatar and the outfit, you can convert it.",
      primary: "Buy on Booth",
      secondary: "See how it works",
      caption: "Unity Humanoid · Windows / Linux · Auto / Manual Fitting",
      videoLabel: "Unsupported avatar clothing fitting demo with Kisetter",
    },
    marquee: ["AUTO FITTING", "MANUAL FITTING", "BLENDSHAPE", "AVATAR PROFILE", "FBX EXPORT"],
    manualFitting: {
      label: "Manual Fitting Mode",
      title: ["Want to refine the fitted result?", "Make the outfit look the way you want."],
      description: "Want to take the fitted result a little further? Shape the outfit around the look you want.\nManual Fitting Mode provides simple controls for refining the outfit directly.",
      items: [
        { kind: "Bone adjustment", title: "Shape the outfit your way", text: "Adjust bones directly to refine sleeve length, shoe size, and the outfit’s overall silhouette.", video: "manual-bone-adjust.mp4", videoLabel: "Adjusting outfit bones and silhouette in Manual Fitting Mode" },
        { kind: "Mesh editing", title: "Small edits, a more natural fit", text: "Use dedicated editing tools to correct small clipping areas or mesh distortion after conversion.", video: "manual-mesh-edit.mp4", videoLabel: "Correcting clipping and mesh distortion in Manual Fitting Mode" },
      ],
    },
    reviews: {
      label: "Verified voices",
      heading: "See the workflow through the people who use it.",
      description: "See real user feedback shared on X, including the author, post text, photos, and video. Select a card to open the original post on X.",
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
      label: "Outfit conversion",
      itemLabel: "ITEM",
      heading: "Only three things are needed to fit an outfit.",
      description: "You only need three things: the Source avatar the outfit was made for, the outfit you want to use, and your avatar. Once they are ready, you can start converting with Kisetter.",
      steps: [
        { title: "Source avatar", text: "Prepare the avatar the outfit was originally made for. Avatar Profiles let you proceed even without the original avatar." },
        { title: "Outfit to fit", text: "Prepare the outfit you want your avatar to wear." },
        { title: "Your avatar", text: "Any Humanoid avatar can be used as the target for outfit conversion with Kisetter." },
      ],
      link: "View the full Auto Fitting guide",
    },
    docs: {
      label: "Documentation",
      heading: "Need help?",
      description: "Our official multilingual guides cover installation, usage, and troubleshooting. In the dedicated Discord support channel, the developer can help you resolve issues directly.",
      cards: [
        { title: "Install and start", text: "UnityPackage setup and your first workflow", slug: "getting-started" },
        { title: "Auto Fitting guide", text: "Automatic fitting workflow and usage", slug: "auto-fitting" },
        { title: "Manual Fitting guide", text: "Adjust bones and meshes directly", slug: "manual-fitting" },
        { title: "Parameter guide", text: "Detailed Fitting and Weighting settings", slug: "parameters" },
        { title: "Q&A", text: "Common questions and troubleshooting", slug: "faq" },
        { title: "Discord", text: "Ask the developer in the support channel", slug: "discord" },
      ],
    },
    faq: {
      label: "QUICK Q&A",
      heading: "Find quick answers\nto common questions.",
      items: [
        { question: "What kind of tool is Kisetter?", answer: "Kisetter is a Unity tool that adapts unsupported outfits to other avatars. With the source avatar and outfit, it automatically reshapes the outfit to fit your avatar." },
        { question: "Which avatars can I use?", answer: "Any human-shaped avatar with a Unity Humanoid Animator can be used, regardless of whether it comes from Booth, VRoid, Fury, Gumroad, Jinxxy, or another distribution platform." },
        { question: "Do I always need the outfit's source avatar?", answer: "The source avatar is normally required. For selected avatars, the Profile feature lets you fit outfits without owning the source avatar. Check the Booth page for the current list of available Profiles." },
        { question: "What does Kisetter do during conversion?", answer: "Kisetter reshapes the outfit Mesh for the target avatar, recalculates Weight so the outfit follows its movement naturally, and rebuilds the outfit Armature for the target avatar's structure." },
        { question: "Which environments are supported?", answer: "Kisetter works with Unity 2021 or later. Officially supported versions are Unity 2022.3.22f1 and Unity 6000, on Windows and Linux." },
        { question: "I am having trouble. Where can I get help?", answer: "The official Q&A documentation provides solutions for a range of common issues. If the problem remains, the developer can help you directly in the official Discord Help channel." },
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
