"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function StudentBottomNav() {
  const pathname = usePathname();

  // Helper to check if path is active
  const isActive = (path: string) => pathname === path || (path !== "/student/dashboard" && pathname.startsWith(path));

  return (
    <>
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex h-20 w-full max-w-[430px] items-center justify-around border-t border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 ios-blur px-6 pb-4 lg:hidden">
        <Link
          href="/student/dashboard"
          className={`flex flex-col items-center gap-1 transition-colors cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
            isActive("/student/dashboard") ? "text-primary dark:text-white" : "text-slate-400"
          }`}
        >
          <span className={`material-symbols-outlined ${isActive("/student/dashboard") ? "icon-fill" : ""}`}>
            dashboard
          </span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        
        <Link
          href="/student/discover"
          className={`flex flex-col items-center gap-1 transition-colors cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
            isActive("/student/discover") ? "text-primary dark:text-white" : "text-slate-400"
          }`}
        >
          <span className={`material-symbols-outlined ${isActive("/student/discover") ? "icon-fill" : ""}`}>
            explore
          </span>
          <span className="text-[10px] font-medium">Discover</span>
        </Link>

        {/* Replaced Documents placeholder with Advisor as it's a key demo now */}
        <Link
          href="/student/advisor"
          className={`flex flex-col items-center gap-1 transition-colors cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
            isActive("/student/advisor") ? "text-primary dark:text-white" : "text-slate-400"
          }`}
        >
           <span className={`material-symbols-outlined ${isActive("/student/advisor") ? "icon-fill" : ""}`}>
            smart_toy
          </span>
          <span className="text-[10px] font-medium">Advisor</span>
        </Link>

        <Link
          href="/student/profile"
          className={`flex flex-col items-center gap-1 transition-colors cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
            isActive("/student/profile") ? "text-primary dark:text-white" : "text-slate-400"
          }`}
        >
          <span className={`material-symbols-outlined ${isActive("/student/profile") ? "icon-fill" : ""}`}>
            person
          </span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </nav>
      {/* Home Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-[60] h-1.5 w-32 rounded-full bg-slate-200 dark:bg-slate-700/50 lg:hidden"></div>
    </>
  );
}
