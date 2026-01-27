"use client";

import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import ScholarshipCard from "@/components/student/ScholarshipCard";
import { RECOMMENDED_SCHOLARSHIPS } from "@/data/student/scholarships";

export default function FindScholarshipsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-[#f8f9fc] min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden mx-auto max-w-7xl shadow-none">
        
        <PageHeader 
          title="Scholarships" 
          subtitle="Find your next opportunity"
          backHref="/student/scholarships"
        />

        <SearchBar placeholder="Search scholarships, grants, or funds" />

        {/* Chips / Filters */}
        <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 cursor-pointer shadow-md shadow-primary/20">
            <span className="text-sm font-semibold">All</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-text-main dark:text-[#f8f9fc] px-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-colors">
            <span className="text-sm font-medium">Need-based</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-text-main dark:text-[#f8f9fc] px-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-colors">
            <span className="text-sm font-medium">Merit-based</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-text-main dark:text-[#f8f9fc] px-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-colors">
            <span className="text-sm font-medium">International</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-text-main dark:text-[#f8f9fc] px-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-colors">
            <span className="text-sm font-medium">STEM</span>
          </button>
        </div>

        {/* Section Title */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-lg font-bold">Recommended for you</h3>
        </div>

        {/* Scholarship Cards List - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-24">
          {RECOMMENDED_SCHOLARSHIPS.map((scholarship) => (
            <ScholarshipCard 
              key={scholarship.id}
              {...scholarship}
              match={scholarship.match || "High Match"} // Fallback for match text if needed
            />
          ))}
        </div>
      </div>
    </div>
  );
}
