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

  // Preserve the Korean guide's sections, tables, collapsed details, and step numbering.
  const source = fs.readFileSync(path.resolve("content", lang, "presets.md"), "utf8").replace(/\r\n/g, "\n");
  assert.deepEqual([...source.matchAll(/^## (\d+)\./gm)].map((match) => Number(match[1])), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.equal((article.match(/<details class="doc-optional-step">/g) ?? []).length, 5, `${lang}: Expected five collapsed detail sections`);
  assert.equal((article.match(/data-details-close/g) ?? []).length, 5, `${lang}: Missing close controls`);
  assert.equal((article.match(/<table>/g) ?? []).length, 4, `${lang}: Expected four tables`);
  const sections = source.split(/^## /m).slice(1);
  for (const [section, count] of [[2, 4], [3, 5], [4, 6]]) {
    const body = sections[section - 1].slice(sections[section - 1].indexOf("\n") + 1);
    const list = marked.lexer(body).find((token) => token.type === "list" && token.ordered);
    assert.equal(list?.items.length, count, `${lang}: Incorrect step numbering in section ${section}`);
    if (section === 4) {
      assert.equal((list.items[1].text.match(/<details /g) ?? []).length, 5, `${lang}: Details must stay under editing step 2`);
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
