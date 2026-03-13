import { withDocs } from "@farming-labs/next/config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  serverExternalPackages: ["just-bash", "bash-tool"],
  async redirects() {
    return [
      { source: "/", destination: "/docs", permanent: false },
      { source: "/why", destination: "/docs/why", permanent: false },
      { source: "/https", destination: "/docs/https", permanent: false },
      { source: "/commands", destination: "/docs/commands", permanent: false },
      { source: "/configuration", destination: "/docs/configuration", permanent: false },
      { source: "/changelog", destination: "/docs/changelog", permanent: false },
    ];
  },
};

export default withDocs(nextConfig);
