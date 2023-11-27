import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

// character = landing page
// journal = blog
// questlog = projects / jobs
// spellbook = skills / tech stack

const Header: React.FC = () => {
  return (
    <header className="container flex items-center justify-center py-4 mx-auto sm:py-8">
      <nav className="flex px-8 space-x-12 font-pixelify">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "link" }), "sm:text-lg")}
        >
          Character
        </Link>
        <Link
          href="/journal"
          className={cn(buttonVariants({ variant: "link" }), "sm:text-lg")}
        >
          Journal
        </Link>
        <Link
          href="/quests"
          className={cn(buttonVariants({ variant: "link" }), "sm:text-lg")}
        >
          Quests
        </Link>
      </nav>
    </header>
  );
};

export default Header;
