"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

function CustomLinkContent({ prefetch, path, children }) {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link
      className={active ? "text-blue-500" : "text-white"}
      href={path}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}

export default function CustomLink({ prefetch = true, path, children }) {
  return (
    <Suspense
      fallback={
        <Link className="text-white" href={path} prefetch={prefetch}>
          {children}
        </Link>
      }
    >
      <CustomLinkContent prefetch={prefetch} path={path}>
        {children}
      </CustomLinkContent>
    </Suspense>
  );
}
