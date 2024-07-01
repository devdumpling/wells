import React from "react";
import Link from "next/link";

import { CurrentWorkingDirectory } from "./Terminal";

export const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="block pl-4 text-fuchsia-500 hover:text-fuchsia-400"
    >
      {children}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="absolute bottom-0 w-full flex items-center justify-between py-4 border-y-[1px] dark:border-y-stone-800">
      <div className="flex font-mono">
        <NavItem href="/">~/dev</NavItem>
        <CurrentWorkingDirectory />
      </div>
    </nav>
  );
};
