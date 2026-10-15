import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

// Run after a production build, passing the same base path used for that build.
const basePath = (process.argv[2] ?? "").replace(/\/$/, "");
const output = path.resolve("out");
const readPage = (lang, slug) => fs.readFileSync(path.join(output, lang, "docs", slug, "index.html"), "utf8");
const preset = readPage("ko", "presets");
const autoFitting = readPage("ko", "auto-fitting");
const sitemap = fs.readFileSync(path.join(output, "sitemap.xml"), "utf8");
const presetPath = `${basePath}/ko/docs/presets/`;

assert.match(preset, /<h1[^>]*>프리셋 사용 가이드<\/h1>/);
for (const label of ["불러오기", "적용하기", "직전 변형값을 프리셋으로 저장", "새 프리셋 만들기", "불러온 프리셋 편집", "적용 전으로 되돌리기"]) {
  assert.ok(preset.includes(label), `Missing documented action: ${label}`);
}
assert.ok(autoFitting.includes('href="../presets/"'), "Automatic fitting guide must link to presets");
const note = autoFitting.indexOf("선택 사항 · 프리셋 사용");
assert.ok(note > autoFitting.indexOf('<h3 id="4-'), "Preset note must follow avatar assignment");
assert.ok(note < autoFitting.indexOf('<h3 id="5-'), "Preset note must precede option setup");

for (const lang of ["ja", "en"]) {
  assert.ok(!fs.existsSync(path.join(output, lang, "docs", "presets", "index.html")), `Unexpected ${lang} preset route`);
  for (const slug of ["auto-fitting", "getting-started"]) {
    const html = readPage(lang, slug);
    assert.ok(!html.includes("프리셋 사용 가이드"), `Korean preset leaked into ${lang}/${slug} navigation or search`);
    assert.ok(!html.includes(`/${lang}/docs/presets/`));
  }
  assert.ok(preset.includes(`href="${basePath}/${lang}/docs/getting-started/"`), `Missing safe ${lang} language switch`);
}

const presetEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map((match) => match[1]).filter((entry) => entry.includes("/docs/presets/"));
assert.equal(presetEntries.length, 1, "Only one preset sitemap entry should exist");
assert.ok(presetEntries[0].includes(presetPath));
assert.ok(!/<xhtml:link[^>]+hreflang="(?:ja|en)"/.test(presetEntries[0]));
const languageAlternates = [...preset.matchAll(/<link\b[^>]+rel="alternate"[^>]*>/g)].map((match) => match[0]);
assert.ok(languageAlternates.some((link) => link.includes('hrefLang="ko"') && link.includes(presetPath)));
assert.ok(languageAlternates.some((link) => link.includes('hrefLang="x-default"') && link.includes(presetPath)));
assert.ok(!languageAlternates.some((link) => /hrefLang="(?:ja|en)"/.test(link)), "Metadata advertises a missing translation");

// Every local navigation link on the new page must resolve in the static export.
for (const match of preset.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
  const raw = match[1].replaceAll("&amp;", "&");
  const url = new URL(raw, `https://static.test${presetPath}`);
  if (url.origin !== "https://static.test") continue;
  assert.ok(url.pathname.startsWith(`${basePath}/`), `Link escaped the configured base path: ${raw}`);
  const pathname = decodeURIComponent(url.pathname.slice(basePath.length));
  const file = path.join(output, pathname, pathname.endsWith("/") ? "index.html" : "");
  assert.ok(fs.existsSync(file), `Missing local link target: ${raw}`);
  if (url.hash) {
    const html = fs.readFileSync(file, "utf8");
    assert.ok(html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing anchor: ${raw}`);
  }
}

console.log(`Preset export checks passed (base path: ${basePath || "/"}).`);
