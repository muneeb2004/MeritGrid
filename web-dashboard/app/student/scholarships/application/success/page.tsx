import Link from "next/link";
import React from "react";

export default function ApplicationSuccessPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-text-main dark:text-white pb-12 lg:pb-0">
      {/* Top Navigation - Mobile Only (Hidden on Desktop because Sidebar handles it) */}
      <div className="flex items-center bg-white dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between sticky top-0 z-50 lg:hidden border-b border-slate-100 dark:border-slate-800">
        <Link href="/student/dashboard">
          <div className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-2xl">close</span>
          </div>
        </Link>
        <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-10">
          Success
        </h2>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center lg:py-12 px-4 lg:px-8">
        <div className="layout-content-container w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Premium 3D Illustration & Headline */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative w-full mb-8 flex justify-center lg:justify-start">
                {/* Decorative Accents */}
                <div className="absolute -top-4 right-1/4 lg:right-auto lg:left-56 text-accent-yellow animate-bounce delay-100">
                  <span className="material-symbols-outlined text-4xl">celebration</span>
                </div>
                <div className="absolute top-12 left-1/4 lg:left-auto lg:-left-8 text-accent-yellow animate-pulse">
                  <span className="material-symbols-outlined text-3xl">star</span>
                </div>
                
                {/* 3D Illustration Container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-primary/5 to-primary/20 rounded-full flex items-center justify-center p-8 lg:p-12 overflow-visible">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 animate-pulse"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    alt="Success celebration" 
                    className="w-full h-full object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-eEtvZs1Y191d7Y8LIO3Xwouq5QlBDIx9ak3v4nrR6j8--ZjXKWLCV8Zwp88HCOGN3zcqeoajjLb4AHVRlOvzzcdnwlxcaAn8Wmu6zjm2AyTQ3xBNx5xkKAzBG3ZzTrNUWV2KH49jq604xs_PPDeRh4EUL04RGL2oQNoG51W_iaV-vWdOKUUwqXjF0E8ay6DUQaxumJqd1tBuwIwx2bq3GFf0If11GQOTi1sfep9JZfiCbU1UAPqlqr3p2yhhy68jF5MGlnjndF8"
                  />
                </div>
              </div>

              <h1 className="text-navy-deep dark:text-white tracking-tight text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Application Sent!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-normal leading-relaxed max-w-md lg:mb-8">
                Your journey to <span className="font-bold text-primary">Habib University</span> starts here. We&apos;ve received your materials.
              </p>

              {/* Desktop Actions */}
              <div className="hidden lg:flex flex-row gap-4 w-full">
                <Link href="/student/dashboard" className="flex-1 max-w-[240px]">
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 cursor-pointer flex items-center justify-center gap-2">
                    Back to Dashboard
                  </button>
                </Link>
                <button className="flex items-center gap-2 text-primary font-bold hover:bg-primary/5 px-6 py-4 rounded-xl transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-lg">share</span>
                  Share Achievement
                </button>
              </div>
            </div>

            {/* Right Column: Progress & Next Steps */}
            <div className="flex flex-col gap-6 w-full">
               {/* Summary Card */}
              <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 lg:p-8">
                <div className="flex justify-between items-center pb-6 border-b border-slate-50 dark:border-slate-800 mb-6">
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest mb-1">Application ID</p>
                    <p className="text-lg font-bold text-navy-deep dark:text-white">#MG-88291</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest mb-1">Status</p>
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      <span className="size-1.5 rounded-full bg-green-500"></span>
                      Submitted
                    </span>
                  </div>
                </div>

                <h2 className="text-navy-deep dark:text-white text-xl font-black leading-tight tracking-tight mb-8">
                  What happens next?
                </h2>

                {/* Vertical Timeline */}
                <div className="space-y-8 relative">
                  {/* Vertical Connector Line */}
                  <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-slate-800"></div>
                  
                  {/* Step 1: Completed */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary text-white shadow-md shadow-primary/20">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div>
                      <h3 className="text-navy-deep dark:text-white font-bold leading-none mb-2">Application Received</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Your materials were successfully uploaded on Oct 24, 2023.</p>
                    </div>
                  </div>

                  {/* Step 2: In Progress */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex items-center justify-center size-8 rounded-full bg-white dark:bg-slate-900 text-primary border-2 border-primary animate-pulse shadow-sm shadow-primary/10">
                      <span className="material-symbols-outlined text-sm font-bold">sync</span>
                    </div>
                    <div>
                      <h3 className="text-navy-deep dark:text-white font-bold leading-none mb-2">Document Verification</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Our admissions team is reviewing your transcripts and IDs. Expected in 5-7 days.</p>
                    </div>
                  </div>

                  {/* Step 3: Pending */}
                  <div className="flex items-start gap-4 relative z-10 opacity-60">
                    <div className="flex items-center justify-center size-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
                      <span className="material-symbols-outlined text-sm font-bold">schedule</span>
                    </div>
                    <div>
                      <h3 className="text-slate-500 dark:text-slate-400 font-bold leading-none mb-2">Admission Decision</h3>
                      <p className="text-sm text-slate-400 dark:text-slate-500">Selected candidates will be contacted for interviews by late November.</p>
                    </div>
                  </div>
                </div>

                {/* Help Box */}
                <div className="mt-10 flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Once the review is complete, you&apos;ll receive a notification and an update on your dashboard. Need help? <Link href="#" className="text-primary font-bold hover:underline">Contact Admissions</Link>
                  </p>
                </div>
              </div>

               {/* Mobile Actions (Visible on Mobile Only) */}
              <div className="lg:hidden flex flex-col gap-3 pt-4 px-4 pb-12 w-full">
                <Link href="/student/dashboard" className="w-full">
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all cursor-pointer">
                    Go to Dashboard
                  </button>
                </Link>
                <button className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-navy-deep dark:text-white font-bold py-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">share</span>
                  Share Achievement
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Modern Footer */}
      <footer className="py-8 text-center text-slate-400 dark:text-slate-600 text-xs mt-auto">
        <p>© 2024 MeritGrid Admissions Portal • Your Future, Accelerated.</p>
      </footer>
    </div>
  );
}
