/* eslint-disable react/no-unknown-property */
const YEAR = new Date().getFullYear();

export default {
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      <time>{YEAR}</time> © Dev Wells.
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ meta }: { meta: any }) => (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
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
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="apple-mobile-web-app-title" content="Wells Blog" />
      <meta name="application-name" content="Wells Blog" />
      <meta name="theme-color" content="#ffffff" />
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  darkMode: true,
  readMore: "Read More →",
  navs: [
    {
      url: "https://github.com/devdumpling/",
      name: "Code",
    },
    {
      url: "https://linkedin.com/in/devon-a-wells/",
      name: "Pretend",
    },
  ],
};
