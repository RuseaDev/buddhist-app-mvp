"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const nav = [ 
    {href: "/", label: "Home"},
    {href: "/Foundations", label: "Foundations"},
    {href: "/Intermediate", label: "Intermediate"},
    {href: "/Advanced", label: "Advanced"},
]


export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
    }, [dark]);
    
    return(
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-900/70"       
        >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="logo" className="h-7 w-7" />
                <span className="sr-only">Buddhist Vision</span>
                </Link>

                <button onClick = {() => setDark((v) => !v )}
                aria-label ="Toggle dark mode"
                className="hidden rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:inline-flex">
                    Yet
                </button>       
            </div>
            <div className="hidden items-center gap-8 sm:flex">
                {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href} className={`text-sm font-medium ${active?
                            "text-neutral-900 dark:text-white"
                            : "text-neutral=500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                        }`}
                        >{item.label}</Link>
                    )
                })}
            </div>

            <div className="hidden items-center gap-3  sm:flex">
                <Link href="/signin" className="rounded-md border border-rose-300 bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-900 hover:bg-rose-200">
                Sign In</Link>"
            </div>
        </nav>
        </header>
    )
}