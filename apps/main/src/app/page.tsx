import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen dark:bg-gradient-to-br dark:from-zinc-700 dark:to-transparent flex">
      <section className="flex">
        <h1 className="text-3xl">Devon Wells</h1>
        <Link href="/blog">blog.</Link>
        <Link href="https://github.com/devdumpling">code.</Link>
        <Link href="/docs">docs.</Link>
      </section>
    </div>
  );
}
