import React from "react";

export default function FilterChips() {
  return (
    <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar pb-1">
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white pl-3 pr-4 shadow-md shadow-primary/20">
        <span className="material-symbols-outlined text-[18px]">
          auto_awesome
        </span>
        <p className="text-sm font-bold">Top Matches</p>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 pl-3 pr-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <span className="material-symbols-outlined text-[18px] text-gray-500">
          calendar_month
        </span>
        <p className="text-sm font-medium">Summer 2024</p>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 pl-3 pr-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <span className="material-symbols-outlined text-[18px] text-gray-500">
          code
        </span>
        <p className="text-sm font-medium">Engineering</p>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 pl-3 pr-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <span className="material-symbols-outlined text-[18px] text-gray-500">
          location_on
        </span>
        <p className="text-sm font-medium">Local</p>
      </button>
    </div>
  );
}
