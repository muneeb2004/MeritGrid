"use client";

import React from "react";

export default function MobileOfferManagementView() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white min-h-screen font-display">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dcdfe5] dark:border-gray-700">
        <div className="flex items-center p-4 justify-between">
          <div className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[#111318] dark:text-white text-base font-bold leading-tight">
              Alex Rivera
            </h2>
            <p className="text-[#636f88] dark:text-gray-400 text-xs font-medium">
              Sr. Machine Learning Engineer
            </p>
          </div>
          <div className="flex w-10 items-center justify-end">
            <button className="text-[#111318] dark:text-white cursor-pointer">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
        {/* Status Tabs (Modified from Component) */}
        <div className="flex border-b border-[#dcdfe5] dark:border-gray-700 px-2 justify-between">
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[10px] pt-2 flex-1 opacity-50"
            href="#"
          >
            <p className="text-xs font-bold uppercase tracking-wider">Draft</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[10px] pt-2 flex-1 opacity-50"
            href="#"
          >
            <p className="text-xs font-bold uppercase tracking-wider">Sent</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[10px] pt-2 flex-1"
            href="#"
          >
            <p className="text-xs font-bold uppercase tracking-wider">
              Negotiating
            </p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[10px] pt-2 flex-1 opacity-50"
            href="#"
          >
            <p className="text-xs font-bold uppercase tracking-wider">
              Accepted
            </p>
          </a>
        </div>
      </div>
      <main className="pb-32">
        {/* AI Competitiveness Gauge */}
        <div className="px-4 pt-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-[#dcdfe5] dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-sm font-bold text-[#636f88] dark:text-gray-400 uppercase tracking-tight">
                  AI Insights
                </h3>
                <p className="text-lg font-extrabold text-[#111318] dark:text-white">
                  Offer Competitiveness
                </p>
              </div>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined !text-[14px]">
                  auto_awesome
                </span>
                LIVE
              </span>
            </div>
            <div className="relative h-4 w-full bg-[#f0f2f5] dark:bg-gray-700 rounded-full overflow-hidden mt-2">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-warning to-success"
                style={{ width: "82%" }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-[11px] font-bold text-[#636f88] dark:text-gray-400">
              <span>LOW</span>
              <span className="text-success">HIGH (82%)</span>
            </div>
            <p className="mt-4 text-sm text-[#111318] dark:text-gray-200 leading-relaxed">
              This offer is in the{" "}
              <span className="font-bold text-success">top 15%</span> for
              Silicon Valley ML roles. Strong equity package compensates for
              base salary gap.
            </p>
          </div>
        </div>
        {/* Offer Details Section Header */}
        <h2 className="text-[#111318] dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-8">
          Offer Details
        </h2>
        {/* Offer Details Form (TextField Components) */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-end gap-4 px-4 py-2">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111318] dark:text-gray-300 text-sm font-semibold leading-normal pb-2">
                Base Salary (Annual)
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#636f88] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-bold"
                  defaultValue="185,000"
                />
                <div className="text-[#636f88] dark:text-gray-400 flex border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-gray-800 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                  <span className="material-symbols-outlined">
                    attach_money
                  </span>
                </div>
              </div>
            </label>
          </div>
          <div className="flex flex-wrap items-end gap-4 px-4 py-2">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111318] dark:text-gray-300 text-sm font-semibold leading-normal pb-2">
                Signing Bonus
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#636f88] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-bold"
                  defaultValue="25,000"
                />
                <div className="text-[#636f88] dark:text-gray-400 flex border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-gray-800 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                  <span className="material-symbols-outlined">payments</span>
                </div>
              </div>
            </label>
          </div>
          <div className="flex flex-wrap items-end gap-4 px-4 py-2">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111318] dark:text-gray-300 text-sm font-semibold leading-normal pb-2">
                Equity (RSUs / 4 Years)
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#636f88] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-bold"
                  defaultValue="450,000"
                />
                <div className="text-[#636f88] dark:text-gray-400 flex border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-gray-800 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
              </div>
            </label>
          </div>
        </div>
        {/* Negotiation History */}
        <div className="px-4 pt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#111318] dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em]">
              Negotiation History
            </h2>
            <span className="text-primary text-sm font-bold cursor-pointer">
              View Log
            </span>
          </div>
          <div className="space-y-4">
            {/* Timeline Item 1 */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary !text-[18px]">
                    send
                  </span>
                </div>
                <div className="w-[1px] h-full bg-[#dcdfe5] dark:bg-gray-700 mt-1"></div>
              </div>
              <div className="pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold dark:text-white">
                    Initial Offer Sent
                  </span>
                  <span className="text-[10px] text-[#636f88] dark:text-gray-400">
                    Oct 24, 10:15 AM
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-[#dcdfe5] dark:border-gray-700">
                  <p className="text-sm text-[#111318] dark:text-gray-300">
                    Base: $175k, Bonus: $15k, Equity: $350k
                  </p>
                </div>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="size-8 rounded-full bg-warning/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-warning !text-[18px]">
                    chat_bubble
                  </span>
                </div>
                <div className="w-[1px] h-full bg-[#dcdfe5] dark:bg-gray-700 mt-1"></div>
              </div>
              <div className="pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold dark:text-white">
                    Candidate Counter-Offer
                  </span>
                  <span className="text-[10px] text-[#636f88] dark:text-gray-400">
                    Oct 25, 02:30 PM
                  </span>
                </div>
                <div className="bg-warning/5 dark:bg-warning/10 p-3 rounded-lg border border-warning/30">
                  <p className="text-sm text-[#111318] dark:text-gray-200 italic leading-snug">
                    &quot;Thanks for the offer. I&apos;m excited, but I have a competing
                    offer for $190k base. Can we meet in the middle?&quot;
                  </p>
                </div>
              </div>
            </div>
            {/* Timeline Item 3 (Current/Latest) */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary !text-[18px]">
                    edit
                  </span>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold dark:text-white">
                    Revision Pending
                  </span>
                  <span className="text-[10px] text-[#636f88] dark:text-gray-400">
                    Just now
                  </span>
                </div>
                <p className="text-xs text-[#636f88] dark:text-gray-400">
                  Updating values to $185k base + $25k sign-on.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Contract Preview Pane */}
        <div className="mx-4 mt-8 bg-background-light dark:bg-gray-900 rounded-xl border border-dashed border-[#dcdfe5] dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                description
              </span>
              <span className="text-sm font-bold dark:text-white">
                Contract_Preview_Rivera.pdf
              </span>
            </div>
            <span className="material-symbols-outlined text-[#636f88] dark:text-gray-400 cursor-pointer">
              open_in_full
            </span>
          </div>
          <div className="h-24 bg-white dark:bg-gray-800 rounded flex flex-col items-center justify-center opacity-60">
            <div className="w-1/2 h-2 bg-[#f0f2f5] dark:bg-gray-700 rounded-full mb-2"></div>
            <div className="w-2/3 h-2 bg-[#f0f2f5] dark:bg-gray-700 rounded-full mb-2"></div>
            <div className="w-1/3 h-2 bg-[#f0f2f5] dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </main>
      {/* Page Indicators (Used as scroll hint/stepper) */}
      <div className="fixed bottom-24 left-0 right-0 flex w-full flex-row items-center justify-center gap-3 py-5 pointer-events-none">
        <div className="h-1.5 w-1.5 rounded-full bg-[#dcdfe5] dark:bg-gray-600"></div>
        <div className="h-1.5 w-6 rounded-full bg-primary"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-[#dcdfe5] dark:bg-gray-600"></div>
      </div>
      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-background-dark border-t border-[#dcdfe5] dark:border-gray-800 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex gap-3 max-w-[480px] mx-auto">
          <button className="flex-1 h-12 bg-background-light dark:bg-gray-800 text-[#111318] dark:text-white font-bold rounded-lg flex items-center justify-center gap-2 border border-[#dcdfe5] dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="material-symbols-outlined !text-[20px]">save</span>
            Save Draft
          </button>
          <button className="flex-[1.5] h-12 bg-success text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-success/20 cursor-pointer hover:bg-green-600">
            <span className="material-symbols-outlined !text-[20px]">
              send_and_archive
            </span>
            Send Offer
          </button>
        </div>
      </div>
    </div>
  );
}
