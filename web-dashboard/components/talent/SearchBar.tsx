import React from "react";

export default function SearchBar() {
  return (
    <div className="px-4 pb-2">
      <label className="flex flex-col w-full">
        <div className="flex w-full items-stretch rounded-xl h-12 bg-[#f0f2f4] dark:bg-surface-dark transition-colors group focus-within:ring-2 focus-within:ring-primary/50">
          <div className="text-[#636f88] dark:text-gray-400 flex items-center justify-center pl-4 pr-2">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="flex w-full bg-transparent border-none text-[#111318] dark:text-white placeholder:text-[#636f88] dark:placeholder:text-gray-500 px-0 text-base font-normal focus:ring-0 focus:outline-none"
            placeholder="Search 'Python devs with 3.8+ GPA'..."
            defaultValue=""
          />
          <div className="flex items-center justify-center pr-3">
            <button className="p-1 rounded-full bg-white dark:bg-background-dark shadow-sm text-primary">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>
      </label>
    </div>
  );
}
