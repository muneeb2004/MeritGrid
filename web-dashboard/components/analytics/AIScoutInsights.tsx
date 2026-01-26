import React from "react";

export default function AIScoutInsights() {
  return (
    <section className="mt-6 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-[64px] text-primary">
            auto_awesome
          </span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-bold text-[#111318] dark:text-white">
            Top AI Scout Queries
          </h2>
          <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-extrabold rounded uppercase">
            AI Active
          </span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-background-light dark:bg-gray-800/50 rounded-lg">
            <div className="bg-white dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center text-primary text-sm font-bold shadow-sm">
              1
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#111318] dark:text-gray-200">
                "PhD candidates with Python expertise"
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tight">
                Used 42 times this week
              </p>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-lg">
              bolt
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-background-light dark:bg-gray-800/50 rounded-lg">
            <div className="bg-white dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center text-primary text-sm font-bold shadow-sm">
              2
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#111318] dark:text-gray-200">
                "Top 10% STEM grads in West Coast"
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tight">
                High Conversion Rate
              </p>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-lg">
              bolt
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-background-light dark:bg-gray-800/50 rounded-lg">
            <div className="bg-white dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center text-primary text-sm font-bold shadow-sm">
              3
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#111318] dark:text-gray-200">
                "Previous interns from Fortune 500"
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tight">
                New Trending Query
              </p>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-lg">
              bolt
            </span>
          </div>
        </div>
        <button className="w-full mt-4 py-3 text-sm font-bold text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer">
          View AI Training Data
        </button>
      </div>
    </section>
  );
}
