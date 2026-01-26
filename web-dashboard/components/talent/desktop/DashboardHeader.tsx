import Link from "next/link";
import React from "react";

export default function DashboardHeader() {
  return (
    <header className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Talent Pool
            </h2>
            <p className="text-slate-500 text-sm">
              Reviewing 2,405 active candidates from top universities.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center size-10 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors relative cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Add Candidate
            </button>
            <Link
               href="/talent/compare"
               className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
                <span className="material-symbols-outlined text-[20px]">compare</span>
                Compare
            </Link>
          </div>
        </div>
        {/* AI Search Bar */}
        <div className="w-full relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl opacity-30 group-hover:opacity-60 transition duration-500 blur-sm"></div>
          <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 h-14 overflow-hidden">
            <div className="pl-4 pr-3 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined animate-pulse">
                auto_awesome
              </span>
            </div>
            <input
              className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 text-base font-medium h-full focus:outline-none"
              placeholder='AI Talent Scout: "Find me Data Science students from MIT with a GPA > 3.8 and hackathon experience..."'
              type="text"
            />
            <button className="mr-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 transition-colors cursor-pointer">
              <span className="material-symbols-outlined">mic</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <button className="mr-2 px-6 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors whitespace-nowrap cursor-pointer">
              Run Search
            </button>
          </div>
        </div>
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-slate-500 mr-2">
            Quick Filters:
          </span>
          <button className="group flex h-8 items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 hover:border-primary hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary">
              school
            </span>
            <span className="text-xs font-medium">Ivy League Only</span>
          </button>
          <button className="group flex h-8 items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 hover:border-primary hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary">
              code
            </span>
            <span className="text-xs font-medium">Python Experts</span>
          </button>
          <button className="group flex h-8 items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 hover:border-primary hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary">
              workspace_premium
            </span>
            <span className="text-xs font-medium">GPA &gt; 3.8</span>
          </button>
          <button className="group flex h-8 items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 hover:border-primary hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary">
              location_on
            </span>
            <span className="text-xs font-medium">Remote OK</span>
          </button>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-slate-500">Sort by:</span>
            <button className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors cursor-pointer">
              Relevance
              <span className="material-symbols-outlined text-[18px]">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
