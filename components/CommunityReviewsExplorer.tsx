"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ChangeEvent, type ClipboardEvent, FormEvent, type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import {
  COMMUNITY_AVATARS,
  COMMUNITY_POSTS,
  type CommunityAvatar,
  type CommunityPost,
} from "@/lib/community-review-data";
import { BASE_PATH, type Language } from "@/lib/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STORAGE_KEY = "kisetter-community-prototype-posts-v1";
const AVATAR_STORAGE_KEY = "kisetter-community-prototype-avatars-v1";
const MAX_EXTRA_IMAGES = 3;

const COPY = {
  ko: {
    eyebrow: "Kisetter Community",
    titleBefore: "Target Avatar로",
    titleAfter: "모아보는 후기와 팁",
    description: "변환하려는 아바타를 먼저 선택하고, 실제 사용자들이 남긴 변환 결과와 보정 노하우를 한곳에서 확인하세요.",
    boothNote: "판매처 링크는 아바타의 출처 정보로 보관됩니다. 아바타 카드는 우리 사이트의 후기 페이지로 이동하고, 상품 페이지는 상세 화면의 별도 링크로 열립니다.",
    search: "Target Avatar 검색",
    write: "후기 또는 팁 작성",
    addAvatar: "Target Avatar 추가",
    addAvatarTitle: "새 Target Avatar 등록",
    addAvatarDescription: "상품 링크를 기준으로 아바타를 등록하고 사용자 기록을 모아보세요.",
    productUrlLabel: "상품 페이지 링크",
    productUrlHint: "Booth, Gumroad, Jinxxy 링크를 지원하도록 설계했습니다.",
    productPlatform: "인식된 판매처",
    avatarNameLabel: "대표 이름",
    nativeNameLabel: "추가 이름 · 검색용",
    nativeNameHint: "다른 이름이나 별칭을 쉼표 또는 줄바꿈으로 구분해 입력하세요.",
    nativeNamePlaceholder: "예: 시나노, シナノ, 별칭",
    makerLabel: "제작자 이름",
    avatarDescriptionLabel: "간단한 소개 · 선택",
    avatarThumbnailLabel: "대표 썸네일",
    avatarThumbnailDescription: "선택 사항입니다. 첨부하지 않으면 판매처별 기본 이미지가 표시됩니다. 복사한 이미지는 이 화면에서 Ctrl+V로 붙여넣을 수 있습니다.",
    defaultThumbnail: "기본 카드 이미지",
    productLink: "상품 페이지 보기 ↗",
    saveAvatar: "아바타 등록",
    avatarSaved: "Target Avatar를 등록했습니다.",
    invalidProductUrl: "BOOTH, Gumroad 또는 Jinxxy 상품 링크를 입력해주세요.",
    review: "후기",
    tip: "팁",
    posts: "사용자 기록",
    open: "기록 보기",
    recent: "최근 올라온 사용자 기록",
    recentDescription: "아바타를 고르기 전, 새로 공유된 변환 결과와 팁을 먼저 둘러볼 수 있습니다.",
    backToAvatars: "Target Avatar 목록",
    backToPosts: "목록으로 돌아가기",
    source: "Source Avatar",
    target: "Target Avatar",
    helpful: "도움돼요",
    empty: "아직 등록된 기록이 없습니다.",
    draftNotice: "로컬 초안에서는 작성한 글이 이 브라우저에만 저장됩니다. 샘플 글 수정·삭제 비밀번호는 1234입니다.",
    formTitle: "사용자 기록 작성",
    editTitle: "사용자 기록 수정",
    formDescription: "변환 결과와 다시 도움이 될 만한 설정을 자유롭게 남겨주세요.",
    targetLabel: "변환 대상 아바타",
    typeLabel: "글 종류",
    titleLabel: "제목",
    sourceLabel: "변환원 아바타 이름",
    authorLabel: "작성자 이름",
    summaryLabel: "간단한 내용 미리보기",
    bodyLabel: "후기와 팁",
    mediaLabel: "이미지 첨부",
    mediaDescription: "대표 이미지 1장과 본문 이미지 최대 3장을 선택할 수 있습니다. 복사한 이미지는 이 화면에서 Ctrl+V로 붙여넣을 수 있습니다.",
    coverImageLabel: "대표 이미지",
    extraImageLabel: "본문 이미지",
    attachImage: "이미지 첨부하기",
    attachMoreImages: "본문 이미지 추가",
    replaceImage: "이미지 교체",
    removeImage: "삭제",
    urlOption: "이미지 URL로 입력",
    imageHint: "JPG, PNG, WEBP · 로컬 저장을 위해 자동으로 크기를 줄입니다.",
    imageTypeError: "이미지 파일만 첨부할 수 있습니다.",
    imageCountError: "본문 이미지는 최대 3장까지 첨부할 수 있습니다.",
    imageSizeError: "이미지가 너무 큽니다. 다른 이미지를 선택해주세요.",
    storageFull: "브라우저 저장 공간이 부족합니다. 첨부 이미지를 줄여주세요.",
    pinLabel: "수정·삭제 비밀번호",
    pinHint: "숫자 4자리입니다. 분실하면 수정과 삭제가 어렵습니다.",
    cancel: "취소",
    publish: "기록 등록",
    save: "수정 내용 저장",
    edit: "수정",
    delete: "삭제",
    pinTitle: "비밀번호 확인",
    pinDescription: "이 글에 설정한 숫자 4자리를 입력해주세요.",
    confirm: "확인",
    wrongPin: "비밀번호가 일치하지 않습니다.",
    invalidPin: "숫자 4자리를 입력해주세요.",
    deleted: "게시글을 삭제했습니다.",
    saved: "게시글을 저장했습니다.",
    noResults: "검색 결과가 없습니다.",
  },
  ja: {
    eyebrow: "Kisetter Community",
    titleBefore: "Target Avatar別に",
    titleAfter: "レビューとヒントを見る",
    description: "変換先のアバターを選び、ユーザーが共有した変換結果や調整のヒントをまとめて確認できます。",
    boothNote: "ストアURLはアバターの出典情報として保存します。カードはサイト内レビューへ移動し、商品ページは詳細画面の別リンクから開きます。",
    search: "Target Avatarを検索",
    write: "レビュー・ヒントを書く",
    addAvatar: "Target Avatarを追加",
    addAvatarTitle: "新しいTarget Avatarを登録",
    addAvatarDescription: "商品リンクを基準にアバターを登録し、ユーザー記録をまとめます。",
    productUrlLabel: "商品ページURL",
    productUrlHint: "Booth、Gumroad、Jinxxyのリンクに対応する設計です。",
    productPlatform: "認識したストア",
    avatarNameLabel: "代表名",
    nativeNameLabel: "追加名・検索用",
    nativeNameHint: "別名や愛称をカンマまたは改行で区切って入力してください。",
    nativeNamePlaceholder: "例：シナノ, 시나노, 愛称",
    makerLabel: "作者名",
    avatarDescriptionLabel: "短い紹介・任意",
    avatarThumbnailLabel: "メイン画像",
    avatarThumbnailDescription: "任意です。添付しない場合はストア別の標準画像を表示します。コピーした画像はこの画面でCtrl+Vを押して貼り付けられます。",
    defaultThumbnail: "標準カード画像",
    productLink: "商品ページを見る ↗",
    saveAvatar: "アバターを登録",
    avatarSaved: "Target Avatarを登録しました。",
    invalidProductUrl: "BOOTH、Gumroad、Jinxxyの商品URLを入力してください。",
    review: "レビュー",
    tip: "ヒント",
    posts: "ユーザー記録",
    open: "記録を見る",
    recent: "最近のユーザー記録",
    recentDescription: "アバターを選ぶ前に、新しく共有された変換結果やヒントを確認できます。",
    backToAvatars: "Target Avatar一覧",
    backToPosts: "一覧に戻る",
    source: "Source Avatar",
    target: "Target Avatar",
    helpful: "参考になった",
    empty: "まだ記録がありません。",
    draftNotice: "ローカル案では、このブラウザにのみ保存されます。サンプル投稿の編集・削除パスワードは1234です。",
    formTitle: "ユーザー記録を書く",
    editTitle: "ユーザー記録を編集",
    formDescription: "変換結果や、次の人に役立つ設定を自由に共有してください。",
    targetLabel: "変換先アバター",
    typeLabel: "投稿タイプ",
    titleLabel: "タイトル",
    sourceLabel: "変換元アバター名",
    authorLabel: "投稿者名",
    summaryLabel: "短いプレビュー",
    bodyLabel: "レビューとヒント",
    mediaLabel: "画像を添付",
    mediaDescription: "メイン画像1枚と本文画像を最大3枚まで選択できます。コピーした画像はこの画面でCtrl+Vを押して貼り付けられます。",
    coverImageLabel: "メイン画像",
    extraImageLabel: "本文画像",
    attachImage: "画像を添付",
    attachMoreImages: "本文画像を追加",
    replaceImage: "画像を変更",
    removeImage: "削除",
    urlOption: "画像URLを入力",
    imageHint: "JPG、PNG、WEBP · ローカル保存用に自動で縮小します。",
    imageTypeError: "画像ファイルのみ添付できます。",
    imageCountError: "本文画像は最大3枚まで添付できます。",
    imageSizeError: "画像が大きすぎます。別の画像を選択してください。",
    storageFull: "ブラウザの保存容量が不足しています。添付画像を減らしてください。",
    pinLabel: "編集・削除パスワード",
    pinHint: "4桁の数字です。紛失すると編集・削除できません。",
    cancel: "キャンセル",
    publish: "記録を投稿",
    save: "変更を保存",
    edit: "編集",
    delete: "削除",
    pinTitle: "パスワード確認",
    pinDescription: "この投稿に設定した4桁の数字を入力してください。",
    confirm: "確認",
    wrongPin: "パスワードが一致しません。",
    invalidPin: "4桁の数字を入力してください。",
    deleted: "投稿を削除しました。",
    saved: "投稿を保存しました。",
    noResults: "検索結果がありません。",
  },
  en: {
    eyebrow: "Kisetter Community",
    titleBefore: "Reviews and tips",
    titleAfter: "by Target Avatar",
    description: "Choose the avatar you are converting to, then explore real results and finishing notes shared by Kisetter users.",
    boothNote: "The store URL is saved as source information. Cards open the review page on this site; the product page remains a separate link in the detail view.",
    search: "Search Target Avatars",
    write: "Write a review or tip",
    addAvatar: "Add Target Avatar",
    addAvatarTitle: "Register a new Target Avatar",
    addAvatarDescription: "Add an avatar from its product page and start collecting user notes.",
    productUrlLabel: "Product page link",
    productUrlHint: "Designed for Booth, Gumroad and Jinxxy product links.",
    productPlatform: "Detected store",
    avatarNameLabel: "Primary name",
    nativeNameLabel: "Additional names · for search",
    nativeNameHint: "Separate other names or aliases with commas or line breaks.",
    nativeNamePlaceholder: "e.g. Shinano, シナノ, nickname",
    makerLabel: "Creator name",
    avatarDescriptionLabel: "Short introduction · optional",
    avatarThumbnailLabel: "Cover thumbnail",
    avatarThumbnailDescription: "Optional. Without an upload, the card uses a store-specific default image. Copy an image and press Ctrl+V on this screen to paste it.",
    defaultThumbnail: "Default card image",
    productLink: "View product page ↗",
    saveAvatar: "Register avatar",
    avatarSaved: "The Target Avatar was registered.",
    invalidProductUrl: "Enter a BOOTH, Gumroad or Jinxxy product URL.",
    review: "Review",
    tip: "Tip",
    posts: "User notes",
    open: "Open notes",
    recent: "Recently shared user notes",
    recentDescription: "Browse fresh conversion results and tips before choosing a Target Avatar.",
    backToAvatars: "Target Avatar list",
    backToPosts: "Back to notes",
    source: "Source Avatar",
    target: "Target Avatar",
    helpful: "Helpful",
    empty: "No notes have been posted yet.",
    draftNotice: "In this local draft, new posts are saved only in this browser. The sample post edit and delete password is 1234.",
    formTitle: "Write a user note",
    editTitle: "Edit user note",
    formDescription: "Share the result and any settings that could help the next person.",
    targetLabel: "Target Avatar",
    typeLabel: "Post type",
    titleLabel: "Title",
    sourceLabel: "Source Avatar name",
    authorLabel: "Author name",
    summaryLabel: "Short preview",
    bodyLabel: "Review and tips",
    mediaLabel: "Image attachments",
    mediaDescription: "Choose one cover image and up to three images for the post body. Copy an image and press Ctrl+V on this screen to paste it.",
    coverImageLabel: "Cover image",
    extraImageLabel: "Body images",
    attachImage: "Attach image",
    attachMoreImages: "Add body images",
    replaceImage: "Replace image",
    removeImage: "Remove",
    urlOption: "Enter an image URL",
    imageHint: "JPG, PNG or WEBP · Images are resized for local storage.",
    imageTypeError: "Only image files can be attached.",
    imageCountError: "You can attach up to three body images.",
    imageSizeError: "This image is too large. Please choose another image.",
    storageFull: "Browser storage is full. Remove some attached images.",
    pinLabel: "Edit and delete password",
    pinHint: "Enter four digits. Without them, the post cannot be changed or deleted.",
    cancel: "Cancel",
    publish: "Publish note",
    save: "Save changes",
    edit: "Edit",
    delete: "Delete",
    pinTitle: "Confirm password",
    pinDescription: "Enter the four digits set for this post.",
    confirm: "Confirm",
    wrongPin: "The password does not match.",
    invalidPin: "Enter four digits.",
    deleted: "The post was deleted.",
    saved: "The post was saved.",
    noResults: "No matching avatars found.",
  },
} as const;

