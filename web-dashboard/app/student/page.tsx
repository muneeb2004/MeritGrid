import Link from "next/link";
import React from "react";
import { GraduationCap, Briefcase, Award, ArrowRight } from "lucide-react";

export default function StudentPortalPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased min-h-screen flex flex-col">
      {/* Subtle Geometric Background */}
      <div className="absolute inset-0 geometric-watermark pointer-events-none"></div>
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-3 text-primary dark:text-white">
          <div className="size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">MeritGrid</span>
        </div>
        <Link 
          href="/" 
          className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
        >
          Back to Home
        </Link>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Your Future,<br/>
            <span className="text-primary">One Click Away</span>
          </h1>
          <p className="text-lg text-text-muted max-w-md mx-auto">
            Discover scholarships, connect with employers, and launch your career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
          <div className="flex flex-col items-center text-center p-6 bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
              <Award size={24} />
            </div>
            <h3 className="font-bold mb-1">Scholarships</h3>
            <p className="text-sm text-text-muted">Matched to your profile</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
              <Briefcase size={24} />
            </div>
            <h3 className="font-bold mb-1">Career Opportunities</h3>
            <p className="text-sm text-text-muted">Internships & jobs</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
              <GraduationCap size={24} />
            </div>
            <h3 className="font-bold mb-1">AI Advisor</h3>
            <p className="text-sm text-text-muted">Personalized guidance</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link 
            href="/student/dashboard" 
            className="flex-1 flex items-center justify-center gap-2 h-14 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold rounded-xl shadow-md"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
          <button className="flex-1 flex items-center justify-center gap-3 h-14 px-6 bg-white border-2 border-border-default hover:border-primary transition-colors text-text-main font-bold rounded-xl">
            <svg className="size-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            Sign in with Google
          </button>
        </div>

        <p className="mt-6 text-sm text-text-muted">
          Already have an account? <Link href="/student/dashboard" className="text-primary font-semibold hover:underline">Sign in</Link>
        </p>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-sm text-text-muted">
        © {new Date().getFullYear()} MeritGrid. All rights reserved.
      </footer>
    </div>
  );
}
