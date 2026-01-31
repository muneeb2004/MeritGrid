"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OrgLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Invalid business email or password");
        setLoading(false);
      } else {
        router.push("/org/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0d101b]">
      
      {/* Left Panel: Hero / Info */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
              <span className="material-symbols-outlined text-xl">domain</span>
            </div>
            <span className="text-white text-xl font-bold tracking-wide">MeritGrid Org</span>
          </div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Find the next generation of <span className="text-primary">tech talent</span>.
          </h1>
          <p className="text-slate-400 text-lg max-w-md">
            Streamline your recruitment process with AI-driven matching and verified student profiles.
          </p>
        </div>
        <div className="relative z-10 text-slate-500 text-sm">
          © 2026 MeritGrid Inc. All rights reserved.
        </div>
      </div>

      {/* Right Panel: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-12 bg-white dark:bg-[#0d101b]">
        <div className="w-full max-w-md bg-white dark:bg-[#0d101b]"> {/* Transparent on right side logic? */}
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#0d101b] dark:text-white mb-2">Organization Sign In</h2>
            <p className="text-slate-500 dark:text-slate-400">
               Enter your organization credentials to access the dashboard.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 flex items-start gap-3">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400 shrink-0">
                error
              </span>
              <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0d101b] dark:text-white">Business Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hr@company.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e2130] text-[#0d101b] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
               <div className="flex justify-between items-center">
                 <label className="text-sm font-semibold text-[#0d101b] dark:text-white">Password</label>
                 <Link href="/forgot-password" className="text-sm text-primary hover:underline font-medium">Reset?</Link>
               </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e2130] text-[#0d101b] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-[#0d101b] dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-[#0d101b] font-bold text-lg shadow-lg active:scale-[0.98] disabled:opacity-70 transition-all"
            >
              {loading ? "Authenticating..." : "Sign In to Organization"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Not a partner yet?{" "}
            <a href="mailto:partners@meritgrid.com" className="text-primary font-bold hover:underline">
              Request Access
            </a>
          </p>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <Link href="/student/login" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
               Looking for Student Login?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
