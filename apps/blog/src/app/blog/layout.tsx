import { Header } from "@/components/Header/Header";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-4">
      <Header title="dev.words" />
      {children}
    </main>
  );
}
