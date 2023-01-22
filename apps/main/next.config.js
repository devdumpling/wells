const { BLOG_URL, DOCS_URL } = process.env;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
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
