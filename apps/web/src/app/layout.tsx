import "../styles/globals.css";
import { Inter, Pixelify_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fontPixelify = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify",
});

export const metadata = {
  title: "Wells",
  description: "Wellscome to my website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontPixelify.variable
        )}
      >
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
