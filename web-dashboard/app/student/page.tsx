import Link from "next/link";
import React from "react";

export default function StudentPortalPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      {/* Top Navigation / Header */}
      <header className="flex items-center bg-transparent p-4 justify-between w-full max-w-md mx-auto">
        <div className="text-primary flex size-12 shrink-0 items-center justify-center">
          <span
            className="material-symbols-outlined text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            school
          </span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          MeritGrid
        </h2>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto geometric-bg">
        {/* Logo and Branding */}
        <div className="mb-10 text-center">
          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl inline-block mb-6">
            <span className="material-symbols-outlined text-primary text-5xl">
              grid_view
            </span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-50 tracking-tight text-[32px] font-bold leading-tight px-4 text-center">
            Your Future, One Click Away.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">
            Start your college journey today
          </p>
        </div>

        {/* Authentication Buttons */}
        <div className="w-full space-y-4">
          {/* Google Button */}
          <Link href="/student/dashboard" className="flex items-center justify-center gap-3 w-full h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
            <svg
              fill="none"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="text-slate-900 dark:text-slate-100 text-base font-semibold">
              Continue with Google
            </span>
          </Link>

          {/* Email Button */}
          <button className="flex items-center justify-center w-full h-14 bg-primary text-white rounded-xl shadow-md hover:bg-primary/90 transition-colors cursor-pointer">
            <span className="material-symbols-outlined mr-2">mail</span>
            <span className="text-base font-semibold">Continue with Email</span>
          </button>
        </div>

        {/* Meta Link */}
        <div className="mt-8">
          <Link
            className="text-primary text-sm font-medium hover:underline"
            href="#"
          >
            New here? Create an account
          </Link>
        </div>

        {/* Minimal Illustration Section */}
        <div className="mt-auto w-full pt-10 pb-6 flex justify-center">
          <div className="relative w-full max-w-[280px] h-[180px] bg-slate-100/50 dark:bg-slate-800/50 rounded-3xl overflow-hidden flex items-end justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            {/* Using img tag to avoid remote pattern config requirements for demo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Illustration of a happy student celebrating college admission with confetti"
              className="z-10 object-contain w-full h-full p-4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrnz0Kp3rU2eo3hKbRBYj8U0tYfQHmewIIMnq6lkxDRnkQ2w4Sy7UkdLLKPZmjjIo1qUtOjCpOoJq5dwiFXpT6kILUOO1Dd8xVxsAQ9iG6dJd3QqSqgOffUR2w7-kuLC0JrFVKZiNicqhCsBqMQ8Pnz5D8C3LHl7j7kLqDk24SjL9vF_GgoRrjrVWJDkkRMf8j-GLD5FUswGIz_hsCCHbSkDE4dlPOLjJOWREqfGno-gaOY1ojlnJS9mIg4h66eZ1Sx4HxJzAiTU57"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-lg p-2 text-center text-[10px] text-slate-500 z-20 font-medium tracking-wide uppercase">
              Your journey begins here
            </div>
          </div>
        </div>
      </main>

      {/* Footer Disclaimer */}
      <footer className="p-6 text-center text-slate-400 text-[11px] max-w-md mx-auto">
        <p>
          By continuing, you agree to MeritGrid&apos;s <br />
          <Link className="underline" href="#">
            Terms of Service
          </Link>{" "}
          &amp;{" "}
          <Link className="underline" href="#">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}
