import Link from "next/link";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation (Secondary) */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-[#101622] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 sticky top-24">
              <div className="mb-6 px-2">
                <h1 className="text-lg font-bold text-[#101622] dark:text-white leading-tight">
                  Master Profile
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Application Management
                </p>
              </div>
              <nav className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm cursor-pointer">
                  <span className="material-symbols-outlined !text-xl">
                    person
                  </span>
                  Personal Info
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer">
                  <span className="material-symbols-outlined !text-xl text-slate-400">
                    school
                  </span>
                  Academics
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer">
                  <span className="material-symbols-outlined !text-xl text-slate-400">
                    description
                  </span>
                  Documents
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer">
                  <span className="material-symbols-outlined !text-xl text-slate-400">
                    history_edu
                  </span>
                  Statement
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer">
                  <span className="material-symbols-outlined !text-xl text-slate-400">
                    work
                  </span>
                  Experience
                </button>
              </nav>
            </div>
          </aside>

          {/* Profile Content Area */}
          <div className="flex-1 space-y-6">
            {/* Profile Header */}
            <div className="bg-white dark:bg-[#101622] rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative">
                  <div
                    className="h-28 w-28 rounded-full border-4 border-white dark:border-slate-800 shadow-lg bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCax_fM1ybwOTFzqVoC0P5939ggwx7G5s_TQZ2Aw1eOS3asPgsasUoK1noYPHx_TRwwND0xSubTFjBjW35ulAfbIByRGQGUszOZl4PGiUFc9WGpjf6TBWBnSyIhVTocTh7u8jA4l5okXm3JayngofacfR1exHrPriT08U7nkN1kjF-Gv5f9esP4hfFwM34XKoWnu3Jky1dwSQOlt2XP39cmrKCHnqpVLICWN0z3VJpco9fZYYurbvdNiEpxg2SBt-8nsMiocP0o7wU')",
                    }}
                  ></div>
                  <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white dark:border-slate-800 shadow-md cursor-pointer">
                    <span className="material-symbols-outlined !text-sm">
                      edit
                    </span>
                  </button>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-[#101622] dark:text-white">
                        Alex Johnson
                      </h2>
                      <p className="text-slate-500 font-medium">
                        Undergraduate Applicant • Fall 2024
                      </p>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm rounded-lg transition-all cursor-pointer">
                        Preview Profile
                      </button>
                      <button className="px-4 py-2 bg-primary text-white font-bold text-sm rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
                        Edit Master Info
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                        Profile Strength
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-primary">
                          85%
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                        Status
                      </p>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-100 text-green-700">
                        Verified
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                        Location
                      </p>
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academics Section */}
            <section className="bg-white dark:bg-[#101622] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="bg-[#101622] px-6 py-4 flex justify-between items-center">
                <h3 className="text-white font-bold tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg text-primary">
                    school
                  </span>
                  Academics
                </h3>
                <button className="text-white/70 hover:text-white flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer">
                  <span className="material-symbols-outlined !text-sm">
                    add_circle
                  </span>
                  Add Entry
                </button>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-semibold border-b border-slate-100 dark:border-slate-800">
                      <th className="px-6 py-4">Subject</th>
                      <th className="px-6 py-4">Grade</th>
                      <th className="px-6 py-4">Credits</th>
                      <th className="px-6 py-4">Year</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">
                        Advanced Mathematics
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary font-bold rounded">
                          A
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">4.0</td>
                      <td className="px-6 py-4 text-slate-500">2023</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                          <span className="material-symbols-outlined !text-lg">
                            edit
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">
                        Quantum Physics
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded">
                          A-
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">3.5</td>
                      <td className="px-6 py-4 text-slate-500">2023</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                          <span className="material-symbols-outlined !text-lg">
                            edit
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">
                        Computer Science I
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary font-bold rounded">
                          A+
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">4.0</td>
                      <td className="px-6 py-4 text-slate-500">2023</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                          <span className="material-symbols-outlined !text-lg">
                            edit
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Documents Section */}
            <section className="bg-white dark:bg-[#101622] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="bg-[#101622] px-6 py-4 flex justify-between items-center">
                <h3 className="text-white font-bold tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg text-primary">
                    description
                  </span>
                  Documents
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Document Card */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined !text-3xl text-primary">
                        picture_as_pdf
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-slate-800 dark:text-white truncate">
                          Grade_Sheet.pdf
                        </p>
                        <span className="material-symbols-outlined !text-sm text-green-500 bg-green-50 rounded-full">
                          check_circle
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Uploaded on Oct 12, 2023 • 2.4 MB
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors cursor-pointer">
                        <span className="material-symbols-outlined !text-xl">
                          visibility
                        </span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined !text-xl">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* Upload Empty State / Trigger */}
                  <div className="flex items-center justify-center gap-4 p-4 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary/50 cursor-pointer group transition-colors">
                    <div className="text-center">
                      <span className="material-symbols-outlined !text-2xl text-slate-300 group-hover:text-primary transition-colors">
                        upload_file
                      </span>
                      <p className="text-xs font-bold text-slate-400 group-hover:text-primary transition-colors mt-1">
                        Upload New Document
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Statement Section */}
            <section className="bg-white dark:bg-[#101622] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="bg-[#101622] px-6 py-4 flex justify-between items-center">
                <h3 className="text-white font-bold tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg text-primary">
                    history_edu
                  </span>
                  Personal Statement
                </h3>
                <button className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined !text-xl">
                    edit_note
                  </span>
                </button>
              </div>
              <div className="p-6">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Ever since I wrote my first line of code in Python at the
                    age of twelve, I have been fascinated by the intersection of
                    logic and creativity. My journey through secondary school
                    has been defined by a deep-seated curiosity about how
                    complex algorithms can solve real-world problems. Whether
                    it&apos;s developing a simple script to automate my study
                    schedule or competing in regional math olympiads, I&apos;ve
                    always pushed the boundaries of my understanding...
                  </p>
                  <button className="mt-4 text-primary font-bold text-sm hover:underline inline-flex items-center gap-1 cursor-pointer">
                    Read more
                    <span className="material-symbols-outlined !text-xs">
                      arrow_forward_ios
                    </span>
                  </button>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white dark:bg-[#101622] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="bg-[#101622] px-6 py-4 flex justify-between items-center">
                <h3 className="text-white font-bold tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg text-primary">
                    work
                  </span>
                  Experience
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-lg">
                    <span className="material-symbols-outlined text-slate-400">
                      code
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                      Software Engineering Intern
                    </h4>
                    <p className="text-xs text-primary font-semibold">
                      TechFlow Solutions • Jun 2023 - Aug 2023
                    </p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                      Assisted in the development of a microservices-based
                      architecture for a cloud-native logistics application
                      using Node.js and AWS.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
