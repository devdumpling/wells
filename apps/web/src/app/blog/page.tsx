import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getPosts();

  console.log(posts);
  return (
    <section>
      <h1 className="my-8 text-4xl font-bold">Posts</h1>
      <hr className="border-t-2 border-slate-500" />
      {/* <ul>
        {posts.map(({ meta }) => (
          <li
            className="mt-8 duration-300 ease-in-out hover:transition-all focus:transition-all hover:underline focus:underline"
            key={meta.slug}
          >
            <Link href={`/blog/${meta.slug}`}>
              <div>
                <h2 className="my-4 text-2xl font-bold">{meta.title}</h2>
                {meta?.description && (
                  <p className="my-2">{meta.description}</p>
                )}
                {meta?.date && <p className="text-gray-500">{meta.date}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul> */}
    </section>
  );
}
