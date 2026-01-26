import React from "react";

export default function KPIGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Time to Hire */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Time to Hire
          </h3>
          <span className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              schedule
            </span>
          </span>
        </div>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            18
          </span>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
            days
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "16px" }}
          >
            trending_down
          </span>
          <span>12% decrease</span>
          <span className="text-slate-400 dark:text-slate-500 ml-1">
            vs last month
          </span>
        </div>
      </div>

      {/* Offer Acceptance Rate */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Offer Acceptance
          </h3>
          <span className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              check_circle
            </span>
          </span>
        </div>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            94%
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "16px" }}
          >
            trending_up
          </span>
          <span>4% increase</span>
          <span className="text-slate-400 dark:text-slate-500 ml-1">
            vs last month
          </span>
        </div>
      </div>

      {/* Active Pipeline */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Active Pipeline
          </h3>
          <span className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              group
            </span>
          </span>
        </div>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            124
          </span>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
            candidates
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
          <span>Stable</span>
          <span className="text-slate-400 dark:text-slate-500 ml-1">
            vs last month
          </span>
        </div>
      </div>

      {/* Diversity Score */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Diversity Score
          </h3>
          <span className="p-2 bg-accent/10 rounded-lg text-accent">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              diversity_3
            </span>
          </span>
        </div>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            8.5
          </span>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
            / 10
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "16px" }}
          >
            trending_up
          </span>
          <span>0.4 increase</span>
        </div>
      </div>
    </div>
  );
}
