import { DocsPage } from "@/components/docs/docs-page";
import { DOCS_HOME_SLUG } from "@/lib/docs";

export default function DocsIndexPage() {
  return <DocsPage slug={DOCS_HOME_SLUG} />;
}
