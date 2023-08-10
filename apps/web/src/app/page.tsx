import { Hero } from "@/components/Hero";
import { RecentPosts } from "@/components/RecentPosts";
import { getPosts } from "@/lib/posts";

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
