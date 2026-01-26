import React from "react";

export default function AITakeawaysCard() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="size-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          <span className="material-symbols-outlined">auto_awesome</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          AI Key Takeaways
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Competitive Advantages
          </h4>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
            <span
              className="material-symbols-outlined text-green-600 mt-0.5"
              style={{ fontSize: "18px" }}
            >
              check_circle
            </span>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-gray-100">
                Strong Technical Depth
              </p>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                Demonstrated advanced knowledge of distributed systems and
                microservices architecture.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
            <span
              className="material-symbols-outlined text-green-600 mt-0.5"
              style={{ fontSize: "18px" }}
            >
              check_circle
            </span>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-gray-100">
                Clear Communication
              </p>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                Articulated complex concepts effectively using structured STAR
                method.
              </p>
            </div>
          </div>
        </div>
        {/* Areas for Review */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Areas for Probe
          </h4>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20">
            <span
              className="material-symbols-outlined text-amber-600 mt-0.5"
              style={{ fontSize: "18px" }}
            >
              warning
            </span>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-gray-100">
                Cultural Alignment
              </p>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                Showed slight hesitation when discussing cross-functional
                conflict resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
