import React from "react";

export default function LiveTranscript() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col h-[600px] lg:h-auto lg:flex-1 overflow-hidden">
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-slate-400"
            style={{ fontSize: "20px" }}
          >
            description
          </span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Live Transcript
          </h3>
        </div>
        <div className="flex gap-2">
          <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-500 cursor-pointer">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            >
              search
            </span>
          </button>
          <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-500 cursor-pointer">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            >
              download
            </span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        {/* Item 1 */}
        <div className="flex gap-3 group">
          <div className="mt-1 min-w-[32px] text-xs font-mono text-slate-400">
            08:15
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-primary mb-1">Interviewer</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Can you describe a time you had to optimize a slow-performing
              database query?
            </p>
          </div>
        </div>
        {/* Item 2 (Active) */}
        <div className="flex gap-3 relative group">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-r"></div>
          <div className="mt-1 min-w-[32px] text-xs font-mono text-primary font-bold">
            08:23
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-[#0d121b] dark:text-white mb-1">
              Alex Mercer
            </p>
            <p className="text-sm text-[#0d121b] dark:text-gray-100 leading-relaxed">
              Absolutely. In my internship, we had a PostgreSQL query taking 4
              seconds. I realized we were doing a full table scan. I implemented
              a{" "}
              <span className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 font-medium px-1 rounded">
                composite index
              </span>{" "}
              on the timestamp and user_id columns.
            </p>
          </div>
        </div>
        {/* Item 3 */}
        <div className="flex gap-3 group">
          <div className="mt-1 min-w-[32px] text-xs font-mono text-slate-400">
            08:45
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-[#0d121b] dark:text-white mb-1">
              Alex Mercer
            </p>
            <p className="text-sm text-[#0d121b] dark:text-gray-100 leading-relaxed">
              This reduced the query time to under 200ms. I also set up{" "}
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 font-medium px-1 rounded">
                Redis caching
              </span>{" "}
              for frequently accessed data.
            </p>
          </div>
        </div>
        {/* Item 4 */}
        <div className="flex gap-3 group">
          <div className="mt-1 min-w-[32px] text-xs font-mono text-slate-400">
            09:02
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-primary mb-1">Interviewer</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              That&apos;s impressive. How did you handle cache invalidation?
            </p>
          </div>
        </div>
        {/* Item 5 */}
        <div className="flex gap-3 group">
          <div className="mt-1 min-w-[32px] text-xs font-mono text-slate-400">
            09:10
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-[#0d121b] dark:text-white mb-1">
              Alex Mercer
            </p>
            <p className="text-sm text-[#0d121b] dark:text-gray-100 leading-relaxed">
              We used a write-through strategy. Um, actually, let me correct
              that. We used a look-aside cache pattern initially, but switched
              to write-through to ensure consistency.
            </p>
          </div>
        </div>
        {/* Item 6 */}
        <div className="flex gap-3 group">
          <div className="mt-1 min-w-[32px] text-xs font-mono text-slate-400">
            09:35
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-primary mb-1">Interviewer</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Let&apos;s shift gears. Tell me about a conflict you had with a team
              member.
            </p>
          </div>
        </div>
      </div>
      {/* Search within transcript input */}
      <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="relative">
          <input
            className="w-full text-sm rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-2 pl-3 pr-10 focus:ring-primary focus:border-primary"
            placeholder="Ask AI about this interview..."
            type="text"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              send
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
