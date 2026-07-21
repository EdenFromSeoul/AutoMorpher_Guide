import type { DocMeta } from "@/lib/content";
import { groupDocs } from "@/lib/content";
import { BASE_PATH, type Language } from "@/lib/site";

export function DocSidebar({ docs, lang, activeSlug }: { docs: DocMeta[]; lang: Language; activeSlug: string }) {
  return (
    <nav className="doc-sidebar" aria-label="문서 탐색">
      <a className="sidebar-home" href={`${BASE_PATH}/${lang}/`}>← Auto Morpher 홈</a>
      {groupDocs(docs).map(([category, items]) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul>
            {items.map((doc) => (
              <li key={doc.slug}>
                <a
                  href={`${BASE_PATH}/${lang}/docs/${doc.slug}/`}
                  aria-current={activeSlug === doc.slug ? "page" : undefined}
                >
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}