import React from "react";

export default function AchievementsTimeline() {
  return (
    <section className="p-4 bg-white dark:bg-background-dark mt-4 border-y border-[#dcdfe5] dark:border-gray-800">
      <h3 className="text-[#111318] dark:text-white text-lg font-bold mb-4">
        Achievements
      </h3>
      <div className="space-y-6 relative before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100 dark:before:bg-gray-800">
        <div className="relative pl-10">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
            <span className="material-symbols-outlined text-white text-sm">
              school
            </span>
          </div>
          <p className="text-sm font-bold dark:text-white">Dean&apos;s List 2023</p>
          <p className="text-xs text-[#636f88] dark:text-gray-400">
            Awarded for top academic performance in CS
          </p>
        </div>
        <div className="relative pl-10">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
            <span className="material-symbols-outlined text-white text-sm">
              trophy
            </span>
          </div>
          <p className="text-sm font-bold dark:text-white">
            National Debate Champion
          </p>
          <p className="text-xs text-[#636f88] dark:text-gray-400">
            Represented University in Global Finals
          </p>
        </div>
        <div className="relative pl-10">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
            <span className="material-symbols-outlined text-white text-sm">
              work
            </span>
          </div>
          <p className="text-sm font-bold dark:text-white">
            Frontend Intern @ TechCorp
          </p>
          <p className="text-xs text-[#636f88] dark:text-gray-400">
            Summer 2022 - Developed React components
          </p>
        </div>
      </div>
    </section>
  );
}
