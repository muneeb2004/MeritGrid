import React from "react";

export default function SettingsSidebar() {
  return (
    <aside className="w-64 hidden lg:block border-r border-gray-200 dark:border-gray-800 h-[calc(100vh-64px)] overflow-y-auto bg-white dark:bg-background-dark">
      <div className="p-4 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-bold">
          <span className="material-symbols-outlined text-[20px]">
            psychology
          </span>
          AI Configuration
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
          <span className="material-symbols-outlined text-[20px]">person</span>
          Custom Personas
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
          <span className="material-symbols-outlined text-[20px]">
            integration_instructions
          </span>
          Integrations
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
          <span className="material-symbols-outlined text-[20px]">group</span>
          Team Management
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
          <span className="material-symbols-outlined text-[20px]">
            credit_card
          </span>
          Billing
        </button>
      </div>
    </aside>
  );
}
