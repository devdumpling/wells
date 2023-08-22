import Link from "next/link";
import { Post } from "@/app/api/posts/types";

const NUM_POSTS_TO_SHOW = 3;

const sortPosts = (posts: Post[]) => {
  return posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
};

export function RecentPosts({ posts }: { posts: Post[] }) {
  const recentPosts = sortPosts(posts).slice(0, NUM_POSTS_TO_SHOW);

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid gap-16 pt-3 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {recentPosts.map((post) => (
          <div key={post.frontmatter.slug}>
            <Link href={`/blog/${post.frontmatter.slug}`}>
              <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                {post.frontmatter.title}
              </h3>
              <p className="mt-3 text-base text-gray-500">
                {post.frontmatter.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
