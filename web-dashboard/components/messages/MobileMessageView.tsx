"use client";

import React from "react";

export default function MobileMessageView() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display min-h-screen">
      {/* iOS Status Bar Placeholder */}
      <div className="h-10 w-full bg-white dark:bg-background-dark"></div>
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark px-4 py-3 border-b border-gray-100 dark:border-gray-800 justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary cursor-pointer">
            arrow_back_ios
          </span>
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 border border-gray-200"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIHxsUU46k5wVVV8qL48N3PHcJ_pxvcq4h-VvdiVA-bpIXIh9XkP-oKQskbu2zzjwYUYJJdGDur-AB0HkbJk4H-8ZbFK41unQnzY0DPWqFO_hk8sRIiPH_gqX-bv7VTE-RZbeiHAFr5UBS6DZTyn5IMS3w8w_kgjt0nOhvbfi2UvfwMP5eQz3bA1fc5_IF1Vsub09Em_HlctZeEZKrzlfy34GockaDZCgqrbKt7VWWpaZ6FD09cbtHKcsa91N0bUV2RqIhKCgNm_w")',
              }}
            ></div>
            <div>
              <h2 className="text-sm font-bold leading-tight">Alex Rivera</h2>
              <p className="text-[10px] text-green-600 font-semibold uppercase tracking-wider">
                Interview Scheduled
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 cursor-pointer">
            videocam
          </span>
          <span className="material-symbols-outlined text-gray-500 cursor-pointer">
            info
          </span>
        </div>
      </div>
      <main className="flex flex-col h-[calc(100vh-160px)] overflow-y-auto px-4 py-4 space-y-6 no-scrollbar">
        {/* Date Separator */}
        <div className="flex justify-center">
          <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            Today
          </span>
        </div>
        {/* Student Message */}
        <div className="flex flex-col items-start max-w-[85%]">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-sm leading-relaxed">
              Hi! I&apos;m really excited about the Junior Software Engineer role. I&apos;ve
              uploaded my latest portfolio including the React project we
              discussed. Does Thursday at 2 PM work for a quick sync?
            </p>
          </div>
          <span className="text-[10px] text-gray-400 mt-1 ml-1">10:24 AM</span>
        </div>
        {/* Recruiter Message */}
        <div className="flex flex-col items-end self-end max-w-[85%]">
          <div className="bg-primary p-4 rounded-xl rounded-tr-none shadow-md">
            <p className="text-sm leading-relaxed text-white">
              That sounds great, Alex. I&apos;ve just reviewed your portfolio—the
              dashboard UI is very impressive. Thursday at 2 PM is perfect. I&apos;ll
              send an invite.
            </p>
          </div>
          <div className="flex items-center gap-1 mt-1 mr-1">
            <span className="text-[10px] text-gray-400">10:45 AM</span>
            <span className="material-symbols-outlined text-[12px] text-primary">
              done_all
            </span>
          </div>
        </div>
        {/* AI Suggestion Box (Inline) */}
        <div className="pt-4">
          <div className="bg-blue-50 dark:bg-primary/10 border border-primary/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-sm">
                auto_awesome
              </span>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                AI Recommended Next Steps
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-lg border border-primary/10 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full cursor-pointer">
                <span className="text-xs font-medium">
                  Send interview preparation guide
                </span>
                <span className="material-symbols-outlined text-primary text-sm">
                  chevron_right
                </span>
              </button>
              <button className="flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-lg border border-primary/10 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full cursor-pointer">
                <span className="text-xs font-medium">
                  Request official transcripts
                </span>
                <span className="material-symbols-outlined text-primary text-sm">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Candidate Quick Info (Condensed for Mobile) */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg className="h-12 w-12 transform -rotate-90">
                <circle
                  className="text-gray-100 dark:text-gray-700"
                  cx="24"
                  cy="24"
                  fill="transparent"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <circle
                  className="text-primary"
                  cx="24"
                  cy="24"
                  fill="transparent"
                  r="20"
                  stroke="currentColor"
                  strokeDasharray="125.6"
                  strokeDashoffset="12.56"
                  strokeWidth="4"
                ></circle>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                92%
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold">Match Score</h3>
              <p className="text-[10px] text-gray-500">CS Major • Stanford</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 cursor-pointer">
              <span className="material-symbols-outlined text-sm">
                description
              </span>
            </button>
            <button className="p-2 rounded-lg bg-primary text-white cursor-pointer">
              <span className="material-symbols-outlined text-sm">
                person
              </span>
            </button>
          </div>
        </div>
      </main>
      {/* Message Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 px-4 pt-3 pb-8">
        <div className="flex items-end gap-3">
          <button className="p-2 text-gray-400 cursor-pointer">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 border border-transparent focus-within:border-primary transition-all">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm resize-none max-h-32 text-slate-900 dark:text-white placeholder-slate-500"
              placeholder="Message Alex..."
              rows={1}
            ></textarea>
          </div>
          <button className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 cursor-pointer">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        {/* Quick Action Chips */}
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-2">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-4 border border-primary/20 cursor-pointer">
            <span className="material-symbols-outlined text-primary text-xs">
              bolt
            </span>
            <p className="text-primary text-[11px] font-bold uppercase">
              Smart Template
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 cursor-pointer">
            <p className="text-gray-600 dark:text-gray-300 text-xs font-medium">
              Availability
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 cursor-pointer">
            <p className="text-gray-600 dark:text-gray-300 text-xs font-medium">
              Check Status
            </p>
          </div>
        </div>
      </div>
      {/* Background Decoration */}
      <div className="fixed top-0 right-0 -z-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
