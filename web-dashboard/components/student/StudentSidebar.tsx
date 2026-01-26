"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function StudentSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#1e2130] border-r border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 flex flex-col h-full shrink-0 transition-transform duration-300 hidden lg:flex">
      {/* Brand */}
      <div className="p-6 flex items-center gap-3">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
          <span className="material-symbols-outlined">school</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#0d101b] dark:text-white text-base font-bold leading-tight tracking-wide">
            MeritGrid
          </h1>
          <p className="text-slate-400 text-xs font-medium">
            Student Portal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto no-scrollbar">
        <Link
          href="/student/dashboard"
          className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
            isActive("/student/dashboard")
              ? "bg-primary/10 text-primary dark:text-white"
              : "hover:bg-slate-50 dark:hover:bg-slate-800"
          }`}
        >
          <span className={`material-symbols-outlined ${isActive("/student/dashboard") ? "icon-fill" : ""}`}>
            dashboard
          </span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>

        {/* Discover */}
        <Link
          href="/student/discover"
          className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
            isActive("/student/discover")
              ? "bg-primary/10 text-primary dark:text-white"
              : "hover:bg-slate-50 dark:hover:bg-slate-800"
          }`}
        >
          <span className={`material-symbols-outlined ${isActive("/student/discover") ? "icon-fill" : ""}`}>
            explore
          </span>
          <span className="text-sm font-medium">Discover</span>
        </Link>
        
        {/* Scholarships */}
        <Link
          href="/student/scholarships"
          className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
            isActive("/student/scholarships")
              ? "bg-primary/10 text-primary dark:text-white"
              : "hover:bg-slate-50 dark:hover:bg-slate-800"
          }`}
        >
           <span className={`material-symbols-outlined ${isActive("/student/scholarships") ? "icon-fill" : ""}`}>
            paid
          </span>
          <span className="text-sm font-medium">Scholarships</span>
        </Link>

        {/* Advisor */}
        <Link
          href="/student/advisor"
          className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
            isActive("/student/advisor")
              ? "bg-primary/10 text-primary dark:text-white"
              : "hover:bg-slate-50 dark:hover:bg-slate-800"
          }`}
        >
           <span className={`material-symbols-outlined ${isActive("/student/advisor") ? "icon-fill" : ""}`}>
            smart_toy
          </span>
          <span className="text-sm font-medium">AI Advisor</span>
        </Link>

         {/* Calendar/Schedule */}
        <Link
          href="/student/schedule"
          className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
            isActive("/student/schedule")
              ? "bg-primary/10 text-primary dark:text-white"
              : "hover:bg-slate-50 dark:hover:bg-slate-800"
          }`}
        >
           <span className={`material-symbols-outlined ${isActive("/student/schedule") ? "icon-fill" : ""}`}>
            calendar_month
          </span>
          <span className="text-sm font-medium">Schedule</span>
        </Link>

         {/* Documents */}
        <button className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 group text-left w-full">
           <span className="material-symbols-outlined">
            folder_open
          </span>
          <span className="text-sm font-medium">Documents</span>
        </button>
      </nav>

      {/* Footer User Profile */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
         <Link
            href="/student/notifications"
            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group mb-2 ${
                isActive("/student/notifications")
                ? "bg-primary/10 text-primary dark:text-white"
                : "hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            <div className="relative">
                <span className={`material-symbols-outlined ${isActive("/student/notifications") ? "icon-fill" : ""}`}>
                notifications
                </span>
                <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border border-white dark:border-[#1e2130]"></span>
            </div>
            <span className="text-sm font-medium">Notifications</span>
          </Link>

        <Link href="/student/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4WtBqU_RuyJyc2lpnJrtSS-1kov7Ts0i2nYIU-1ceH3p4mAC127fbn2UB3PrQeCTm65SkcRrB80OYRvpko2Jsa0OFT3obWcI29H3JGhl6_Kb4WGZxb5NJzF29Hn4BCan2KjhvfQPuOmogmOZoSy-qzdJltMCJl-Dz4qGmj3RLS10AkhrWhY9d6q8A1qKbvI-PGVH-NHYvn5meHetrrHmr6ZeXMan0cmWIuXR3KibC2_4ocEsOukON60z3nyu5AgI8KbPtXSV57gGl" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-[#0d101b] dark:text-white text-sm font-medium">Raza Naqvi</p>
            <p className="text-slate-500 text-xs">Pre-Engineering</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
