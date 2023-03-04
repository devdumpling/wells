
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Devon Wells</h1>
      <Link href="/blog">blog.</Link>
      <Link href="https://github.com/devdumpling">code.</Link>
    </div>
  );
}
