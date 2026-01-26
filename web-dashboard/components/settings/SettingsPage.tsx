import React from "react";
import Sidebar from "@/components/Sidebar";
import SkillPrioritization from "./SkillPrioritization";
import CustomPersona from "./CustomPersona";
import BiasMitigation from "./BiasMitigation";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 overflow-y-auto">
          {/* Page Header */}
          <header className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#0d121b] dark:text-white text-3xl font-extrabold tracking-tight">
                AI Configuration &amp; Preferences
              </h1>
              <p className="text-[#4c669a] dark:text-gray-400 text-base font-normal">
                Configure algorithm sensitivity and candidate matching parameters
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-sm font-medium text-[#4b5563] dark:text-gray-300 bg-white dark:bg-[#1a202c] border border-[#e5e7eb] dark:border-[#2a3441] rounded-lg hover:bg-[#f9fafb] dark:hover:bg-[#2d3748] transition-colors shadow-sm cursor-pointer">
                Reset Defaults
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2 cursor-pointer">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  save
                </span>
                Save Changes
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (Wider) */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <SkillPrioritization />
              <CustomPersona />
            </div>

            {/* Right Column (Narrower) */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              <BiasMitigation />
            </div>
          </div>

          <footer className="mt-12 mb-6 text-center text-[#9ca3af] dark:text-gray-500 text-xs">
            © 2024 Talent Scout AI Inc. All rights reserved. •{" "}
            <Link className="hover:text-primary underline" href="#">
              Privacy Policy
            </Link>
          </footer>
        </main>
      </div>
    </div>
  );
}
