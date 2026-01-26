import React from "react";

export default function CalendarPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col max-w-md md:max-w-5xl mx-auto bg-white dark:bg-background-dark shadow-sm overflow-x-hidden pb-24 md:pb-8">
        {/* TopAppBar */}
        <header className="sticky top-0 z-20 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="text-text-main dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
            <span className="material-symbols-outlined">chevron_left</span>
          </div>
          <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Deadlines
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 w-12 bg-transparent text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">calendar_add_on</span>
            </button>
          </div>
        </header>

        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 md:px-4">
          {/* Calendar Section */}
          <section className="bg-white dark:bg-background-dark px-4 py-2 md:col-span-7 md:rounded-2xl md:border md:border-gray-100 md:dark:border-gray-800 md:p-6 md:shadow-sm">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center p-1 justify-between mb-2">
                <button className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    arrow_back_ios
                  </span>
                </button>
                <div className="flex flex-col items-center">
                  <p className="text-text-main dark:text-white text-base font-bold leading-tight">
                    September 2024
                  </p>
                </div>
                <button className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward_ios
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-7 mb-2">
                {[
                  "S",
                  "M",
                  "T",
                  "W",
                  "T",
                  "F",
                  "S",
                ].map((day, i) => (
                  <p
                    key={i}
                    className="text-gray-400 text-[11px] font-bold leading-normal tracking-wider flex h-8 w-full items-center justify-center uppercase"
                  >
                    {day}
                  </p>
                ))}

                {/* Calendar Days - Simplified for Demo */}
                {/* Previous Month */}
                {[25, 26, 27, 28, 29, 30, 31].map((d) => (
                  <button
                    key={`prev-${d}`}
                    className="h-11 w-full text-gray-400 col-start-auto text-sm font-medium"
                  >
                    <div className="flex size-full items-center justify-center">
                      {d}
                    </div>
                  </button>
                ))}

                {/* Current Month */}
                <button className="h-11 w-full text-text-main dark:text-white text-sm font-medium">
                  <div className="flex size-full flex-col items-center justify-center relative">
                    1
                  </div>
                </button>
                <button className="h-11 w-full text-text-main dark:text-white text-sm font-medium">
                  <div className="flex size-full items-center justify-center">
                    2
                  </div>
                </button>
                <button className="h-11 w-full text-text-main dark:text-white text-sm font-medium">
                  <div className="flex size-full flex-col items-center justify-center relative">
                    3
                    <span className="absolute bottom-1.5 size-1 bg-primary rounded-full"></span>
                  </div>
                </button>
                <button className="h-11 w-full text-text-main dark:text-white text-sm font-medium">
                  <div className="flex size-full items-center justify-center">
                    4
                  </div>
                </button>
                {/* Active Day */}
                <button className="h-11 w-full text-white text-sm font-bold">
                  <div className="flex size-9 mx-auto items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
                    5
                  </div>
                </button>
                <button className="h-11 w-full text-text-main dark:text-white text-sm font-medium">
                  <div className="flex size-full items-center justify-center">
                    6
                  </div>
                </button>
                <button className="h-11 w-full text-text-main dark:text-white text-sm font-medium">
                  <div className="flex size-full flex-col items-center justify-center relative">
                    7
                    <span className="absolute bottom-1.5 size-1 bg-violet-500 rounded-full"></span>
                  </div>
                </button>
                {[8, 9].map((d) => (
                  <button
                    key={d}
                    className="h-11 w-full text-[#0d101b] dark:text-white text-sm font-medium"
                  >
                    <div className="flex size-full items-center justify-center">
                      {d}
                    </div>
                  </button>
                ))}
                <button className="h-11 w-full text-text-main dark:text-white text-sm font-medium">
                  <div className="flex size-full flex-col items-center justify-center relative">
                    10
                    <span className="absolute bottom-1.5 size-1 bg-primary rounded-full"></span>
                  </div>
                </button>
                {[11, 12, 13, 14].map((d) => (
                  <button
                    key={d}
                    className="h-11 w-full text-[#0d101b] dark:text-white text-sm font-medium"
                  >
                    <div className="flex size-full items-center justify-center">
                      {d}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Right Column: Filters & List */}
          <div className="md:col-span-5 flex flex-col h-full">
            {/* Divider (Mobile Only) */}
            <div className="h-2 bg-background-light dark:bg-background-dark/50 md:hidden"></div>

            {/* Filter Chips */}
            <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar bg-white dark:bg-background-dark md:px-0 md:pt-0">
              <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary px-5 shadow-sm cursor-pointer">
                <p className="text-white text-sm font-semibold leading-normal">
                  All
                </p>
              </div>
              <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-gray-100 dark:bg-gray-800 px-5 transition-colors cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                <div className="size-2 rounded-full bg-primary"></div>
                <p className="text-text-main dark:text-white text-sm font-medium leading-normal">
                  Applications
                </p>
              </div>
              <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-gray-100 dark:bg-gray-800 px-5 transition-colors cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                <div className="size-2 rounded-full bg-violet-500"></div>
                <p className="text-text-main dark:text-white text-sm font-medium leading-normal">
                  Scholarships
                </p>
              </div>
            </div>

            {/* Upcoming Deadlines Section */}
            <div className="bg-white dark:bg-background-dark flex-1 pb-10 md:bg-transparent">
              <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 py-4 flex items-center justify-between md:px-0 md:pt-0">
                Upcoming Deadlines
                <span className="text-xs font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                  3 total
                </span>
              </h3>
              {/* Deadline List Items */}
              <div className="flex flex-col px-2 md:px-0 gap-2">
                {/* Item 1: Application */}
                <div className="flex items-center gap-4 px-2 min-h-[80px] py-3 justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all cursor-pointer group bg-white dark:bg-slate-900 border border-transparent hover:border-gray-100 dark:hover:border-gray-800 shadow-sm md:shadow-none md:border-gray-100 md:dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 shrink-0 size-14 transition-transform group-hover:scale-105">
                      <span
                        className="material-symbols-outlined text-primary text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        circle
                      </span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-text-main dark:text-white text-base font-semibold leading-normal line-clamp-1">
                        IBA Final Submission
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-gray-400">
                          description
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                          Application
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-primary text-sm font-bold leading-normal">
                      3 days left
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Due Sept 10
                    </p>
                  </div>
                </div>

                {/* Item 2: Scholarship */}
                <div className="flex items-center gap-4 px-2 min-h-[80px] py-3 justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all cursor-pointer group bg-white dark:bg-slate-900 border border-transparent hover:border-gray-100 dark:hover:border-gray-800 shadow-sm md:shadow-none md:border-gray-100 md:dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-2xl bg-violet-500/10 dark:bg-violet-500/20 shrink-0 size-14 transition-transform group-hover:scale-105">
                      <span
                        className="material-symbols-outlined text-violet-500 text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        circle
                      </span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-text-main dark:text-white text-base font-semibold leading-normal line-clamp-1">
                        MeritGrid Excellence Award
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-gray-400">
                          workspace_premium
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                          Scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-violet-500 text-sm font-bold leading-normal">
                      7 days left
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Due Sept 14
                    </p>
                  </div>
                </div>

                {/* Item 3: Application */}
                <div className="flex items-center gap-4 px-2 min-h-[80px] py-3 justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all cursor-pointer group bg-white dark:bg-slate-900 border border-transparent hover:border-gray-100 dark:hover:border-gray-800 shadow-sm md:shadow-none md:border-gray-100 md:dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 shrink-0 size-14 transition-transform group-hover:scale-105">
                      <span
                        className="material-symbols-outlined text-primary text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        circle
                      </span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-text-main dark:text-white text-base font-semibold leading-normal line-clamp-1">
                        LUMS Financial Aid Form
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-gray-400">
                          description
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                          Application
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-primary text-sm font-bold leading-normal">
                      12 days left
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Due Sept 19
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Today FAB */}
        <button className="fixed bottom-24 right-6 z-30 size-14 rounded-2xl bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform cursor-pointer hover:bg-primary/90">
          <span className="material-symbols-outlined text-3xl">today</span>
        </button>
      </div>
    </div>
  );
}
