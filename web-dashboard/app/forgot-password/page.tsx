"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0d101b] p-4">
      <div className="w-full max-w-md bg-white dark:bg-[#1e2130] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8">
        
        {/* Brand */}
        <div className="flex justify-center mb-6">
           <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">lock_reset</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#0d101b] dark:text-white text-center mb-2">
          Forgot Password?
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm text-center mb-8">
          Enter your email address to receive a password reset link.
        </p>

        {submitted ? (
          <div className="text-center animate-in fade-in zoom-in duration-300">
            <div className="mx-auto size-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="text-lg font-bold text-[#0d101b] dark:text-white mb-2">Check your email</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              We have sent a password reset link to <span className="font-semibold text-[#0d101b] dark:text-white">{email}</span>
            </p>
            <Link
              href="/login"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
            >
              Back to Login
            </Link>
          </div>
        ) : (
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

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold shadow-lg shadow-primary/25 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending Link...</span>
                </>
              ) : (
                <span>Reset Password</span>
              )}
            </button>
            
             <div className="text-center mt-4">
              <Link href="/login" className="text-sm text-slate-500 hover:text-[#0d101b] dark:text-slate-400 dark:hover:text-white transition-colors flex items-center justify-center gap-2">
                 <span className="material-symbols-outlined text-base">arrow_back</span>
                 Back to Login
              </Link>
             </div>
          </form>
        )}
      </div>
    </div>
  );
}
