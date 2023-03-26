import { getPosts } from "@/utils";
import Link from "next/link";

export default function BlogPage() {
  const posts = getPosts();
  return (
    <section>
      <h1 className="text-5xl font-bold my-8">Posts</h1>
      <ul>
        {posts.map(({ meta }) => (
          <li
            className="hover:transition-all focus:transition-all ease-in-out duration-300 hover:underline focus:underline"
            key={meta.slug}
          >
            <Link href={`/blog/${meta.slug}`}>
              <div>
                <h2 className="text-3xl font-bold my-4">{meta.title}</h2>
                {meta?.description && (
                  <p className="my-2">{meta.description}</p>
                )}
                {meta?.date && <p className="text-gray-500">{meta.date}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
