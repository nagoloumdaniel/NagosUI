import type { Lang } from "@/lib/i18n";
import { DOCS_HOME_SLUG, findDoc, docTitle } from "@/lib/docs";

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: { term?: string; text: string }[] }
  | { type: "code"; code: string; label?: string }
  | { type: "note"; text: string };

export interface DocSection {
  id: string;
  heading?: string;
  blocks: DocBlock[];
}

export interface DocArticle {
  title: string;
  description: string;
  updated: string;
  sections: DocSection[];
}

const UPDATED = "18/05/2026";

/** Strings d'UI de la doc (bilingues). */
export const docsUi = {
  fr: {
    section: "Guide",
    onThisPage: "Sur cette page",
    copy: "Copier",
    copied: "Copié",
    updated: "Dernière mise à jour",
    menu: "Documentation",
  },
  en: {
    section: "Guide",
    onThisPage: "On this page",
    copy: "Copy",
    copied: "Copied",
    updated: "Last updated",
    menu: "Documentation",
  },
} as const;

type Articles = Record<string, Record<Lang, DocArticle>>;

const articles: Articles = {
  introduction: {
    fr: {
      title: "Introduction",
      description: "Construisez des interfaces premium animées avec NagosUI.",
      updated: UPDATED,
      sections: [
        {
          id: "overview",
          blocks: [
            {
              type: "p",
              text: "NagosUI est une distribution de composants React animés, bâtie avec Tailwind CSS v4 et Motion, sur un design system entièrement tokenisé. L'objectif : livrer des interfaces premium, accessibles et prêtes pour la production — rapidement — tout en gardant un code rapide et maintenable.",
            },
          ],
        },
        {
          id: "distribution",
          heading: "Pas une librairie classique — une distribution ouverte",
          blocks: [
            {
              type: "p",
              text: "À la manière de shadcn/ui, NagosUI n'est pas une dépendance npm fermée. C'est une collection ouverte que vous copiez, modifiez et personnalisez directement dans votre base de code. Cette approche « open code » offre une flexibilité maximale, sans surcouche d'abstraction ni contournements de style.",
            },
            {
              type: "p",
              text: "Vous possédez 100 % du code des composants : ils vivent dans votre dépôt et évoluent avec votre produit, sans lock-in.",
            },
          ],
        },
        {
          id: "included",
          heading: "Ce qui est inclus",
          blocks: [
            {
              type: "list",
              items: [
                {
                  term: "Composants animés",
                  text: "des briques d'UI avec l'animation intégrée (Motion), stylées via les tokens.",
                },
                {
                  term: "Hooks",
                  text: "une logique d'interaction réutilisable et typée (ex. useMagnetic).",
                },
                {
                  term: "Foundation Layer",
                  text: "un système de tokens clair/sombre — couleurs, ombres, rayons, easing.",
                },
                { term: "À venir", text: "blocks, templates et icônes animées." },
              ],
            },
          ],
        },
        {
          id: "why",
          heading: "Pourquoi NagosUI ?",
          blocks: [
            {
              type: "list",
              items: [
                {
                  term: "Open source & copy-first",
                  text: "accès direct au code source pour adapter les composants au cœur de votre design system.",
                },
                {
                  term: "Animation-first",
                  text: "Motion, GSAP et Lenis déjà câblés ; des motifs cohérents et composables.",
                },
                {
                  term: "Performance & accessibilité",
                  text: "des défauts raisonnables qui gardent votre site rapide et inclusif.",
                },
                {
                  term: "Design system tokenisé",
                  text: "clair/sombre natif, rethématisable en changeant un seul jeu de tokens.",
                },
                {
                  term: "Prêt pour la production",
                  text: "TypeScript strict, Next.js 16, monorepo Turborepo, build vérifié.",
                },
              ],
            },
            {
              type: "p",
              text: "Conçu par Nagos. Le code source est disponible sur GitHub.",
            },
          ],
        },
      ],
    },
    en: {
      title: "Introduction",
      description: "Build premium animated interfaces with NagosUI.",
      updated: UPDATED,
      sections: [
        {
          id: "overview",
          blocks: [
            {
              type: "p",
              text: "NagosUI is a distribution of animated React components, built with Tailwind CSS v4 and Motion on a fully tokenized design system. The goal: ship premium, accessible, production-grade interfaces — fast — while keeping the codebase fast and maintainable.",
            },
          ],
        },
        {
          id: "distribution",
          heading: "Not a typical library — an open distribution",
          blocks: [
            {
              type: "p",
              text: "Like shadcn/ui, NagosUI is not a closed install-from-npm dependency. It's an open collection you copy, modify and customize directly in your codebase. This “open code” approach gives you maximum flexibility, without wrapper overhead or styling workarounds.",
            },
            {
              type: "p",
              text: "You own 100% of the component code: it lives in your repo and evolves with your product, with no lock-in.",
            },
          ],
        },
        {
          id: "included",
          heading: "What's included",
          blocks: [
            {
              type: "list",
              items: [
                {
                  term: "Animated components",
                  text: "UI building blocks with animation baked in (Motion), styled via tokens.",
                },
                {
                  term: "Hooks",
                  text: "reusable, typed interaction logic (e.g. useMagnetic).",
                },
                {
                  term: "Foundation Layer",
                  text: "a light/dark token system — colors, shadows, radii, easing.",
                },
                { term: "Coming soon", text: "blocks, templates and animated icons." },
              ],
            },
          ],
        },
        {
          id: "why",
          heading: "Why NagosUI?",
          blocks: [
            {
              type: "list",
              items: [
                {
                  term: "Open source & copy-first",
                  text: "direct access to source so you can adapt components at the core of your design system.",
                },
                {
                  term: "Animation-first",
                  text: "Motion, GSAP and Lenis already wired; consistent, composable patterns.",
                },
                {
                  term: "Performance & accessibility",
                  text: "sensible defaults that keep your site fast and inclusive.",
                },
                {
                  term: "Tokenized design system",
                  text: "native light/dark, re-themeable by changing a single token set.",
                },
                {
                  term: "Production-ready",
                  text: "strict TypeScript, Next.js 16, Turborepo monorepo, verified build.",
                },
              ],
            },
            {
              type: "p",
              text: "Built by Nagos. The source code is available on GitHub.",
            },
          ],
        },
      ],
    },
  },

  installation: {
    fr: {
      title: "Installation",
      description: "Mettez en place le Foundation Layer et votre premier composant.",
      updated: UPDATED,
      sections: [
        {
          id: "prerequisites",
          heading: "Prérequis",
          blocks: [
            {
              type: "list",
              items: [
                { term: "React 19", text: "et un bundler moderne (Next.js 15+ recommandé)." },
                { term: "Tailwind CSS v4", text: "configuration CSS-first (@theme / @source)." },
                { term: "TypeScript", text: "recommandé (les composants sont typés)." },
              ],
            },
          ],
        },
        {
          id: "dependencies",
          heading: "Dépendances",
          blocks: [
            {
              type: "p",
              text: "Les composants s'appuient sur quelques utilitaires neutres :",
            },
            {
              type: "code",
              label: "Terminal",
              code: "pnpm add clsx tailwind-merge class-variance-authority motion",
            },
          ],
        },
        {
          id: "tokens",
          heading: "Brancher les tokens",
          blocks: [
            {
              type: "p",
              text: "Importez le Foundation Layer dans votre CSS global et indiquez à Tailwind de scanner le package :",
            },
            {
              type: "code",
              label: "globals.css",
              code: '@import "tailwindcss";\n@import "@nagos/ui/theme.css";\n@source "../node_modules/@nagos/ui/src/**/*.{ts,tsx}";',
            },
            {
              type: "note",
              text: "Sans cet import, les utilitaires de tokens (bg-surface, rounded-pill, ease-out-expo…) ne seront pas générés chez le consommateur.",
            },
          ],
        },
        {
          id: "add-component",
          heading: "Ajouter un composant",
          blocks: [
            {
              type: "p",
              text: "Modèle « copy-first » : copiez le composant souhaité dans votre projet (ex. components/ui/), ou consommez le package en dépendance workspace dans un monorepo. Le code vous appartient.",
            },
          ],
        },
      ],
    },
    en: {
      title: "Installation",
      description: "Set up the Foundation Layer and your first component.",
      updated: UPDATED,
      sections: [
        {
          id: "prerequisites",
          heading: "Prerequisites",
          blocks: [
            {
              type: "list",
              items: [
                { term: "React 19", text: "and a modern bundler (Next.js 15+ recommended)." },
                { term: "Tailwind CSS v4", text: "CSS-first config (@theme / @source)." },
                { term: "TypeScript", text: "recommended (components are typed)." },
              ],
            },
          ],
        },
        {
          id: "dependencies",
          heading: "Dependencies",
          blocks: [
            { type: "p", text: "Components rely on a few neutral utilities:" },
            {
              type: "code",
              label: "Terminal",
              code: "pnpm add clsx tailwind-merge class-variance-authority motion",
            },
          ],
        },
        {
          id: "tokens",
          heading: "Wire the tokens",
          blocks: [
            {
              type: "p",
              text: "Import the Foundation Layer in your global CSS and let Tailwind scan the package:",
            },
            {
              type: "code",
              label: "globals.css",
              code: '@import "tailwindcss";\n@import "@nagos/ui/theme.css";\n@source "../node_modules/@nagos/ui/src/**/*.{ts,tsx}";',
            },
            {
              type: "note",
              text: "Without this import, token utilities (bg-surface, rounded-pill, ease-out-expo…) won't be generated on the consumer side.",
            },
          ],
        },
        {
          id: "add-component",
          heading: "Add a component",
          blocks: [
            {
              type: "p",
              text: "“Copy-first” model: copy the component you need into your project (e.g. components/ui/), or consume the package as a workspace dependency in a monorepo. The code is yours.",
            },
          ],
        },
      ],
    },
  },

  quickstart: {
    fr: {
      title: "Démarrage rapide",
      description: "Affichez un composant NagosUI en moins d'une minute.",
      updated: UPDATED,
      sections: [
        {
          id: "first-button",
          heading: "Un premier bouton",
          blocks: [
            {
              type: "code",
              label: "app/page.tsx",
              code: 'import { Button } from "@nagos/ui";\n\nexport default function Page() {\n  return <Button variant="gradient" size="lg">Commencer</Button>;\n}',
            },
          ],
        },
        {
          id: "variants",
          heading: "Variants & tailles",
          blocks: [
            {
              type: "p",
              text: "Le système de variants (cva) expose variant (primary, glass, gradient, outline, ghost), size (sm, md, lg, xl, icon) et fullWidth. La prop className override toujours, sans conflit (tailwind-merge).",
            },
            {
              type: "code",
              code: '<Button variant="outline" size="sm" />\n<Button variant="ghost" fullWidth />\n<Button className="rounded-none" />',
            },
          ],
        },
        {
          id: "motion",
          heading: "Aller plus loin",
          blocks: [
            {
              type: "p",
              text: "MagneticButton ajoute une attraction au curseur ; le hook useMagnetic réutilise cette logique sur n'importe quel élément.",
            },
            {
              type: "code",
              code: 'import { MagneticButton } from "@nagos/ui";\n\n<MagneticButton variant="gradient">Survole-moi</MagneticButton>',
            },
          ],
        },
      ],
    },
    en: {
      title: "Quick start",
      description: "Render a NagosUI component in under a minute.",
      updated: UPDATED,
      sections: [
        {
          id: "first-button",
          heading: "Your first button",
          blocks: [
            {
              type: "code",
              label: "app/page.tsx",
              code: 'import { Button } from "@nagos/ui";\n\nexport default function Page() {\n  return <Button variant="gradient" size="lg">Get started</Button>;\n}',
            },
          ],
        },
        {
          id: "variants",
          heading: "Variants & sizes",
          blocks: [
            {
              type: "p",
              text: "The variant system (cva) exposes variant (primary, glass, gradient, outline, ghost), size (sm, md, lg, xl, icon) and fullWidth. The className prop always overrides, conflict-free (tailwind-merge).",
            },
            {
              type: "code",
              code: '<Button variant="outline" size="sm" />\n<Button variant="ghost" fullWidth />\n<Button className="rounded-none" />',
            },
          ],
        },
        {
          id: "motion",
          heading: "Going further",
          blocks: [
            {
              type: "p",
              text: "MagneticButton adds cursor attraction; the useMagnetic hook reuses that logic on any element.",
            },
            {
              type: "code",
              code: 'import { MagneticButton } from "@nagos/ui";\n\n<MagneticButton variant="gradient">Hover me</MagneticButton>',
            },
          ],
        },
      ],
    },
  },

  foundation: {
    fr: {
      title: "Foundation & thème",
      description: "Le design system tokenisé, source unique de l'identité.",
      updated: UPDATED,
      sections: [
        {
          id: "tokens",
          heading: "Les tokens",
          blocks: [
            {
              type: "p",
              text: "Toute valeur visuelle vient d'un token : couleurs, surfaces, lignes, rayons, ombres, flou, easing, police. Aucun composant n'hardcode de valeur brute — tout référence un token.",
            },
          ],
        },
        {
          id: "light-dark",
          heading: "Clair / sombre",
          blocks: [
            {
              type: "p",
              text: "Les tokens sont déclarés en :root (clair) et .dark (sombre), exposés via @theme inline pour que les utilitaires Tailwind suivent le thème en direct. La classe .dark est pilotée par next-themes.",
            },
            {
              type: "code",
              label: "theme.css",
              code: ":root { --nagos-bg: #f7f7fb; }\n.dark { --nagos-bg: #050609; }\n@theme inline { --color-bg: var(--nagos-bg); }",
            },
          ],
        },
        {
          id: "retheme",
          heading: "Re-thématiser",
          blocks: [
            {
              type: "p",
              text: "Changez un token et toute la DA bascule. Pour adopter votre marque, surchargez l'accent :",
            },
            {
              type: "code",
              code: "@theme inline { --color-accent: #10b981; }",
            },
          ],
        },
      ],
    },
    en: {
      title: "Foundation & theming",
      description: "The tokenized design system, single source of identity.",
      updated: UPDATED,
      sections: [
        {
          id: "tokens",
          heading: "The tokens",
          blocks: [
            {
              type: "p",
              text: "Every visual value comes from a token: colors, surfaces, lines, radii, shadows, blur, easing, font. No component hardcodes a raw value — everything references a token.",
            },
          ],
        },
        {
          id: "light-dark",
          heading: "Light / dark",
          blocks: [
            {
              type: "p",
              text: "Tokens are declared in :root (light) and .dark (dark), exposed via @theme inline so Tailwind utilities follow the theme live. The .dark class is driven by next-themes.",
            },
            {
              type: "code",
              label: "theme.css",
              code: ":root { --nagos-bg: #f7f7fb; }\n.dark { --nagos-bg: #050609; }\n@theme inline { --color-bg: var(--nagos-bg); }",
            },
          ],
        },
        {
          id: "retheme",
          heading: "Re-theme",
          blocks: [
            {
              type: "p",
              text: "Change a token and the whole look flips. To match your brand, override the accent:",
            },
            { type: "code", code: "@theme inline { --color-accent: #10b981; }" },
          ],
        },
      ],
    },
  },

  components: {
    fr: {
      title: "Composants",
      description: "Le catalogue actuel et son API.",
      updated: UPDATED,
      sections: [
        {
          id: "button",
          heading: "Button",
          blocks: [
            {
              type: "p",
              text: "Bouton de base piloté par cva. Props : variant, size, fullWidth, + tous les attributs natifs <button>. forwardRef et className override pris en charge.",
            },
          ],
        },
        {
          id: "magnetic-button",
          heading: "MagneticButton",
          blocks: [
            {
              type: "p",
              text: "Variante qui suit le curseur (physique de ressort) avec glow. Mêmes variants que Button + props strength et radius.",
            },
          ],
        },
        {
          id: "hooks",
          heading: "Hooks",
          blocks: [
            {
              type: "p",
              text: "useMagnetic(options) renvoie ref, x, y (MotionValue) et des handlers à brancher sur n'importe quel élément Motion.",
            },
            {
              type: "note",
              text: "Card, Input, Modal, Accordion, Toast et Tabs arrivent — voir la Roadmap.",
            },
          ],
        },
      ],
    },
    en: {
      title: "Components",
      description: "The current catalogue and its API.",
      updated: UPDATED,
      sections: [
        {
          id: "button",
          heading: "Button",
          blocks: [
            {
              type: "p",
              text: "cva-driven base button. Props: variant, size, fullWidth, plus all native <button> attributes. forwardRef and className override supported.",
            },
          ],
        },
        {
          id: "magnetic-button",
          heading: "MagneticButton",
          blocks: [
            {
              type: "p",
              text: "Cursor-following variant (spring physics) with glow. Same variants as Button plus strength and radius props.",
            },
          ],
        },
        {
          id: "hooks",
          heading: "Hooks",
          blocks: [
            {
              type: "p",
              text: "useMagnetic(options) returns ref, x, y (MotionValue) and handlers to attach to any Motion element.",
            },
            {
              type: "note",
              text: "Card, Input, Modal, Accordion, Toast and Tabs are coming — see the Roadmap.",
            },
          ],
        },
      ],
    },
  },

  accessibility: {
    fr: {
      title: "Accessibilité",
      description: "Des défauts inclusifs, sans configuration.",
      updated: UPDATED,
      sections: [
        {
          id: "keyboard",
          heading: "Clavier & focus",
          blocks: [
            {
              type: "p",
              text: "Chaque élément interactif est focusable au clavier et affiche un anneau de focus visible (focus-visible) construit sur le token d'accent. Les éléments décoratifs sont aria-hidden.",
            },
          ],
        },
        {
          id: "reduced-motion",
          heading: "Mouvement réduit",
          blocks: [
            {
              type: "p",
              text: "Les animations lourdes (intro plein écran, transition de thème) respectent prefers-reduced-motion : elles sont neutralisées si l'utilisateur le demande.",
            },
          ],
        },
        {
          id: "contrast",
          heading: "Contraste & sémantique",
          blocks: [
            {
              type: "p",
              text: "HTML sémantique, libellés explicites (aria-label), et tokens de couleur pensés pour un contraste suffisant en clair comme en sombre.",
            },
          ],
        },
      ],
    },
    en: {
      title: "Accessibility",
      description: "Inclusive defaults, no configuration.",
      updated: UPDATED,
      sections: [
        {
          id: "keyboard",
          heading: "Keyboard & focus",
          blocks: [
            {
              type: "p",
              text: "Every interactive element is keyboard-focusable and shows a visible focus ring (focus-visible) built on the accent token. Decorative elements are aria-hidden.",
            },
          ],
        },
        {
          id: "reduced-motion",
          heading: "Reduced motion",
          blocks: [
            {
              type: "p",
              text: "Heavy animations (full-screen intro, theme transition) respect prefers-reduced-motion: they are disabled when the user requests it.",
            },
          ],
        },
        {
          id: "contrast",
          heading: "Contrast & semantics",
          blocks: [
            {
              type: "p",
              text: "Semantic HTML, explicit labels (aria-label), and color tokens designed for sufficient contrast in both light and dark.",
            },
          ],
        },
      ],
    },
  },

  faq: {
    fr: {
      title: "FAQ",
      description: "Les questions fréquentes sur NagosUI.",
      updated: UPDATED,
      sections: [
        {
          id: "npm",
          heading: "Est-ce une dépendance npm ?",
          blocks: [
            {
              type: "p",
              text: "Non. NagosUI suit le modèle « open code » : vous copiez et possédez le code, sans surcouche d'abstraction.",
            },
          ],
        },
        {
          id: "framework",
          heading: "Utilisable hors Next.js ?",
          blocks: [
            {
              type: "p",
              text: "Oui. Les composants de la librairie sont framework-agnostiques (React + Tailwind v4 + Motion). Le code spécifique au site vitrine reste à part.",
            },
          ],
        },
        {
          id: "theming",
          heading: "Comment changer les couleurs ?",
          blocks: [
            {
              type: "p",
              text: "En surchargeant les tokens du Foundation Layer (voir Foundation & thème). Aucun composant à retoucher.",
            },
          ],
        },
        {
          id: "browser",
          heading: "Support navigateurs ?",
          blocks: [
            {
              type: "p",
              text: "Navigateurs modernes. Les effets avancés (transition de thème via View Transitions) dégradent proprement là où l'API n'existe pas.",
            },
          ],
        },
      ],
    },
    en: {
      title: "FAQ",
      description: "Frequently asked questions about NagosUI.",
      updated: UPDATED,
      sections: [
        {
          id: "npm",
          heading: "Is it an npm dependency?",
          blocks: [
            {
              type: "p",
              text: "No. NagosUI follows the “open code” model: you copy and own the code, with no wrapper overhead.",
            },
          ],
        },
        {
          id: "framework",
          heading: "Usable outside Next.js?",
          blocks: [
            {
              type: "p",
              text: "Yes. Library components are framework-agnostic (React + Tailwind v4 + Motion). Site-specific code stays separate.",
            },
          ],
        },
        {
          id: "theming",
          heading: "How do I change colors?",
          blocks: [
            {
              type: "p",
              text: "By overriding Foundation Layer tokens (see Foundation & theming). No component to touch.",
            },
          ],
        },
        {
          id: "browser",
          heading: "Browser support?",
          blocks: [
            {
              type: "p",
              text: "Modern browsers. Advanced effects (theme transition via View Transitions) degrade gracefully where the API is missing.",
            },
          ],
        },
      ],
    },
  },

  changelog: {
    fr: {
      title: "Changelog",
      description: "Les évolutions notables de NagosUI.",
      updated: UPDATED,
      sections: [
        {
          id: "2026-05",
          heading: "Mai 2026",
          blocks: [
            {
              type: "list",
              items: [
                { text: "Section /docs (3 colonnes, scrollspy, bilingue)." },
                { text: "Transition de thème en reveal circulaire (View Transitions)." },
                { text: "Intro animée + titre hero (rolling letters)." },
                { text: "i18n FR/EN, nouvelle navigation, pages dédiées." },
                { text: "Foundation Layer clair/sombre + système Button (cva)." },
              ],
            },
          ],
        },
      ],
    },
    en: {
      title: "Changelog",
      description: "Notable changes to NagosUI.",
      updated: UPDATED,
      sections: [
        {
          id: "2026-05",
          heading: "May 2026",
          blocks: [
            {
              type: "list",
              items: [
                { text: "/docs section (3 columns, scrollspy, bilingual)." },
                { text: "Circular reveal theme transition (View Transitions)." },
                { text: "Animated intro + hero title (rolling letters)." },
                { text: "FR/EN i18n, new navigation, dedicated pages." },
                { text: "Light/dark Foundation Layer + Button system (cva)." },
              ],
            },
          ],
        },
      ],
    },
  },

  roadmap: {
    fr: {
      title: "Roadmap",
      description: "Ce qui arrive (indicatif, non contractuel).",
      updated: UPDATED,
      sections: [
        {
          id: "next",
          heading: "Prochainement",
          blocks: [
            {
              type: "list",
              items: [
                { term: "Composants", text: "Card, Input, Modal, Accordion, Toast, Tabs." },
                { term: "Blocks", text: "sections prêtes à l'emploi (hero, pricing, features)." },
                { term: "Templates", text: "pages complètes à dupliquer." },
                { term: "Icônes", text: "set d'icônes animées." },
                { term: "Outils", text: "CLI d'installation et documentation étendue." },
              ],
            },
          ],
        },
      ],
    },
    en: {
      title: "Roadmap",
      description: "What's coming (indicative, non-binding).",
      updated: UPDATED,
      sections: [
        {
          id: "next",
          heading: "Up next",
          blocks: [
            {
              type: "list",
              items: [
                { term: "Components", text: "Card, Input, Modal, Accordion, Toast, Tabs." },
                { term: "Blocks", text: "ready-made sections (hero, pricing, features)." },
                { term: "Templates", text: "full pages to duplicate." },
                { term: "Icons", text: "an animated icon set." },
                { term: "Tooling", text: "install CLI and extended documentation." },
              ],
            },
          ],
        },
      ],
    },
  },
};

