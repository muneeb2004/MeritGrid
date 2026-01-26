import Link from "next/link";
import React from "react";

export default function NotificationsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d101b] dark:text-white antialiased overflow-x-hidden min-h-screen">
      <div className="max-w-lg mx-auto min-h-screen relative flex flex-col pb-24">
        {/* TopAppBar */}
        <div className="flex flex-col gap-2 bg-background-light dark:bg-background-dark p-4 pb-2 sticky top-0 z-10 transition-colors duration-300">
          <div className="flex items-center h-10 justify-between">
            <Link
              href="/student/dashboard"
              className="flex items-center justify-center size-10 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <button className="flex items-center justify-end group cursor-pointer">
              <p className="text-primary text-base font-semibold leading-normal tracking-[0.015em] shrink-0 group-hover:opacity-80 transition-opacity">
                Mark all read
              </p>
            </button>
          </div>
          <h1 className="text-[#0d101b] dark:text-white tracking-tight text-[32px] font-bold leading-tight">
            Notifications
          </h1>
        </div>

        {/* Featured Opportunity Card: Talent Scout Alert */}
        <div className="px-4 py-4 w-full">
          <div className="relative flex flex-col items-start justify-start rounded-xl overflow-hidden bg-[#FFF8E1] dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800/50 shadow-sm transition-all duration-300">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-200/50 dark:bg-yellow-600/10 rounded-full blur-2xl"></div>
            <div className="relative w-full p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-500 text-2xl fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
                <p className="text-amber-700 dark:text-amber-200 text-xs font-bold uppercase tracking-wider">
                  Talent Scout Alert
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#0d101b] dark:text-white text-lg font-bold leading-snug tracking-[-0.015em]">
                  Alpha College invites you to apply for the CS Program!
                </p>
              </div>
              <div className="pt-2">
                <button className="flex w-full sm:w-auto min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-medium leading-normal shadow-md shadow-primary/20 transition-all active:scale-95">
                  <span className="truncate">View Invite</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header: New */}
        <div className="px-4 pb-2 pt-2">
          <h3 className="text-[#0d101b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            New
          </h3>
        </div>

        {/* Notification List */}
        <div className="flex flex-col gap-3 px-4">
          {/* ListItem 1 */}
          <div className="group flex flex-col bg-white dark:bg-[#1e2130] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800/50 overflow-hidden active:bg-gray-50 dark:active:bg-[#25283a] transition-colors cursor-pointer">
            <div className="flex items-start gap-4 p-4 justify-between">
              <div className="flex items-start gap-4 flex-1">
                {/* Icon Container */}
                <div className="flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 shrink-0 size-10 text-primary">
                  <span className="material-symbols-outlined text-[22px]">
                    visibility
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-0.5 w-full">
                  <div className="flex justify-between items-start w-full gap-2">
                    <p className="text-[#0d101b] dark:text-white text-sm font-semibold leading-normal line-clamp-1">
                      IBA Admissions
                    </p>
                    <p className="text-[#4c599a] dark:text-gray-400 text-xs font-normal leading-normal shrink-0">
                      2h ago
                    </p>
                  </div>
                  <p className="text-[#4c599a] dark:text-gray-400 text-sm font-normal leading-relaxed line-clamp-2">
                    Your application to IBA was viewed by the admissions
                    committee.
                  </p>
                </div>
              </div>
              {/* Unread Dot */}
              <div className="shrink-0 flex items-center justify-center h-5 mt-1">
                <div className="size-2.5 bg-primary rounded-full ring-2 ring-white dark:ring-[#1e2130]"></div>
              </div>
            </div>
          </div>
          {/* ListItem 2 */}
          <div className="group flex flex-col bg-white dark:bg-[#1e2130] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800/50 overflow-hidden active:bg-gray-50 dark:active:bg-[#25283a] transition-colors cursor-pointer">
            <div className="flex items-start gap-4 p-4 justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/30 shrink-0 size-10 text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined text-[22px]">
                    update
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-0.5 w-full">
                  <div className="flex justify-between items-start w-full gap-2">
                    <p className="text-[#0d101b] dark:text-white text-sm font-semibold leading-normal line-clamp-1">
                      Habib University
                    </p>
                    <p className="text-[#4c599a] dark:text-gray-400 text-xs font-normal leading-normal shrink-0">
                      5h ago
                    </p>
                  </div>
                  <p className="text-[#4c599a] dark:text-gray-400 text-sm font-normal leading-relaxed line-clamp-2">
                    Habib University updated your status regarding the scholarship
                    grant.
                  </p>
                </div>
              </div>
              {/* Unread Dot */}
              <div className="shrink-0 flex items-center justify-center h-5 mt-1">
                <div className="size-2.5 bg-primary rounded-full ring-2 ring-white dark:ring-[#1e2130]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header: Earlier */}
        <div className="px-4 pb-2 pt-6">
          <h3 className="text-[#0d101b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Earlier
          </h3>
        </div>

        {/* Notification List Group 2 */}
        <div className="flex flex-col gap-3 px-4">
          {/* ListItem 3 */}
          <div className="group flex flex-col bg-white dark:bg-[#1e2130] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800/50 overflow-hidden active:bg-gray-50 dark:active:bg-[#25283a] transition-colors cursor-pointer">
            <div className="flex items-start gap-4 p-4 justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 shrink-0 size-10 text-emerald-600 dark:text-emerald-400">
                  <span className="material-symbols-outlined text-[22px]">
                    check_circle
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-0.5 w-full">
                  <div className="flex justify-between items-start w-full gap-2">
                    <p className="text-[#0d101b] dark:text-white text-sm font-semibold leading-normal line-clamp-1">
                      Profile Verified
                    </p>
                    <p className="text-[#4c599a] dark:text-gray-400 text-xs font-normal leading-normal shrink-0">
                      1d ago
                    </p>
                  </div>
                  <p className="text-[#4c599a] dark:text-gray-400 text-sm font-normal leading-relaxed line-clamp-2">
                    Your profile verification is complete. You can now apply to
                    all colleges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ListItem 4 */}
          <div className="group flex flex-col bg-white dark:bg-[#1e2130] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800/50 overflow-hidden active:bg-gray-50 dark:active:bg-[#25283a] transition-colors cursor-pointer">
            <div className="flex items-start gap-4 p-4 justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10 text-gray-600 dark:text-gray-400">
                  <span className="material-symbols-outlined text-[22px]">
                    campaign
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-0.5 w-full">
                  <div className="flex justify-between items-start w-full gap-2">
                    <p className="text-[#0d101b] dark:text-white text-sm font-semibold leading-normal line-clamp-1">
                      Community Alert
                    </p>
                    <p className="text-[#4c599a] dark:text-gray-400 text-xs font-normal leading-normal shrink-0">
                      2d ago
                    </p>
                  </div>
                  <p className="text-[#4c599a] dark:text-gray-400 text-sm font-normal leading-relaxed line-clamp-2">
                    New scholarship opportunities have been added for engineering
                    students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar (iOS Style) */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex h-20 w-full max-w-[430px] items-center justify-around border-t border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 ios-blur px-6 pb-4">
        <Link
          href="/student/dashboard"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link
          href="/student/discover"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
        >
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-medium">Discover</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50">
          <span className="material-symbols-outlined">folder_open</span>
          <span className="text-[10px] font-medium">Documents</span>
        </button>
        <Link
          href="/student/profile"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </nav>
      {/* Home Indicator (Visual Only) */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-[60] h-1.5 w-32 rounded-full bg-slate-200 dark:bg-slate-700/50"></div>
    </div>
