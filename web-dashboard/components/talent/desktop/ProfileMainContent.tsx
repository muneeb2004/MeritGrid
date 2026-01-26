import Link from "next/link";
import React from "react";

export default function ProfileMainContent() {
  return (
    <main className="flex-1 h-full overflow-y-auto bg-background-light dark:bg-slate-900/50 p-6 lg:p-10">
      <div className="max-w-5xl mx-auto space-y-8 pb-20">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
              <Link href="/talent" className="hover:text-primary">
                Candidates
              </Link>
              <span className="material-symbols-outlined text-[12px]">
                chevron_right
              </span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Alex Rivera
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Candidate Profile
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center gap-2 px-5 h-11 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                bookmark
              </span>
              Save to Shortlist
            </button>
            <button className="flex items-center justify-center gap-2 px-5 h-11 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                calendar_add_on
              </span>
              Request Interview
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800">
          <nav aria-label="Tabs" className="flex gap-8">
            <button className="border-b-2 border-primary py-4 px-1 text-sm font-bold text-primary flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                description
              </span>
              Full Resume
            </button>
            <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 transition-all flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                folder_open
              </span>
              Project Portfolio
            </button>
            <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 transition-all flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                psychology
              </span>
              AI Assessment
            </button>
          </nav>
        </div>

        {/* AI Highlight Card */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <span className="material-symbols-outlined text-[150px]">
              smart_toy
            </span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-blue-200 mb-2 font-semibold text-xs tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">
                  auto_awesome
                </span>
                AI-Generated Assessment
              </div>
              <h3 className="text-xl font-bold mb-2">
                Strong Leadership Potential
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed max-w-xl opacity-90">
                Alex demonstrates exceptional capability in collaborative
                environments. Analysis of GitHub contributions and project
                documentation indicates a top 5% ranking in code maintainability
                and team coordination efficiency.
              </p>
            </div>
            <div className="flex gap-4 items-center bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-center px-2 border-r border-white/20">
                <div className="text-2xl font-bold">9.2</div>
                <div className="text-[10px] uppercase text-blue-200">
                  Tech Score
                </div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl font-bold">8.8</div>
                <div className="text-[10px] uppercase text-blue-200">
                  Soft Skills
                </div>
              </div>
              <button className="ml-2 text-xs bg-white text-blue-900 px-3 py-1.5 rounded font-bold hover:bg-blue-50 transition-colors cursor-pointer">
                View Full Report
              </button>
            </div>
          </div>
        </div>

        {/* Resume Section: Experience */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                work
              </span>
              Experience
            </h3>
            <button className="text-sm text-primary font-medium hover:underline cursor-pointer">
              Download Resume PDF
            </button>
          </div>
          <div className="p-6 space-y-8">
            {/* Item 1 */}
            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
              <div className="absolute -left-[9px] top-0 bg-white dark:bg-slate-800 p-1">
                <div className="size-2.5 rounded-full bg-primary"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Software Engineering Intern
                  </h4>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Google • Mountain View, CA
                  </p>
                </div>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded mt-2 sm:mt-0 inline-block">
                  Jun 2023 - Aug 2023
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <li>
                  Developed a new feature for Google Cloud Platform using Java
                  and Angular, reducing latency by 15%.
                </li>
                <li>
                  Collaborated with senior engineers to optimize database
                  queries, resulting in a 20% improvement in load times.
                </li>
                <li>
                  Participated in code reviews and contributed to the team's
                  testing infrastructure.
                </li>
              </ul>
            </div>
            {/* Item 2 */}
            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
              <div className="absolute -left-[9px] top-0 bg-white dark:bg-slate-800 p-1">
                <div className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Frontend Developer Part-time
                  </h4>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    StartUp Inc • Remote
                  </p>
                </div>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded mt-2 sm:mt-0 inline-block">
                  Jan 2022 - May 2023
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <li>
                  Built responsive web applications using React and Tailwind CSS
                  for 3 major client projects.
                </li>
                <li>
                  Implemented CI/CD pipelines to automate deployment processes.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resume Section: Education */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                school
              </span>
              Education
            </h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="size-12 rounded bg-slate-50 flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0">
                <img
                  alt="Stanford University Logo"
                  className="w-6 h-6 opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVugh9-YxpO7jqR5Bp3T3yLeRI5Fhwdt41D8th3AEPcxAE12ahNRraJfLhslFCK2Wqnqc9XPXzDPHm6RXwBoVFQefB8eZ0Q3YL6nQhWfr9V4DqPws9cV07zHeMAXUMCMn6_A7toWlugXSoGIHnjmb8LnKrEvtrRzdz6syzXwalsJ3lahQzd3ROHGrarTBidTPxyGxOvK2vOQkZ8P1_Ie1IcSNXDM8EB8m225OhlFLKnEa-Hhlg7Pdk4YIRv7tqbLxB1s-gV4gbde6n"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h4>
                  <span className="text-sm text-slate-500">
                    2020 - 2024 (Expected)
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Stanford University
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Relevant Coursework:
                  </span>{" "}
                  Data Structures, Algorithms, Artificial Intelligence, Database
                  Systems, Computer Networks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Preview Grid */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                grid_view
              </span>
              Featured Projects
            </h3>
            <button className="text-sm font-bold text-primary hover:text-blue-700 cursor-pointer">
              View All Projects
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCg0riIAoTEYPxqwL_j6GKMSVtDvZ1jv-zX61jUh3rKwpxGuLvSy24L0R5Sq3aQ_scNczbeBGnLkIvRVST7yTRc0Ubr-QspEq2UHLE2gkL0W_PDUGMoOpp9FGPlRFkd9MwrzHkws8sdH-Xpj4fxGIuCYTNjcKDPoIDcB3RXhOb9Kbb4japmqeMQRzW6aVyudp_Xu0QmTh-2yp_c_6vQDaqPvGImR5wkBEXurzSJLNwj7S6LrABhz7EyxUjKd47VqEyEGy1oAPl_x-cV')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                  <span className="text-white font-bold text-lg">
                    NeuroChat AI
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded">
                    Python
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                  An advanced NLP chatbot capable of context-aware conversations
                  built with PyTorch and Transformers.
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      star
                    </span>{" "}
                    124 Stars
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      call_split
                    </span>{" "}
                    30 Forks
                  </span>
                </div>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaxG7rpb8G_ue0imzJNt06EGKBRXY3kN4-AfimGmXtbxAieom672NKktw0bSgxYA88uilwW6evzaSsCi3B9-Gb2LRxYVE5ZVd2fWPeZPQX-kHh_B_1bayTvbB6QWK0K9QEJIZU-xHIh72-PysGsFilKxNHN33JODMgkXDyvzmlecABG_woXSrVTBI0tHnLMKrkOER_ZIWDAQkriVnirH2QPKEcPao-jkjcW4SEHeQ9AhCL6_vZM0iIw_vRNyG0cy6JPKBguj4lQfFW')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                  <span className="text-white font-bold text-lg">
                    ShopFlow UI
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded">
                    React
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                  A comprehensive dashboard for e-commerce analytics featuring
                  real-time data visualization.
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      star
                    </span>{" "}
                    89 Stars
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      visibility
                    </span>{" "}
                    1.2k Views
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
