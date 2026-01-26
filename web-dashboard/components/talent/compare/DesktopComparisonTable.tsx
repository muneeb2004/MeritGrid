import Link from "next/link";
import React from "react";
import Sidebar from "@/components/Sidebar";

export default function DesktopComparisonTable() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display overflow-hidden">
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between gap-4 px-6 py-3 border-b border-[#e7ebf3] dark:border-gray-800 bg-white dark:bg-[#151c2b] shrink-0">
          <div className="flex items-center flex-1 gap-4">
            {/* Search Bar */}
            <div className="flex max-w-md w-full items-center rounded-lg bg-[#f0f2f5] dark:bg-gray-800 px-3 h-10">
              <span className="material-symbols-outlined text-[#4c669a] text-[20px]">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full text-[#0d121b] dark:text-white placeholder-[#4c669a]"
                placeholder="Search candidates, universities, or skills..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="relative text-[#4c669a] hover:text-[#0d121b] dark:hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#151c2b]"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
            {/* Page Heading & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[#4c669a] text-sm font-medium mb-1">
                  <Link href="/talent" className="hover:text-primary">
                    Candidates
                  </Link>
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  <span className="text-[#0d121b] dark:text-white">
                    Comparison
                  </span>
                </div>
                <h2 className="text-3xl font-black tracking-tight text-[#0d121b] dark:text-white">
                  Candidate Comparison
                </h2>
                <p className="text-[#4c669a] dark:text-slate-400">
                  Analyzing top 3 finalists for the Senior Developer role
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 h-10 px-4 rounded-lg border border-[#e7ebf3] dark:border-gray-700 bg-white dark:bg-[#151c2b] text-[#0d121b] dark:text-white text-sm font-bold hover:bg-background-light dark:hover:bg-gray-800 transition-colors shadow-sm cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">
                    download
                  </span>
                  <span>Export PDF</span>
                </button>
                <button className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary hover:bg-blue-700 text-white text-sm font-bold shadow-sm transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">
                    bookmark
                  </span>
                  <span>Save Shortlist</span>
                </button>
              </div>
            </div>

            {/* Comparison Table Container */}
            <div className="bg-white dark:bg-[#151c2b] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
              {/* Table Wrapper for Responsiveness */}
              <div className="overflow-x-auto">
                {/* Comparison Grid */}
                <div className="grid min-w-[900px] grid-cols-[200px_1fr_1fr_1fr]">
                  {/* ================= HEADER ROW ================= */}
                  {/* Legend Column */}
                  <div className="p-6 border-b border-r border-[#e7ebf3] dark:border-gray-800 bg-[#fafbfd] dark:bg-[#111623] sticky left-0 z-10 flex flex-col justify-end">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4c669a]">
                      Comparison Criteria
                    </span>
                  </div>
                  {/* Candidate 1 Header */}
                  <div className="p-6 border-b border-[#e7ebf3] dark:border-gray-800 flex flex-col items-center text-center gap-4 relative group hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div className="relative">
                      <div
                        className="size-20 rounded-full bg-cover bg-center border-4 border-white dark:border-[#151c2b] shadow-md"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4Wz9y_r3sG7dgFsMHj22eMjrs5CHHoe_R0WzhrwN_a7StWyrWGzCJv5gkc9r4-JbBrT4w9q4pFqgjod2icWSgdOb5BmVLfNaufJwJwDK1GP70KNOkZ8hLHduJyZj1vRuQNscYi82Tc0QbwuLCtymsXFWFTiEoS0XJpkD7WC8kUFXRBVqzNnZfXZJj9UpZU8WZdOs9HtPLJb35cyPLe39LwSNwBLC10HNndb2r1B8r8QhsG4mY7tyJIpS5ES8L79ifC-DclkbO19wU')",
                        }}
                      ></div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          auto_awesome
                        </span>
                        98% Match
                      </div>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-lg font-bold text-[#0d121b] dark:text-white">
                        Sarah Jenkins
                      </h3>
                      <p className="text-sm text-[#4c669a]">Computer Science</p>
                      <p className="text-xs text-[#4c669a] mt-1">
                        Stanford University
                      </p>
                    </div>
                  </div>
                  {/* Candidate 2 Header */}
                  <div className="p-6 border-b border-l border-[#e7ebf3] dark:border-gray-800 flex flex-col items-center text-center gap-4 relative group hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div className="relative">
                      <div
                        className="size-20 rounded-full bg-cover bg-center border-4 border-white dark:border-[#151c2b] shadow-md"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCmdFoErr0_LFzSAohnkib4SslARmpfYcYPusevAJnZCvv1TLsHKWUPw0RZUuFW7Mm58TSTWUfHyUQLSRlKfpFzS31i6K3Lo0R5q1_x69P4Y6aF1ZPDFGS3f02nzF2AfE7cM7k7P-p4afqLNUbEjz75qLXyBheEOWZc99KZYyfiH14gKg2lNP1to4BFmwBuClap3QaZyKai7ZjHU4nuuRQzoW8LOgIQr-Ip30MHMxnGbsFnTzqb9Xg_U1LtpX-EOm2t5HIgIbAAx9A')",
                        }}
                      ></div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        85% Match
                      </div>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-lg font-bold text-[#0d121b] dark:text-white">
                        David Chen
                      </h3>
                      <p className="text-sm text-[#4c669a]">
                        Software Engineering
                      </p>
                      <p className="text-xs text-[#4c669a] mt-1">MIT</p>
                    </div>
                  </div>
                  {/* Candidate 3 Header */}
                  <div className="p-6 border-b border-l border-[#e7ebf3] dark:border-gray-800 flex flex-col items-center text-center gap-4 relative group hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div className="relative">
                      <div
                        className="size-20 rounded-full bg-cover bg-center border-4 border-white dark:border-[#151c2b] shadow-md"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJeSgt4v3H62dVF83UjgNoauIcNHkZjkYVtXC5j2vw8xv6qpoYvR0eJ7VDDWDAZSHtHCyJApbUwMwf97i3YbMLbpr0K-FsE5JQn6pB2P91LSNFV1gpoA2fK_bPMoOlNMmZYrEAt1lXs1ar-HfMVzgFSPYgLjTflOAor3l1ff6oDjU3yUOw0soc3OcTMkTzxWdNcIEsnf1pHTHdLYpR2rz-DypWpNRLxfqUwpT7vyZsdX8-QpDQv5ZLSgkSDA5_eODxH_5Q3kjuTSTi')",
                        }}
                      ></div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        92% Match
                      </div>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-lg font-bold text-[#0d121b] dark:text-white">
                        Maria Rodriguez
                      </h3>
                      <p className="text-sm text-[#4c669a]">Data Science</p>
                      <p className="text-xs text-[#4c669a] mt-1">Berkeley</p>
                    </div>
                  </div>

                  {/* ================= ACADEMICS ROW ================= */}
                  <div className="p-4 px-6 border-b border-r border-[#e7ebf3] dark:border-gray-800 bg-[#fafbfd] dark:bg-[#111623] text-sm font-bold text-[#4c669a] sticky left-0 flex items-center">
                    Academic Excellence
                  </div>
                  <div className="p-4 px-6 border-b border-[#e7ebf3] dark:border-gray-800 hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#4c669a]">GPA</span>
                        <span className="text-base font-bold text-[#0d121b] dark:text-white">
                          3.9/4.0
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Summa Cum Laude
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          Dean's List
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 px-6 border-b border-l border-[#e7ebf3] dark:border-gray-800 hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#4c669a]">GPA</span>
                        <span className="text-base font-bold text-[#0d121b] dark:text-white">
                          3.7/4.0
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          Magna Cum Laude
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 px-6 border-b border-l border-[#e7ebf3] dark:border-gray-800 hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#4c669a]">GPA</span>
                        <span className="text-base font-bold text-[#0d121b] dark:text-white">
                          4.0/4.0
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Valedictorian
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                          Phi Beta Kappa
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ================= SKILLS ROW ================= */}
                  <div className="p-4 px-6 border-b border-r border-[#e7ebf3] dark:border-gray-800 bg-[#fafbfd] dark:bg-[#111623] text-sm font-bold text-[#4c669a] sticky left-0 flex items-center">
                    Core Skills
                  </div>
                  <div className="p-4 px-6 border-b border-[#e7ebf3] dark:border-gray-800 flex flex-col gap-3 hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-[#0d121b] dark:text-white">
                          Python
                        </span>
                        <span className="text-primary">Expert</span>
                      </div>
                      <div className="w-full bg-[#e7ebf3] dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-[#0d121b] dark:text-white">
                          React Native
                        </span>
                        <span className="text-[#4c669a]">Advanced</span>
                      </div>
                      <div className="w-full bg-[#e7ebf3] dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-primary/70 h-1.5 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 px-6 border-b border-l border-[#e7ebf3] dark:border-gray-800 flex flex-col gap-3 hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-[#0d121b] dark:text-white">
                          Project Mgmt
                        </span>
                        <span className="text-emerald-600">Advanced</span>
                      </div>
                      <div className="w-full bg-[#e7ebf3] dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-emerald-600 h-1.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-[#0d121b] dark:text-white">
                          Python
                        </span>
                        <span className="text-[#4c669a]">Intermediate</span>
                      </div>
                      <div className="w-full bg-[#e7ebf3] dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-emerald-600/60 h-1.5 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 px-6 border-b border-l border-[#e7ebf3] dark:border-gray-800 flex flex-col gap-3 hover:bg-background-light dark:hover:bg-gray-800 transition-colors">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-[#0d121b] dark:text-white">
                          Data Analysis
                        </span>
                        <span className="text-blue-500">Expert</span>
                      </div>
                      <div className="w-full bg-[#e7ebf3] dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-blue-500 h-1.5 rounded-full"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-[#0d121b] dark:text-white">
                          Machine Learning
                        </span>
                        <span className="text-blue-500">Advanced</span>
                      </div>
                      <div className="w-full bg-[#e7ebf3] dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-blue-500/80 h-1.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* ================= AI INSIGHTS ROW ================= */}
                  <div className="p-4 px-6 border-r border-[#e7ebf3] dark:border-gray-800 bg-primary/5 dark:bg-primary/10 text-sm font-bold text-primary dark:text-blue-400 sticky left-0 flex items-center">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined">
                        auto_awesome
                      </span>
                      <span>AI Insights</span>
                    </div>
                  </div>
                  <div className="p-6 bg-primary/5 dark:bg-primary/10">
                    <div className="flex flex-col gap-3">
                      <p className="text-sm leading-relaxed text-[#0d121b] dark:text-white">
                        Sarah demonstrates exceptional technical aptitude and
                        problem-solving velocity. Her coding assessment score
                        was in the top 1% of all candidates. Ideal for R&D or
                        core engineering roles.
                      </p>
                      <div className="flex flex-col gap-2 mt-2">
                        <button className="w-full py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-bold transition-colors cursor-pointer">
                          Schedule Interview
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-l border-[#e7ebf3] dark:border-gray-800 bg-emerald-50 dark:bg-emerald-900/10">
                    <div className="flex flex-col gap-3">
                      <p className="text-sm leading-relaxed text-[#0d121b] dark:text-white">
                        David shows strong leadership potential and soft skills
                        that exceed standard graduate levels. While technical
                        skills are developing, his ability to manage teams is a
                        standout asset.
                      </p>
                      <div className="flex flex-col gap-2 mt-2">
                        <button className="w-full py-2 bg-white dark:bg-[#151c2b] border border-emerald-600 text-emerald-600 rounded-lg text-sm font-bold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors cursor-pointer">
                          Shortlist for PM
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-l border-[#e7ebf3] dark:border-gray-800 bg-blue-50 dark:bg-blue-900/10">
                    <div className="flex flex-col gap-3">
                      <p className="text-sm leading-relaxed text-[#0d121b] dark:text-white">
                        Maria combines academic rigor with practical data
                        application. Her published research indicates a high
                        capacity for complex analysis. High potential for the
                        Data Science team.
                      </p>
                      <div className="flex flex-col gap-2 mt-2">
                        <button className="w-full py-2 bg-white dark:bg-[#151c2b] border border-blue-500 text-blue-500 rounded-lg text-sm font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-pointer">
                          Contact Candidate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
