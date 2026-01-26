import Sidebar from "@/components/Sidebar";
import CandidateGrid from "@/components/talent/desktop/CandidateGrid";
import DashboardHeader from "@/components/talent/desktop/DashboardHeader";
import React from "react";

export default function Page() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white h-screen overflow-hidden flex">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900 relative">
        <DashboardHeader />
        <CandidateGrid />
      </main>
    </div>
  );
}
