import Link from "next/link";
import React from "react";

export default function ProfileHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-[#dcdfe5] dark:border-gray-800">
      <div className="flex items-center p-4 justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/talent"
            className="text-[#111318] dark:text-white cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Candidate Profile
          </h2>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>
    </header>
  );
}
