import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import ScholarshipCard from "@/components/student/ScholarshipCard";
import Button from "@/components/ui/Button";

const SAVED_SCHOLARSHIPS = [
  {
    id: "s1",
    title: "MeritGrid Excellence Award",
    foundation: "Merit Foundation",
    amount: "$10,000",
    match: "98% Match",
    deadline: "Sept 15, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5Oz4hhVeq39WmIc3V1fmPTSOdJ_NLi45_yJcQMCFdwjjb4mXj39xZO2r09-ZYH-GdMSq7BqgHrL62dJ4yL9HCuv8hZm_GkZSD2KSbBsW399pyH6PdOm5305VoyulDDWrnGbizPtOcv2jiOxpEm5bVwJqXg3dVd0o2cRYk_8QVve6OQbRuON4uNENVfa1PIUGHEmolKPfa4O6DjVYs8gMBw24we-Q2pVqaBOnDMrKSBmisvjaBRHay7FAIp5SoFXBBglRs2zodpek",
    isSaved: true,
  },
  {
    id: "s2",
    title: "Global STEM Grant",
    foundation: "TechCorp Industry",
    amount: "$5,000",
    match: "85% Match",
    deadline: "Oct 01, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTMe1j5rL42Lab-pRaIDfM7Z_jfAMeZmw5iYGzpXwj2pHfNp4quBTujUbQmNtRibKeScgX6Bry4R6yaM5IkronFZ-lGoQGeJX3TSh-OAX0BnaF8Mjx80_5F0u58epCim2Vsue5FWKJ72qwuZQAlH7YihGV4IYQziQsTXolAoBV8CNQFCSf9r_G-dB5Zf2ARjLLFtb7cXA_XcktzHCwQqT1-N9UxuwaUx4FPWKI2i6t5t_2Bt8_p-xVVgTkclQgDKeLvE7aVl50RPI6",
    isSaved: true,
  },
  {
    id: "s3",
    title: "Creative Leaders Fund",
    foundation: "Arts Association",
    amount: "$2,500",
    match: "62% Match",
    deadline: "Nov 12, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuine8BsWfRMye0e2JJuwWhi06PuRjP2jX_LnLsXU_-xt4urF3NEVmrKlC9Yuuv-CxiLYUl6YZtL5GDxMVFgHiU88YQAjETf39JYj68kq9qlKLSuqQyA2AJ_-CZLZq-AOzWCrJ9jUrlam0JqB0-nZXLAJoAeWzkf1h3vSlskvyHfVC-WwEUd6H4pwB8EqA_UGzEkqB9Qge8aHg-21bT9lN6r6pT7Vp2OOsC3F5ALxfGAP16fqKGpjACyO_ZBpUorxJDNLEa7kVbyaR",
    isSaved: true,
  }
];

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
            <span className="text-sm font-bold text-text-main dark:text-white">3 Awards Found</span>
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
