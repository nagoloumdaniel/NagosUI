import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsPage } from "@/components/docs/docs-page";
import { DOCS_NAV, DOCS_HOME_SLUG, findDoc } from "@/lib/docs";

export function generateStaticParams() {
  return DOCS_NAV.filter((d) => d.slug !== DOCS_HOME_SLUG).map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = findDoc(slug);
  if (!doc) return {};
  return { title: doc.fr, alternates: { canonical: `/docs/${slug}` } };
}

export default async function DocsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === DOCS_HOME_SLUG || !findDoc(slug)) notFound();
  return <DocsPage slug={slug} />;
}
