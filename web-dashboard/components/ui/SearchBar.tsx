"use client";

import React from "react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`px-4 py-3 ${className}`}>
      <label className="flex flex-col min-w-40 h-14 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <div className="text-text-muted dark:text-slate-400 flex items-center justify-center pl-4 rounded-l-xl">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-text-main dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent placeholder:text-text-muted dark:placeholder:text-slate-500 px-3 text-base font-normal leading-normal"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </label>
    </div>
  );
};

export default SearchBar;
