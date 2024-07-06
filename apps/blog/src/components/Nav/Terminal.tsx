"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DirectoryLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="text-fuchsia-400 hover:text-fuchsia-300">
      {children}
    </Link>
  );
};

export const CurrentWorkingDirectory = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const split = pathname.split("/");

  return (
    <>
      {split.map((segment, index) => {
        const href = index === 0 ? segment : `/${segment}`;
        return (
          <DirectoryLink key={href} href={href}>
            {href}
          </DirectoryLink>
        );
      })}
    </>
  );
};
