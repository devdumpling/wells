import type { Metadata } from "next";
import "../styles/globals.css";

import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "dev.wells",
  description: "wellscome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
