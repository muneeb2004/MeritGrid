import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import VideoPlayerCard from "./VideoPlayerCard";
import AITakeawaysCard from "./AITakeawaysCard";
import PerformanceGauges from "./PerformanceGauges";
import LiveTranscript from "./LiveTranscript";
import Link from "next/link";
import FeedbackModal from "./FeedbackModal";

export default function DesktopInterviewInsights() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-8">
               <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden md:block">MeritGrid</h2>
              <nav className="hidden md:flex items-center gap-6">
                <a
                  className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors"
                  href="#"
                >
                  Dashboard
                </a>
                <a
                  className="text-primary dark:text-white text-sm font-bold"
                  href="#"
                >
                  Candidates
                </a>
                <a
                  className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors"
                  href="#"
                >
                  Jobs
                </a>
                <a
                  className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors"
                  href="#"
                >
                  Settings
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    search
                  </span>
                </span>
                <input
                  className="block w-64 rounded-lg border-none bg-slate-100 dark:bg-slate-800 py-2 pl-10 pr-4 text-sm text-slate-900 focus:ring-2 focus:ring-primary dark:text-white dark:placeholder-gray-400"
                  placeholder="Search candidates..."
                  type="text"
                />
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
              <button className="relative rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  notifications
                </span>
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-[1600px] mx-auto p-6 lg:p-8 overflow-y-auto">
          {/* Breadcrumbs & Actions */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400">
                <Link className="hover:text-primary" href="/talent">
                  Candidates
                </Link>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "14px" }}
                >
                  chevron_right
                </span>
                <span className="hover:text-primary cursor-pointer">
                  Engineering
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "14px" }}
                >
                  chevron_right
                </span>
                <span className="text-slate-900 dark:text-white font-medium">
                  Alex Mercer
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <h1 className="text-3xl font-bold text-[#0d121b] dark:text-white">
                  Alex Mercer
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  New Grad
                </span>
              </div>
              <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">
                Stanford University • Computer Science, Class of 2024
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
                onClick={() => setShowFeedback(true)}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  close
                </span>
                Reject
              </button>
              <button
                className="px-4 py-2.5 rounded-lg bg-primary hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
                onClick={() => setShowFeedback(true)}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  check
                </span>
                Move to Next Round
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Media & Analysis (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <VideoPlayerCard />
              <AITakeawaysCard />
            </div>
            {/* Right Column: Scores & Transcript (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <PerformanceGauges />
              <LiveTranscript />
            </div>
          </div>
        </main>
      </div>

      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
      />
    </div>
  );
}
