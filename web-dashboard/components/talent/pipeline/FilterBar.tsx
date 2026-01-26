import React from "react";

export default function FilterBar() {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-x-auto no-scrollbar">
      <div className="flex gap-3 px-4 py-3 whitespace-nowrap items-center">
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <span>Role: Engineering</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <span>Dept: Product</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <span>University: Stanford</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>
    </div>
  );
}
