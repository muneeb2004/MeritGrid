import Link from "next/link";
import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import ScholarshipCard from "@/components/student/ScholarshipCard";
import { ACTIVE_APPLICATIONS } from "@/data/student/scholarships";

export default function ScholarshipsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-main dark:text-white font-display pb-20">
      
      <PageHeader 
        title="Scholarships"
        actions={
          <div className="flex w-10 items-center justify-end">
            <Link href="/student/notifications">
              <button className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                  notifications
                </span>
              </button>
            </Link>
          </div>
        }
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Stats Dashboard */}
        <div className="py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-5 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                Applied
              </p>
              <div className="flex items-baseline gap-1">
                <p className="text-primary dark:text-blue-400 text-3xl font-bold leading-tight">
                  4
                </p>
                <p className="text-gray-400 text-sm">Programs</p>
              </div>
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-5 bg-primary shadow-lg shadow-primary/20">
              <p className="text-white/70 text-xs font-medium uppercase tracking-wider">
                Potential Funding
              </p>
              <p className="text-white text-3xl font-bold leading-tight">
                $45,000
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="pt-4 pb-4 flex justify-between items-end">
          <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">
            Active Applications
          </h3>
          <button className="text-primary font-semibold text-sm hover:underline cursor-pointer">
            View Archive
          </button>
        </div>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVE_APPLICATIONS.map((app) => (
            <ScholarshipCard 
              key={app.id}
              {...app}
              statusBadge={
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${app.id === 'a1' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                  {app.match}
                </span>
              }
            />
          ))}
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-30 lg:bottom-10 lg:right-10">
        <Link href="/student/scholarships/search">
          <button className="flex items-center gap-2 h-14 px-6 rounded-full bg-primary text-white shadow-xl shadow-primary/40 active:scale-95 transition-transform hover:bg-primary/90 cursor-pointer">
            <span className="material-symbols-outlined font-bold">add</span>
            <span className="font-bold">Find More</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
