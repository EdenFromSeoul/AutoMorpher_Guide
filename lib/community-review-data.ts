export type CommunityAvatar = {
  id: string;
  name: string;
  nativeName: string;
  aliases?: string[];
  maker: string;
  description: string;
  image: string;
  imagePosition?: string;
  postCount: number;
  tipCount: number;
  productUrl?: string;
  platform?: "Booth" | "Gumroad" | "Jinxxy" | "Other";
  isLocal?: boolean;
};

export type CommunityPost = {
  id: string;
  targetAvatarId: string;
  sourceAvatar: string;
  type: "review" | "tip";
  title: string;
  author: string;
  authorImage?: string;
  summary: string;
  body: string;
  coverImage: string;
  images: string[];
  createdAt: string;
  helpful: number;
  pinHash?: string;
  isLocal?: boolean;
};

export const COMMUNITY_AVATARS: CommunityAvatar[] = [
  {
    id: "shinano",
    name: "Shinano",
    nativeName: "シナノ",
    aliases: ["シナノ", "시나노"],
    maker: "포론",
    description: "시나노를 Target Avatar로 변환한 사용자 기록을 모았습니다.",
    image: "/media/e0968448f39f5435.png",
    imagePosition: "36% 38%",
    postCount: 7,
    tipCount: 3,
  },
  {
    id: "manuka",
    name: "Manuka",
    nativeName: "マヌカ",
    aliases: ["マヌカ", "마누카"],
    maker: "JINGO CHANNEL",
    description: "마누카 체형에 맞춘 의상 대응 후기와 보정 팁입니다.",
    image: "/media/7a304ce4506efe38.png",
    imagePosition: "23% 56%",
    postCount: 6,
    tipCount: 4,
  },
  {
    id: "maya",
    name: "Maya",
    nativeName: "舞夜",
    aliases: ["舞夜", "マヤ", "마야"],
    maker: "キュビクローゼット",
    description: "마야로 변환한 결과와 자주 사용한 설정을 확인하세요.",
    image: "/media/63feca0954364a0e.png",
    imagePosition: "25% 46%",
    postCount: 5,
    tipCount: 2,
  },
  {
    id: "selestia",
    name: "Selestia",
    nativeName: "セレスティア",
    aliases: ["セレスティア", "셀레스티아", "Celestia"],
    maker: "JINGO CHANNEL",
    description: "셀레스티아 변환 결과와 실루엣 보정 사례를 정리했습니다.",
    image: "/media/4d7849ac3b32aab7.png",
    imagePosition: "28% 28%",
    postCount: 4,
    tipCount: 2,
  },
  {
    id: "sio",
    name: "Sio",
    nativeName: "しお",
    aliases: ["しお", "シオ", "시오"],
    maker: "Chocolate rice",
    description: "시오 특유의 비율에 맞춘 변환 사례를 둘러보세요.",
    image: "/media/093321aadd4b9de3.png",
    imagePosition: "28% 44%",
    postCount: 3,
    tipCount: 2,
  },
  {
    id: "milltina",
    name: "Milltina",
    nativeName: "ミルティナ",
    aliases: ["ミルティナ", "밀티나"],
    maker: "DOLOS art",
    description: "밀티나를 위한 자동 변환 결과와 마무리 팁입니다.",
    image: "/assets/brand/automorpher-thumbnail.jpg",
    imagePosition: "50% 42%",
    postCount: 2,
    tipCount: 1,
  },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: "shinano-wrist-fit",
    targetAvatarId: "shinano",
    sourceAvatar: "Manuka",
    type: "tip",
    title: "손목 주변이 뜰 때 먼저 확인한 설정",
    author: "Hana",
    summary: "손목과 소매 사이에 틈이 생겼을 때 본 위치를 직접 만지기 전에 확인했던 순서를 정리했습니다.",
    body: "자동 변환 직후 손목 주변이 조금 떠 보였습니다. 먼저 Source Avatar에서 소매 BlendShape가 적용된 상태인지 확인한 뒤 다시 변환했습니다.\n\n그래도 남는 부분은 손목 본보다 의상 메시의 경계를 먼저 확인하는 편이 자연스러웠습니다. 작은 차이는 Mesh Studio에서 마지막으로 정리했습니다.",
    coverImage: "/media/7a304ce4506efe38.png",
    images: ["/media/57eedd916e681082.png"],
    createdAt: "2026-08-26",
    helpful: 18,
  },
  {
    id: "shinano-maya-jacket",
    targetAvatarId: "shinano",
    sourceAvatar: "Maya",
    type: "review",
    title: "Maya용 재킷을 시나노에 맞춘 후기",
    author: "Rin",
    summary: "상체 실루엣은 자동 변환만으로 잘 맞았고, 가슴과 겨드랑이 부분만 가볍게 마무리했습니다.",
    body: "Maya용 재킷을 시나노에 변환했습니다. 전체 비율은 자동 변환 결과를 그대로 사용해도 괜찮았습니다.\n\n가슴 쪽 여유가 조금 크게 남아 Source Clothes Object의 BlendShape를 먼저 줄였고, 겨드랑이 안쪽만 수동으로 정리했습니다. 액세서리는 분리해서 변환하는 편이 결과가 안정적이었습니다.",
    coverImage: "/media/4d7849ac3b32aab7.png",
    images: ["/media/1f6499e157008668.png"],
    createdAt: "2026-08-24",
    helpful: 12,
  },
  {
    id: "manuka-shinano-dress",
    targetAvatarId: "manuka",
    sourceAvatar: "Shinano",
    type: "review",
    title: "시나노 원피스를 마누카에 대응해 봤어요",
    author: "Moa",
    summary: "치마와 상의를 나눠 변환하니 실루엣을 유지하면서 보정할 부분을 줄일 수 있었습니다.",
    body: "한 번에 변환했을 때보다 상의와 치마를 나눠 처리한 결과가 더 좋았습니다. 상의는 가슴 형태를 Source 쪽에서 먼저 맞추고, 치마는 다리 간격을 확인한 뒤 변환했습니다.\n\n완료 후에는 옆선과 겨드랑이만 조금 정리했습니다. 전체 작업 시간은 처음 시도했을 때보다 크게 줄었습니다.",
    coverImage: "/media/4d7849ac3b32aab7.png",
    images: ["/media/79483bf7f05478a5.png"],
    createdAt: "2026-08-22",
    helpful: 25,
  },
  {
    id: "manuka-accessory-split",
    targetAvatarId: "manuka",
    sourceAvatar: "Maya",
    type: "tip",
    title: "가방과 액세서리는 분리해서 변환했어요",
    author: "Yuzu",
    summary: "몸에 붙는 의상과 흔들리는 액세서리를 분리하면 불필요한 변형을 줄일 수 있었습니다.",
    body: "가방이 의상과 함께 변환되면서 형태가 조금 눌렸습니다. 가방 메시를 선택에서 제외하고 의상만 먼저 변환한 뒤, 가방은 위치를 따로 맞추는 방식으로 해결했습니다.\n\n몸에 직접 맞아야 하는 메시와 형태를 유지해야 하는 소품을 나누는 것이 핵심이었습니다.",
    coverImage: "/media/79483bf7f05478a5.png",
    images: ["/media/57eedd916e681082.png"],
    createdAt: "2026-08-20",
    helpful: 15,
  },
  {
    id: "maya-manuka-casual",
    targetAvatarId: "maya",
    sourceAvatar: "Manuka",
    type: "review",
    title: "마누카 캐주얼 세트 변환 후기",
    author: "Sena",
    summary: "긴 소매와 가방이 포함된 세트였지만 메시를 구분해 처리하니 결과가 깔끔했습니다.",
    body: "긴 소매는 팔 본 방향에 따라 차이가 보여 Transfer Weight 옵션을 켜고 다시 변환했습니다. 가방은 마지막에 별도로 위치를 맞췄습니다.\n\n소매 끝과 목 주변만 조금 보정했고 나머지는 자동 결과를 사용했습니다.",
    coverImage: "/media/7a304ce4506efe38.png",
    images: ["/media/79483bf7f05478a5.png"],
    createdAt: "2026-08-18",
    helpful: 9,
  },
  {
    id: "maya-foot-fitting",
    targetAvatarId: "maya",
    sourceAvatar: "Shinano",
    type: "tip",
    title: "발 위치가 어긋날 때 Skip Foot Fitting 확인하기",
    author: "Nagi",
    summary: "신발이 앞으로 밀려 보일 때 옵션을 바꿔 비교한 결과를 간단히 남깁니다.",
    body: "발 모양 차이가 큰 조합에서는 Skip Foot Fitting 설정에 따라 결과가 크게 달라졌습니다. 신발이 발보다 앞으로 밀려 보이면 옵션을 끈 결과와 켠 결과를 모두 비교해보는 편이 좋았습니다.\n\n최종적으로는 발목과 발끝이 자연스럽게 이어지는 쪽을 선택했습니다.",
    coverImage: "/media/088422ae766e0202.png",
    images: ["/media/0020676efddbe42b.png"],
    createdAt: "2026-08-16",
    helpful: 20,
  },
  {
    id: "selestia-milltina-dress",
    targetAvatarId: "selestia",
    sourceAvatar: "Milltina",
    type: "review",
    title: "밀티나 드레스를 셀레스티아로 변환",
    author: "Lumi",
    summary: "체형 차이가 있는 드레스도 Source BlendShape를 먼저 정리하니 자연스럽게 맞았습니다.",
    body: "가슴과 허리 비율 차이가 커서 Source Clothes Object를 셀레스티아 실루엣에 가깝게 만든 뒤 변환했습니다.\n\n변환 이후에는 옆선이 꺾이는 부분만 Mesh Studio로 정리했습니다. 처음부터 수동으로 맞추는 것보다 훨씬 빠르게 마무리할 수 있었습니다.",
    coverImage: "/media/1f6499e157008668.png",
    images: ["/media/4d7849ac3b32aab7.png"],
    createdAt: "2026-08-14",
    helpful: 14,
  },
  {
    id: "selestia-source-shape",
    targetAvatarId: "selestia",
    sourceAvatar: "Shinano",
    type: "tip",
    title: "가슴 실루엣 보정은 Source에서 먼저",
    author: "Ame",
    summary: "변환 후 반복 보정하는 대신 Source 의상 형태를 먼저 맞춰 작업 시간을 줄였습니다.",
    body: "변환 후에만 모양을 수정하면 주변 메시까지 여러 번 손보게 됐습니다. Source Avatar의 체형과 의상 BlendShape를 먼저 목표 실루엣에 가깝게 정리하니 결과가 안정적이었습니다.\n\n특히 가슴이나 허리처럼 차이가 큰 부위에서 효과가 컸습니다.",
    coverImage: "/media/4d7849ac3b32aab7.png",
    images: [],
    createdAt: "2026-08-12",
    helpful: 11,
  },
  {
    id: "sio-shinano-loafers",
    targetAvatarId: "sio",
    sourceAvatar: "Shinano",
    type: "review",
    title: "시나노 로퍼를 시오 체형에 맞추기",
    author: "Koto",
    summary: "발 크기 차이를 자동 보정한 뒤 발목 경계만 정리해 사용했습니다.",
    body: "신발 크기 차이가 있어서 Foot Fitting 결과를 비교했습니다. 자동 보정을 적용한 결과가 발끝과 뒤꿈치 모두 자연스러웠습니다.\n\n양말과 신발 사이 경계만 조금 정리한 뒤 그대로 사용했습니다.",
    coverImage: "/media/088422ae766e0202.png",
    images: ["/media/0020676efddbe42b.png"],
    createdAt: "2026-08-10",
    helpful: 8,
  },
  {
    id: "milltina-bone-scale",
    targetAvatarId: "milltina",
    sourceAvatar: "Shinano",
    type: "tip",
    title: "변환 후 본 크기를 먼저 확인한 이유",
    author: "Rei",
    summary: "메시를 직접 수정하기 전에 Source와 Target의 기본 스케일을 비교했습니다.",
    body: "변환 결과가 전체적으로 작아 보여 메시 문제라고 생각했지만 Target Avatar의 기본 스케일이 달랐습니다.\n\nRotation과 Scale을 초기화하고 다시 변환하니 대부분 해결됐고, 이후 필요한 부분만 가볍게 정리했습니다.",
    coverImage: "/media/63feca0954364a0e.png",
    images: ["/media/093321aadd4b9de3.png"],
    createdAt: "2026-08-08",
    helpful: 10,
  },
];
