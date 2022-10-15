const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.tsx",
  unstable_staticImage: true,
  unstable_defaultShowCopyCode: true,
  unstable_readingTime: true,
});
module.exports = withNextra({
  reactStrictMode: true,
});
