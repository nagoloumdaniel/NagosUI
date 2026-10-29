"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { cn } from "@nagos/ui";
import { DOCS_NAV, docHref, docTitle, slugFromPathname } from "@/lib/docs";
import { docsUi } from "@/lib/docs-content";
import { useI18n } from "@/components/providers/language-provider";

/**
 * Sidebar docs (persistante via le layout) avec indicateur d'actif
 * coulissant : un seul marqueur Motion (layoutId) glisse en douceur
 * vers la page active à chaque navigation.
 */
export function DocsSidebar() {
  const { lang } = useI18n();
  const activeSlug = slugFromPathname(usePathname());

  return (
    <nav aria-label="Documentation" className="text-sm">
      <p className="mb-3 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-muted">
        <BookOpen className="size-4 text-accent" />
        {docsUi[lang].section}
      </p>
      <ul className="relative border-l border-line">
        {DOCS_NAV.map((item) => {
          const active = item.slug === activeSlug;
          return (
            <li key={item.slug} className="relative">
              {active && (
                <motion.span
                  layoutId="docs-sidebar-active"
                  className="absolute -left-px top-0 h-full w-0.5 rounded-full bg-accent"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 38,
                    mass: 0.8,
                  }}
                />
              )}
              <Link
                href={docHref(item.slug)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative block py-1.5 pl-4 transition-colors duration-300",
                  active
                    ? "font-medium text-fg"
                    : "text-muted hover:text-fg",
                )}
              >
                {docTitle(item, lang)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