function placeholder(slug: string, lang: Lang): DocArticle {
  const item = findDoc(slug);
  const title = item ? docTitle(item, lang) : slug;
  return {
    title,
    description:
      lang === "fr"
        ? "Cette page arrive bientôt."
        : "This page is coming soon.",
    updated: UPDATED,
    sections: [
      {
        id: "soon",
        blocks: [
          {
            type: "p",
            text:
              lang === "fr"
                ? "Cette section est en cours de rédaction. En attendant, l'Introduction couvre l'essentiel."
                : "This section is being written. Meanwhile, the Introduction covers the essentials.",
          },
        ],
      },
    ],
  };
}

export function getDoc(slug: string, lang: Lang): DocArticle {
  const entry = articles[slug];
  if (entry) return entry[lang];
  if (slug === DOCS_HOME_SLUG) return articles.introduction!.fr;
  return placeholder(slug, lang);
}

/** Aplatit un article en texte brut (bouton « Copier »). */
export function articleToText(a: DocArticle): string {
  const lines: string[] = [`# ${a.title}`, "", a.description, ""];
  for (const s of a.sections) {
    if (s.heading) lines.push(`## ${s.heading}`, "");
    for (const b of s.blocks) {
      if (b.type === "p" || b.type === "note") lines.push(b.text, "");
      else if (b.type === "code") lines.push("```", b.code, "```", "");
      else
        for (const it of b.items)
          lines.push(`- ${it.term ? `${it.term}: ` : ""}${it.text}`);
    }
    lines.push("");
  }
  return lines.join("\n").trim();
}
