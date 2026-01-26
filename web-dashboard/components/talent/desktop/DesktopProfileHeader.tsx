import Link from "next/link";
import React from "react";

export default function DesktopProfileHeader() {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-6 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
          <Link href="/talent" className="hover:text-primary transition-colors">
            Talent Pool
          </Link>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-white font-medium">
            Sarah Jenkins
          </span>
        </nav>

        <div className="flex items-start justify-between">
          <div className="flex gap-6">
            <div className="size-24 rounded-full bg-slate-200 overflow-hidden border-4 border-white dark:border-slate-800 shadow-md">
              <img
                alt="Sarah Jenkins"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSeXhfy7s5XmGiJuKhuE1tXjZOikRsymuUE2oIzB-14VreyYi4TmZ30FXu7VV1M1mkjo_jyLp1f0LMOhzh_sfpLoWXsovIuLtBv64jE3Hu5Brx16ProNr7smJ-Xq_vehfloaD_jPcRd0RCDCRpuueWLNPu5tG73TSL00fOuZojGrWatFgxderP6ljB6JAVeqhLa-fpbnK8OBpCGnPaJfs20HIhBRotXnh_FQ38lkwdwmGtwEDZxBDr2ZfPFyZ8t3la-_YK-x4pawjN"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Sarah Jenkins
                </h1>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    bolt
                  </span>
                  98% Match
                </div>
              </div>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-3">
                Computer Science Candidate • Stanford University '24
              </p>
              <div className="flex gap-3">
                <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-[18px] text-slate-400">
                    location_on
                  </span>
                  San Francisco, CA (Open to Remote)
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-[18px] text-slate-400">
                    language
                  </span>
                  Fluent in English, Spanish
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                share
              </span>
              Share
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                bookmark
              </span>
              Save
            </button>
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                calendar_month
              </span>
              Schedule Interview
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
