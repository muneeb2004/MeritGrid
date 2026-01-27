"use client";

import Link from "next/link";
import React from "react";
import { PIPELINE_STAGES, RECENT_APPLICANTS } from "@/data/talent/pipeline";

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
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
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
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {PIPELINE_STAGES.map((stage) => (
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
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[600px]">
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
                    {RECENT_APPLICANTS.map((applicant) => (
                      <tr key={applicant.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                  <div className={`size-9 rounded-full ${applicant.avatarBg} ${applicant.avatarColor} flex items-center justify-center font-bold text-xs`}>{applicant.initials}</div>
                                  <div>
                                      <p className="font-bold text-[#111318] dark:text-white">{applicant.name}</p>
                                      <p className="text-xs text-gray-500">GPA {applicant.gpa} • {applicant.location}</p>
                                  </div>
                              </div>
                          </td>
                          <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{applicant.program}</td>
                          <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                  <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                      <div className="bg-green-500 h-full" style={{ width: `${applicant.match}%` }}></div>
                                  </div>
                                  <span className="font-bold text-xs text-green-600">{applicant.match}%</span>
                              </div>
                          </td>
                          <td className="px-6 py-4">
                              <span className={`inline-flex items-center gap-1 rounded-full ${applicant.statusColor} px-2 py-1 text-xs font-semibold`}>
                                  <span className={`size-1.5 rounded-full ${applicant.statusDot}`}></span>
                                  {applicant.status}
                              </span>
                          </td>
                          <td className="px-6 py-4">
                              <button className="text-gray-400 hover:text-primary transition-colors">
                                  <span className="material-symbols-outlined">visibility</span>
                              </button>
                          </td>
                      </tr>
                    ))}
                </tbody>
            </table>
            </div>
         </div>
      </main>
    </div>
  );
}
