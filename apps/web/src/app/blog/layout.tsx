export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">{children}</div>
      <footer className="mt-16 mb-8 p-8 flex justify-center border-slate-500 border-t-2 hover:animate-pulse">
        <address>Devon Wells</address>
      </footer>
    </div>
  );
}