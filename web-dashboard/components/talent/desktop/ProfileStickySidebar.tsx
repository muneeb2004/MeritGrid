import React from "react";

export default function ProfileStickySidebar() {
  return (
    <aside className="w-full max-w-[350px] h-full overflow-y-auto hide-scrollbar bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
      <div className="p-8 flex flex-col items-center gap-6">
        {/* Profile Image & Badge */}
        <div className="relative group">
          <div className="size-36 rounded-full p-1 border-2 border-slate-100 dark:border-slate-700">
            <div
              className="w-full h-full rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA45l83e15C3lgEcSHhE2jVEDaCqNFx9PxreLZj2Tjtm2tVeTksqZG5BmPVv5zSwvfd7_ozxJb3h-PvX2kKCQG3LBpziOaiB9L1hq2-Xh8yXfD80bEM_eQBU6hyQAjlwrhYLJMjfQ12p6Lg3P6_sgoSp-fPGtMF7t2T4TRCc4Soybveeoe4jZdxspgeHiZXWaUY3SjbvPBTn3oMsz9vk4piQwpFYvoxBFtJBFrz8lhq_dzdGfcSsMablFSZbXFcFWwAychOqvkiEBPR')",
              }}
            ></div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white dark:border-slate-900 flex items-center gap-1 whitespace-nowrap">
            <span className="material-symbols-outlined text-[16px]">stars</span>
            98% Match
          </div>
        </div>

        {/* Basic Info */}
        <div className="text-center mt-2">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Alex Rivera
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
            Computer Science Senior
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-sm mt-0.5">
            Stanford University • Class of 2024
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 w-full">
          <button className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-50 group-hover:text-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
            </div>
            <span className="text-xs font-medium text-slate-500">Email</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-50 group-hover:text-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                call
              </span>
            </div>
            <span className="text-xs font-medium text-slate-500">Call</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-50 group-hover:text-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                link
              </span>
            </div>
            <span className="text-xs font-medium text-slate-500">LinkedIn</span>
          </button>
        </div>

        <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-2"></div>

        {/* Core stats */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              3.92
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">
              GPA
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              Top 5%
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">
              Rank
            </div>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="w-full">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
            Top Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "React Native",
              "TensorFlow",
              "AWS",
              "UI Design",
            ].map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="w-full mt-4">
          <div className="flex items-center gap-2 text-slate-500 mb-2">
            <span className="material-symbols-outlined text-[18px]">
              location_on
            </span>
            <span className="text-sm">San Francisco, CA</span>
          </div>
          <div className="w-full h-24 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden relative">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDP3p9BjrkValELjUi1F9_0q-zSB9BcenAztiDwV_HEErYuMtstF4p1FROxtiZp6fZ9z3nOVQtgxRLdnjY8xYZZyD8X3ntkjflOJDjmecJptvraQBiJ8q1pyl5VygSGDfLezCP645nIk4H6DXWN3OL6iQ30rd44nQ_rowjy8CyrdRHIYebuu-n52hXd2MUe_8_YoZZKYLIkTZcI9nQqPpfAU0BfPRx39mY3yPKPlPTWBKd3xFh4a3nCnj-nlLJshuKkXJAf-KQhYEG')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
