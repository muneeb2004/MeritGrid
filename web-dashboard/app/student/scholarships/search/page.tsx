import Link from "next/link";
import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import ScholarshipCard from "@/components/student/ScholarshipCard";

const RECOMMENDED_SCHOLARSHIPS = [
  {
    id: "1",
    title: "MeritGrid Excellence Award",
    foundation: "Merit Foundation",
    amount: "$10,000",
    match: "98% Match",
    deadline: "Sept 15, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5Oz4hhVeq39WmIc3V1fmPTSOdJ_NLi45_yJcQMCFdwjjb4mXj39xZO2r09-ZYH-GdMSq7BqgHrL62dJ4yL9HCuv8hZm_GkZSD2KSbBsW399pyH6PdOm5305VoyulDDWrnGbizPtOcv2jiOxpEm5bVwJqXg3dVd0o2cRYk_8QVve6OQbRuON4uNENVfa1PIUGHEmolKPfa4O6DjVYs8gMBw24we-Q2pVqaBOnDMrKSBmisvjaBRHay7FAIp5SoFXBBglRs2zodpek",
    isUrgent: true,
  },
  {
    id: "2",
    title: "Global STEM Grant",
    foundation: "TechCorp Industry",
    amount: "$5,000",
    match: "85% Match",
    deadline: "Oct 01, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTMe1j5rL42Lab-pRaIDfM7Z_jfAMeZmw5iYGzpXwj2pHfNp4quBTujUbQmNtRibKeScgX6Bry4R6yaM5IkronFZ-lGoQGeJX3TSh-OAX0BnaF8Mjx80_5F0u58epCim2Vsue5FWKJ72qwuZQAlH7YihGV4IYQziQsTXolAoBV8CNQFCSf9r_G-dB5Zf2ARjLLFtb7cXA_XcktzHCwQqT1-N9UxuwaUx4FPWKI2i6t5t_2Bt8_p-xVVgTkclQgDKeLvE7aVl50RPI6",
  },
  {
    id: "3",
    title: "Creative Leaders Fund",
    foundation: "Arts Association",
    amount: "$2,500",
    match: "62% Match",
    deadline: "Nov 12, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuine8BsWfRMye0e2JJuwWhi06PuRjP2jX_LnLsXU_-xt4urF3NEVmrKlC9Yuuv-CxiLYUl6YZtL5GDxMVFgHiU88YQAjETf39JYj68kq9qlKLSuqQyA2AJ_-CZLZq-AOzWCrJ9jUrlam0JqB0-nZXLAJoAeWzkf1h3vSlskvyHfVC-WwEUd6H4pwB8EqA_UGzEkqB9Qge8aHg-21bT9lN6r6pT7Vp2OOsC3F5ALxfGAP16fqKGpjACyO_ZBpUorxJDNLEa7kVbyaR",
  },
];

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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
