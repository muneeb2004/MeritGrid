import Link from "next/link";
import React from "react";

export default function ApplicationSuccessPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-[#0d101b] dark:text-white pb-20">
      {/* Top Navigation Bar (iOS Style) */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 justify-between sticky top-0 z-10">
        <Link href="/student/dashboard">
          <div className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer">
            <span className="material-symbols-outlined text-2xl">close</span>
          </div>
        </Link>
        <h2 className="text-[#0d101b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Success
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col items-center px-6 pt-8 pb-32 max-w-md mx-auto w-full">
        {/* Animated Checkmark Illustration */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full scale-110 animate-pulse"></div>
          <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-white text-6xl">
              check
            </span>
          </div>
        </div>

        {/* Headline Text */}
        <h1 className="text-[#0d101b] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-3">
          Application Sent!
        </h1>

        {/* Body Text */}
        <p className="text-[#4c599a] dark:text-gray-400 text-base font-normal leading-relaxed text-center mb-8">
          Your application for the{" "}
          <span className="font-semibold text-primary">
            MeritGrid Excellence Award
          </span>{" "}
          has been successfully submitted to the Merit Foundation.
        </p>

        {/* Application Summary Card */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 p-5 mb-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-50 dark:border-slate-800">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                  Application ID
                </p>
                <p className="text-[#0d101b] dark:text-white font-bold">
                  #MG-88291
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                  Date Submitted
                </p>
                <p className="text-[#0d101b] dark:text-white font-bold">
                  Oct 24, 2023
                </p>
              </div>
            </div>

            {/* Next Steps List */}
            <div>
              <p className="text-sm font-bold text-[#0d101b] dark:text-white mb-4">
                Next Steps
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-xs">
                        sync
                      </span>
                    </div>
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-slate-700 min-h-[20px]"></div>
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-semibold text-[#0d101b] dark:text-white">
                      Awaiting Review
                    </p>
                    <p className="text-xs text-gray-500">
                      The committee will verify your credentials within 5-7
                      business days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-400 text-xs">
                        mail
                      </span>
                    </div>
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-slate-700 min-h-[20px]"></div>
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-semibold text-gray-400">
                      Interview Notification
                    </p>
                    <p className="text-xs text-gray-400">
                      Selected candidates will be contacted via email.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-400 text-xs">
                        emoji_events
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-400">
                      Final Decision
                    </p>
                    <p className="text-xs text-gray-400">
                      Expected by December 15, 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="flex items-center gap-2 px-4 py-3 bg-primary/5 dark:bg-primary/10 rounded-lg w-full">
          <span className="material-symbols-outlined text-primary text-xl">
            info
          </span>
          <p className="text-xs text-primary font-medium">
            Need help? Contact admissions@meritgrid.org
          </p>
        </div>
      </div>

      {/* Fixed Action Buttons Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3 py-6 z-40">
        <div className="max-w-md mx-auto w-full flex flex-col gap-3">
          <Link href="/student/dashboard" className="w-full">
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer">
              Back to Dashboard
            </button>
          </Link>
          <button className="w-full bg-transparent border-2 border-gray-200 dark:border-slate-700 text-[#0d101b] dark:text-white font-bold py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            View Submitted Application
          </button>
        </div>
        {/* Home Indicator Spacer */}
        <div className="h-4 w-full"></div>
      </div>
    </div>
  );
}
