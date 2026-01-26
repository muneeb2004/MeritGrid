import Link from "next/link";
import React from "react";

export default function UniversityDetailPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#001F3F] dark:text-white antialiased">
      {/* Main Container */}
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24">
        {/* Header Image Section */}
        <div className="relative w-full h-[45vh] min-h-[350px] overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJQee_kbCj6tYhtTecGkn7r_ke_WDO0IMhDTV4TuvqtH5BuyIDE-asIiMHBZWtPRoReXhQhX4o1Av2-PPD1KufIALsLCGcLOv7EuECPBorW7Rc4fOvGF0cmmDZV4d177mpZlIWKQYICLm0nRVCSVfjH6ADH46VhEHmEI657ZmcWngAeOKwW3b7IvNBoJrORqAmupIStZgnaxs8_twUZ-SqdHjoEf-EtlcGtefpCNQ-1H0wpqtIax3UpfmOBcbeaXqb_d9WwuGpfkk")',
            }}
          ></div>
          <div className="absolute inset-0 hero-gradient"></div>
          {/* Back Button Overlay */}
           <Link href="/student/discover" className="absolute top-5 left-5 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-md p-2 rounded-full text-white transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
           </Link>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:px-40">
            <div className="max-w-[960px] mx-auto">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Top Rated
              </span>
            </div>
          </div>
        </div>

        {/* Layout Content */}
        <div className="px-4 md:px-40 flex flex-1 justify-center -mt-12 relative z-10 font-display">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 bg-white dark:bg-slate-900 rounded-t-3xl shadow-xl overflow-hidden">
            {/* Profile Header */}
            <div className="flex p-6 @container border-b border-gray-100 dark:border-gray-800">
              <div className="flex w-full flex-col gap-6 items-start">
                <div className="flex gap-6 flex-col md:flex-row items-start md:items-end">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl h-32 w-32 shadow-lg border-4 border-white dark:border-slate-800"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkV8OqAiAE7oHSpq2SQgQnWh1ANwT72nk7w6okr_QCVgFk91RF5Z_OkEpdDoM1SF7ezPQMIJLc9J2BAMcb3WBVYVggMXwd79tsmmvKF_ss2tj3rzDsa6_gmBrB7f1s-U5k8UTUTqS6IUSTalkD7XQPcDRmhITUCO3gsHJSdftklUgYSkA--Fs042dVjSGV9Ueuhs8TzPHQNXhP1NrxmBh20k5zrX5LZRMZ8ZK8ARhxNEk5zTHN2t89XD3SLiTaKIIlfaprI16xgRA")',
                    }}
                  ></div>
                  <div className="flex flex-col pb-2">
                    <h1 className="text-[var(--navy-blue)] dark:text-white text-4xl font-bold leading-tight tracking-tight">
                      Habib University
                    </h1>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="material-symbols-outlined text-primary text-xl">
                        location_on
                      </span>
                      <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                        Karachi, PK
                      </p>
                    </div>
                    <p className="text-slate-400 dark:text-slate-500 text-base font-normal mt-1">
                      Private Liberal Arts & Sciences University
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insight Card */}
            <div className="p-6">
              <div className="flex flex-col items-stretch justify-start rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200 dark:shadow-none">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div className="flex flex-col grow gap-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[var(--navy-blue)] dark:text-white text-lg font-bold">
                        AI Insight
                      </p>
                      <span className="text-[10px] font-bold text-violet-600 bg-violet-100 px-2 py-0.5 rounded uppercase">
                        Personalized
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                      You are a{" "}
                      <span className="font-bold text-[var(--navy-blue)] dark:text-white underline decoration-violet-400">
                        strong candidate
                      </span>{" "}
                      due to your extensive Debate experience and leadership
                      background.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-white dark:bg-slate-800 border border-violet-200 dark:border-slate-600 text-violet-700 dark:text-violet-400 text-sm font-semibold hover:bg-violet-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                        View Match Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Stats */}
            <div className="px-6 py-4">
              <h2 className="text-[var(--navy-blue)] dark:text-white text-xl font-bold leading-tight tracking-tight mb-4">
                Admission Stats
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-background-light dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    Acceptance
                  </p>
                  <p className="text-[var(--navy-blue)] dark:text-white text-2xl font-bold tracking-tight">
                    12%
                  </p>
                </div>
                <div className="bg-background-light dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    Avg. GPA
                  </p>
                  <p className="text-[var(--navy-blue)] dark:text-white text-2xl font-bold tracking-tight">
                    3.85
                  </p>
                </div>
                <div className="bg-background-light dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    SAT Range
                  </p>
                  <p className="text-[var(--navy-blue)] dark:text-white text-2xl font-bold tracking-tight">
                    1350+
                  </p>
                </div>
                <div className="bg-background-light dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    Deadline
                  </p>
                  <p className="text-[var(--navy-blue)] dark:text-white text-2xl font-bold tracking-tight">
                    Jan 15
                  </p>
                </div>
              </div>
            </div>

            {/* Programs Section Header */}
            <h2 className="text-[var(--navy-blue)] dark:text-white text-xl font-bold leading-tight px-6 pb-2 pt-6">
              Available Programs
            </h2>

            {/* List Items */}
            <div className="flex flex-col px-2 pb-8">
              <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                <div className="text-[var(--navy-blue)] dark:text-white flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 size-12 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    terminal
                  </span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-[var(--navy-blue)] dark:text-white text-base font-semibold leading-normal">
                    Computer Science
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    Dhanani School of Science and Engineering
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                    chevron_right
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                <div className="text-[var(--navy-blue)] dark:text-white flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 size-12 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    bolt
                  </span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-[var(--navy-blue)] dark:text-white text-base font-semibold leading-normal">
                    Electrical Engineering
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    Dhanani School of Science and Engineering
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                    chevron_right
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                <div className="text-[var(--navy-blue)] dark:text-white flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 size-12 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    public
                  </span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-[var(--navy-blue)] dark:text-white text-base font-semibold leading-normal">
                    Social Development & Policy
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    School of Arts, Humanities and Social Sciences
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                    chevron_right
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                <div className="text-[var(--navy-blue)] dark:text-white flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 size-12 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    palette
                  </span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-[var(--navy-blue)] dark:text-white text-base font-semibold leading-normal">
                    Communication & Design
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    School of Arts, Humanities and Social Sciences
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-slate-800 p-4 z-50 lg:pl-64">
           {/* Added padding-left for Sidebar spacing on desktop */}
          <div className="max-w-[960px] mx-auto flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <p className="text-[var(--navy-blue)] dark:text-white font-bold text-lg">
                Habib University
              </p>
              <p className="text-slate-500 text-xs font-medium">
                Application closes in 14 days
              </p>
            </div>
            <button className="flex-1 md:flex-none md:min-w-[280px] h-14 bg-primary hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] cursor-pointer">
              <span className="material-symbols-outlined">bolt</span>
              One-Click Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
