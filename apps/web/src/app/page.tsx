import { Hero } from "@/components/Hero";
import { RecentPosts } from "@/components/RecentPosts";
import { getPosts } from "@/lib/posts";

// Rebuilds the page every 10 hours
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 36000;

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div>
      <Hero
        title="Dev Wells"
        subtitle="Something of a button presser myself."
      />
      <RecentPosts posts={posts} />
    </div>
  );
}
