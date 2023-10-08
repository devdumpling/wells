import "../styles/globals.css";
import { Inter, Pixelify_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
  display: "swap",
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
    <html lang="en" className={`${inter.variable} ${pixelify.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
