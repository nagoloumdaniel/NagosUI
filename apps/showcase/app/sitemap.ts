import type { MetadataRoute } from "next";
import { DOCS_NAV, docHref } from "@/lib/docs";

const SITE_URL = "https://nagosui.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/composants", "/blocks", "/icons", "/templates"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "weekly" as const })),
    ...DOCS_NAV.map((d) => ({
      url: `${SITE_URL}${docHref(d.slug)}`,
      changeFrequency: "weekly" as const,
    })),
  ];
}
