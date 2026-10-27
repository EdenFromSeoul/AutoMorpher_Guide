import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Run after a production build, passing the same base path used for that build.
const basePath = (process.argv[2] ?? "").replace(/\/$/, "");
const output = path.resolve("out");
const readPage = (lang, slug) => fs.readFileSync(path.join(output, lang, "docs", slug, "index.html"), "utf8");
const sitemap = fs.readFileSync(path.join(output, "sitemap.xml"), "utf8");
const languages = ["ko", "ja", "en"];
const copy = {
  ko: {
    title: "프리셋 사용 가이드",
    note: "선택 사항 · 프리셋 사용",
    loadHeading: "3. Preset 적용하기",
    flow: {"prepare": "## 2. Preset 준비하기", "import": "### 2-1. Preset 불러오기", "create": "### 2-2. Preset 직접 만들기", "edit": "#### 직접 조정해서 만들기", "save": "#### 직전 변형에 사용한 값으로 만들기", "apply": "## 3. Preset 적용하기", "share": "## 4. Preset 내보내기·공유하기"},
    finishId: "편집을-마치거나-취소하기",
    namesId: "저장-이름과-위치",
    videoTitle: "프리셋 사용 가이드 영상",
    guidelines: "포스트 가이드라인",
    visibleText: ["적용 안내를 확인해 주세요", "현재 화면의 값이 아니라 직전 변형에 사용한 값을 저장합니다", "만족스러운 변환 결과를 얻었다면"],
    aliases: {
      "완료한-변형값으로-만들기": "직전-변형에-사용한-값으로-만들기",
      "2-프리셋-불러오기": "2-1-preset-불러오기",
      "2-프리셋-불러와-사용하기": "2-1-preset-불러오기",
      "불러와-적용하기": "3-preset-적용하기",
      "3-직전-변형값을-프리셋으로-저장하기": "직전-변형에-사용한-값으로-만들기",
      "4-새-프리셋-만들기-기존-프리셋-편집하기": "2-2-preset-직접-만들기",
      "5-적용-전-상태로-되돌리기": "preset-restore",
      "6-저장되는-내용과-주의-사항": "preset-contents",
      "7-버튼이-비활성화되거나-목록에-보이지-않는-경우": "5-문제-해결",
      "8-프리셋-내보내기": "preset-share",
      "9-프리셋-추가하기": "preset-download",
      "2-프리셋-파일-추가하기": "2-1-preset-불러오기",
      "프리셋-적용하기": "3-preset-적용하기",
      "3-내-프리셋-저장-공유하기": "4-preset-내보내기-공유하기",
      "4-프리셋-만들기-편집하기": "2-2-preset-직접-만들기",
    },
    labels: ["불러오기", "적용하기", "직전 변형값을 프리셋으로 저장", "새 프리셋 만들기", "불러온 프리셋 편집", "적용 전으로 되돌리기", "가슴 조정 표시", "신체 관통 보정 횟수"],
  },
  ja: {
    title: "プリセット使用ガイド",
    note: "任意 · プリセットを使用する",
    loadHeading: "3. プリセットを適用する",
    flow: {"prepare": "## 2. プリセットを準備する", "import": "### 2-1. プリセットを読み込む", "create": "### 2-2. プリセットを自分で作る", "edit": "#### 自分で調整して作る", "save": "#### 直前の変形に使用した値から作る", "apply": "## 3. プリセットを適用する", "share": "## 4. プリセットを書き出して共有する"},
    finishId: "編集を終了-キャンセルする",
    namesId: "保存名と保存先",
    videoTitle: "プリセット使用ガイド動画",
    guidelines: "投稿ガイドライン",
    visibleText: ["適用時のメッセージを確認してください", "現在の値ではなく、直前の変形に使用した値を保存します", "満足のいく変換結果が得られたら"],
    aliases: {
      "完了した変形の設定から作る": "直前の変形に使用した値から作る",
      "2-プリセットを読み込む": "2-1-プリセットを読み込む",
      "2-プリセットを読み込んで使う": "2-1-プリセットを読み込む",
      "読み込んで適用する": "3-プリセットを適用する",
      "3-直前の変形に使った設定をプリセットとして保存する": "直前の変形に使用した値から作る",
      "4-新しいプリセットを作成する-既存のプリセットを編集する": "2-2-プリセットを自分で作る",
      "5-適用前の状態に戻す": "preset-restore",
      "6-保存される内容と注意事項": "preset-contents",
      "7-ボタンが無効-プリセットが一覧に表示されない場合": "5-トラブルシューティング",
      "8-プリセットを書き出す": "preset-share",
      "9-プリセットを追加する": "preset-download",
      "2-プリセットファイルを追加する": "2-1-プリセットを読み込む",
      "プリセットを適用する": "3-プリセットを適用する",
      "3-プリセットを保存-共有する": "4-プリセットを書き出して共有する",
      "4-プリセットを作成-編集する": "2-2-プリセットを自分で作る",
    },
    labels: ["読み込み", "適用", "直前の変形をプリセット保存", "新しいプリセットを作成", "読み込んだプリセットを編集", "適用前に戻す", "元のアバター名", "対象のアバター名", "胸調整を表示", "身体との貫通補正回数", "保存して戻る", "保存せずに戻る", "編集を続ける"],
  },
  en: {
    title: "Preset Guide",
    note: "Optional · Use a preset",
    loadHeading: "3. Apply a preset",
    flow: {"prepare": "## 2. Prepare a preset", "import": "### 2-1. Import a preset", "create": "### 2-2. Create your own preset", "edit": "#### Create by adjusting the settings", "save": "#### Create from the last conversion settings", "apply": "## 3. Apply a preset", "share": "## 4. Export and share presets"},
    finishId: "finish-or-cancel-editing",
    namesId: "preset-names-and-save-location",
    videoTitle: "Preset guide video",
    guidelines: "post guidelines",
    visibleText: ["Check any messages shown when applying a preset", "Saves the settings from the last conversion, not the current values", "Got a conversion result you are happy with?"],
    aliases: {
      "create-from-a-completed-conversion": "create-from-the-last-conversion-settings",
      "2-load-a-preset": "2-1-import-a-preset",
      "2-load-and-use-presets": "2-1-import-a-preset",
      "load-and-apply": "3-apply-a-preset",
      "3-save-the-last-conversion-as-a-preset": "create-from-the-last-conversion-settings",
      "4-create-a-new-preset-or-edit-an-existing-one": "2-2-create-your-own-preset",
      "5-restore-the-state-before-applying-a-preset": "preset-restore",
      "6-what-presets-save-and-important-notes": "preset-contents",
      "7-unavailable-buttons-or-missing-presets": "5-troubleshooting",
      "8-export-presets": "preset-share",
      "9-add-presets": "preset-download",
      "2-add-preset-files": "2-1-import-a-preset",
      "apply-a-preset": "3-apply-a-preset",
      "3-save-and-share-your-presets": "4-export-and-share-presets",
      "4-create-and-edit-presets": "2-2-create-your-own-preset",
    },
    labels: ["Load", "Apply", "Save Last Conversion as Preset", "Create New Preset", "Edit Loaded Preset", "Restore Previous", "Source Avatar Name", "Target Avatar Name", "Breast Guides", "Body Penetration Correction Iterations", "Save and Return", "Return Without Saving", "Continue Editing"],
  },
};
const presetEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map((match) => match[1]).filter((entry) => entry.includes("/docs/presets/"));
assert.equal(presetEntries.length, languages.length, "Each language needs a preset sitemap entry");
let koreanLayout;

