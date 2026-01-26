import Link from "next/link";
import React from "react";

interface DesktopCandidateCardProps {
  id: string | number;
  name: string;
  role: string;
  university: string;
  year: string;
  imageUrl: string;
  matchScore: number;
  tags: string[]; // e.g., ["Dean's List", "Hackathon Winner", "Python"]
  matchColorClass?: string;
}

export default function DesktopCandidateCard({
  id,
  name,
    role,
  university,
  year,
  imageUrl,
  matchScore,
  tags,
  matchColorClass = "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
}: DesktopCandidateCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 relative">
      <div
        className={`absolute top-4 right-4 ${matchColorClass} px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}
      >
        <span className="material-symbols-outlined text-[14px]">bolt</span>
        {matchScore}% Match
      </div>
      <div className="flex items-start gap-4 mb-4">
        <div className="size-14 rounded-full bg-slate-200 overflow-hidden shrink-0 border-2 border-white dark:border-slate-700 shadow-sm">
          <img
            alt={`Portrait of ${name}`}
            className="w-full h-full object-cover"
            src={imageUrl}
          />
        </div>
        <div className="pt-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {role} • {university} '{year}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2.5 py-1 rounded text-xs font-medium ${
              tag.toLowerCase() === "python" ||
              tag.toLowerCase() === "machine learning" ||
              tag.toLowerCase() === "data analysis"
                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50">
        <Link
          href={`/talent/${id}`}
          className="flex-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white text-sm font-bold py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors flex items-center justify-center"
        >
          View Profile
        </Link>
        <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-primary hover:border-primary transition-colors bg-transparent cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">
            bookmark
          </span>
        </button>
      </div>
    </div>
  );
}
