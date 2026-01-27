import React from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FilterChip from "@/components/ui/FilterChip";

export default function CalendarPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-gray-100 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col max-w-[1000px] mx-auto bg-transparent overflow-x-hidden md:overflow-visible">
        
        {/* --- MOBILE HEADER (iOS Style) --- */}
        <header className="sticky top-0 z-20 flex lg:hidden items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="text-text-main dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
            <span className="material-symbols-outlined">chevron_left</span>
          </div>
          <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Deadlines
          </h2>
          <div className="flex w-12 items-center justify-end">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
               <span className="material-symbols-outlined">calendar_add_on</span>
            </Button>
          </div>
        </header>

        {/* --- DESKTOP HEADER --- */}
        <div className="hidden lg:flex flex-wrap justify-between items-end gap-3 px-6 pt-10 mb-8 w-full">
          <div className="flex flex-col gap-1">
            <h1 className="text-text-main dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">Deadline Calendar</h1>
            <p className="text-text-muted dark:text-gray-400 text-lg font-medium">Track your upcoming scholarship and university application dates</p>
          </div>
          <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Add Deadline
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 px-4 md:px-6 w-full">
          
          {/* LEFT COLUMN: Filters & Calendar */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            
            {/* Filter Navigation (Shared, but styled slightly differently per view) */}
            <div className="flex gap-2 flex-wrap bg-white dark:bg-gray-800 p-1.5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <button className="flex-1 py-2 px-3 rounded-lg bg-primary text-white text-xs font-bold transition-all">All</button>
              <button className="flex-1 py-2 px-3 rounded-lg text-gray-600 dark:text-gray-300 text-xs font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">Scholarships</button>
              <button className="flex-1 py-2 px-3 rounded-lg text-gray-600 dark:text-gray-300 text-xs font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">University</button>
            </div>

            {/* Calendar Card (Premium) */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <Button variant="ghost" size="icon" className="size-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </Button>
                <p className="text-text-main dark:text-white text-lg font-bold">September 2024</p>
                <Button variant="ghost" size="icon" className="size-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </Button>
              </div>
              <div className="grid grid-cols-7 gap-y-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                  <div key={i} className="text-gray-400 text-[11px] lg:text-xs font-bold text-center uppercase py-2 tracking-widest">{day}</div>
                ))}
                
                {/* Simplified Calendar Days */}
                {[25, 26, 27, 28, 29, 30, 31].map((d) => (
                  <div key={`p-${d}`} className="h-10 lg:h-12 flex items-center justify-center text-gray-400 text-sm font-medium opacity-50">{d}</div>
                ))}
                <CalendarDay day={1} />
                <CalendarDay day={2} />
                <CalendarDay day={3} dotColor="bg-primary" />
                <CalendarDay day={4} />
                <CalendarDay day={5} isActive />
                <CalendarDay day={6} />
                <CalendarDay day={7} dotColor="bg-violet-500" />
                {[8, 9, 10, 11, 12, 13, 14].map(d => (
                  <CalendarDay key={d} day={d} dotColor={d === 10 || d === 12 ? 'bg-primary' : undefined} />
                ))}
              </div>
            </div>

            {/* Motivation Card (Visible only on desktop in this column, or bottom on mobile) */}
            <div className="hidden xl:flex bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-primary/10 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined">emoji_events</span>
                </div>
                <div>
                  <p className="text-text-main dark:text-white font-bold text-base">You're on track!</p>
                  <p className="text-xs text-text-muted dark:text-gray-400">Finish these 3 deadlines to complete your weekly goal.</p>
                </div>
              </div>
              <div className="relative size-12">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                  <circle className="stroke-current text-gray-200 dark:text-gray-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                  <circle className="stroke-current text-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-primary">75%</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Chronological Feed */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-8 mt-10 lg:mt-0 pb-20">
            
            {/* Today Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-2xl font-bold text-text-main dark:text-white tracking-tight">Today</h2>
                <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 font-bold px-2 py-0.5">1</Badge>
              </div>
              <FeedItem 
                title="IBA Final Submission"
                subtitle="Regular Decision • Undergraduate"
                type="Application"
                time="11:59 PM EST"
                remaining="Due in 4h"
                isUrgent
              />
            </section>

            {/* This Week Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-2xl font-bold text-text-main dark:text-white tracking-tight">This Week</h2>
                <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 font-bold px-2 py-0.5">2</Badge>
              </div>
              <div className="flex flex-col gap-4">
                <FeedItem 
                  title="MeritGrid Excellence Award"
                  subtitle="Merit-based • University of Toronto"
                  type="Scholarship"
                  time="Friday, 11:59 PM"
                  remaining="Due in 3 days"
                  color="border-primary"
                  icon="school"
                  iconBg="bg-blue-50"
                  iconColor="text-primary"
                />
                <FeedItem 
                   title="LUMS Financial Aid Form"
                   subtitle="Financial Supporting Documents"
                   type="Application"
                   time="Sunday, 5:00 PM"
                   remaining="Due in 5 days"
                   color="border-gray-200"
                   icon="description"
                   iconBg="bg-gray-50 dark:bg-gray-800"
                   iconColor="text-gray-500"
                />
              </div>
            </section>

            {/* Motivation Card (Mobile Only at Bottom) */}
            <div className="xl:hidden bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-primary/10 flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="bg-primary text-white p-2 rounded-lg">
                  <span className="material-symbols-outlined">emoji_events</span>
                </div>
                <div>
                  <p className="text-[#111318] dark:text-white font-bold text-sm">You're on track!</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Finish these 3 deadlines to complete your weekly goal.</p>
                </div>
              </div>
              <div className="relative size-12">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                  <circle className="stroke-current text-gray-200" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                  <circle className="stroke-current text-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-primary">75%</div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Floating Add Button for Mobile */}
        <Button 
          className="lg:hidden fixed bottom-6 right-6 z-30 size-14 rounded-2xl bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-3xl">add</span>
        </Button>
        
      </div>
    </div>
  );
}

