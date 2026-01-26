import React from "react";

export default function FloatingAction() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-xl shadow-primary/30 hover:scale-105 transition-transform cursor-pointer">
        <span className="material-symbols-outlined text-[28px]">smart_toy</span>
      </button>
      {/* Tooltip implementation can be added here or controlled via parent */}
      <div className="absolute -top-10 right-0 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Refine AI Search
      </div>
    </div>
  );
}
