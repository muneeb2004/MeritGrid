import React from "react";

export default function PerformanceGauges() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Performance Score
        </h3>
        <button className="text-xs font-medium text-primary hover:underline cursor-pointer">
          View Details
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-2">
          {/* Radial Gauge Hack using CSS Conic Gradient */}
          <div
            className="relative size-20 rounded-full flex items-center justify-center"
            style={{
              background: "conic-gradient(#1152d4 88%, #e7ebf3 0)",
            }}
          >
            <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                88
              </span>
            </div>
          </div>
          <p className="text-xs font-medium text-center text-slate-600 dark:text-gray-300">
            Communication
          </p>
          <span className="text-[10px] text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">
            +5%
          </span>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="relative size-20 rounded-full flex items-center justify-center"
            style={{
              background: "conic-gradient(#1152d4 92%, #e7ebf3 0)",
            }}
          >
            <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                92
              </span>
            </div>
          </div>
          <p className="text-xs font-medium text-center text-slate-600 dark:text-gray-300">
            Technical
          </p>
          <span className="text-[10px] text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">
            +12%
          </span>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="relative size-20 rounded-full flex items-center justify-center"
            style={{
              background: "conic-gradient(#f59e0b 76%, #e7ebf3 0)",
            }}
          >
            <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                76
              </span>
            </div>
          </div>
          <p className="text-xs font-medium text-center text-slate-600 dark:text-gray-300">
            Cultural Fit
          </p>
          <span className="text-[10px] text-red-500 font-bold bg-red-50 px-1.5 py-0.5 rounded">
            -2%
          </span>
        </div>
      </div>
    </div>
  );
}
