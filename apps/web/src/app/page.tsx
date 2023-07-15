import { Hero } from "@/components/Hero";
import { RecentPosts } from "@/components/RecentPosts";

export default function HomePage() {
  return (
    <div>
      <Hero
        title="Dev Wells"
        subtitle="Something of a button presser myself."
      />
      <RecentPosts />
    </div>
  );
}
