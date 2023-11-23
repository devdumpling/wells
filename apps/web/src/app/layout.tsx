import "../styles/globals.css";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
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
          "min-h-screen bg-tertiary font-sans antialiased",
          fontSans.variable
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
