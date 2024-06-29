import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <ul className="flex text-red-800">
          <li>
            <Link href="/">wells.dev</Link>
          </li>
          <li>
            <Link href="/posts">posts</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
