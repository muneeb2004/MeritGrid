import Link from "next/link";
import React from "react";

export default function InterviewHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark p-4 border-b border-[#dcdfe5] dark:border-white/10 justify-between">
      <div className="flex items-center gap-3">
        <Link href="/talent" className="text-primary cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-[#111318] dark:text-white">
            Alex Rivera
          </h2>
          <p className="text-xs text-[#636f88] font-medium">
            Graduate Software Engineer
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex size-10 items-center justify-center rounded-lg bg-background-light dark:bg-white/10 text-primary transition-colors hover:bg-gray-100 dark:hover:bg-white/20">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>
    </header>
  );
}
