import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { BASE_PATH, VERSION, type Language } from "./site";

export type TocItem = { depth: number; id: string; text: string };
export type DocMeta = {
  title: string;
  slug: string;
  category: string;
  description: string;
  order: number;
};
export type Doc = DocMeta & {
  markdown: string;
  html: string;
  toc: TocItem[];
  plainText: string;
};

export type SearchIndexItem = {
  id: string;
  title: string;
  slug: string;
  anchor?: string;
  category: string;
  description: string;
  plainText: string;
  documentTitle?: string;
};

const CONTENT_ROOT = path.join(/* turbopackIgnore: true */ process.cwd(), "content");

function contentDirectory(lang: Language): string {
  const requested = path.join(CONTENT_ROOT, lang);
  if (
    fs.existsSync(requested) &&
    fs.readdirSync(requested).some((file) => file.endsWith(".md"))
  ) {
    return requested;
  }
  return path.join(CONTENT_ROOT, "ko");
}

function parseFrontmatter(source: string): { meta: DocMeta; markdown: string } {
  const normalizedSource = source.replace(/\r\n/g, "\n");
  const match = normalizedSource.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error("Document frontmatter is missing.");

  const values: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^"|"$/g, "");
    values[key] = value;
  }

  return {
    meta: {
      title: values.title,
      slug: values.slug,
      category: values.category,
      description: values.description.replaceAll("{{VERSION}}", VERSION),
      order: Number(values.order),
    },
    markdown: match[2].trim(),
  };
}

function stripMarkdown(value: string): string {
  return value
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_~]/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function slugify(value: string): string {
  const normalized = stripMarkdown(value)
    .toLowerCase()
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || "section";
}

function transformAdmonitions(markdown: string): string {
  return markdown.replace(
    /^!!!\s+(\w+)\s+"([^"]+)"\n((?: {4}.*(?:\n|$))+)/gm,
    (_match, kind: string, title: string, body: string) => {
      const text = body
        .split("\n")
        .map((line: string) => line.replace(/^ {4}/, ""))
        .filter(Boolean)
        .join(" ");
      return `<aside class="admonition ${kind}"><strong>${title}</strong><p>${text}</p></aside>\n`;
    },
  );
}

function renderMarkdown(markdown: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const occurrences = new Map<string, number>();

  for (const line of markdown.split("\n")) {
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (!match) continue;
    const text = stripMarkdown(match[2]);
    const base = slugify(text);
    const count = occurrences.get(base) ?? 0;
    occurrences.set(base, count + 1);
    toc.push({
      depth: match[1].length,
      id: count ? `${base}-${count + 1}` : base,
      text,
    });
  }

  const resolvedMarkdown = transformAdmonitions(markdown)
    .replaceAll("{{BASE_PATH}}", BASE_PATH)
    .replaceAll("{{VERSION}}", VERSION);
  let html = marked.parse(resolvedMarkdown, {
    async: false,
    gfm: true,
    breaks: false,
  }) as string;

  let headingIndex = 0;
  html = html.replace(/<h([234])>([\s\S]*?)<\/h\1>/g, (full, depth, inner) => {
    const item = toc[headingIndex++];
    if (!item) return full;
    return `<h${depth} id="${item.id}">${inner}<a class="heading-anchor" href="#${item.id}" aria-label="${item.text} 섹션 링크">#</a></h${depth}>`;
  });

  html = html
    .replaceAll("{{BASE_PATH}}", BASE_PATH)
    .replaceAll("{{VERSION}}", VERSION)
    .replace(
      /<a href="(https?:\/\/[^\"]+)"/g,
      '<a href="$1" target="_blank" rel="noreferrer"',
    )
    .replace(/<table>/g, '<div class="table-scroll"><table>')
    .replace(/<\/table>/g, "</table></div>");

  return { html, toc };
}

function readDocsFromDirectory(directory: string): Doc[] {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      const { meta, markdown } = parseFrontmatter(source);
      const { html, toc } = renderMarkdown(markdown);
      return {
        ...meta,
        markdown,
        html,
        toc,
        plainText: stripMarkdown(markdown.replace(/^#{1,6}\s+/gm, "")),
      };
    });
}

function readDocs(lang: Language): Doc[] {
  const fallbackDirectory = path.join(CONTENT_ROOT, "ko");
  const requestedDirectory = path.join(CONTENT_ROOT, lang);
  const fallbackDocs = readDocsFromDirectory(fallbackDirectory);

  if (
    lang === "ko" ||
    !fs.existsSync(requestedDirectory) ||
    !fs.readdirSync(requestedDirectory).some((file) => file.endsWith(".md"))
  ) {
    return fallbackDocs.sort((a, b) => a.order - b.order);
  }

  const merged = new Map(fallbackDocs.map((doc) => [doc.slug, doc]));
  for (const doc of readDocsFromDirectory(requestedDirectory)) {
    merged.set(doc.slug, doc);
  }
  return [...merged.values()].sort((a, b) => a.order - b.order);
}

export function getDocs(lang: Language): Doc[] {
  return readDocs(lang);
}

export function getDoc(lang: Language, slug: string): Doc | undefined {
  return readDocs(lang).find((doc) => doc.slug === slug);
}

function getSearchSections(doc: Doc): SearchIndexItem[] {
  const sections: SearchIndexItem[] = [];
  const lines = doc.markdown.split("\n");
  let tocIndex = 0;
  let active: { item: TocItem; lines: string[] } | undefined;

  const flush = () => {
    if (!active || /^[\s\[\]—―─-]+$/u.test(active.item.text)) return;
    const plainText = stripMarkdown(active.lines.join("\n"))
      .replace(/\s+/g, " ")
      .trim();
    const description = plainText
      ? `${plainText.slice(0, 180)}${plainText.length > 180 ? "…" : ""}`
      : doc.description;
    sections.push({
      id: `${doc.slug}#${active.item.id}`,
      title: active.item.text,
      slug: doc.slug,
      anchor: active.item.id,
      category: doc.category,
      description,
      plainText,
      documentTitle: doc.title,
    });
  };

  for (const line of lines) {
    if (/^#{2,4}\s+/.test(line)) {
      flush();
      const item = doc.toc[tocIndex++];
      active = item ? { item, lines: [] } : undefined;
      continue;
    }
    active?.lines.push(line);
  }
  flush();
  return sections;
}

export function getSearchIndex(lang: Language): SearchIndexItem[] {
  return readDocs(lang).flatMap((doc) => [
    {
      id: doc.slug,
      title: doc.title,
      slug: doc.slug,
      category: doc.category,
      description: doc.description,
      plainText: doc.plainText,
    },
    ...getSearchSections(doc),
  ]);
}

export function groupDocs(docs: DocMeta[]) {
  const groups = new Map<string, DocMeta[]>();
  for (const doc of docs) {
    const list = groups.get(doc.category) ?? [];
    list.push(doc);
    groups.set(doc.category, list);
  }
  return [...groups.entries()];
}