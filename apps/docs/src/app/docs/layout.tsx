import docsConfig from "../../../docs.config";
import { createDocsLayout, createDocsMetadata } from "@farming-labs/theme";

export const metadata = createDocsMetadata(docsConfig);

const DocsLayout = createDocsLayout(docsConfig);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DocsLayout>{children}</DocsLayout>
    </>
  );
}
