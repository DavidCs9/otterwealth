"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopNav() {
  const pathname = usePathname();
  return (
    <nav className="w-screen">
      <div className="m-6 flex h-16 items-center justify-between rounded-2xl bg-gray-800 px-4">
        <Link href="/" className="text-xl font-bold">
          OW
        </Link>
        <Link
          href="/"
          className={`link ${pathname === "/" ? "text-blue-300" : ""}`}
        >
          Add
        </Link>
        <Link
          href="/expenses"
          className={`link ${pathname === "/expenses" ? "text-blue-300" : ""}`}
        >
          Expenses
        </Link>
        <UserButton />
      </div>
    </nav>
  );
}
