import "../styles/globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
