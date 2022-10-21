import { container } from "src/styles/app.css";
import Link from "next/link";

export default function Main() {
  return (
    <div className={container}>
      <h1>Devon Wells</h1>
      <Link href="/blog">blog.</Link>
      <Link href="https://github.com/devdumpling">code.</Link>
    </div>
  );
}
