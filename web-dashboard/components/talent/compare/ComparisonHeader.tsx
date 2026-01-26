import Link from "next/link";
import React from "react";

export default function ComparisonHeader() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark p-4 border-b border-gray-100 dark:border-gray-800 justify-between gap-4">
      <Link
        href="/talent"
        className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
        Compare Talent
      </h2>
      <div className="flex w-10 items-center justify-end">
        <button className="flex cursor-pointer items-center justify-center rounded-full size-10 bg-transparent text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
    </div>
  );
}