for (const lang of languages) {
  const preset = readPage(lang, "presets");
  const presetPath = `${basePath}/${lang}/docs/presets/`;
  const article = preset.match(/<div class="doc-content" data-doc-slug="presets">([\s\S]*?)<nav class="doc-pagination"/)?.[1];
  assert.ok(article, `${lang}: Missing preset article`);
  assert.ok(!article.includes("**"), `${lang}: Unrendered Markdown emphasis in article`);
  assert.ok(preset.includes(`<h1>${copy[lang].title}</h1>`), `${lang}: Missing localized title`);
  for (const label of copy[lang].labels) {
    assert.ok(article.includes(label), `${lang}: Missing documented UI label: ${label}`);
  }
  const fileLabels = {
    ko: ["Preset 선택하기", "프리셋 파일로 불러오기 / 내보내기", "이름 바꿔서 저장하기"],
    ja: ["プリセットを選択", "プリセットファイルの読み込み / 書き出し", "名前を変更して保存"],
    en: ["Select Preset", "Import / Export Preset Files", "Save with a different name"],
  };
  for (const label of fileLabels[lang]) {
    assert.ok(article.includes(label), `${lang}: Missing file-transfer UI label: ${label}`);
  }
  if (lang !== "ko") {
    assert.ok(!/[\uac00-\ud7a3]/u.test(article.replace(/<[^>]*>/g, "")), `${lang}: Korean text remains in the translated article`);
  }

  // Every language follows the Korean guide's task-oriented structure.
  const source = fs.readFileSync(path.resolve("content", lang, "presets.md"), "utf8").replace(/\r\n/g, "\n");
  assert.deepEqual([...source.matchAll(/^## (\d+)\./gm)].map((match) => Number(match[1])), [1, 2, 3, 4, 5]);
  const detailsCount = 22;
  assert.equal((article.match(/<details\b/g) ?? []).length, detailsCount, `${lang}: Incorrect number of disclosures`);
  const openDetails = [...article.matchAll(/<details\b[^>]*>/g)]
    .map(([tag]) => tag).filter((tag) => /\sopen(?:\s|=|>)/.test(tag))
    .map((tag) => tag.match(/\bid="([^"]+)"/)?.[1]);
  assert.deepEqual(openDetails, [copy[lang].finishId, "preset-restore", "preset-share"], `${lang}: Incorrect default-open disclosures`);
  assert.equal((article.match(/data-details-close/g) ?? []).length, detailsCount, `${lang}: Missing close controls`);
  assert.equal((article.match(/<table>/g) ?? []).length, 4, `${lang}: Expected four tables`);
  const flow = copy[lang].flow;
  let previousHeading = -1;
  for (const heading of [flow.prepare, flow.import, flow.create, flow.edit, flow.save, flow.apply, flow.share]) {
    const position = source.indexOf(`${heading}\n`);
    assert.ok(position > previousHeading, `${lang}: Missing or misplaced heading: ${heading}`);
    previousHeading = position;
  }
  for (const [heading, count] of [[flow.edit, 4], [flow.save, 5], [flow.apply, 4]]) {
    const body = source.split(`${heading}\n`)[1].split(/^#{2,4} /m)[0];
    const list = marked.lexer(body).find((token) => token.type === "list" && token.ordered);
    assert.equal(list?.items.length, count, `${lang}: Incorrect step numbering in ${heading}`);
    if (heading === flow.edit) {
      assert.equal((list.items[1].text.match(/<details /g) ?? []).length, 5, `${lang}: Details must stay under editing step 2`);
    }
  }

  {
    const details = [...article.matchAll(/<details\b[^>]*>[\s\S]*?<\/details>/g)].map(([block]) => block);
    assert.ok(details.every((block) => (block.match(/<details\b/g) ?? []).length === 1), "Do not nest disclosures");
    assert.ok(details.every((block) => !block.includes('class="doc-anchor-alias"')), "Keep aliases outside disclosures to avoid native fragment expansion before hydration");
    const detail = (id) => {
      const block = details.find((item) => item.includes(`id="${id}"`));
      assert.ok(block, `Missing disclosure: ${id}`);
      return block;
    };
    const download = detail("preset-download");
    const share = detail("preset-share");
    for (const block of [download, share]) {
      assert.ok(block.includes('href="https://discord.gg/Czuxfw8ng8"'));
      assert.ok(block.includes("💾｜preset-share"));
      assert.ok(block.includes(".ksPreset"));
    }
    assert.ok(share.includes("ZIP"));
    const unityImport = detail("preset-unity-import");
    const unityExport = detail("preset-unity-export");
    assert.ok(unityImport.includes(".asset") && unityImport.includes(".unitypackage") && unityImport.includes("Import"));
    assert.ok(unityExport.includes("Export Package") && unityExport.includes(".unitypackage"));
    assert.ok(share.includes(copy[lang].guidelines));
    assert.ok(download.includes('<h4 id="preset-import-conflict">'), "Duplicate-name instructions must be a subsection of downloading and adding presets");
    for (let i = 1; i <= 4; i += 1) detail(`preset-file-help-${i}`);
    for (const asset of ["file-import-open", "file-import-complete", "file-import-conflict", "file-import-rename", "file-select-open", "file-select-list", "file-export-open", "file-export-list", "file-export-complete"]) {
      assert.ok(article.includes(`${asset}-figma.webp`), `Missing Figma guide screenshot: ${asset}`);
    }
    assert.ok(unityExport.includes("preset-folder.png") && unityExport.includes("export-package.png"), "Preserve the user's existing Unity export screenshots");
    assert.ok(!share.includes("<table>"), "Sharing must not include a post-writing form table");
    detail(copy[lang].namesId);
    detail(copy[lang].finishId);
    const expandedContent = article.replace(/<details\b[^>]*>[\s\S]*?<\/details>/g, "");
    for (const text of [copy[lang].loadHeading, ...copy[lang].visibleText]) {
      assert.ok(expandedContent.includes(text), `Essential instructions hidden: ${text}`);
    }
    const video = expandedContent.match(/<iframe\b[^>]*\bid="preset-video"[^>]*>/)?.[0];
    assert.ok(video?.includes(`title="${copy[lang].videoTitle}"`), "Video must be visible outside disclosures");
    assert.ok(video.includes("youtube-nocookie.com/embed/1y4bThRyBIw"));
    const intro = article.match(/<div class="guide-intro">([\s\S]*?)<\/div>/)?.[1];
    assert.ok(intro?.includes("<br>"), "Intro needs an explicit line break");
    const community = article.match(/<aside class="admonition tip">([\s\S]*?)<\/aside>/)?.[0];
    assert.ok(community?.includes('href="https://discord.gg/Czuxfw8ng8"') && community.includes("💾｜preset-share"), "Community invitation should use the yellow tip box");
    assert.ok(article.indexOf(community) < article.indexOf(video), "Community box must precede the video");
    assert.ok(!article.includes("preset-shortcuts"), "Do not restore the removed intro shortcuts");
    if (lang === "ko") {
      assert.ok(!/아바타\((?:Source|Target)\)|Source Avatar의 BlendShape|Source \/ Target \/ Preset 이름/.test(article), "Use Korean avatar terms outside UI labels");
    }
    assert.ok(!article.includes("EDEN SPECTRUM"), "Use the shortened Discord server label");
    assert.match(expandedContent, /<a\b[^>]*href="https:\/\/discord\.gg\/Czuxfw8ng8"[^>]*><strong>💾｜preset-share<\/strong>[^<]*<\/a>/, "Sharing invitation needs a linked channel label");
    assert.equal((article.match(/save-preset-dialog\.png/g) ?? []).length, 1, "Show the save dialog only once");
    assert.equal((article.match(/<img\b/g) ?? []).length, 20, "Expected nine new Figma screenshots plus eleven preserved screenshots");
    for (const [alias, target] of Object.entries(copy[lang].aliases)) {
      assert.ok(article.includes(`id="${alias}" class="doc-anchor-alias" data-anchor-target="${target}"`), `Missing old anchor: ${alias}`);
      assert.ok(article.includes(`id="${target}"`), `Missing alias destination: ${target}`);
    }
    const ids = [...article.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(ids.length, new Set(ids).size, "Article IDs must be unique");
    for (const [, src] of article.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
      assert.ok(src.startsWith(`${basePath}/media/`), `Image escaped base path: ${src}`);
      assert.ok(fs.existsSync(path.join(output, src.slice(basePath.length))), `Missing exported image: ${src}`);
    }
    const layout = [...article.matchAll(/<(h[234]|details|img|table|iframe)\b([^>]*)>/g)].map(([, tag, attributes]) => {
      if (tag === "img" || tag === "iframe") return `${tag}:${attributes.match(/\bsrc="([^"]+)"/)?.[1]}`;
      if (tag === "details") return `${tag}:${/\sopen(?:\s|=|$)/.test(attributes)}`;
      return tag;
    });
    if (lang === "ko") koreanLayout = layout;
    else assert.deepEqual(layout, koreanLayout, `${lang}: Headings, disclosure states, tables, and media must match the Korean layout`);
  }

  const autoFitting = readPage(lang, "auto-fitting");
  assert.ok(autoFitting.includes('href="../presets/"'), `${lang}: Automatic fitting guide must link to presets`);
  const note = autoFitting.indexOf(copy[lang].note);
  assert.ok(note > autoFitting.indexOf('<h3 id="4-'), `${lang}: Preset note must follow avatar assignment`);
  assert.ok(note < autoFitting.indexOf('<h3 id="5-'), `${lang}: Preset note must precede option setup`);
  for (const slug of ["auto-fitting", "getting-started"]) {
    const html = readPage(lang, slug);
    assert.ok(html.includes(`href="${presetPath}"`), `${lang}/${slug}: Missing preset navigation link`);
    assert.ok(html.includes(copy[lang].title), `${lang}/${slug}: Missing localized preset title`);
    if (lang !== "ko") assert.ok(!html.includes(copy.ko.title), `${lang}/${slug}: Korean preset title leaked into navigation or search`);
  }

  const entry = presetEntries.find((item) => item.match(/<loc>([^<]+)<\/loc>/)?.[1].endsWith(presetPath));
  assert.ok(entry, `${lang}: Missing preset sitemap entry`);
  const languageAlternates = [...preset.matchAll(/<link\b[^>]+rel="alternate"[^>]*>/g)].map((match) => match[0]);
  const languageMenu = preset.match(/<nav class="language-menu language-links"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(languageMenu, `${lang}: Missing language menu`);
  for (const target of languages) {
    const targetPath = `${basePath}/${target}/docs/presets/`;
    assert.ok(languageMenu.includes(`href="${targetPath}"`), `${lang}: Language switch must stay on presets (${target})`);
    assert.ok(languageAlternates.some((link) => link.includes(`hrefLang="${target}"`) && link.includes(`${targetPath}"`)), `${lang}: Missing ${target} alternate`);
    assert.ok([...entry.matchAll(/<xhtml:link[^>]+>/g)].some(([link]) => link.includes(`hreflang="${target}"`) && link.includes(`${targetPath}"`)), `${lang}: Missing ${target} sitemap alternate`);
  }
  assert.ok(languageAlternates.some((link) => link.includes('hrefLang="x-default"') && link.includes(`${basePath}/ja/docs/presets/"`)), `${lang}: Default alternate must use the Japanese guide`);
  assert.ok([...entry.matchAll(/<xhtml:link[^>]+>/g)].some(([link]) => link.includes('hreflang="x-default"') && link.includes(`${basePath}/ja/docs/presets/"`)), `${lang}: Missing default sitemap alternate`);

  // Every local navigation link and translated anchor must resolve in the static export.
  for (const match of preset.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const raw = match[1].replaceAll("&amp;", "&");
    const url = new URL(raw, `https://static.test${presetPath}`);
    if (url.origin !== "https://static.test") continue;
    assert.ok(url.pathname.startsWith(`${basePath}/`), `${lang}: Link escaped the configured base path: ${raw}`);
    const pathname = decodeURIComponent(url.pathname.slice(basePath.length));
    const file = path.join(output, pathname, pathname.endsWith("/") ? "index.html" : "");
    assert.ok(fs.existsSync(file), `${lang}: Missing local link target: ${raw}`);
    if (url.hash) {
      const html = fs.readFileSync(file, "utf8");
      assert.ok(html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${lang}: Missing anchor: ${raw}`);
    }
  }
}

console.log(`Preset export checks passed for ko, ja, en (base path: ${basePath || "/"}).`);
