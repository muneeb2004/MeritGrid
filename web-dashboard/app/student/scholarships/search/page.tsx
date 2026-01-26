import Link from "next/link";
import React from "react";

export default function FindScholarshipsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d101b] dark:text-[#f8f9fc] min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden mx-auto max-w-7xl shadow-none">
        {/* TopAppBar */}
        <header className="sticky top-0 z-10 bg-background-light dark:bg-background-dark pt-6 pb-2 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/student/scholarships">
              <span className="material-symbols-outlined text-primary cursor-pointer">
                arrow_back_ios
              </span>
            </Link>
            <h1 className="text-2xl font-bold leading-tight tracking-tight">
              Scholarships
            </h1>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-primary">
              notifications
            </span>
          </button>
        </header>

        {/* SearchBar */}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-14 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
              <div
                className="text-[#4c599a] flex border-none bg-white dark:bg-slate-800 items-center justify-center pl-4 rounded-l-xl"
                data-size="24px"
              >
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#0d101b] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-slate-800 placeholder:text-[#4c599a] px-3 text-base font-normal leading-normal"
                placeholder="Search scholarships, grants, or funds"
                defaultValue=""
              />
            </div>
          </label>
        </div>

        {/* Chips / Filters */}
        <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 cursor-pointer shadow-md shadow-primary/20">
            <span className="text-sm font-semibold">All</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-[#0d101b] dark:text-[#f8f9fc] px-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-colors">
            <span className="text-sm font-medium">Need-based</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-[#0d101b] dark:text-[#f8f9fc] px-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-colors">
            <span className="text-sm font-medium">Merit-based</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-[#0d101b] dark:text-[#f8f9fc] px-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-colors">
            <span className="text-sm font-medium">International</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-[#0d101b] dark:text-[#f8f9fc] px-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-colors">
            <span className="text-sm font-medium">STEM</span>
          </button>
        </div>

        {/* Section Title */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-lg font-bold">Recommended for you</h3>
        </div>

        {/* Scholarship Cards List - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-24">
          {/* Card 1: High Match */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div
              className="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBS5Oz4hhVeq39WmIc3V1fmPTSOdJ_NLi45_yJcQMCFdwjjb4mXj39xZO2r09-ZYH-GdMSq7BqgHrL62dJ4yL9HCuv8hZm_GkZSD2KSbBsW399pyH6PdOm5305VoyulDDWrnGbizPtOcv2jiOxpEm5bVwJqXg3dVd0o2cRYk_8QVve6OQbRuON4uNENVfa1PIUGHEmolKPfa4O6DjVYs8gMBw24we-Q2pVqaBOnDMrKSBmisvjaBRHay7FAIp5SoFXBBglRs2zodpek")',
              }}
            >
              <div className="p-3">
                <span className="bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  High Match
                </span>
              </div>
            </div>
            <div className="p-4 relative bg-white dark:bg-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#0d101b] dark:text-white text-lg font-bold leading-tight">
                    MeritGrid Excellence Award
                  </p>
                  <p className="text-[#4c599a] dark:text-slate-400 text-sm font-medium mt-1">
                    Merit Foundation
                  </p>
                </div>
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bookmark
                  </span>
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-700 pt-4">
                <div className="flex flex-col">
                  <span className="text-xs text-[#4c599a] uppercase font-bold tracking-tight">
                    Award
                  </span>
                  <span className="text-xl font-bold text-primary">$10,000</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    verified
                  </span>
                  <span className="text-green-600 font-bold text-sm">
                    98% Match
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Trending */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div
              className="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTMe1j5rL42Lab-pRaIDfM7Z_jfAMeZmw5iYGzpXwj2pHfNp4quBTujUbQmNtRibKeScgX6Bry4R6yaM5IkronFZ-lGoQGeJX3TSh-OAX0BnaF8Mjx80_5F0u58epCim2Vsue5FWKJ72qwuZQAlH7YihGV4IYQziQsTXolAoBV8CNQFCSf9r_G-dB5Zf2ARjLLFtb7cXA_XcktzHCwQqT1-N9UxuwaUx4FPWKI2i6t5t_2Bt8_p-xVVgTkclQgDKeLvE7aVl50RPI6")',
              }}
            >
              <div className="p-3">
                <span className="bg-orange-500/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Trending
                </span>
              </div>
            </div>
            <div className="p-4 relative bg-white dark:bg-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#0d101b] dark:text-white text-lg font-bold leading-tight">
                    Global STEM Grant
                  </p>
                  <p className="text-[#4c599a] dark:text-slate-400 text-sm font-medium mt-1">
                    TechCorp Industry
                  </p>
                </div>
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-primary">
                    bookmark
                  </span>
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-700 pt-4">
                <div className="flex flex-col">
                  <span className="text-xs text-[#4c599a] uppercase font-bold tracking-tight">
                    Award
                  </span>
                  <span className="text-xl font-bold text-primary">$5,000</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-blue-600 text-sm">
                    insights
                  </span>
                  <span className="text-blue-600 font-bold text-sm">
                    85% Match
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div
              className="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuine8BsWfRMye0e2JJuwWhi06PuRjP2jX_LnLsXU_-xt4urF3NEVmrKlC9Yuuv-CxiLYUl6YZtL5GDxMVFgHiU88YQAjETf39JYj68kq9qlKLSuqQyA2AJ_-CZLZq-AOzWCrJ9jUrlam0JqB0-nZXLAJoAeWzkf1h3vSlskvyHfVC-WwEUd6H4pwB8EqA_UGzEkqB9Qge8aHg-21bT9lN6r6pT7Vp2OOsC3F5ALxfGAP16fqKGpjACyO_ZBpUorxJDNLEa7kVbyaR")',
              }}
            ></div>
            <div className="p-4 relative bg-white dark:bg-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#0d101b] dark:text-white text-lg font-bold leading-tight">
                    Creative Leaders Fund
                  </p>
                  <p className="text-[#4c599a] dark:text-slate-400 text-sm font-medium mt-1">
                    Arts Association
                  </p>
                </div>
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-primary">
                    bookmark
                  </span>
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-700 pt-4">
                <div className="flex flex-col">
                  <span className="text-xs text-[#4c599a] uppercase font-bold tracking-tight">
                    Award
                  </span>
                  <span className="text-xl font-bold text-primary">$2,500</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 px-3 py-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-slate-500 text-sm">
                    bar_chart
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 font-bold text-sm">
                    62% Match
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
