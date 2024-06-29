import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href="/">wells.dev</Link>
        </li>
        <li>
          <Link href="/posts">posts</Link>
        </li>
      </ul>
    </nav>
  );
}
