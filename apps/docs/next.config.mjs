import createMDX from "@next/mdx";
import { withDocs } from "@farming-labs/next/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  serverExternalPackages: ["just-bash", "bash-tool"],
};

export default withDocs(withMDX(nextConfig));
