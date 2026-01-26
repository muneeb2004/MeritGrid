import Link from "next/link";
import React from "react";

export default function AnalyticsFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/talent"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <span className="material-symbols-outlined text-[24px]">
            dashboard
          </span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-primary cursor-default">
          <span className="material-symbols-outlined text-[24px] font-fill">
            insights
          </span>
          <span className="text-[10px] font-bold">Analytics</span>
        </button>
        <Link
          href="/talent"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <span className="material-symbols-outlined text-[24px]">
            person_search
          </span>
          <span className="text-[10px] font-medium">Scout</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <span className="material-symbols-outlined text-[24px]">
            settings
          </span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
}
