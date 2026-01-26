import Link from "next/link";
import React from "react";

// Mock Data for the Pipeline
const pipelineStages = [
  { id: 1, name: "Applied", count: 124, color: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300" },
  { id: 2, name: "Screening", count: 45, color: "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300" },
  { id: 3, name: "Interview", count: 18, color: "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300" },
  { id: 4, name: "Offer", count: 8, color: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark font-display text-[#111318] dark:text-white flex flex-col">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-3 shrink-0 flex items-center justify-between">
         <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>grid_view</span>
                </div>
                <span className="text-lg font-bold tracking-tight">MeritGrid Talent</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                <button className="px-3 py-1.5 bg-white dark:bg-gray-700 text-xs font-bold rounded shadow-sm">Dashboard</button>
                <button className="px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:text-primary text-xs font-medium">Candidates</button>
                <button className="px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:text-primary text-xs font-medium">Jobs</button>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <div className="relative">
                <span className="material-symbols-outlined text-gray-400">search</span>
            </div>
            <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-200 dark:border-gray-600">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk-qE84mgUSX9H0htvbc4v4sef1KvWWLASFnor4DOmAZEV1XEd7LDPN9jgcjEHIM7aKuAlFuhGylwz60P7S-z98zm_B1pb3lutD5prZeo_Q1CFd_Pdo5DpFuO50vOGIuED7cIX8tHP2Zyr1PFMG4_vFyZFN5qqflJ4RC4LNpgbCHVYqT3MX-1IZoFJj2TYCKU5I0OfchNb7N9x8xx-FRsS13Pu-CRD5OVRLApph6mzKxEKO5D9U_5IbkBAcoNPPqPT-djnpgA_Snho" className="w-full h-full object-cover" />
            </div>
         </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
         {/* Welcome Header */}
         <div className="mb-8 flex justify-between items-end">
            <div>
                <h1 className="text-2xl font-bold mb-1">Admissions Pipeline</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Overview of Fall 2025 Applications</p>
            </div>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md transition-all">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Create Evaluation
            </button>
         </div>

         {/* Metric Cards (Pipeline Stages) */}
         <div className="grid grid-cols-4 gap-6 mb-8">
            {pipelineStages.map((stage) => (
                <div key={stage.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex justify-between items-start mb-4">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${stage.color}`}>
                            {stage.name}
                        </span>
                        <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-400">more_horiz</span>
                    </div>
                    <p className="text-3xl font-black text-[#111318] dark:text-white mb-1">{stage.count}</p>
                    <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        <span>+12% this week</span>
                    </div>
                </div>
            ))}
         </div>

         {/* Recent Candidates Grid */}
         <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="font-bold text-lg">Recent Applicants</h3>
                <button className="text-sm text-primary font-bold hover:underline">View All</button>
            </div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400">
                        <th className="px-6 py-3 font-medium">Candidate</th>
                        <th className="px-6 py-3 font-medium">Program</th>
                        <th className="px-6 py-3 font-medium">Match Score</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                        <th className="px-6 py-3 font-medium">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {/* Row 1 */}
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center font-bold text-xs">AJ</div>
                                <div>
                                    <p className="font-bold text-[#111318] dark:text-white">Alex Johnson</p>
                                    <p className="text-xs text-gray-500">GPA 3.8 • Karachi</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">BSc Computer Science</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full w-[95%]"></div>
                                </div>
                                <span className="font-bold text-xs text-green-600">95%</span>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/20 px-2 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                <span className="size-1.5 rounded-full bg-blue-500"></span>
                                Screening
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            <button className="text-gray-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">visibility</span>
                            </button>
                        </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 flex items-center justify-center font-bold text-xs">ZK</div>
                                <div>
                                    <p className="font-bold text-[#111318] dark:text-white">Zara Khan</p>
                                    <p className="text-xs text-gray-500">GPA 4.0 • Lahore</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">BBA Honors</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full w-[88%]"></div>
                                </div>
                                <span className="font-bold text-xs text-green-600">88%</span>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 dark:bg-orange-900/20 px-2 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
                                <span className="size-1.5 rounded-full bg-orange-500"></span>
                                Interview
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            <button className="text-gray-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">visibility</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
         </div>
      </main>
    </div>
  );
}
