import type { Lang } from "@/lib/i18n";

/** Une entrée de la sidebar docs. */
export interface DocNavItem {
  slug: string;
  fr: string;
  en: string;
}

/** Architecture de la documentation (ordre = ordre dans la sidebar). */
export const DOCS_NAV: DocNavItem[] = [
  { slug: "introduction", fr: "Introduction", en: "Introduction" },
  { slug: "installation", fr: "Installation", en: "Installation" },
  { slug: "quickstart", fr: "Démarrage rapide", en: "Quick start" },
  { slug: "foundation", fr: "Foundation & thème", en: "Foundation & theming" },
  { slug: "components", fr: "Composants", en: "Components" },
  { slug: "accessibility", fr: "Accessibilité", en: "Accessibility" },
  { slug: "faq", fr: "FAQ", en: "FAQ" },
  { slug: "changelog", fr: "Changelog", en: "Changelog" },
  { slug: "roadmap", fr: "Roadmap", en: "Roadmap" },
];

export const DOCS_HOME_SLUG = "introduction";

/** Href d'une page docs (l'intro est servie à la racine /docs). */
export function docHref(slug: string): string {
  return slug === DOCS_HOME_SLUG ? "/docs" : `/docs/${slug}`;
}

export function docTitle(item: DocNavItem, lang: Lang): string {
  return lang === "fr" ? item.fr : item.en;
}

export function findDoc(slug: string): DocNavItem | undefined {
  return DOCS_NAV.find((d) => d.slug === slug);
}

/** Déduit le slug docs courant depuis le pathname (/docs ou /docs/x). */
export function slugFromPathname(pathname: string): string {
  const m = pathname.replace(/\/+$/, "").match(/^\/docs(?:\/([^/]+))?$/);
  return m?.[1] ?? DOCS_HOME_SLUG;
}
