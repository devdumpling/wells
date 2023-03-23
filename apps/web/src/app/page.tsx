"use client";

import Link from "next/link";
import { useTypewriter } from "react-simple-typewriter";

export default function HomePage() {
  const [copy] = useTypewriter({
    words: ["developer", "writer", "learner"],
    loop: 0,
  });

  return (
    <div className="min-h-screen dark:bg-gradient-to-br dark:from-zinc-700 dark:to-transparent flex flex-col items-center justify-center px-4">
      <section className="py-8 px-16 m-8 shadow-2xl shadow-cyan-800/40 dark:bg-gradient-to-br dark:from-violet-800 dark:to-cyan-800 rounded-3xl">
        <h1 className="text-7xl font-bold">Dev Wells</h1>
        <nav>
          <Link className="mr-2" href="/blog">
            blog.
          </Link>
          <Link className="mr-2" href="https://github.com/devdumpling">
            code.
          </Link>
          <Link className="mr-2" href="/docs">
            docs.
          </Link>
        </nav>
      </section>
      <div className="transition-all duration-300 ease-in-out hover:text-violet-200">
        <h2 className="text-3xl font-bold my-4">
          Something of a {copy} myself.
        </h2>
      </div>
    </div>
  );
}
