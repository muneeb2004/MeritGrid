"use client";

import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import ScholarshipCard from "@/components/student/ScholarshipCard";
import Button from "@/components/ui/Button";
import { SAVED_SCHOLARSHIPS } from "@/data/student/scholarships";

export default function SavedScholarshipsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-[#f8f9fc] min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden mx-auto max-w-7xl shadow-none">
        
        {/* Responsive Header Section */}
        <PageHeader 
          title="Saved Awards"
          subtitle="Scholarships and grants you have bookmarked for later"
          actions={
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="secondary" className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 font-bold text-sm h-11 px-6 shadow-sm hover:shadow-md transition-all">
                Compare Selected (3)
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-sm h-11 px-8 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all">
                Apply All
              </Button>
            </div>
          }
        />

        {/* Desktop Filter Bar (Simplified) */}
        <div className="hidden lg:flex flex-wrap items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-text-main dark:text-white">{SAVED_SCHOLARSHIPS.length} Awards Found</span>
            <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex gap-4">
              <button className="text-primary text-sm font-bold flex items-center gap-1">
                Sort by: Deadline <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="text-text-muted dark:text-gray-400 text-sm font-semibold flex items-center gap-1">
                Sort by: Amount <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button className="bg-white dark:bg-gray-700 shadow-sm p-1.5 rounded-md">
              <span className="material-symbols-outlined text-[20px] text-primary">grid_view</span>
            </button>
            <button className="p-1.5 rounded-md hover:bg-white dark:hover:bg-gray-700 transition-all">
              <span className="material-symbols-outlined text-[20px] text-text-muted">view_list</span>
            </button>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex lg:hidden gap-3 px-4 py-4 overflow-x-auto no-scrollbar bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-6 cursor-pointer shadow-md shadow-primary/20">
            <span className="text-sm font-bold tracking-tight">All</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white px-6 cursor-pointer hover:bg-gray-200 transition-colors">
            <span className="text-sm font-bold tracking-tight">Upcoming</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white px-6 cursor-pointer hover:bg-gray-200 transition-colors">
            <span className="text-sm font-bold tracking-tight">High Value</span>
          </button>
        </div>

        <SearchBar placeholder="Search your bookmarked awards..." className="lg:hidden" />

        {/* Scholarship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-6 py-8">
          {SAVED_SCHOLARSHIPS.map((scholarship) => (
            <ScholarshipCard 
              key={scholarship.id}
              {...scholarship}
            />
          ))}
        </div>

        {/* Load More (Desktop only) */}
        <div className="hidden lg:flex justify-center pb-20">
          <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 px-10 h-14 rounded-2xl flex items-center gap-2">
            <span className="material-symbols-outlined">restart_alt</span>
            Load More Awards
          </Button>
        </div>
      </div>
    </div>
  );
}
