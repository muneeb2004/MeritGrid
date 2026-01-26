import React from "react";

export default function AIInsights() {
  return (
    <section className="p-4">
      <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-primary/[0.03] p-5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            psychology
          </span>
          <p className="text-[#111318] dark:text-white text-base font-bold">
            AI Talent Insight
          </p>
        </div>
        <p className="text-[#636f88] dark:text-gray-300 text-sm leading-relaxed">
          Alex demonstrates exceptional leadership in competitive debating and
          ranks in the top 2% of technical applicants. Highly recommended for
          fast-paced, collaborative environments requiring both soft skills and
          coding proficiency.
        </p>
        <button className="text-sm font-bold flex items-center gap-1 text-primary cursor-pointer hover:underline">
          View detailed analysis
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>
      </div>
    </section>
  );
}
