import React from "react";
import PipelineHeader from "./PipelineHeader";
import FilterBar from "./FilterBar";
import KanbanBoard from "./KanbanBoard";

export default function PipelinePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1e293b] dark:text-gray-100 font-display min-h-screen flex flex-col">
      <PipelineHeader />
      <FilterBar />
      <KanbanBoard />
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90 z-50 cursor-pointer hover:scale-105">
        <span className="material-symbols-outlined text-2xl">person_add</span>
      </button>

      {/* Mobile nav placeholder - visible only on small screens */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-3 flex justify-between items-center pb-8 lg:hidden z-50">
        <div className="flex flex-col items-center gap-1 text-accent">
          <span className="material-symbols-outlined text-2xl">dashboard</span>
          <span className="text-[10px] font-bold">Pipeline</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined text-2xl">
            compare_arrows
          </span>
          <span className="text-[10px] font-bold">Compare</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined text-2xl">group</span>
          <span className="text-[10px] font-bold">Talent</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined text-2xl">settings</span>
          <span className="text-[10px] font-bold">Settings</span>
        </div>
      </nav>
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 dark:bg-gray-700 rounded-full lg:hidden z-50"></div>
    </div>
  );
}
