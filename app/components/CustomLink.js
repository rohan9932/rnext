"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ prefetch = true, path, children }) {
  const pathname = usePathname();
  // console.log(pathname);
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
