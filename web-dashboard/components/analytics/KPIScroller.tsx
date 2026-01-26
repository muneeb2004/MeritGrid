import React from "react";

export default function KPIScroller() {
  return (
    <section className="mt-4">
      <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-2">
        {/* KPI 1 */}
        <div className="flex min-w-[160px] flex-col gap-2 rounded-xl p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">
              Total Applicants
            </p>
            <span className="material-symbols-outlined text-primary text-sm">
              groups
            </span>
          </div>
          <p className="text-2xl font-extrabold leading-tight text-[#111318] dark:text-white">
            1,240
          </p>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#07883b]">
              trending_up
            </span>
            <p className="text-[#07883b] text-xs font-bold">+12%</p>
          </div>
        </div>
        {/* KPI 2 */}
        <div className="flex min-w-[160px] flex-col gap-2 rounded-xl p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">
              Avg. Time to Hire
            </p>
            <span className="material-symbols-outlined text-primary text-sm">
              schedule
            </span>
          </div>
          <p className="text-2xl font-extrabold leading-tight text-[#111318] dark:text-white">
            18 Days
          </p>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#e73908]">
              trending_down
            </span>
            <p className="text-[#e73908] text-xs font-bold">-2 days</p>
          </div>
        </div>
        {/* KPI 3 */}
        <div className="flex min-w-[160px] flex-col gap-2 rounded-xl p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">
              Top Source
            </p>
            <span className="material-symbols-outlined text-primary text-sm">
              school
            </span>
          </div>
          <p className="text-2xl font-extrabold leading-tight text-[#111318] dark:text-white">
            Stanford
          </p>
          <p className="text-gray-400 text-xs font-medium">8.2% conversion</p>
        </div>
        {/* KPI 4 */}
        <div className="flex min-w-[160px] flex-col gap-2 rounded-xl p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">
              Offer Rate
            </p>
            <span className="material-symbols-outlined text-primary text-sm">
              check_circle
            </span>
          </div>
          <p className="text-2xl font-extrabold leading-tight text-[#111318] dark:text-white">
            88%
          </p>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#07883b]">
              trending_up
            </span>
            <p className="text-[#07883b] text-xs font-bold">+5%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
