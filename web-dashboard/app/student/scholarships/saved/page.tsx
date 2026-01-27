import Link from "next/link";
import React from "react";

export default function SavedScholarshipsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-gray-100 antialiased min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-7xl mx-auto bg-background-light dark:bg-background-dark overflow-x-hidden lg:overflow-visible">
        
        {/* --- MOBILE HEADER (iOS Style) --- */}
        <header className="px-4 pt-8 pb-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-30 lg:hidden">
          <div className="flex justify-between items-center mb-2">
            <Link href="/student/scholarships">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                arrow_back_ios
              </span>
            </Link>
            <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span className="material-symbols-outlined text-text-main dark:text-white">
                tune
              </span>
            </button>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-text-main dark:text-white">
            Saved
          </h1>
        </header>

        {/* --- DESKTOP HEADER --- */}
        <div className="hidden lg:flex flex-col md:flex-row justify-between items-end gap-6 px-8 py-10">
          <div className="space-y-1">
            <h2 className="text-5xl font-black tracking-tighter text-text-main dark:text-white">Bookmarked Awards</h2>
            <p className="text-text-muted dark:text-gray-400 font-medium font-display">Manage your shortlisted opportunities and track deadlines.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
              Compare Selected (3)
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all cursor-pointer">
              Apply All
            </button>
          </div>
        </div>

        {/* --- TABS (Mobile Only) --- */}
        <div className="px-4 mb-4 lg:hidden">
          <div className="flex border-b border-slate-200 dark:border-slate-700 gap-6 overflow-x-auto no-scrollbar">
            <button className="flex flex-col items-center justify-center border-b-2 border-primary pb-3 pt-2 text-primary whitespace-nowrap bg-transparent cursor-pointer">
              <p className="text-sm font-bold">All (12)</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent pb-3 pt-2 text-slate-500 dark:text-slate-400 whitespace-nowrap bg-transparent cursor-pointer">
              <p className="text-sm font-medium">Upcoming</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent pb-3 pt-2 text-slate-500 dark:text-slate-400 whitespace-nowrap bg-transparent cursor-pointer">
              <p className="text-sm font-medium">High Value</p>
            </button>
          </div>
        </div>

        {/* --- DESKTOP FILTER BAR --- */}
        <div className="hidden lg:flex items-center justify-between gap-4 p-4 mx-8 mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-800">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/20 transition-colors cursor-pointer bg-transparent border-none">
              Sort by: Deadline
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
            <button className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-bold flex items-center gap-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
              Sort by: Amount
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-500">12 results found</span>
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <button className="p-1.5 bg-white dark:bg-gray-700 shadow-sm rounded-md border-none cursor-pointer">
                <span className="material-symbols-outlined text-[18px] text-primary font-bold">grid_view</span>
              </button>
              <button className="p-1.5 text-gray-400 border-none bg-transparent cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">list</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- MAIN GRID/LIST --- */}
        <main className="px-4 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <ScholarshipCard 
              id="#1"
              title="Merit Scholars National Program"
              foundation="Academic Trust Foundation"
              amount="$15,000"
              match="99% Match"
              deadline="Jan 20, 2024"
              isUrgent={true}
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD_0jp1SzTgAr2XWDADaHIzl5-jk1buhTpNAmwMY_yXtoCZ4RQArVzzwW-tb0tssgQz2CgRpwSw-0E34myd0tbiEi0TPVmPnXrJzMFEvxoKkAYmScY2jTMuN37U-t9xQ8G1dYiiRKJDAXKnBFqVtyT2aZTqcLihItWLYApz9i33Aw3hgNOc3ceZt59bB-hHddNQDlQwUMy89lMEK_TPGITXBfV1nCDTnR8RmOQvYM-5wj1wjaMt4DHDqvWnJ1bTt-4d3FLzmmj8HvmV"
            />

            {/* Card 2 */}
            <ScholarshipCard 
              id="#2"
              title="STEM Leadership Award"
              foundation="National Science Foundation"
              amount="$5,000"
              match="95% Match"
              deadline="Oct 24, 2024"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCwuLp7FU1NT0dMZrKNS4otItFAMXlqQ_aoc0gl-9ju2K2VhRGRvhMwj_DlPbkGX8cc5RMENXafQ4aiVoiFvxHf3HtHyarIXHUnLuyojlpzGVlIn61qfPCCq-UFzcECzFayzhzQ7vfkdJvXM1BEM5Ei5iGRe-5rzFRR-_Bb2LK_Lt220wSt7hHqzErpM2JmJZyE8n99JEJ49sDECgMSFG7I7KHUgTiG4rtJaTd_px505o9xLLpMub7LKZcrJ8CvI4_rWheyb7di2b_p"
            />

            {/* Card 3 */}
            <ScholarshipCard 
              id="#3"
              title="Community Impact Scholarship"
              foundation="Global Outreach Org"
              amount="$2,500"
              match="91% Match"
              deadline="Nov 12, 2024"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCZULY-nWADqZRAtyYhJpRhjSaLlCOXNkynGLIH9BmaYrIMJ8W96mm-JaoJeiH95cYRd2xokVYrSWAJ4KuOIP6cOsd_IrgoiTfQAPEKAtVFNkWLMOlY95owDIJukqCfHWR-Mvhb2v6tafSqb6FNixpz8urOim1KoHP1-VZR-KyLhsXmpmrAq4YRoGlAI9N-ywJeyPYts6zIQWL2W9aTRHM1M62TYPlX9vsoQw8DKOfsXQmobJFztvc8jGnkvoE6X44HaD2T_yWWErhU"
            />

            {/* Card 4 */}
            <ScholarshipCard 
              id="#4"
              title="Creative Arts Fellowship"
              foundation="Modern Art Institute"
              amount="$7,500"
              match="88% Match"
              deadline="Dec 01, 2024"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAIFkouxfC40GuApAF6g0abwxNR2ILT6VD74gYj2TSCNK35S6b1TEey1IWX_e7doFz0jFjeYkwF5m0e8QoxFtzrHGoWfPuRLO2C8LhNDgAQsf4DJHaVZviP1jTC0gmwpWK6-CrsaSf5Q0G-49Aqu3tbhKiCbzwZHs2AsoQ-MwRQ60hS6Aaq1oZhM4DshUbOT71NDaouYSM182xBPvaNYuZ0aW0biUJ__1O7ld1uesnjhOnjkzyi80ebqp9TP8qt_MFzwRc8qKtKP0sl"
            />

          </div>

          {/* Load More (Desktop Only) */}
          <div className="hidden lg:flex justify-center mt-12">
            <button className="px-8 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-black shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer bg-transparent">
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
              Load More Awards
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function ScholarshipCard({ title, foundation, amount, match, deadline, isUrgent = false, image }: any) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-2xl lg:rounded-3xl border border-slate-100 dark:border-slate-800 p-4 lg:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Header Info */}
      <div className="flex justify-between items-start mb-4">
        <span className={`text-[10px] lg:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${isUrgent ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-primary/10 text-primary'}`}>
          {isUrgent ? 'Due in 2 days' : match}
        </span>
        <button className="text-primary hover:scale-125 transition-transform cursor-pointer border-none bg-transparent">
          <span className="material-symbols-outlined font-variation-FILL-1">bookmark</span>
        </button>
      </div>

      {/* Main Content Info */}
      <div className="flex gap-4 items-center lg:items-start lg:flex-col">
        {/* Foundation Logo/Pattern */}
        <div className="size-16 lg:size-20 rounded-xl lg:rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 border border-slate-100/50 dark:border-slate-700/50">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
        </div>
        
        <div className="flex flex-col grow">
          {/* Desktop specific amount display */}
          <h3 className="hidden lg:block text-4xl font-black text-text-main dark:text-white mb-2">{amount}</h3>
          
          <h3 className="text-lg lg:text-xl font-bold leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors mb-1 lg:mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            {foundation}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-4 lg:mt-6 flex flex-col pt-4 border-t border-slate-50 dark:border-slate-800">
        
        {/* Desktop Comparison & Bottom Row */}
        <div className="hidden lg:flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-[18px] text-slate-400">event</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Deadline: {deadline}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col lg:hidden">
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-tight tracking-widest">Amount</span>
            <span className="text-lg font-bold text-primary leading-none">{amount}</span>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <label className="flex items-center cursor-pointer gap-2 group/toggle">
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary transition-colors"></div>
              </div>
              <span className="text-xs font-bold text-slate-500 group-hover/toggle:text-primary transition-colors">Compare</span>
            </label>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden lg:block text-sm font-black text-primary hover:underline cursor-pointer border-none bg-transparent">
              View Details
            </button>
            <Link href="/student/scholarships/application">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 lg:py-3 lg:px-8 rounded-full lg:rounded-xl text-sm font-bold shadow-md shadow-primary/20 active:scale-95 transition-all cursor-pointer">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
