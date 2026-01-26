import Link from "next/link";
import React from "react";

export default function SavedScholarshipsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white antialiased min-h-screen pb-20">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-7xl mx-auto bg-background-light dark:bg-background-dark overflow-x-hidden">
        {/* Header - iOS Style Large Title */}
        <header className="px-4 pt-8 pb-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
          <div className="flex justify-between items-center mb-2">
            <Link href="/student/scholarships">
              <span className="material-symbols-outlined text-primary cursor-pointer">
                arrow_back_ios
              </span>
            </Link>
            <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-text-main dark:text-white">
                tune
              </span>
            </button>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-text-main dark:text-white">
            Saved
          </h1>
        </header>

        {/* Tabs Section */}
        <div className="px-4 mb-4">
          <div className="flex border-b border-slate-200 dark:border-slate-700 gap-6">
            <button className="flex flex-col items-center justify-center border-b-2 border-primary pb-3 pt-2 text-primary cursor-pointer hover:text-primary/80 transition-colors">
              <p className="text-sm font-bold">All (12)</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent pb-3 pt-2 text-slate-500 dark:text-slate-400 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
              <p className="text-sm font-medium">Upcoming</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent pb-3 pt-2 text-slate-500 dark:text-slate-400 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
              <p className="text-sm font-medium">High Value</p>
            </button>
          </div>
        </div>

        {/* Scholarship List - Responsive Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-20">
          {/* Scholarship Card 1: Urgent Deadline */}
          <div className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                Due in 2 days
              </span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                bookmark
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="size-16 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_0jp1SzTgAr2XWDADaHIzl5-jk1buhTpNAmwMY_yXtoCZ4RQArVzzwW-tb0tssgQz2CgRpwSw-0E34myd0tbiEi0TPVmPnXrJzMFEvxoKkAYmScY2jTMuN37U-t9xQ8G1dYiiRKJDAXKnBFqVtyT2aZTqcLihItWLYApz9i33Aw3hgNOc3ceZt59bB-hHddNQDlQwUMy89lMEK_TPGITXBfV1nCDTnR8RmOQvYM-5wj1wjaMt4DHDqvWnJ1bTt-4d3FLzmmj8HvmV")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col grow">
                <h3 className="text-lg font-bold leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors">
                  Tech Innovation Grant
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Future Tech Foundation
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-4">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-medium">
                  Amount
                </span>
                <span className="text-lg font-bold text-primary">$10,000</span>
              </div>
              <Link href="/student/scholarships/application">
                <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-transform cursor-pointer hover:bg-primary/90">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* Scholarship Card 2 */}
          <div className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                Oct 24, 2024
              </span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                bookmark
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="size-16 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwuLp7FU1NT0dMZrKNS4otItFAMXlqQ_aoc0gl-9ju2K2VhRGRvhMwj_DlPbkGX8cc5RMENXafQ4aiVoiFvxHf3HtHyarIXHUnLuyojlpzGVlIn61qfPCCq-UFzcECzFayzhzQ7vfkdJvXM1BEM5Ei5iGRe-5rzFRR-_Bb2LK_Lt220wSt7hHqzErpM2JmJZyE8n99JEJ49sDECgMSFG7I7KHUgTiG4rtJaTd_px505o9xLLpMub7LKZcrJ8CvI4_rWheyb7di2b_p")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col grow">
                <h3 className="text-lg font-bold leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors">
                  STEM Leadership Award
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  National Science Foundation
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-4">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-medium">
                  Amount
                </span>
                <span className="text-lg font-bold text-primary">$5,000</span>
              </div>
              <Link href="/student/scholarships/application">
                <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-transform cursor-pointer hover:bg-primary/90">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* Scholarship Card 3 */}
          <div className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                Nov 12, 2024
              </span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                bookmark
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="size-16 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZULY-nWADqZRAtyYhJpRhjSaLlCOXNkynGLIH9BmaYrIMJ8W96mm-JaoJeiH95cYRd2xokVYrSWAJ4KuOIP6cOsd_IrgoiTfQAPEKAtVFNkWLMOlY95owDIJukqCfHWR-Mvhb2v6tafSqb6FNixpz8urOim1KoHP1-VZR-KyLhsXmpmrAq4YRoGlAI9N-ywJeyPYts6zIQWL2W9aTRHM1M62TYPlX9vsoQw8DKOfsXQmobJFztvc8jGnkvoE6X44HaD2T_yWWErhU")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col grow">
                <h3 className="text-lg font-bold leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors">
                  Community Impact Scholarship
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Global Outreach Org
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-4">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-medium">
                  Amount
                </span>
                <span className="text-lg font-bold text-primary">$2,500</span>
              </div>
              <Link href="/student/scholarships/application">
                <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-transform cursor-pointer hover:bg-primary/90">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* Scholarship Card 4 */}
          <div className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                Dec 01, 2024
              </span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                bookmark
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="size-16 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIFkouxfC40GuApAF6g0abwxNR2ILT6VD74gYj2TSCNK35S6b1TEey1IWX_e7doFz0jFjeYkwF5m0e8QoxFtzrHGoWfPuRLO2C8LhNDgAQsf4DJHaVZviP1jTC0gmwpWK6-CrsaSf5Q0G-49Aqu3tbhKiCbzwZHs2AsoQ-MwRQ60hS6Aaq1oZhM4DshUbOT71NDaouYSM182xBPvaNYuZ0aW0biUJ__1O7ld1uesnjhOnjkzyi80ebqp9TP8qt_MFzwRc8qKtKP0sl")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col grow">
                <h3 className="text-lg font-bold leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors">
                  Creative Arts Fellowship
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Modern Art Institute
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-4">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-medium">
                  Amount
                </span>
                <span className="text-lg font-bold text-primary">$7,500</span>
              </div>
              <Link href="/student/scholarships/application">
                <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-transform cursor-pointer hover:bg-primary/90">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
