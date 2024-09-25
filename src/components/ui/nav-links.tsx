"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-end gap-4 mr-4 mt-2 text-xl text-blue-500 font-bold">
      <Link
        className={`link hover:underline underline-offset-3 ${
          pathname === "/" ? "text-purple-500" : ""
        }`}
        href="/"
      >
        Student-Mentor
      </Link>

      <Link
        className={`link hover:underline underline-offset-3 ${
          pathname === "/academic-details" ? "text-purple-500" : ""
        }`}
        href="/academic-details"
      >
        Subject-Mapping
      </Link>
      <Link
        className={`link hover:underline underline-offset-3 ${
          pathname === "/student-subject" ? "text-purple-500" : ""
        }`}
        href="/student-subject"
      >
        Student-Subject
      </Link>
    </nav>
  );
}
