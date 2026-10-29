import type { ReactNode } from "react";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsMobileNav } from "@/components/docs/docs-mobile-nav";

/**
 * Layout /docs : SiteHeader + shell 3 colonnes. La sidebar et le menu
 * mobile sont rendus ICI (pas dans la page) pour persister entre les
 * navigations — c'est ce qui permet à l'indicateur d'actif de glisser.
 */
export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <DocsSidebar />
            </div>
          </aside>

          <div className="min-w-0">
            <DocsMobileNav className="mb-8 lg:hidden" />
            {children}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
