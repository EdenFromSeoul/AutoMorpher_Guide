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
    labels: ["불러오기", "적용하기", "직전 변형값을 프리셋으로 저장", "새 프리셋 만들기", "불러온 프리셋 편집", "적용 전으로 되돌리기", "가슴 조정 표시", "신체 관통 보정 횟수"],
  },
  ja: {
    title: "プリセット使用ガイド",
    note: "任意 · プリセットを使用する",
    labels: ["読み込み", "適用", "直前の変形をプリセット保存", "新しいプリセットを作成", "読み込んだプリセットを編集", "適用前に戻す", "元のアバター名", "対象のアバター名", "胸調整を表示", "身体との貫通補正回数", "保存して戻る", "保存せずに戻る", "編集を続ける"],
  },
  en: {
    title: "Preset Guide",
    note: "Optional · Use a preset",
    labels: ["Load", "Apply", "Save Last Conversion as Preset", "Create New Preset", "Edit Loaded Preset", "Restore Previous", "Source Avatar Name", "Target Avatar Name", "Breast Guides", "Body Penetration Correction Iterations", "Save and Return", "Return Without Saving", "Continue Editing"],
  },
};
const presetEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map((match) => match[1]).filter((entry) => entry.includes("/docs/presets/"));
assert.equal(presetEntries.length, languages.length, "Each language needs a preset sitemap entry");

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
  if (lang !== "ko") {
    assert.ok(!/[\uac00-\ud7a3]/u.test(article.replace(/<[^>]*>/g, "")), `${lang}: Korean text remains in the translated article`);
  }

  // Korean uses the task-oriented structure; the translations retain their existing layout.
  const source = fs.readFileSync(path.resolve("content", lang, "presets.md"), "utf8").replace(/\r\n/g, "\n");
  const isRestructured = lang === "ko";
  assert.deepEqual([...source.matchAll(/^## (\d+)\./gm)].map((match) => Number(match[1])), isRestructured ? [1, 2, 3, 4, 5] : [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const detailsCount = isRestructured ? 16 : 5;
  assert.equal((article.match(/<details\b/g) ?? []).length, detailsCount, `${lang}: Incorrect number of disclosures`);
  const openDetails = [...article.matchAll(/<details\b[^>]*>/g)]
    .map(([tag]) => tag).filter((tag) => /\sopen(?:\s|=|>)/.test(tag))
    .map((tag) => tag.match(/\bid="([^"]+)"/)?.[1]);
  assert.deepEqual(openDetails, isRestructured ? ["preset-download", "preset-restore", "preset-share", "편집을-마치거나-취소하기"] : [], `${lang}: Incorrect default-open disclosures`);
  assert.equal((article.match(/data-details-close/g) ?? []).length, detailsCount, `${lang}: Missing close controls`);
  assert.equal((article.match(/<table>/g) ?? []).length, 4, `${lang}: Expected four tables`);
  const sections = source.split(/^## /m).slice(1);
  for (const [section, count] of (isRestructured ? [[2, 5], [3, 5], [4, 4]] : [[2, 4], [3, 5], [4, 6]])) {
    let body = sections[section - 1].slice(sections[section - 1].indexOf("\n") + 1);
    if (isRestructured && section === 2) body = body.split("### 불러와 적용하기\n")[1];
    const list = marked.lexer(body).find((token) => token.type === "list" && token.ordered);
    assert.equal(list?.items.length, count, `${lang}: Incorrect step numbering in section ${section}`);
    if (section === 4) {
      assert.equal((list.items[1].text.match(/<details /g) ?? []).length, 5, `${lang}: Details must stay under editing step 2`);
    }
  }

  if (isRestructured) {
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
      assert.ok(block.includes("ZIP") && block.includes(".unitypackage"));
    }
    assert.ok(download.includes(".asset") && download.includes("Import"));
    assert.ok(share.includes("Export Package") && share.includes("포스트 가이드라인"));
    assert.ok(!share.includes("<table>"), "Sharing must not include a post-writing form table");
    const expandedContent = article.replace(/<details\b[^>]*>[\s\S]*?<\/details>/g, "");
    for (const text of ["불러와 적용하기", "적용 안내를 확인해 주세요", "현재 화면의 값이 아니라 직전 변형에 사용한 값을 저장합니다", "만족스러운 변환 결과를 얻었다면"]) {
      assert.ok(expandedContent.includes(text), `Essential instructions hidden: ${text}`);
    }
    const video = expandedContent.match(/<iframe\b[^>]*\bid="preset-video"[^>]*>/)?.[0];
    assert.ok(video?.includes('title="프리셋 사용 가이드 영상"'), "Video must be visible outside disclosures");
    assert.ok(video.includes("youtube-nocookie.com/embed/1y4bThRyBIw"));
    assert.ok(article.includes("기능입니다.<br>자주 쓰는 변환 설정"), "Intro needs an explicit line break");
    assert.match(article, /<aside class="admonition tip">\s*<strong>다른 유저의 프리셋을 사용하고, 나만의 프리셋도 공유해 보세요!<\/strong>/, "Community invitation should use the yellow tip box");
    assert.ok(!/아바타\((?:Source|Target)\)|Source Avatar의 BlendShape|Source \/ Target \/ Preset 이름/.test(article), "Use Korean avatar terms outside UI labels");
    assert.ok(!article.includes("EDEN SPECTRUM"), "Use the shortened Discord server label");
    assert.match(expandedContent, /<a\b[^>]*href="https:\/\/discord\.gg\/Czuxfw8ng8"[^>]*><strong>💾｜preset-share<\/strong> 채널<\/a>/, "Sharing invitation needs a linked channel label");
    assert.equal((article.match(/save-preset-dialog\.png/g) ?? []).length, 1, "Show the save dialog only once");
    assert.equal((article.match(/<img\b/g) ?? []).length, 13, "Preserve all screenshots, including the two export screenshots");
    const aliases = {
      "2-프리셋-불러오기": "2-프리셋-불러와-사용하기",
      "3-직전-변형값을-프리셋으로-저장하기": "3-내-프리셋-저장-공유하기",
      "4-새-프리셋-만들기-기존-프리셋-편집하기": "4-프리셋-만들기-편집하기",
      "5-적용-전-상태로-되돌리기": "preset-restore",
      "6-저장되는-내용과-주의-사항": "preset-contents",
      "7-버튼이-비활성화되거나-목록에-보이지-않는-경우": "5-문제-해결",
      "8-프리셋-내보내기": "preset-share",
      "9-프리셋-추가하기": "preset-download",
    };
    for (const [alias, target] of Object.entries(aliases)) {
      assert.ok(article.includes(`id="${alias}" class="doc-anchor-alias" data-anchor-target="${target}"`), `Missing old anchor: ${alias}`);
      assert.ok(article.includes(`id="${target}"`), `Missing alias destination: ${target}`);
    }
    const ids = [...article.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(ids.length, new Set(ids).size, "Article IDs must be unique");
    for (const [, src] of article.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
      assert.ok(src.startsWith(`${basePath}/media/`), `Image escaped base path: ${src}`);
      assert.ok(fs.existsSync(path.join(output, src.slice(basePath.length))), `Missing exported image: ${src}`);
    }
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
