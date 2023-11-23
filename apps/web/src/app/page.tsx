import Header from "@/components/Header";
import { Hero } from "@/components/Hero";

export default async function HomePage() {
  return (
    <div>
      <Header />
      <Hero title="{ refactoring... }" subtitle="> beep boop" />
    </div>
  );
}
