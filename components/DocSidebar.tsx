import type { DocMeta } from "@/lib/content";
import { groupDocs } from "@/lib/content";
import { BASE_PATH, type Language } from "@/lib/site";

export function DocSidebar({ docs, lang, activeSlug }: { docs: DocMeta[]; lang: Language; activeSlug: string }) {
  return (
    <nav className="doc-sidebar" aria-label="문서 탐색">
      <a className="sidebar-home" href={`${BASE_PATH}/${lang}/`}>← きせった (Kisetter) 홈</a>
      {groupDocs(docs).map(([category, items]) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul>
            {items.filter((doc) => !doc.parent).map((doc) => (
              <li key={doc.slug}>
                <a
                  href={`${BASE_PATH}/${lang}/docs/${doc.slug}/`}
                  aria-current={activeSlug === doc.slug ? "page" : undefined}
                >
                  {doc.title}
                </a>
                {items.some((child) => child.parent === doc.slug) && (
                  <ul className="doc-subpages">
                    {items.filter((child) => child.parent === doc.slug).map((child) => (
                      <li key={child.slug}>
                        <a
                          href={`${BASE_PATH}/${lang}/docs/${child.slug}/`}
                          aria-current={activeSlug === child.slug ? "page" : undefined}
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}
