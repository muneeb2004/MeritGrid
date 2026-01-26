import React from "react";

export default function AIAnalysisStats() {
  return (
    <section className="bg-white dark:bg-background-dark px-4 pb-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-[#111318] dark:text-white">
          AI Analysis
        </h3>
        <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
          Real-time Data
        </span>
      </div>
      <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex min-w-[140px] flex-col gap-2 rounded-xl p-4 border border-[#dcdfe5] dark:border-white/10 bg-background-light/50 dark:bg-white/5">
          <p className="text-[#636f88] text-xs font-semibold uppercase tracking-wider">
            Communication
          </p>
          <div className="flex items-baseline gap-1">
            <p className="text-2xl font-bold leading-tight text-[#111318] dark:text-white">
              85%
            </p>
            <p className="text-[#07883b] text-xs font-bold">+5%</p>
          </div>
          <div className="h-1 w-full bg-[#dcdfe5] dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[85%]"></div>
          </div>
        </div>
        <div className="flex min-w-[140px] flex-col gap-2 rounded-xl p-4 border border-[#dcdfe5] dark:border-white/10 bg-background-light/50 dark:bg-white/5">
          <p className="text-[#636f88] text-xs font-semibold uppercase tracking-wider">
            Tech Depth
          </p>
          <div className="flex items-baseline gap-1">
            <p className="text-2xl font-bold leading-tight text-[#111318] dark:text-white">
              90%
            </p>
            <p className="text-[#07883b] text-xs font-bold">+12%</p>
          </div>
          <div className="h-1 w-full bg-[#dcdfe5] dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#07883b] w-[90%]"></div>
          </div>
        </div>
        <div className="flex min-w-[140px] flex-col gap-2 rounded-xl p-4 border border-[#dcdfe5] dark:border-white/10 bg-background-light/50 dark:bg-white/5">
          <p className="text-[#636f88] text-xs font-semibold uppercase tracking-wider">
            Cultural Fit
          </p>
          <div className="flex items-baseline gap-1">
            <p className="text-2xl font-bold leading-tight text-[#111318] dark:text-white">
              78%
            </p>
            <p className="text-[#e73908] text-xs font-bold">-2%</p>
          </div>
          <div className="h-1 w-full bg-[#dcdfe5] dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#f59e0b] w-[78%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