type PinAction = { postId: string; action: "edit" | "delete" } | null;

async function hashPin(postId: string, pin: string) {
  const data = new TextEncoder().encode(`${postId}:${pin}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function authorInitial(name: string) {
  return name.trim().slice(0, 1).toUpperCase() || "K";
}

function assetUrl(path: string) {
  if (/^https?:\/\//i.test(path) || path.startsWith("data:")) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

function clipboardImages(event: ClipboardEvent<HTMLElement>) {
  const itemFiles = Array.from(event.clipboardData.items)
    .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
    .map((item) => item.getAsFile())
    .filter((file): file is File => Boolean(file));
  if (itemFiles.length) return itemFiles;
  return Array.from(event.clipboardData.files).filter((file) => file.type.startsWith("image/"));
}

function parseAvatarAliases(value: string, primaryName: string) {
  const primary = primaryName.trim().toLocaleLowerCase();
  return Array.from(
    new Set(
      value
        .split(/[,\n]/)
        .map((name) => name.trim())
        .filter((name) => name && name.toLocaleLowerCase() !== primary),
    ),
  ).slice(0, 12);
}

function AvatarVisual({ avatar }: { avatar: CommunityAvatar }) {
  if (avatar.image) {
    return <img src={assetUrl(avatar.image)} alt={`${avatar.name} preview`} loading="lazy" style={{ objectPosition: avatar.imagePosition }} />;
  }

  return (
    <div className="community-platform-placeholder" data-platform={avatar.platform ?? "Other"}>
      <span>{avatar.platform ?? "Avatar"}</span>
      <strong>{avatar.name}</strong>
    </div>
  );
}

function detectProductPlatform(value: string): CommunityAvatar["platform"] | null {
  try {
    const hostname = new URL(value).hostname.toLowerCase().replace(/^www\./, "");
    if (hostname === "booth.pm" || hostname.endsWith(".booth.pm")) return "Booth";
    if (hostname === "gumroad.com" || hostname.endsWith(".gumroad.com")) return "Gumroad";
    if (hostname === "jinxxy.com" || hostname.endsWith(".jinxxy.com")) return "Jinxxy";
    return "Other";
  } catch {
    return null;
  }
}

function prepareLocalImage(file: File) {
  if (!file.type.startsWith("image/")) return Promise.reject(new Error("type"));
  if (file.size > 20 * 1024 * 1024) return Promise.reject(new Error("size"));

  return new Promise<string>((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    const cleanup = () => URL.revokeObjectURL(objectUrl);
    const render = (maxEdge: number, quality: number) => {
      const scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext("2d");
      if (!context) throw new Error("read");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL("image/webp", quality);
    };

    image.onload = () => {
      try {
        let dataUrl = render(1400, 0.78);
        if (dataUrl.length > 320_000) dataUrl = render(900, 0.64);
        if (dataUrl.length > 460_000) throw new Error("size");
        resolve(dataUrl);
      } catch (error) {
        reject(error);
      } finally {
        cleanup();
      }
    };
    image.onerror = () => {
      cleanup();
      reject(new Error("read"));
    };
    image.src = objectUrl;
  });
}

export function CommunityReviewsExplorer({ lang }: { lang: Language }) {
  const copy = COPY[lang];
  const rootRef = useRef<HTMLDivElement>(null);
  const recentRailRef = useRef<HTMLDivElement>(null);
  const [avatars, setAvatars] = useState<CommunityAvatar[]>(COMMUNITY_AVATARS);
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);
  const [storageReady, setStorageReady] = useState(false);
  const [selectedAvatarId, setSelectedAvatarId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isComposing, setIsComposing] = useState(false);
  const [editingPost, setEditingPost] = useState<CommunityPost | null>(null);
  const [query, setQuery] = useState("");
  const [pinAction, setPinAction] = useState<PinAction>(null);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [notice, setNotice] = useState("");
  const [coverAttachment, setCoverAttachment] = useState("");
  const [extraAttachments, setExtraAttachments] = useState<string[]>([]);
  const [attachmentError, setAttachmentError] = useState("");
  const [isAddingAvatar, setIsAddingAvatar] = useState(false);
  const [avatarProductUrl, setAvatarProductUrl] = useState("");
  const [avatarThumbnail, setAvatarThumbnail] = useState("");

  const selectedAvatar = avatars.find((avatar) => avatar.id === selectedAvatarId) ?? null;
  const selectedPost = posts.find((post) => post.id === selectedPostId) ?? null;
  const detectedProductPlatform = useMemo(() => detectProductPlatform(avatarProductUrl), [avatarProductUrl]);
  const avatarPosts = useMemo(
    () => posts.filter((post) => post.targetAvatarId === selectedAvatarId),
    [posts, selectedAvatarId],
  );
  const filteredAvatars = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return avatars;
    return avatars.filter((avatar) =>
      [avatar.name, avatar.nativeName, avatar.maker, ...(avatar.aliases ?? [])]
        .some((value) => value.toLocaleLowerCase().includes(normalized)),
    );
  }, [avatars, query]);

  useEffect(() => {
    let savedPosts: CommunityPost[] | null = null;
    let savedAvatarList: CommunityAvatar[] | null = null;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) savedPosts = JSON.parse(saved) as CommunityPost[];
      const savedAvatars = localStorage.getItem(AVATAR_STORAGE_KEY);
      if (savedAvatars) savedAvatarList = JSON.parse(savedAvatars) as CommunityAvatar[];
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(AVATAR_STORAGE_KEY);
    }

    const applyLocation = () => {
      const params = new URLSearchParams(window.location.search);
      const avatar = params.get("avatar");
      const post = params.get("post");
      setSelectedAvatarId(avatar);
      setSelectedPostId(post);
      setIsComposing(params.get("compose") === "1");
    };
    queueMicrotask(() => {
      if (savedPosts) setPosts(savedPosts);
      if (savedAvatarList) setAvatars(savedAvatarList);
      setStorageReady(true);
      applyLocation();
    });
    window.addEventListener("popstate", applyLocation);
    return () => window.removeEventListener("popstate", applyLocation);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
      localStorage.setItem(AVATAR_STORAGE_KEY, JSON.stringify(avatars));
    } catch {
      queueMicrotask(() => setNotice(copy.storageFull));
    }
  }, [avatars, copy.storageFull, posts, storageReady]);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 3200);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".community-avatar-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: (index % 3) * 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          },
        );
        const image = card.querySelector("img");
        if (image) {
          gsap.fromTo(
            image,
            { scale: 0.88, opacity: 0.72 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 0.8 },
            },
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".community-post-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 72, scale: 0.96, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: Math.min(index * 0.06, 0.3),
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          },
        );
      });
    },
    { scope: rootRef, dependencies: [selectedAvatarId, selectedPostId, isComposing, posts.length], revertOnUpdate: true },
  );

  function updateLocation(avatarId: string | null, postId: string | null, compose = false) {
    const url = new URL(window.location.href);
    if (avatarId) url.searchParams.set("avatar", avatarId); else url.searchParams.delete("avatar");
    if (postId) url.searchParams.set("post", postId); else url.searchParams.delete("post");
    if (compose) url.searchParams.set("compose", "1"); else url.searchParams.delete("compose");
    window.history.pushState({}, "", url);
    setSelectedAvatarId(avatarId);
    setSelectedPostId(postId);
    setIsComposing(compose);
    setIsAddingAvatar(false);
    if (!compose) setEditingPost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openComposer(avatarId = selectedAvatarId) {
    setEditingPost(null);
    setCoverAttachment("");
    setExtraAttachments([]);
    setAttachmentError("");
    setIsAddingAvatar(false);
    updateLocation(avatarId, null, true);
  }

  function openPost(post: CommunityPost) {
    updateLocation(post.targetAvatarId, post.id);
  }

  function moveRecent(direction: -1 | 1) {
    recentRailRef.current?.scrollBy({ left: direction * 390, behavior: "smooth" });
  }

  function changeAvatarProductUrl(value: string) {
    setAvatarProductUrl(value);
  }

  function attachmentMessage(error: unknown) {
    return error instanceof Error && error.message === "type" ? copy.imageTypeError : copy.imageSizeError;
  }

  async function attachCoverImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setAttachmentError("");
    try {
      setCoverAttachment(await prepareLocalImage(file));
    } catch (error) {
      setAttachmentError(attachmentMessage(error));
    }
  }

  async function attachBodyImages(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;
    if (extraAttachments.length + files.length > MAX_EXTRA_IMAGES) {
      setAttachmentError(copy.imageCountError);
      return;
    }
    setAttachmentError("");
    try {
      const prepared = await Promise.all(files.map(prepareLocalImage));
      setExtraAttachments((current) => [...current, ...prepared].slice(0, MAX_EXTRA_IMAGES));
    } catch (error) {
      setAttachmentError(attachmentMessage(error));
    }
  }

  async function attachAvatarThumbnail(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setAttachmentError("");
    try {
      setAvatarThumbnail(await prepareLocalImage(file));
    } catch (error) {
      setAttachmentError(attachmentMessage(error));
    }
  }

  async function pasteAvatarThumbnail(event: ClipboardEvent<HTMLElement>) {
    const file = clipboardImages(event)[0];
    if (!file) return;
    event.preventDefault();
    setAttachmentError("");
    try {
      setAvatarThumbnail(await prepareLocalImage(file));
    } catch (error) {
      setAttachmentError(attachmentMessage(error));
    }
  }

  async function pastePostImages(event: ClipboardEvent<HTMLElement>) {
    const files = clipboardImages(event);
    if (!files.length) return;
    event.preventDefault();

    const needsCover = !coverAttachment;
    const availableBodySlots = Math.max(0, MAX_EXTRA_IMAGES - extraAttachments.length);
    const capacity = (needsCover ? 1 : 0) + availableBodySlots;
    if (capacity === 0) {
      setAttachmentError(copy.imageCountError);
      return;
    }

    setAttachmentError("");
    try {
      const prepared = await Promise.all(files.slice(0, capacity).map(prepareLocalImage));
      const bodyImages = needsCover ? prepared.slice(1) : prepared;
      if (needsCover && prepared[0]) setCoverAttachment(prepared[0]);
      if (bodyImages.length) {
        setExtraAttachments((current) => [...current, ...bodyImages].slice(0, MAX_EXTRA_IMAGES));
      }
      if (files.length > capacity) setAttachmentError(copy.imageCountError);
    } catch (error) {
      setAttachmentError(attachmentMessage(error));
    }
  }

  function saveAvatar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const productUrl = String(form.get("productUrl") || "").trim();
    const platform = detectProductPlatform(productUrl);
    if (!platform || platform === "Other") {
      setAttachmentError(copy.invalidProductUrl);
      return;
    }
    const name = String(form.get("avatarName") || "").trim();
    const aliases = parseAvatarAliases(String(form.get("nativeNames") || ""), name);
    const avatar: CommunityAvatar = {
      id: `local-avatar-${Date.now()}`,
      name,
      nativeName: aliases[0] || name,
      aliases,
      maker: String(form.get("maker") || "").trim(),
      description: String(form.get("description") || "").trim() || `${name} Target Avatar user notes.`,
      image: avatarThumbnail,
      imagePosition: "50% 50%",
      postCount: 0,
      tipCount: 0,
      productUrl,
      platform,
      isLocal: true,
    };
    setAvatars((current) => [avatar, ...current]);
    setAvatarProductUrl("");
    setAvatarThumbnail("");
    setAttachmentError("");
    setIsAddingAvatar(false);
    setNotice(copy.avatarSaved);
    updateLocation(avatar.id, null);
  }

  async function savePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const targetAvatarId = String(form.get("targetAvatarId"));
    const coverImageUrl = String(form.get("coverImageUrl") || "").trim();
    const extraImageUrl = String(form.get("extraImageUrl") || "").trim();
    const coverImage = coverAttachment || coverImageUrl ||
      avatars.find((avatar) => avatar.id === targetAvatarId)?.image || "/assets/brand/kisetter-thumbnail.png";
    const images = [...extraAttachments, ...(extraImageUrl ? [extraImageUrl] : [])].slice(0, MAX_EXTRA_IMAGES);
    const summary = String(form.get("summary")).trim();
    const body = String(form.get("body")).trim();

    if (editingPost) {
      const updated: CommunityPost = {
        ...editingPost,
        targetAvatarId,
        type: String(form.get("type")) as "review" | "tip",
        title: String(form.get("title")).trim(),
        sourceAvatar: String(form.get("sourceAvatar")).trim(),
        author: String(form.get("author")).trim(),
        summary,
        body,
        coverImage,
        images,
      };
      setPosts((current) => current.map((post) => (post.id === updated.id ? updated : post)));
      setNotice(copy.saved);
      setEditingPost(null);
      updateLocation(updated.targetAvatarId, updated.id);
      return;
    }

    const rawPin = String(form.get("pin"));
    if (!/^\d{4}$/.test(rawPin)) {
      setNotice(copy.invalidPin);
      return;
    }
    const id = `local-${Date.now()}`;
    const newPost: CommunityPost = {
      id,
      targetAvatarId,
      type: String(form.get("type")) as "review" | "tip",
      title: String(form.get("title")).trim(),
      sourceAvatar: String(form.get("sourceAvatar")).trim(),
      author: String(form.get("author")).trim(),
      summary,
      body,
      coverImage,
      images,
      createdAt: new Date().toISOString().slice(0, 10),
      helpful: 0,
      pinHash: await hashPin(id, rawPin),
      isLocal: true,
    };
    setPosts((current) => [newPost, ...current]);
    setNotice(copy.saved);
    updateLocation(targetAvatarId, id);
  }

  function requestPin(postId: string, action: "edit" | "delete") {
    setPin("");
    setPinError("");
    setPinAction({ postId, action });
  }

  async function confirmPin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!pinAction || !/^\d{4}$/.test(pin)) {
      setPinError(copy.invalidPin);
      return;
    }
    const post = posts.find((item) => item.id === pinAction.postId);
    if (!post) return;
    const expected = post.pinHash ?? (await hashPin(post.id, "1234"));
    if ((await hashPin(post.id, pin)) !== expected) {
      setPinError(copy.wrongPin);
      return;
    }
    if (pinAction.action === "delete") {
      setPosts((current) => current.filter((item) => item.id !== post.id));
      setPinAction(null);
      setNotice(copy.deleted);
      updateLocation(post.targetAvatarId, null);
      return;
    }
    setEditingPost(post);
    setCoverAttachment(post.coverImage);
    setExtraAttachments(post.images);
    setAttachmentError("");
    setPinAction(null);
    updateLocation(post.targetAvatarId, null, true);
  }

  return (
    <div className="community-explorer" ref={rootRef}>
      {notice && <div className="community-toast" role="status">{notice}</div>}

      {!selectedAvatar && !isComposing && !isAddingAvatar && (
        <>
          <div className="community-reviews-heading">
            <div>
              <p>{copy.eyebrow}</p>
              <h1>
                {copy.titleBefore}
                <span className="community-inline-avatars" aria-hidden="true">
                  {avatars.filter((avatar) => avatar.image).slice(0, 3).map((avatar) => (
                    <img src={assetUrl(avatar.image)} alt="" key={avatar.id} />
                  ))}
                </span>
                {copy.titleAfter}
              </h1>
            </div>
            <p>{copy.description}</p>
          </div>

          <div className="community-booth-note">
            <span>Shop link</span>
            <p>{copy.boothNote}</p>
          </div>

          <div className="community-grid-toolbar">
            <label>
              <span className="sr-only">{copy.search}</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.search} />
            </label>
            <div className="community-toolbar-actions">
              <button type="button" className="community-secondary-button" onClick={() => { setAttachmentError(""); setIsAddingAvatar(true); }}>{copy.addAvatar}</button>
              <button type="button" className="community-primary-button" onClick={() => openComposer()}>{copy.write}</button>
            </div>
          </div>

          {filteredAvatars.length > 0 ? (
            <section className="community-avatar-grid" aria-label={copy.titleAfter}>
              {filteredAvatars.map((avatar) => {
                const related = posts.filter((post) => post.targetAvatarId === avatar.id);
                const tipCount = related.filter((post) => post.type === "tip").length;
                return (
                  <button className="community-avatar-card" type="button" onClick={() => updateLocation(avatar.id, null)} key={avatar.id}>
                    <div className="community-avatar-media">
                      <AvatarVisual avatar={avatar} />
                       {avatar.nativeName !== avatar.name && <span>{avatar.aliases?.[0] ?? avatar.nativeName}</span>}
                    </div>
                    <div className="community-avatar-copy">
                      <div><span>{avatar.platform ? `${avatar.platform} · ${avatar.maker}` : avatar.maker}</span><h2>{avatar.name}</h2></div>
                      <p>{avatar.description}</p>
                      <footer>
                        <span>{copy.posts} {related.length}</span>
                        <span>{copy.tip} {tipCount}</span>
                        <strong>{copy.open}</strong>
                      </footer>
                    </div>
                  </button>
                );
              })}
            </section>
          ) : <p className="community-empty">{copy.noResults}</p>}

          <section className="community-recent-section">
            <header>
              <div><h2>{copy.recent}</h2><p>{copy.recentDescription}</p></div>
              <div>
                <button type="button" onClick={() => moveRecent(-1)} aria-label="Previous">←</button>
                <button type="button" onClick={() => moveRecent(1)} aria-label="Next">→</button>
              </div>
            </header>
            <div className="community-recent-rail" ref={recentRailRef}>
              {posts.slice(0, 6).map((post) => {
                const avatar = avatars.find((item) => item.id === post.targetAvatarId);
                return (
                  <button type="button" onClick={() => openPost(post)} key={post.id}>
                    <img src={assetUrl(post.coverImage)} alt="" />
                    <span>{post.type === "tip" ? copy.tip : copy.review}</span>
                    <h3>{post.title}</h3>
                    <p>{copy.source} {post.sourceAvatar} · {avatar?.name}</p>
                  </button>
                );
              })}
            </div>
          </section>
        </>
      )}

      {isAddingAvatar && (
        <section className="community-composer community-avatar-composer" onPaste={pasteAvatarThumbnail}>
          <button type="button" className="community-back-button" onClick={() => setIsAddingAvatar(false)}>← {copy.backToAvatars}</button>
          <header><span>{copy.eyebrow}</span><h1>{copy.addAvatarTitle}</h1><p>{copy.addAvatarDescription}</p></header>
          <form onSubmit={saveAvatar}>
            <label>
              <span>{copy.productUrlLabel}</span>
              <div className="community-product-url-field">
                <input name="productUrl" type="url" value={avatarProductUrl} onChange={(event) => changeAvatarProductUrl(event.target.value)} placeholder="https://booth.pm/..." required />
                <strong data-platform={detectedProductPlatform ?? ""}>{detectedProductPlatform ?? "—"}</strong>
              </div>
              <small>{copy.productUrlHint} · {copy.productPlatform}: {detectedProductPlatform ?? "—"}</small>
            </label>
            <label><span>{copy.avatarNameLabel}</span><input name="avatarName" maxLength={50} required /></label>
            <label>
              <span>{copy.nativeNameLabel}</span>
              <textarea name="nativeNames" rows={3} maxLength={240} placeholder={copy.nativeNamePlaceholder} />
              <small>{copy.nativeNameHint}</small>
            </label>
            <label><span>{copy.makerLabel}</span><input name="maker" maxLength={60} required /></label>
            <label><span>{copy.avatarDescriptionLabel}</span><textarea name="description" rows={3} maxLength={180} /></label>
            <fieldset className="community-media-uploader community-avatar-uploader">
              <legend>{copy.avatarThumbnailLabel}</legend>
              <p>{copy.avatarThumbnailDescription}</p>
              {avatarThumbnail ? (
                <div className="community-cover-preview">
                  <img src={avatarThumbnail} alt="" />
                  <button type="button" onClick={() => setAvatarThumbnail("")}>{copy.removeImage}</button>
                </div>
              ) : detectedProductPlatform && detectedProductPlatform !== "Other" ? (
                <div className="community-cover-preview" aria-hidden="true"><div className="community-platform-placeholder" data-platform={detectedProductPlatform}><span>{detectedProductPlatform}</span><strong>{copy.defaultThumbnail}</strong></div></div>
              ) : <div className="community-empty-preview" aria-hidden="true"><span>IMAGE</span></div>}
              <label className="community-upload-button">
                <span>{avatarThumbnail ? copy.replaceImage : copy.attachImage}</span>
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={attachAvatarThumbnail} />
              </label>
              <small>{copy.imageHint}</small>
            </fieldset>
            {attachmentError && <p className="community-attachment-error" role="alert">{attachmentError}</p>}
            <div className="community-form-actions"><button type="button" onClick={() => setIsAddingAvatar(false)}>{copy.cancel}</button><button type="submit" className="community-primary-button">{copy.saveAvatar}</button></div>
          </form>
        </section>
      )}

      {selectedAvatar && !selectedPost && !isComposing && (
        <section className="community-avatar-detail">
          <button type="button" className="community-back-button" onClick={() => updateLocation(null, null)}>← {copy.backToAvatars}</button>
          <header className="community-avatar-detail-hero">
            <div className="community-avatar-detail-image">
              <AvatarVisual avatar={selectedAvatar} />
            </div>
            <div>
              <span>{selectedAvatar.maker}</span>
              <h1>
                {selectedAvatar.name}
                {(selectedAvatar.aliases?.length || selectedAvatar.nativeName !== selectedAvatar.name) && (
                  <small>{selectedAvatar.aliases?.length ? selectedAvatar.aliases.join(" · ") : selectedAvatar.nativeName}</small>
                )}
              </h1>
              <p>{selectedAvatar.description}</p>
              {selectedAvatar.productUrl && <a className="community-product-link" href={selectedAvatar.productUrl} target="_blank" rel="noreferrer"><span>{selectedAvatar.platform}</span>{copy.productLink}</a>}
              <dl>
                <div><dt>{copy.posts}</dt><dd>{avatarPosts.length}</dd></div>
                <div><dt>{copy.tip}</dt><dd>{avatarPosts.filter((post) => post.type === "tip").length}</dd></div>
              </dl>
              <button type="button" className="community-primary-button" onClick={() => openComposer(selectedAvatar.id)}>{copy.write}</button>
            </div>
          </header>

          <div className="community-local-notice">{copy.draftNotice}</div>

          <div className="community-post-list">
            {avatarPosts.length > 0 ? avatarPosts.map((post, index) => (
              <button
                type="button"
                className="community-post-card"
                data-community-stack
                style={{ "--stack-index": index } as CSSProperties}
                onClick={() => openPost(post)}
                key={post.id}
              >
                <div className="community-post-card-copy">
                  <div className="community-post-card-meta">
                    <span className="community-author-mark">{authorInitial(post.author)}</span>
                    <strong>{post.author}</strong>
                    <span>{post.createdAt}</span>
                  </div>
                  <span className="community-post-type">{post.type === "tip" ? copy.tip : copy.review}</span>
                  <h2>{post.title}</h2>
                  <p className="community-post-source">{copy.source} <strong>{post.sourceAvatar}</strong></p>
                  <p>{post.summary}</p>
                </div>
                <div className="community-post-card-media"><img src={assetUrl(post.coverImage)} alt="" /></div>
              </button>
            )) : <p className="community-empty">{copy.empty}</p>}
          </div>
        </section>
      )}

      {selectedAvatar && selectedPost && !isComposing && (
        <article className="community-post-detail">
          <button type="button" className="community-back-button" onClick={() => updateLocation(selectedAvatar.id, null)}>← {copy.backToPosts}</button>
          <header>
            <div className="community-post-detail-meta">
              <span>{selectedPost.type === "tip" ? copy.tip : copy.review}</span>
              <span>{selectedPost.createdAt}</span>
            </div>
            <h1>{selectedPost.title}</h1>
            <div className="community-transfer-route">
              <div><span>{copy.source}</span><strong>{selectedPost.sourceAvatar}</strong></div>
              <i aria-hidden="true">→</i>
              <div><span>{copy.target}</span><strong>{selectedAvatar.name}</strong></div>
            </div>
            <div className="community-post-author">
              <span className="community-author-mark">{authorInitial(selectedPost.author)}</span>
              <div><small>Written by</small><strong>{selectedPost.author}</strong></div>
            </div>
          </header>
          <div className="community-post-hero-image"><img src={assetUrl(selectedPost.coverImage)} alt="" /></div>
          <div className="community-post-body">
            {selectedPost.body.split(/\n{2,}/).map((paragraph, index) => <p key={`${selectedPost.id}-${index}`}>{paragraph}</p>)}
            {selectedPost.images.map((image, index) => (
              <figure key={`${image}-${index}`}><img src={assetUrl(image)} alt="" /><figcaption>{copy.target} · {selectedAvatar.name}</figcaption></figure>
            ))}
          </div>
          <footer className="community-post-actions">
            <span>{copy.helpful} {selectedPost.helpful}</span>
            <div>
              <button type="button" onClick={() => requestPin(selectedPost.id, "edit")}>{copy.edit}</button>
              <button type="button" className="is-danger" onClick={() => requestPin(selectedPost.id, "delete")}>{copy.delete}</button>
            </div>
          </footer>
        </article>
      )}

      {isComposing && (
        <section className="community-composer" onPaste={pastePostImages}>
          <button type="button" className="community-back-button" onClick={() => updateLocation(selectedAvatarId, null)}>← {selectedAvatarId ? copy.backToPosts : copy.backToAvatars}</button>
          <header><span>{copy.eyebrow}</span><h1>{editingPost ? copy.editTitle : copy.formTitle}</h1><p>{copy.formDescription}</p></header>
          <form onSubmit={savePost}>
            <div className="community-form-row">
              <label><span>{copy.targetLabel}</span><select name="targetAvatarId" defaultValue={editingPost?.targetAvatarId ?? selectedAvatarId ?? avatars[0]?.id} required>{avatars.map((avatar) => <option value={avatar.id} key={avatar.id}>{avatar.name} · {avatar.nativeName}</option>)}</select></label>
              <label><span>{copy.typeLabel}</span><select name="type" defaultValue={editingPost?.type ?? "review"} required><option value="review">{copy.review}</option><option value="tip">{copy.tip}</option></select></label>
            </div>
            <label><span>{copy.titleLabel}</span><input name="title" defaultValue={editingPost?.title} maxLength={90} required /></label>
            <div className="community-form-row">
              <label><span>{copy.sourceLabel}</span><input name="sourceAvatar" defaultValue={editingPost?.sourceAvatar} required /></label>
              <label><span>{copy.authorLabel}</span><input name="author" defaultValue={editingPost?.author} maxLength={30} required /></label>
            </div>
            <label><span>{copy.summaryLabel}</span><textarea name="summary" defaultValue={editingPost?.summary} rows={3} maxLength={180} required /></label>
            <label><span>{copy.bodyLabel}</span><textarea name="body" defaultValue={editingPost?.body} rows={10} required /></label>
            <fieldset className="community-media-uploader">
              <legend>{copy.mediaLabel}</legend>
              <p>{copy.mediaDescription}</p>
              <div className="community-media-columns">
                <div>
                  <strong>{copy.coverImageLabel}</strong>
                  {coverAttachment ? (
                    <div className="community-cover-preview">
                      <img src={assetUrl(coverAttachment)} alt="" />
                      <button type="button" onClick={() => setCoverAttachment("")}>{copy.removeImage}</button>
                    </div>
                  ) : <div className="community-empty-preview" aria-hidden="true"><span>COVER</span></div>}
                  <label className="community-upload-button">
                    <span>{coverAttachment ? copy.replaceImage : copy.attachImage}</span>
                    <input type="file" accept="image/jpeg,image/png,image/webp" onChange={attachCoverImage} />
                  </label>
                  <details className="community-url-option"><summary>{copy.urlOption}</summary><input name="coverImageUrl" type="url" placeholder="https://..." /></details>
                </div>
                <div>
                  <strong>{copy.extraImageLabel}</strong>
                  <div className="community-extra-previews">
                    {extraAttachments.map((image, index) => (
                      <div key={`${image.slice(0, 40)}-${index}`}>
                        <img src={assetUrl(image)} alt="" />
                        <button type="button" aria-label={copy.removeImage} onClick={() => setExtraAttachments((current) => current.filter((_, itemIndex) => itemIndex !== index))}>×</button>
                      </div>
                    ))}
                    {extraAttachments.length === 0 && <div className="community-empty-preview" aria-hidden="true"><span>BODY</span></div>}
                  </div>
                  <label className="community-upload-button">
                    <span>{copy.attachMoreImages}</span>
                    <input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={attachBodyImages} />
                  </label>
                  <details className="community-url-option"><summary>{copy.urlOption}</summary><input name="extraImageUrl" type="url" placeholder="https://..." /></details>
                </div>
              </div>
              <small>{copy.imageHint}</small>
              {attachmentError && <p className="community-attachment-error" role="alert">{attachmentError}</p>}
            </fieldset>
            {!editingPost && <label><span>{copy.pinLabel}</span><input className="community-pin-input" name="pin" inputMode="numeric" pattern="[0-9]{4}" minLength={4} maxLength={4} autoComplete="new-password" required /><small>{copy.pinHint}</small></label>}
            <div className="community-form-actions"><button type="button" onClick={() => updateLocation(selectedAvatarId, null)}>{copy.cancel}</button><button type="submit" className="community-primary-button">{editingPost ? copy.save : copy.publish}</button></div>
          </form>
        </section>
      )}

      {pinAction && (
        <div className="community-pin-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setPinAction(null); }}>
          <form className="community-pin-dialog" onSubmit={confirmPin} role="dialog" aria-modal="true" aria-labelledby="pin-dialog-title">
            <span>{pinAction.action === "delete" ? copy.delete : copy.edit}</span>
            <h2 id="pin-dialog-title">{copy.pinTitle}</h2>
            <p>{copy.pinDescription}</p>
            <input value={pin} onChange={(event) => setPin(event.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" pattern="[0-9]{4}" maxLength={4} autoFocus />
            {pinError && <small role="alert">{pinError}</small>}
            <div><button type="button" onClick={() => setPinAction(null)}>{copy.cancel}</button><button type="submit" className="community-primary-button">{copy.confirm}</button></div>
          </form>
        </div>
      )}
    </div>
  );
}
