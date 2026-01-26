import React from "react";

interface KanbanCardProps {
  name: string;
  university: string;
  major: string;
  imageUrl: string;
  matchScore: number;
  tags?: string[];
  progressBar?: {
    label: string;
    percentage: number;
    colorClass: string;
  };
  offer?: boolean;
}

export default function KanbanCard({
  name,
  university,
  major,
  imageUrl,
  matchScore,
  tags = [],
  progressBar,
  offer = false,
}: KanbanCardProps) {
  return (
    <div className={`group bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border ${offer ? 'border-l-4 border-slate-100 border-l-green-500 dark:border-slate-700 dark:border-l-green-500 hover:border-l-green-500' : 'border-slate-100 dark:border-slate-700'} hover:shadow-md hover:border-primary/30 transition-all cursor-grab active:cursor-grabbing relative z-10`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <div
            className="size-10 rounded-full bg-cover bg-center border border-slate-100"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          ></div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              {name}
            </h4>
            <p className="text-slate-500 text-xs">
              {university} • {major}
            </p>
          </div>
        </div>
        <button className="text-slate-300 hover:text-slate-500 bg-transparent cursor-pointer">
          <span className="material-symbols-outlined text-lg">more_horiz</span>
        </button>
      </div>
      <div className="flex items-center gap-1.5 mb-3">
        <span className={`material-symbols-outlined ${offer ? "text-green-600" : "text-primary"} text-base`}>
          auto_awesome
        </span>
        <span className={`${offer ? "text-green-700 dark:text-green-400" : "text-primary"} font-bold text-sm`}>
          {matchScore}% Match
        </span>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-2 py-1 ${offer ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'} text-[10px] font-semibold uppercase tracking-wide rounded`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5 overflow-hidden">
        <div
          className={`${progressBar?.colorClass || (offer ? "bg-green-500" : "bg-primary")} h-1.5 rounded-full`}
          style={{ width: `${progressBar?.percentage || 20}%` }}
        ></div>
      </div>
       {offer && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 flex gap-2">
            <button className="flex-1 bg-primary text-white text-xs font-bold py-1.5 rounded hover:bg-blue-700 transition cursor-pointer">View Offer</button>
        </div>
       )}
    </div>
  );
}
