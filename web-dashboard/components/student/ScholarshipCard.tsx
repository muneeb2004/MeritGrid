import React from "react";
import Link from "next/link";
import Card from "../ui/Card";

interface ScholarshipCardProps {
  id: string;
  title: string;
  foundation: string;
  amount: string;
  match: string;
  deadline: string;
  image?: string;
  isUrgent?: boolean;
  statusBadge?: React.ReactNode;
  progress?: number;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
  className?: string;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  id,
  title,
  foundation,
  amount,
  match,
  deadline,
  image,
  isUrgent = false,
  statusBadge,
  progress,
  isSaved = false,
  onToggleSave,
  className = "",
}) => {
  return (
    <Card 
      hoverEffect 
      noPadding 
      className={`group relative bg-white dark:bg-slate-900 rounded-2xl lg:rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden ${className}`}
    >
      {/* Banner Image (Optional) */}
      {image && (
        <div 
          className="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url("${image}")` }}
        />
      )}

      <div className="p-4 lg:p-6">
        {/* Header Info */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2">
            {isUrgent && (
              <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                Urgent
              </span>
            )}
            {statusBadge || (
              <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                {match}
              </span>
            )}
          </div>
          <button 
            onClick={() => onToggleSave?.(id)}
            className="text-primary hover:scale-125 transition-transform cursor-pointer border-none bg-transparent"
          >
            <span className={`material-symbols-outlined ${isSaved || id.startsWith('#') ? 'font-variation-FILL-1' : 'font-variation-FILL-0'}`}>
              bookmark
            </span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col grow">
          <h3 className="hidden lg:block text-4xl font-black text-text-main dark:text-white mb-2">{amount}</h3>
          
          <h3 className="text-lg lg:text-xl font-bold leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors mb-1 lg:mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-text-muted dark:text-gray-400 text-sm font-medium">
            {foundation}
          </p>

          {/* Progress Bar (Optional) */}
          {progress !== undefined && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Progress</p>
                <p className="text-xs font-bold text-primary">{progress}%</p>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 lg:mt-6 flex flex-col pt-4 border-t border-slate-50 dark:border-slate-800">
          <div className="hidden lg:flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[18px] text-slate-400">event</span>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wide">Deadline: {deadline}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col lg:hidden">
              <span className="text-[10px] text-text-muted uppercase font-black tracking-widest">Amount</span>
              <span className="text-lg font-bold text-primary leading-none">{amount}</span>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <Link href="/student/scholarships/application">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 lg:py-3 lg:px-8 rounded-full lg:rounded-xl text-sm font-bold shadow-md shadow-primary/20 active:scale-95 transition-all cursor-pointer">
                  {progress !== undefined ? 'Continue' : 'Apply Now'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ScholarshipCard;
