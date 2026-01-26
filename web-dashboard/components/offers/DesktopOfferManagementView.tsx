"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";

export default function DesktopOfferManagementView() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden relative">
        {/* Top Navigation / Header (Adapted for consistency with other pages) */}
        <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-8">
               <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden md:block">MeritGrid</h2>
               {/* Nav links from design adapted */}
               <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                <a className="hover:text-primary transition-colors" href="/talent">Dashboard</a>
                <a className="hover:text-primary transition-colors" href="/talent">Candidates</a>
                <a className="text-primary font-bold" href="/offers">Offers</a>
                <a className="hover:text-primary transition-colors" href="/analytics">Analytics</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                  search
                </span>
                <input
                  className="h-10 pl-10 pr-4 rounded-full bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-sm w-64"
                  placeholder="Search candidates..."
                  type="text"
                />
              </div>
              <button className="relative p-2 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
              </button>
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2w7zMKBCVmi5GTp3kjkB1BuZ1e8_aO6704lMeYIJLCumr1o2Nf7AK6wla-hSkXQdePdf0tE52GANGVxy-QrVIp1guAUZ0UndRY6reUDX2sr9POInRXPFxqpHrMxXFlfXmZyYOPdmf8rGHS63FrKxH0Q6qVo8nl2gISCuTKZHoTRFUeHpXIM3xQtDwIXTHrJx3-TioXBhMN1ZWjir87vhOlS7ecaha1i0lHWX5KJVRDjhfTgmqUvR9qegTyiahGCQ2kK8uCmC2Lt9V")',
                }}
              ></div>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 pb-24 overflow-y-auto">
          {/* Breadcrumbs & Back */}
          <div className="mb-4 flex items-center text-sm text-slate-500 dark:text-slate-400">
            <a
              className="flex items-center hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-lg mr-1">
                arrow_back
              </span>
              Back to Candidates
            </a>
            <span className="mx-2">/</span>
            <span>Offers</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white font-medium">
              Alex Johnson
            </span>
          </div>
          {/* Profile Header */}
          <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-20 md:size-24 shrink-0 border-4 border-slate-50 dark:border-slate-700 shadow-inner"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmKhLDU0qaJ-5Bkybmaq5MLoo-jdxyZX997xyyLzlsRjNd7UDJU3o57OuYrP7fwlHezIjebNO3hGv4YYmudOWZ26fVwoCwkTCWULWqMUgbtlnnlVmsr6Dv0uhlgXcTTZiTkM-BY4hQsqoQjfCR6WgR86moLXg6jruCqbAD46cdcABrJ4tZ_9yaG0yNkvQu37MbU-ptGfXQ6ocAlvvKrRwMOroA1SW4rb5leA5wTMvK-WZ3Ql0e9F-l8Bl0VIRShRZzcVD9H1Cmhvbe")',
                  }}
                ></div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    Alex Johnson
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 dark:text-slate-400 text-sm md:text-base">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">
                        code
                      </span>{" "}
                      Software Engineer Applicant
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">
                        school
                      </span>{" "}
                      Stanford University &apos;24
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">
                        location_on
                      </span>{" "}
                      San Francisco, CA
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 self-start md:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-800">
                  <span className="material-symbols-outlined text-lg filled">
                    pending
                  </span>
                  Offer Sent - Pending Response
                </span>
                <button className="p-2 text-slate-400 hover:text-primary transition-colors border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 cursor-pointer">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          </div>
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
            {/* Left Panel: Offer Details (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Total Comp Card */}
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl p-6 text-white shadow-md relative overflow-hidden group">
                <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 translate-x-12"></div>
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-blue-100 text-sm font-medium mb-1 flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">
                        payments
                      </span>
                      Total Annual Compensation
                    </p>
                    <h2 className="text-4xl font-bold tracking-tight">
                      $145,000
                    </h2>
                    <p className="text-blue-100 text-xs mt-2 opacity-80">
                      * Includes Base + Annualized Bonus Estimate
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="material-symbols-outlined text-green-300">
                        trending_up
                      </span>
                      <span>+4.2% vs Market Avg</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Offer Form */}
              <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex-1">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Offer Details
                  </h3>
                  <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1 cursor-pointer">
                    <span className="material-symbols-outlined text-lg">
                      history
                    </span>{" "}
                    Compare Versions
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Base Salary */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Base Salary (Annual)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                        $
                      </span>
                      <input
                        className="w-full h-12 pl-8 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        type="text"
                        defaultValue="110,000"
                      />
                    </div>
                  </div>
                  {/* Signing Bonus */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Signing Bonus
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                        $
                      </span>
                      <input
                        className="w-full h-12 pl-8 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        type="text"
                        defaultValue="15,000"
                      />
                    </div>
                  </div>
                  {/* Equity */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Equity (RSUs)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                        dataset
                      </span>
                      <input
                        className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        type="text"
                        defaultValue="5,000 Units"
                      />
                    </div>
                    <p className="text-xs text-slate-500">
                      Vesting: 4 years, 1 year cliff
                    </p>
                  </div>
                  {/* Start Date */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Target Start Date
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                        calendar_today
                      </span>
                      <input
                        className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        type="date"
                        defaultValue="2024-09-01"
                      />
                    </div>
                  </div>
                </div>
                {/* Benefits Accordion Stub */}
                <div className="px-6 pb-6 pt-2">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-500">
                          card_giftcard
                        </span>
                        <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">
                          Standard Benefits Package (Health, 401k, PTO)
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">
                        expand_more
                      </span>
                    </button>
                  </div>
                </div>
                {/* Notes Area */}
                <div className="px-6 pb-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Hiring Manager Notes
                    </label>
                    <textarea
                      className="w-full p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent min-h-[100px] resize-none"
                      placeholder="Add any specific conditions or notes for the revised offer..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Panel: Negotiation History (4 cols) */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col">
                <div className="p-5 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400">
                      history
                    </span>
                    Negotiation History
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto p-5 scrollbar-hide">
                  <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-8">
                    {/* Latest Event */}
                    <div className="relative">
                      <div className="absolute -left-[25px] bg-amber-100 dark:bg-amber-900 border-2 border-amber-500 rounded-full size-4 mt-1.5"></div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                            Current Action
                          </span>
                          <span className="text-xs text-slate-400">
                            Today, 10:00 AM
                          </span>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-lg p-3">
                          <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                            Candidate Counter-Offer
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                            Requested adjustment to base salary.
                          </p>
                          <div className="flex items-center gap-2 text-xs font-medium bg-white dark:bg-slate-900/50 rounded px-2 py-1.5 border border-amber-200 dark:border-amber-800/50">
                            <span className="text-slate-500">
                              Proposed Base:
                            </span>
                            <span className="text-slate-900 dark:text-white font-bold">
                              $115,000
                            </span>
                            <span className="text-green-600 dark:text-green-400 flex items-center">
                              <span className="material-symbols-outlined text-[14px]">
                                arrow_upward
                              </span>{" "}
                              $5k
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Past Event 1 */}
                    <div className="relative opacity-70 hover:opacity-100 transition-opacity">
                      <div className="absolute -left-[25px] bg-primary border-2 border-primary rounded-full size-4 mt-1.5"></div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wide">
                            Offer Sent
                          </span>
                          <span className="text-xs text-slate-400">
                            Yesterday, 2:30 PM
                          </span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                          <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                            Initial Offer Extended
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Sent via MeritGrid Portal.
                          </p>
                          <div className="mt-2 text-xs text-slate-500 grid grid-cols-2 gap-1">
                            <span>Base: $105,000</span>
                            <span>Sign-on: $15,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Past Event 2 */}
                    <div className="relative opacity-60 hover:opacity-100 transition-opacity">
                      <div className="absolute -left-[25px] bg-slate-300 dark:bg-slate-600 rounded-full size-4 mt-1.5"></div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                            Evaluation
                          </span>
                          <span className="text-xs text-slate-400">
                            Oct 12, 2023
                          </span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700 shadow-sm">
                          <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                            Interview Feedback Logged
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                            &quot;Strong technical skills, fits team culture
                            well.&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Sticky Footer Action Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-[#1e293b] border-t border-slate-200 dark:border-slate-800 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-8">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="hidden md:flex flex-col">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                  Offer Status
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Revision in Draft
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm flex-1 sm:flex-none justify-center sm:justify-start cursor-pointer">
                Generate Revised Offer
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 text-sm flex items-center gap-2 flex-1 sm:flex-none justify-center sm:justify-start cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
                Approve &amp; Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