function CalendarDay({ day, isActive = false, dotColor }: { day: number, isActive?: boolean, dotColor?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-10 lg:h-12 relative group cursor-pointer">
      {isActive && <div className="absolute inset-0 bg-primary/10 rounded-lg scale-90"></div>}
      <span className={`text-sm lg:text-base font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-900 dark:text-gray-100 group-hover:text-primary'}`}>{day}</span>
      {dotColor && <div className={`size-1 lg:size-1.5 ${dotColor} rounded-full absolute bottom-1 lg:bottom-1.5`}></div>}
    </div>
  );
}

function FeedItem({ title, subtitle, type, time, remaining, isUrgent = false, color = 'border-red-500', icon = 'account_balance', iconBg = 'bg-red-50', iconColor = 'text-red-500' }: any) {
  return (
    <Card hoverEffect noPadding className={`bg-white dark:bg-gray-800 rounded-xl border-l-[6px] ${color} shadow-sm border-y border-r border-gray-100 dark:border-gray-700 p-5 group hover:shadow-md transition-all`}>
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className={`size-12 rounded-xl ${iconBg} dark:bg-opacity-20 flex items-center justify-center border border-gray-100 dark:border-gray-700 transition-transform group-hover:scale-105`}>
            <span className={`material-symbols-outlined text-2xl ${iconColor}`}>{icon}</span>
          </div>
          <div>
            <h3 className="text-base lg:text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors leading-tight mb-1">{title}</h3>
            <p className="text-xs lg:text-sm text-text-muted dark:text-gray-400 font-medium">{subtitle}</p>
            <div className="flex items-center gap-3 mt-3">
              <div className={`flex items-center gap-1 ${isUrgent ? 'text-red-600' : 'text-primary'}`}>
                <span className="material-symbols-outlined text-base">{isUrgent ? 'timer' : 'calendar_today'}</span>
                <span className="text-xs font-bold uppercase tracking-wider">{remaining}</span>
              </div>
              <div className="size-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <span className="text-xs font-medium text-text-muted dark:text-gray-500">{time}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-primary transition-colors cursor-pointer border-none bg-transparent">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
    </Card>
  );
}
