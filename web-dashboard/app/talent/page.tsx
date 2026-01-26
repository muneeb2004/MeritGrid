import React from "react";
import Link from "next/link";

export default function TalentPortalPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark font-display text-[#111318] dark:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                  grid_view
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">MeritGrid Talent</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
             <Link href="/student" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                Switch to Student View
             </Link>
             <Link href="/talent/dashboard">
                <button className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary-dark">
                Log In
                </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero / Login Section */}
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight mb-2">Welcome Back</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sign in to manage your recruitment pipeline
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Institutional Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-lg border-0 bg-gray-50 dark:bg-gray-800 py-3 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-4"
                placeholder="admissions@university.edu"
              />
            </div>
            
            <Link href="/talent/dashboard" className="block w-full">
             <button className="flex w-full justify-center rounded-lg bg-primary px-3 py-3 text-sm font-bold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all">
                Sign In with SSO
              </button>
            </Link>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white dark:bg-gray-900 px-2 text-xs text-gray-500">Or continue with</span>
                </div>
              </div>

             <div className="grid grid-cols-2 gap-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  <span className="text-lg font-bold">G</span> Google
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  <span className="text-lg font-bold">M</span> Microsoft
                </button>
             </div>
          </div>
        </div>
        
        <p className="mt-8 text-center text-xs text-gray-500">
           By clicking continue, you agree to our <a href="#" className="font-semibold text-primary hover:text-primary-dark">Terms of Service</a> and <a href="#" className="font-semibold text-primary hover:text-primary-dark">Privacy Policy</a>.
        </p>
      </main>
    </div>
  );
}
