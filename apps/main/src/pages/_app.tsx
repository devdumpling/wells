import { AppProps } from "next/app";
import { font } from "src/styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/InterDisplay-roman.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
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
        <meta name="apple-mobile-web-app-title" content="Wells" />
        <meta name="application-name" content="Wells" />
        <meta name="theme-color" content="#ffffff" />
        <title>Wells</title>
      </Head>
      <div className={font}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
