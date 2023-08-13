const { DOCS_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        port: "",
        pathname: "/devdumpling/writing/**",
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
    ];
  },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
