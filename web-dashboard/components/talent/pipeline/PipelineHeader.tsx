import Link from "next/link";
import React from "react";

export default function PipelineHeader() {
  return (
    <header className="sticky top-0 z-50 glass-effect dark:bg-background-dark/80 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link
          href="/talent"
          className="bg-primary text-white p-1.5 rounded-lg cursor-pointer hover:bg-opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-xl block">
            dashboard
          </span>
        </Link>
        <div>
          <h1 className="text-sm font-extrabold leading-none tracking-tight text-[#1e293b] dark:text-gray-100">
            Talent Pipeline
          </h1>
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-0.5">
            University Recruitment
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors cursor-pointer">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative transition-colors cursor-pointer">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
        </button>
      </div>
    </header>
  );
}
