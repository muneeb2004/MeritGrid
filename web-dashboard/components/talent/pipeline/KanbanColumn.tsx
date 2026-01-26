import React from "react";

interface KanbanColumnProps {
  title: string;
  count: number;
  colorClass: string;
  children: React.ReactNode;
}

export default function KanbanColumn({
  title,
  count,
  colorClass,
  children,
}: KanbanColumnProps) {
  return (
    <div className="flex flex-col w-[340px] h-full rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 shadow-inner overflow-hidden shrink-0">
      <div className="bg-[#0f172a] p-4 flex justify-between items-center border-b border-slate-800 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${colorClass}`}></span>
          <h3 className="text-white text-sm font-bold uppercase tracking-wider">
            {title}
          </h3>
        </div>
        <span className="bg-slate-700 text-slate-200 text-xs font-bold px-2 py-0.5 rounded-md">
          {count}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 column-scroll relative">
          {title === "Offer" && (
            <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-900/10 pointer-events-none"></div>
          )}
        {children}
      </div>
    </div>
  );
}
