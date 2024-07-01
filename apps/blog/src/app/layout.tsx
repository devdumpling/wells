import type { Metadata } from "next";
import "../styles/globals.css";

import { Nav } from "@/components/Nav/Nav";

export const metadata: Metadata = {
  title: "wells.dev",
  description: "wellscome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 dark:bg-stone-900 min-h-screen">
        {children}
        <Nav />
      </body>
    </html>
  );
}
