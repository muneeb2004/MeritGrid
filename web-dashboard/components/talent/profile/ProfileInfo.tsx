import React from "react";

export default function ProfileInfo() {
  return (
    <section className="bg-white dark:bg-background-dark p-6 border-b border-[#dcdfe5] dark:border-gray-800">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-white dark:border-gray-700 shadow-sm"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAStVLJa67TdhCBToZDoahX2j_rOrsxYKevBj-XxAxNl9Y4jhkDP8ZGLgZ6Bdx4LzU9tBxIHMRVTaGkQftXIKH8B0DbV7umUJCDCJ2fvKboGRurbX5AM2xZN9xhKXP79yLTOfeKLBbdeIoWEOVEkEyvJ8nH3kkvux0w2Z6RZTrc0zreCyPJASQsbPlvBCivTBnBl6BcVWCCNqZEgI99Zp035sJEeaP2lbOTYFiUxDZyQLg8lilnzefe_T9iL4c04JauVxjNs6PUsDs")',
            }}
          ></div>
          <div className="absolute bottom-1 right-1 bg-success text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white dark:border-gray-800">
            ACTIVE
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-[#111318] dark:text-white text-2xl font-bold leading-tight">
            Alex Johnson
          </p>
          <p className="text-[#636f88] dark:text-gray-400 text-base font-medium">
            University of Oxford • Computer Science
          </p>
          <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
            <span className="material-symbols-outlined text-sm">
              emoji_events
            </span>
            Debate Champion
          </div>
        </div>
      </div>
      {/* Match Score Stats */}
      <div className="mt-6 flex gap-4">
        <div className="flex-1 flex flex-col gap-1 rounded-xl p-4 bg-success/10 border border-success/20">
          <p className="text-success text-xs font-bold uppercase tracking-wider">
            AI Match Score
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-success tracking-tight text-3xl font-black">
              98%
            </p>
            <span className="text-success text-sm font-bold">High Fit</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1 rounded-xl p-4 bg-primary/5 border border-primary/10">
          <p className="text-primary text-xs font-bold uppercase tracking-wider">
            Exp. Level
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-primary tracking-tight text-3xl font-black">
              Junior
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
