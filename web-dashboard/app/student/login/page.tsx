"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
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
        setError("Invalid email or password");
        setLoading(false);
      } else {
        // Redirect based on role logic could go here, but for now Dashboard is safe
        // Usually NextAuth handles redirect if we use callbackUrl, but manual push is fine
        router.push("/student/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0d101b] p-4">
      <div className="w-full max-w-md bg-white dark:bg-[#1e2130] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8">
        {/* Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="size-12 rounded-xl bg-primary flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-3xl">school</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0d101b] dark:text-white">
            Welcome Back
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Sign in to your Student Portal
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

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#0d101b] dark:text-white"
            >
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">
                mail
              </span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d101b] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-[#0d101b] dark:text-white"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-primary text-xs font-semibold hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">
                lock
              </span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d101b] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold shadow-lg shadow-primary/25 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Signing In...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        {/* Separator */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-50 dark:bg-[#1e2130] px-4 text-slate-500 font-medium tracking-wider">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-1 gap-3">
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/student/dashboard" })}
            className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-semibold text-[#0d101b] dark:text-white"
          >
            <img 
               src="https://www.google.com/favicon.ico" 
               alt="Google" 
               className="size-5" 
            />
            Sign in with Google
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/student/onboarding"
            className="text-primary font-bold hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>

      {/* Org Link (Subtle) */}
      <div className="absolute bottom-6 text-center w-full">
         <Link href="/org/login" className="text-xs text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors">
            Are you an Organization? Login here
         </Link>
      </div>
    </div>
  );
}
