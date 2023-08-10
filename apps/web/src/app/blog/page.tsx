import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section>
      <h1 className="my-8 text-4xl font-bold">Posts</h1>
      <hr className="border-t-2 border-slate-500" />
      <ul>
        {posts.map(({ frontmatter }) => (
          <li
            className="mt-8 duration-300 ease-in-out hover:transition-all focus:transition-all hover:underline focus:underline"
            key={frontmatter.slug}
          >
            <Link href={`/blog/${frontmatter.slug}`}>
              <div>
                <h2 className="my-4 text-2xl font-bold">{frontmatter.title}</h2>
                {frontmatter?.description && (
                  <p className="my-2">{frontmatter.description}</p>
                )}
                {frontmatter?.date && (
                  <p className="text-gray-500">{frontmatter.date}</p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
