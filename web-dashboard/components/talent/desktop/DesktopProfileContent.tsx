import React from "react";
import SkillsRadar from "../profile/SkillsRadar";
import AchievementsTimeline from "../profile/AchievementsTimeline";
import AIInsights from "../profile/AIInsights";

export default function DesktopProfileContent() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="col-span-1 space-y-6">
        {/* Contact info card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Email
                </p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  sarah.jenkins@stanford.edu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Phone
                </p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300">
                <span className="material-symbols-outlined">link</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Portfolio
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  github.com/sarahj
                </a>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Download Resume
          </button>
        </div>

        {/* Skills Radar Wrapper */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
            Skill Assessment
          </h3>
          <SkillsRadar />
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-2 space-y-6">
        {/* AI Analysis Wrapper */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
            <h3 className="font-bold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">
                auto_awesome
              </span>
              AI Suitability Analysis
            </h3>
            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded uppercase">
              Highly Recommended
            </span>
          </div>
          <div className="p-6">
            <AIInsights />
          </div>
        </div>

        {/* Experience & Achievements */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
          <h3 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">
            Experience & Achievements
          </h3>
          <AchievementsTimeline />
        </div>

        {/* Notes */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Recruiter Notes</h3>
            <textarea className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none h-32" placeholder="Add private notes about Sarah..."></textarea>
            <div className="flex justify-end mt-2">
                <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">Save Note</button>
            </div>
        </div>
      </div>
    </div>
  );
}
