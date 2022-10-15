import { AppProps } from "next/app";
import "nextra-theme-blog/style.css";

export default function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
