"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import KPIGrid from "./KPIGrid";
import RecruitmentVelocityChart from "./RecruitmentVelocityChart";
import DiversityChart from "./DiversityChart";
import Link from "next/link";

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden">
        {/* Top Navigation / Header */}
        <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
               {/* Mobile Menu Button */}
               <button 
                 className="md:hidden p-2 -ml-2 text-slate-500 hover:text-primary transition-colors"
                 onClick={() => setSidebarOpen(true)}
               >
                 <span className="material-symbols-outlined">menu</span>
               </button>

               <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] block">MeritGrid</h2>
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors"
                  href="/talent"
                >
                  Dashboard
                </Link>
                <Link
                  className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors"
                  href="/talent"
                >
                  Candidates
                </Link>
                <Link
                  className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors"
                  href="#"
                >
                  Jobs
                </Link>
                <Link
                  className="text-primary dark:text-white text-sm font-bold"
                  href="/analytics"
                >
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
               <button className="relative rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  notifications
                </span>
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 text-primary text-xs font-bold">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 lg:p-8 overflow-y-auto">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
             <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d121b] dark:text-white mb-2">
                  Recruitment Analytics
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Overview of hiring performance and pipeline efficiency
                </p>
             </div>
             <div className="flex gap-3">
                <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center">
                    <span className="material-symbols-outlined" style={{fontSize: '18px'}}>download</span>
                    Export Report
                </button>
             </div>
          </div>

          <KPIGrid />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 h-80 md:h-96">
                <RecruitmentVelocityChart />
            </div>
            <div className="h-80 md:h-96">
                 <DiversityChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

