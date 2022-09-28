export default {
  github: "https://github.com/devdumpling/wells",
  docsRepositoryBase: "https://github.com/devdumpling/wells/blob/main",
  projectLink: "httpsL//github.com/devdumpling/wells",
  titleSuffix: " – Wells",
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Wells</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Dev's monorepo
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Artificus: Welcome to The World" />
      <meta property="og:title" content="Artificus: Welcome to the World" />
      <meta name="og:description" content="Artificus: Welcome to The World " />
      <meta name="apple-mobile-web-app-title" content="Artificus" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <meta
        name="msapplication-TileImage"
        content="/favicon/favicon-96x96.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: <>MIT {new Date().getFullYear()} © devdumpling.</>,
  unstable_faviconGlyph: "W",
};
