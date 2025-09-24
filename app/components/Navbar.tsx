"use client";

import { Moon, Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import {ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";


export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex justify-center gap-3">
          <a href="/"><img
            src="/logo.png"
            alt="logo"
            className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          /></a>
        </div>

        {/* Links + Buttons */}
        <div className="flex items-center gap-5 sm:gap-8">
          <Moon className="h-6 w-6 text-neutral-600 hover:text-neutral-900" />
          <a
            href="/"
            className="text-base sm:text-lg text-neutral-600 hover:text-neutral-900"
          >
            Home
          </a>
          <a
            href="/Foundations"
            className="text-base sm:text-lg text-neutral-600 hover:text-neutral-900"
          >
            Foundations
          </a>
          <a
            href="/Intermediate"
            className="text-base sm:text-lg text-neutral-600 hover:text-neutral-900"
          >
            Intermediate
          </a>
          <a
            href="/Advanced"
            className="text-base sm:text-lg text-neutral-600 hover:text-neutral-900"
          >
            Advanced
          </a>

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
