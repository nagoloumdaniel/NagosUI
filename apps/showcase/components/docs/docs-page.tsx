"use client";

import { useI18n } from "@/components/providers/language-provider";
import { getDoc } from "@/lib/docs-content";
import { DocsToc } from "@/components/docs/docs-toc";
import { DocArticleView } from "@/components/docs/doc-article";

/**
 * Contenu d'une page docs : article + sommaire (la sidebar et le menu
 * mobile vivent dans le layout /docs pour persister entre navigations).
 */
export function DocsPage({ slug }: { slug: string }) {
  const { lang } = useI18n();
  const article = getDoc(slug, lang);
  const toc = article.sections.flatMap((s) =>
    s.heading ? [{ id: s.id, label: s.heading }] : [],
  );

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-10">
      <main className="min-w-0 pb-16">
        <DocArticleView article={article} lang={lang} />
      </main>

      <aside className="hidden xl:block">
        <div className="sticky top-20">
          <DocsToc items={toc} lang={lang} />
        </div>
      </aside>
    </div>
  );
}
