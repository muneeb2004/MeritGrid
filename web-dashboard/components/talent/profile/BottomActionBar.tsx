import React from "react";

export default function BottomActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-[#dcdfe5] dark:border-gray-800 flex gap-3">
      <button className="flex-1 flex items-center justify-center rounded-xl h-14 bg-background-light dark:bg-gray-800 text-[#111318] dark:text-white text-sm font-bold gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
        <span className="material-symbols-outlined text-xl">download</span>
        Resume
      </button>
      <button className="flex-[2] flex items-center justify-center rounded-xl h-14 bg-primary text-white text-sm font-bold gap-2 shadow-lg shadow-primary/30 hover:bg-blue-700 transition-colors cursor-pointer">
        <span className="material-symbols-outlined text-xl">
          calendar_today
        </span>
        Schedule Interview
      </button>
    </div>
  );
}
