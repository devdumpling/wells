import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "../styles/globals.css";

import { Nav } from "@/components/Nav/Nav";

export const metadata: Metadata = {
  title: "wells.dev",
  description: "wellscome",
};

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelify.variable}`}>
      <body className="bg-stone-50 dark:bg-stone-900 min-h-screen">
        {children}
        <Nav />
      </body>
    </html>
  );
}
