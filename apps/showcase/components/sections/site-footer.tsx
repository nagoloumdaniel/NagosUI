"use client";

import { Brand } from "@/components/ui/brand";
import { useI18n } from "@/components/providers/language-provider";

const GITHUB_URL = "https://github.com/Nagoloum/NagosUI";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line px-6 py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a
          href="/"
          id="nav-brand"
          aria-label="NagosUI"
          className="inline-flex rounded-pill outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          <Brand logoId="nav-logo" />
        </a>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <a className="transition-colors hover:text-fg" href="/composants">
            {t.nav.composants}
          </a>
          <a className="transition-colors hover:text-fg" href="/#features">
            {t.features.eyebrow}
          </a>
          <a
            className="transition-colors hover:text-fg"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t.command.github}
          </a>
        </nav>

        <span className="text-sm text-muted">
          {t.footer.tagline} · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
