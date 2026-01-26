import React from "react";

export default function ComparisonTabs() {
  return (
    <div className="sticky top-[73px] z-40 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
      <div className="flex px-4 gap-6 overflow-x-auto no-scrollbar">
        <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-[13px] pt-4 whitespace-nowrap cursor-pointer">
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            All Candidates
          </p>
        </button>
        <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-gray-500 pb-[13px] pt-4 whitespace-nowrap cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Top Matches
          </p>
        </button>
        <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-gray-500 pb-[13px] pt-4 whitespace-nowrap cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Shortlisted
          </p>
        </button>
      </div>
    </div>
  );
}
