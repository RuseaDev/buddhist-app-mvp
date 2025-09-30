"use client";

import { Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex justify-center gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={64}
              height={64}
              className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            />
          </Link>
        </div>

        {/* Links + Buttons */}
        <div className="flex items-center gap-5 sm:gap-8">
          <Moon className="h-6 w-6 text-neutral-600 hover:text-neutral-900" />
          <Link
            href="/"
            className="text-base sm:text-lg text-neutral-600 hover:text-neutral-900"
          >
            Home
          </Link>
          <Link
            href="/Foundations"
            className="text-base sm:text-lg text-neutral-600 hover:text-neutral-900"
          >
            Foundations
          </Link>
          <Link
            href="/Intermediate"
            className="text-base sm:text-lg text-neutral-600 hover:text-neutral-900"
          >
            Intermediate
          </Link>
          <Link
            href="/Advanced"
            className="text-base sm:text-lg text-neutral-600 hover:text-neutral-900"
          >
            Advanced
          </Link>

          <button className="rounded-md border border-red-200 bg-red-100 px-4 py-2 text-sm sm:text-base text-red-800 hover:bg-red-200">
            Sign In
          </button>

          <button className="rounded-md border border-red-800 bg-red-800 px-4 py-2 text-sm sm:text-base text-white hover:bg-red-900">
            Register
          </button>

          <a href="/test"> Test</a>
           
          

          
        </div>
      </nav>
    </header>
  );
}
