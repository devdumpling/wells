export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">{children}</div>
      <footer className="flex justify-center p-8 mt-16 mb-8 border-t-2 border-slate-500 hover:animate-pulse">
        <address>Devon Wells</address>
      </footer>
    </div>
  );
}
