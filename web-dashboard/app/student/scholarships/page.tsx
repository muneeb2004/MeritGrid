import Link from "next/link";
import React from "react";

export default function ScholarshipTrackerPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#0d101b] dark:text-white font-display">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Link
            href="/student/profile"
            className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 cursor-pointer hover:bg-primary/20 transition-colors"
          >
            <span className="material-symbols-outlined">person</span>
          </Link>
          <h2 className="text-[#0d101b] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Scholarships
          </h2>
          <div className="flex w-10 items-center justify-end">
            <Link
              href="/student/notifications"
              className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                notifications
              </span>
            </Link>
          </div>
        </div>
      </div>
      <main className="max-w-md mx-auto pb-24">
        {/* Stats Dashboard */}
        <div className="p-4">
          <div className="flex gap-4">
            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-5 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                Applied
              </p>
              <div className="flex items-baseline gap-1">
                <p className="text-primary dark:text-blue-400 text-3xl font-bold leading-tight">
                  4
                </p>
                <p className="text-gray-400 text-sm">Programs</p>
              </div>
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-5 bg-primary shadow-lg shadow-primary/20">
              <p className="text-white/70 text-xs font-medium uppercase tracking-wider">
                Potential Funding
              </p>
              <p className="text-white text-3xl font-bold leading-tight">
                $45,000
              </p>
            </div>
          </div>
        </div>
        {/* Section Header */}
        <div className="px-4 pt-4 flex justify-between items-end">
          <h3 className="text-[#0d101b] dark:text-white text-xl font-bold leading-tight tracking-tight">
            Active Applications
          </h3>
          <button className="text-primary font-semibold text-sm cursor-pointer hover:underline">
            View Archive
          </button>
        </div>
        {/* Card 1: Global Leaders */}
        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD87FGGM8u64L_cgRVqAbBIUL-yglqQuzngwP2BGuCMMP4DM4Q_3SphVY0r3Y8xhqslOAWXJJ4ChMLl8j58ZjLf0mZ4xbK03GvTU3G26SuvqT4fwMx_wJunvqcN9p9pkcF3u-mhTG9l0TZCILpAALs0Bv089_wVsIgjv0Bmi0tK3hjMbkRjqShd_zHAsBTE6fC_e7xI1bUPtCnFFDdzaB7aQyxX4OYzlmr8eFasVqmb_za8pAc8ESs_pl5BPKmClLTYGffgx71RDXPw")',
              }}
            ></div>
            <div className="flex w-full flex-col gap-3 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    Interview Phase
                  </span>
                  <h4 className="text-[#0d101b] dark:text-white text-lg font-bold mt-1">
                    Global Leaders Scholarship
                  </h4>
                </div>
                <div className="text-right">
                  <p className="text-primary font-bold text-lg">$20,000</p>
                  <p className="text-gray-400 text-xs uppercase">Annual</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                International University • 2nd Interview Scheduled
              </p>
              {/* Timer Component integrated into Card */}
              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-3">
                <p className="text-red-600 dark:text-red-400 text-xs font-bold uppercase mb-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    alarm
                  </span>{" "}
                  Deadline Countdown
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-700 rounded p-1 shadow-sm">
                    <p className="text-[#0d101b] dark:text-white text-sm font-bold">
                      02
                    </p>
                    <p className="text-[10px] text-gray-500">Days</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-700 rounded p-1 shadow-sm">
                    <p className="text-[#0d101b] dark:text-white text-sm font-bold">
                      14
                    </p>
                    <p className="text-[10px] text-gray-500">Hrs</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-700 rounded p-1 shadow-sm">
                    <p className="text-[#0d101b] dark:text-white text-sm font-bold">
                      22
                    </p>
                    <p className="text-[10px] text-gray-500">Min</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-700 rounded p-1 shadow-sm">
                    <p className="text-[#0d101b] dark:text-white text-sm font-bold">
                      05
                    </p>
                    <p className="text-[10px] text-gray-500">Sec</p>
                  </div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center rounded-lg h-10 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 cursor-pointer hover:bg-primary/90 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Card 2: STEM Excellence */}
        <div className="px-4 pb-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDA_qZX9Cjtd1LTap_vAqzz4orymLArPljKcsTo5_62eQDGLpZ-TzZ2XnJs-amcR4dSEICmop647r1q8KyHDiFfiX2xu1AQQJb5cvnBz5la1KIHTDVjRld-OcLGYOMQxcJn3ypSDN9lxuXVG60e6LDlunNMgFYhAfUTvi33y2cM9PGoC5W9t8QDJSPVFxQX0SfD0EtcBC7HyzPTCcUys1gbwuiQCRKwNV-VY75HtIz9vIaDGlyEeRT6lkQCSR9LxlmuOGGa_tUHPnE7")',
              }}
            ></div>
            <div className="flex w-full flex-col gap-3 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    Under Review
                  </span>
                  <h4 className="text-[#0d101b] dark:text-white text-lg font-bold mt-1">
                    STEM Excellence Grant
                  </h4>
                </div>
                <div className="text-right">
                  <p className="text-primary font-bold text-lg">$15,000</p>
                  <p className="text-gray-400 text-xs uppercase">One-time</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                Tech Institute of America • Documents Verified
              </p>
              {/* Progress Bar Component */}
              <div className="mt-2">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Application Progress
                  </p>
                  <p className="text-xs font-bold text-primary">75%</p>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="flex-1 flex items-center justify-center rounded-lg h-10 bg-gray-100 dark:bg-gray-700 text-[#0d101b] dark:text-white text-sm font-bold cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  View Grant
                </button>
                <button className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <span className="material-symbols-outlined text-gray-500">
                    more_horiz
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-30 mb-16">
        <Link
          href="/student/scholarships/search"
          className="flex items-center gap-2 h-14 px-6 rounded-full bg-primary text-white shadow-xl shadow-primary/40 active:scale-95 transition-transform cursor-pointer hover:bg-primary/90"
        >
          <span className="material-symbols-outlined font-bold">add</span>
          <span className="font-bold">Find More</span>
        </Link>
      </div>
      {/* Bottom Navigation Bar (iOS style) */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-3 pb-8">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <Link href="/student/dashboard" className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px]">Home</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-primary cursor-pointer">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance_wallet
            </span>
            <span className="text-[10px]">Tracker</span>
          </button>
          <Link href="/student/discover" className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">explore</span>
            <span className="text-[10px]">Explore</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">chat_bubble</span>
            <span className="text-[10px]">Advisor</span>
          </button>
        </div>
      </div>
    </div>
  );
}
