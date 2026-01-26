import React from "react";

export default function InterviewFooter() {
  return (
    <>
      <div className="h-24"></div>
      <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark p-4 border-t border-[#dcdfe5] dark:border-white/10 flex gap-3 z-50">
        <button className="flex-1 bg-primary text-white font-bold py-3 rounded-lg shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-lg">description</span>
          Generate Report
        </button>
        <button className="flex size-12 items-center justify-center rounded-lg border border-[#dcdfe5] dark:border-white/10 text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">bookmark</span>
        </button>
      </footer>
    </>
  );
}
