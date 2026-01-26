import React from "react";

export default function AIComparisonSummary() {
  return (
    <div className="p-4 mb-10">
      <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-5 border border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary size-8 flex items-center justify-center rounded-lg text-white">
            <span className="material-symbols-outlined text-xl">insights</span>
          </div>
          <h3 className="font-bold text-lg text-[#111318] dark:text-white">
            AI Comparison Summary
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <span className="font-bold">Technical Fit:</span> Alex Rivera
              leads with direct industry experience in modern AI stacks.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <span className="font-bold">Leadership:</span> Jordan Smith is the
              primary choice for project management or business-technical hybrid
              roles.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <span className="font-bold">Academic Core:</span> Marcus Chen
              represents the highest cognitive potential for complex engineering
              problems.
            </p>
          </div>
        </div>
        <button className="mt-6 w-full py-3 bg-white dark:bg-background-dark rounded-lg text-primary text-sm font-bold border border-primary/20 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
          Generate Full Report{" "}
          <span className="material-symbols-outlined text-sm">
            picture_as_pdf
          </span>
        </button>
      </div>
    </div>
  );
}
