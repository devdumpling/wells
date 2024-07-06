import React from "react";
import Link from "next/link";

import { CurrentWorkingDirectory } from "./Terminal";
import { StdIn } from "./StdIn";

export const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="block text-fuchsia-400 hover:text-fuchsia-300">
      {children}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="sticky bg-inherit bottom-0 w-full p-4 border-t-[1px] dark:border-y-stone-800">
      <div className="flex font-mono mb-2">
        <NavItem href="/">~/dev</NavItem>
        <CurrentWorkingDirectory />
      </div>

      <StdIn />
    </nav>
  );
};
