import React from "react";

export default function ActionAccordions() {
  return (
    <section className="mt-4 border-t border-[#dcdfe5] dark:border-gray-800 bg-white dark:bg-background-dark">
      <div className="flex items-center justify-between p-4 border-b border-[#dcdfe5] dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
        <span className="text-base font-bold dark:text-white">
          Academic History
        </span>
        <span className="material-symbols-outlined text-gray-400">
          expand_more
        </span>
      </div>
      <div className="flex items-center justify-between p-4 border-b border-[#dcdfe5] dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
        <span className="text-base font-bold dark:text-white">
          Links & Contact
        </span>
        <div className="flex gap-2">
          <span className="material-symbols-outlined text-primary text-xl">
            link
          </span>
          <span className="material-symbols-outlined text-primary text-xl">
            alternate_email
          </span>
        </div>
      </div>
    </section>
  );
}
