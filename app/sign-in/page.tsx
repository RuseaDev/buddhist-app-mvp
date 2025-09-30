"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import {createClient} from "@/lib/supabase/client";

export default function SignInPage() {
    const supabase = createClient();
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    async function onSubmit(e: React.FormEvent) {

        e.preventDefault();
        setMsg("");
        const { error } = isSignUp
    ? await supabase.auth.signUp({ email, password })
    : await supabase.auth.signInWithPassword({ email, password });

        if (error) return setMsg(error.message);
        if (isSignUp) setMsg("Check your email for the verification link.");
    }

    return (
        <main className="mx-auto max-w-sm p-6">
            <h1 className="mb-4 text-2xl font-semibold">
                {isSignUp ? "Create Account" : "Sign In"}
            </h1>
            <form onSubmit={onSubmit} className="space-y-3">
                <input className="w-full rounded border p-2" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="w-full rounded border p-2" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="w-full rounded bg-black p-2 text-white">{isSignUp ? "Sign Up" : "Sign In"}</button>
                <button type="button" className="text-sm underline" onClick={() => setIsSignUp(s=>!s)}>
                {isSignUp ? "Have an account? Sign in" : "New here? Create one"}
                </button>
                {msg && <p className="text-sm text-red-600">{msg}</p>}
                
            </form>
        </main>
    )
}