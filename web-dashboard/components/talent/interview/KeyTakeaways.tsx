import React from "react";

export default function KeyTakeaways() {
  return (
    <section className="p-4 bg-background-light dark:bg-white/5 mx-4 my-4 rounded-xl border border-primary/20">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary">
          auto_awesome
        </span>
        <h3 className="text-lg font-bold text-primary">AI Takeaways</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-white dark:bg-background-dark p-3 rounded-lg shadow-sm border-l-4 border-[#07883b]">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-[#07883b] text-sm">
              trending_up
            </span>
            <p className="text-xs font-bold uppercase text-[#07883b]">
              Key Strength
            </p>
          </div>
          <p className="text-sm font-medium text-[#111318] dark:text-gray-200">
            Strong grasp of distributed systems and scalability patterns.
            Provided concrete examples of architecture trade-offs.
          </p>
        </div>
        <div className="bg-white dark:bg-background-dark p-3 rounded-lg shadow-sm border-l-4 border-primary">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-primary text-sm">
              psychology
            </span>
            <p className="text-xs font-bold uppercase text-primary">
              Soft Skill Insight
            </p>
          </div>
          <p className="text-sm font-medium text-[#111318] dark:text-gray-200">
            Clear articulation of complex technical ideas. High potential for
            cross-functional collaboration roles.
          </p>
        </div>
        <div className="bg-white dark:bg-background-dark p-3 rounded-lg shadow-sm border-l-4 border-[#e73908]">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-[#e73908] text-sm">
              flag
            </span>
            <p className="text-xs font-bold uppercase text-[#e73908]">
              Red Flag
            </p>
          </div>
          <p className="text-sm font-medium text-[#111318] dark:text-gray-200">
            Slight hesitation and vague response when discussing resolution of
            internal team conflicts.
          </p>
        </div>
      </div>
    </section>
  );
}
