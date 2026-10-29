"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@nagos/ui";
import { DOCS_NAV, docHref, docTitle, findDoc, slugFromPathname } from "@/lib/docs";
import { docsUi } from "@/lib/docs-content";
import { useI18n } from "@/components/providers/language-provider";

/** Sélecteur de page docs pour mobile / tablette (disclosure natif). */
export function DocsMobileNav({ className }: { className?: string }) {
  const { lang } = useI18n();
  const slug = slugFromPathname(usePathname());
  const current = findDoc(slug);

  return (
    <details
      className={cn(
        "group rounded-card border border-line bg-surface",
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-fg [&::-webkit-details-marker]:hidden">
        <span className="text-muted">
          {docsUi[lang].menu} ·{" "}
          <span className="text-fg">
            {current ? docTitle(current, lang) : slug}
          </span>
        </span>
        <ChevronDown className="size-4 shrink-0 text-muted transition-transform group-open:rotate-180" />
      </summary>
      <ul className="border-t border-line p-2">
        {DOCS_NAV.map((item) => {
          const active = item.slug === slug;
          return (
            <li key={item.slug}>
              <Link
                href={docHref(item.slug)}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "block rounded-xl bg-surface-hover px-3 py-2 text-sm font-medium text-fg"
                    : "block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-fg"
                }
              >
                {docTitle(item, lang)}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
