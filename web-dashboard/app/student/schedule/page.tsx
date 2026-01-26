import Link from "next/link";
import React from "react";

export default function InterviewSchedulerPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d101b] dark:text-white min-h-screen">
      <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-background-dark shadow-2xl relative">
        {/* Header */}
        <header className="flex items-center gap-4 p-4 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md z-10">
           <Link href="/student/dashboard" className="flex items-center justify-center size-10 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
             <span className="material-symbols-outlined">arrow_back</span>
           </Link>
           <div className="flex-1">
             <h1 className="text-lg font-bold">Schedule Interview</h1>
             <p className="text-xs text-gray-500">Habib University • BSc Computer Science</p>
           </div>
        </header>

        <main className="flex-1 p-4 pb-24">
            {/* Calendar Strip */}
            <div className="mb-6">
                <h2 className="text-sm font-bold mb-3 uppercase text-gray-500 tracking-wider">Select Date</h2>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {[
                        { day: "Mon", date: "24", selected: true },
                        { day: "Tue", date: "25", selected: false },
                        { day: "Wed", date: "26", selected: false },
                        { day: "Thu", date: "27", selected: false },
                        { day: "Fri", date: "28", selected: false },
                    ].map((item, idx) => (
                        <button key={idx} className={`flex flex-col items-center justify-center min-w-[64px] h-[72px] rounded-2xl border transition-all ${
                            item.selected 
                            ? "bg-primary border-primary text-white shadow-lg shadow-primary/30" 
                            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary/50"
                        }`}>
                            <span className="text-xs font-medium opacity-80">{item.day}</span>
                            <span className="text-xl font-bold">{item.date}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Time Slots */}
            <div className="mb-8">
                <h2 className="text-sm font-bold mb-3 uppercase text-gray-500 tracking-wider">Available Slots</h2>
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary bg-white dark:bg-gray-800 group transition-all">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary">09:00 AM</span>
                        <div className="size-4 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-primary group-hover:border-4 transition-all"></div>
                    </button>
                    <button className="flex items-center justify-between p-3 rounded-xl border-2 border-primary bg-primary/5 dark:bg-primary/10 transition-all shadow-sm">
                        <span className="text-sm font-bold text-primary">10:00 AM</span>
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    </button>
                    <button className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary bg-white dark:bg-gray-800 group transition-all">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary">11:30 AM</span>
                        <div className="size-4 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-primary group-hover:border-4 transition-all"></div>
                    </button>
                     <button className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 opacity-50 cursor-not-allowed">
                        <span className="text-sm font-bold text-gray-400 line-through">02:00 PM</span>
                        <span className="text-xs text-gray-400">Taken</span>
                    </button>
                </div>
            </div>

            {/* Interviewer Info */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">Interviewer</h3>
                <div className="flex items-center gap-3">
                    <div className="size-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk-qE84mgUSX9H0htvbc4v4sef1KvWWLASFnor4DOmAZEV1XEd7LDPN9jgcjEHIM7aKuAlFuhGylwz60P7S-z98zm_B1pb3lutD5prZeo_Q1CFd_Pdo5DpFuO50vOGIuED7cIX8tHP2Zyr1PFMG4_vFyZFN5qqflJ4RC4LNpgbCHVYqT3MX-1IZoFJj2TYCKU5I0OfchNb7N9x8xx-FRsS13Pu-CRD5OVRLApph6mzKxEKO5D9U_5IbkBAcoNPPqPT-djnpgA_Snho" alt="Interviewer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-[#0d101b] dark:text-white">Dr. Sarah Ahmed</p>
                        <p className="text-xs text-gray-500">Dean of Computer Science</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-8">
                <Link href="/student/dashboard">
                    <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span>Confirm Booking</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </Link>
                <p className="text-center text-xs text-gray-400 mt-4">
                    You can reschedule up to 24 hours before.
                </p>
            </div>
        </main>
      </div>
    </div>
  );
}
