"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Code2, Search } from "lucide-react";
import { cn } from "@nagos/ui";
import { Brand } from "@/components/ui/brand";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { CommandMenu } from "@/components/ui/command-menu";
import { useI18n } from "@/components/providers/language-provider";

const NAV = [
  { key: "docs", href: "/docs" },
  { key: "composants", href: "/composants" },
  { key: "icons", href: "/icons" },
  { key: "blocks", href: "/blocks" },
  { key: "templates", href: "/templates" },
] as const;

const GITHUB_URL = "https://github.com/Nagoloum/NagosUI";

export function SiteHeader() {
  const { t } = useI18n();
  const [cmdOpen, setCmdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "sticky top-0 z-50 w-full transition-colors duration-300",
          scrolled
            ? "border-b border-line bg-bg/70 backdrop-blur-glass"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6">
          {/* Brand */}
          <a
            href="/"
            id="nav-brand"
            aria-label="NagosUI"
            className="inline-flex rounded-pill outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <Brand logoId="nav-logo" />
          </a>

          {/* Nav */}
          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="rounded-pill px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          {/* Search */}
          <button
            type="button"
            onClick={() => setCmdOpen(true)}
            className="ml-auto flex h-9 items-center gap-2 rounded-pill border border-line bg-surface px-3 text-sm text-muted transition-colors hover:bg-surface-hover sm:w-56"
          >
            <Search className="size-4" />
            <span className="hidden sm:inline">{t.header.search} </span>
            <kbd className="ml-auto hidden h-5 items-center justify-center rounded-md border border-line px-1.5 text-[12px] leading-none sm:inline-flex">
              Ctrl-K
            </kbd>
          </button>

          <LanguageToggle />
          <ThemeToggle />

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="hidden size-9 place-items-center rounded-pill border border-line bg-surface text-fg transition-colors hover:bg-surface-hover sm:grid"
          >
            <Code2 className="size-4.5" />
          </a>
        </div>
      </motion.header>

      <CommandMenu open={cmdOpen} onOpenChange={setCmdOpen} />
    </>
  );
}
