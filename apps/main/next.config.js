const withTM = require("next-transpile-modules")(["ui"]);

const { BLOG_URL } = process.env;

module.exports = withTM({
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
    ];
  },
});
