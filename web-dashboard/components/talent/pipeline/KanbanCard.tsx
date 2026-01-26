import React from "react";

interface KanbanCardProps {
  name: string;
  university: string;
  major?: string;
  imageUrl: string;
  matchScore: number;
  matchColorClass?: string;
  matchTextColorClass?: string;
  aiRecLevels?: number[];
  tags?: string[];
  progressBar?: {
    label: string;
    percentage: number;
    colorClass: string;
  };
  offer?: boolean;
  isNextUp?: boolean;
  initials?: {
    text: string;
    bgClass: string;
    textClass: string;
  };
  secondInitials?: {
    text: string;
    bgClass: string;
    textClass: string;
  };
}

export default function KanbanCard({
  name,
  university,
  major,
  imageUrl,
  matchScore,
  matchColorClass = "bg-blue-50",
  matchTextColorClass = "text-primary",
  aiRecLevels,
  tags = [],
  progressBar,
  offer = false,
  isNextUp,
  initials,
  secondInitials,
}: KanbanCardProps) {
  return (
    <div
      className={`group bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border ${
        offer
          ? "border-l-4 border-slate-100 border-l-green-500 dark:border-slate-700 dark:border-l-green-500 hover:border-l-green-500"
          : "border-slate-100 dark:border-slate-700"
      } hover:shadow-md hover:border-primary/30 transition-all cursor-grab active:cursor-grabbing relative z-10`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          {imageUrl ? (
            <div
              className="size-10 rounded-full bg-cover bg-center border border-slate-100"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>
          ) : (
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 font-bold text-xs ring-2 ring-white dark:ring-slate-800">
              {initials ? initials.text : name.substring(0, 2).toUpperCase()}
            </div>
          )}
          
          {secondInitials && (
             <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary font-bold text-xs -ml-4 ring-2 ring-white dark:ring-slate-800 z-10">
              {secondInitials.text}
            </div>
          )}

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              {name}
            </h4>
            <p className="text-slate-500 text-xs">
              {university} {major ? `• ${major}` : ""}
            </p>
          </div>
        </div>
        <button className="text-slate-300 hover:text-slate-500 bg-transparent cursor-pointer">
          <span className="material-symbols-outlined text-lg">more_horiz</span>
        </button>
      </div>
      <div className="flex items-center gap-1.5 mb-3">
        <span
          className={`material-symbols-outlined ${
             offer ? "text-green-600" : matchTextColorClass.replace("text-", "text-") // simplify 
          } text-base`}
          style={{ color: offer ? undefined : "inherit" }} // let class handle it? specific text color class usually handles it.
        >
          auto_awesome
        </span>
        <span
          className={`${
            offer ? "text-green-700 dark:text-green-400" : matchTextColorClass
          } font-bold text-sm`}
        >
          {matchScore}% Match
        </span>
      </div>
      
      {/* AI Rec Levels Visualization (Bar Code style) */}
      {aiRecLevels && aiRecLevels.length > 0 && (
         <div className="flex gap-0.5 mb-3 h-4 items-end opacity-70">
            {aiRecLevels.map((level, i) => (
                <div key={i} className={`w-1 rounded-t-sm ${level === 3 ? 'h-full bg-primary' : level === 2 ? 'h-2/3 bg-primary/60' : 'h-1/3 bg-primary/30'}`}></div>
            ))}
         </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-2 py-1 ${
                offer
                  ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              } text-[10px] font-semibold uppercase tracking-wide rounded`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {progressBar && (
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5 overflow-hidden">
        <div
          className={`${
            progressBar?.colorClass || (offer ? "bg-green-500" : "bg-primary")
          } h-1.5 rounded-full`}
          style={{ width: `${progressBar?.percentage || 20}%` }}
        ></div>
      </div>
      )}
      {offer && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 flex gap-2">
          <button className="flex-1 bg-primary text-white text-xs font-bold py-1.5 rounded hover:bg-blue-700 transition cursor-pointer">
            View Offer
          </button>
        </div>
      )}
      {isNextUp && (
          <div className="mt-2 text-xs font-bold text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">schedule</span> Next Up
          </div>
      )}
    </div>
  );
}
