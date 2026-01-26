import Link from "next/link";
import React from "react";

export default function ProfileEditorPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-separator-light/30 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-3 h-[52px]">
          <Link
            href="/student/dashboard"
            className="flex items-center text-primary active:opacity-60 transition-opacity p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "24px" }}
            >
              arrow_back_ios_new
            </span>
            <span className="text-base font-normal ml-1">Back</span>
          </Link>
          <h1 className="text-[17px] font-bold text-center flex-1 truncate px-2">
            Master Profile
          </h1>
          <button className="text-base font-bold text-primary active:opacity-60 transition-opacity p-2 -mr-2 cursor-pointer">
            Done
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto pb-24">
        {/* Section 1: Academics */}
        <div className="mt-6 px-4">
          <h2 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2 ml-1">
            Academics
          </h2>
          <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-sm">
            {/* Academic Input Item */}
            <div className="flex flex-col p-4">
              <label
                className="text-sm font-medium text-primary mb-1"
                htmlFor="qualifications"
              >
                Qualifications
              </label>
              <input
                className="w-full bg-transparent border-none p-0 text-base text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 outline-none"
                id="qualifications"
                type="text"
                defaultValue="O-Levels: 5 As, 3 Bs"
              />
            </div>
            <div className="h-[1px] w-full bg-separator-light/50 dark:bg-separator-dark ml-4"></div>
            {/* Additional Field Example */}
            <div className="flex flex-col p-4">
              <label
                className="text-sm font-medium text-primary mb-1"
                htmlFor="gpa"
              >
                Current GPA
              </label>
              <input
                className="w-full bg-transparent border-none p-0 text-base text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 outline-none"
                id="gpa"
                type="text"
                defaultValue="3.8/4.0"
              />
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 ml-1">
            Include all major standardized test results here.
          </p>
        </div>

        {/* Section 2: Documents */}
        <div className="mt-8 px-4">
          <h2 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2 ml-1">
            Documents
          </h2>
          <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-sm flex flex-col">
            {/* Document Item */}
            <div className="group flex items-center gap-3 p-4 bg-card-light dark:bg-card-dark active:bg-gray-50 dark:active:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center justify-center shrink-0 size-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px" }}
                >
                  picture_as_pdf
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-normal truncate text-slate-900 dark:text-white">
                  Grade_Sheet.pdf
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  2.4 MB • Uploaded just now
                </p>
              </div>
              <div className="shrink-0 text-green-500 dark:text-green-400">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px" }}
                >
                  check_circle
                </span>
              </div>
            </div>
            <div className="h-[1px] w-full bg-separator-light/50 dark:bg-separator-dark ml-[68px]"></div>
            {/* Document Item 2 */}
            <div className="group flex items-center gap-3 p-4 bg-card-light dark:bg-card-dark active:bg-gray-50 dark:active:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center justify-center shrink-0 size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px" }}
                >
                  image
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-normal truncate text-slate-900 dark:text-white">
                  Passport_Photo.jpg
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  1.2 MB • Uploaded 2 days ago
                </p>
              </div>
              <div className="shrink-0 text-green-500 dark:text-green-400">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px" }}
                >
                  check_circle
                </span>
              </div>
            </div>
            <div className="h-[1px] w-full bg-separator-light/50 dark:bg-separator-dark ml-[68px]"></div>
            {/* Add Document Action */}
            <button className="flex items-center gap-3 p-4 w-full text-left active:bg-gray-50 dark:active:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center justify-center shrink-0 size-10 rounded-lg border border-dashed border-primary/40 bg-primary/5 text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "24px" }}
                >
                  add
                </span>
              </div>
              <p className="text-base font-medium text-primary">
                Add Document
              </p>
            </button>
          </div>
        </div>

        {/* Section 3: Personal Statement */}
        <div className="mt-8 px-4">
          <h2 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2 ml-1">
            Personal Statement
          </h2>
          <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-sm p-4 relative group">
            <div className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                edit
              </span>
            </div>
            <label className="sr-only" htmlFor="essay">
              Personal Statement Essay
            </label>
            <textarea
              className="w-full bg-transparent border-none p-0 text-base leading-relaxed text-slate-900 dark:text-white placeholder-slate-400 resize-none focus:ring-0 outline-none"
              id="essay"
              rows={4}
              defaultValue="From a young age, I have been fascinated by the intersection of technology and liberal arts. This curiosity led me to explore coding not just as a tool for problem-solving, but as a medium for creative expression..."
            ></textarea>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                1284 characters
              </p>
              <button className="text-sm font-medium text-primary hover:underline cursor-pointer">
                Expand
              </button>
            </div>
          </div>
        </div>

        {/* Additional Actions / Save */}
        <div className="mt-10 px-4 pb-8">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-[17px] py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer">
            <span>Save Changes</span>
          </button>
          <button className="w-full mt-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 font-medium text-[17px] py-3.5 rounded-xl transition-colors cursor-pointer">
            Delete Profile
          </button>
        </div>
      </main>



    </div>
  );
}
