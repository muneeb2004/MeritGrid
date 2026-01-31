"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  searchable?: boolean;
  disabled?: boolean;
}

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
  required,
  searchable = false,
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full" ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-text-main dark:text-white mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            w-full h-12 px-4 pr-10
            flex items-center justify-between
            bg-white dark:bg-white/5 
            border-2 ${error ? "border-red-500" : "border-border-default dark:border-gray-700"} 
            rounded-xl
            text-left
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
            transition-all
          `}
        >
          <span className={selectedOption ? "text-text-main dark:text-white" : "text-text-muted"}>
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDown
            size={20}
            className={`absolute right-3 text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-dropdown mt-2 w-full bg-white dark:bg-gray-900 border border-border-default dark:border-gray-700 rounded-xl shadow-lg max-h-60 overflow-hidden">
            {searchable && (
              <div className="p-2 border-b border-border-default dark:border-gray-700">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full h-9 pl-9 pr-3 bg-gray-50 dark:bg-white/5 border border-border-default dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:border-primary"
                    autoFocus
                  />
                </div>
              </div>
            )}
            <div className="overflow-y-auto max-h-48">
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-3 text-sm text-text-muted">No options found</div>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className={`
                      w-full px-4 py-2.5 flex items-center justify-between text-left text-sm
                      hover:bg-gray-50 dark:hover:bg-white/5 transition-colors
                      ${option.value === value ? "bg-primary/5 text-primary font-medium" : "text-text-main dark:text-white"}
                    `}
                  >
                    {option.label}
                    {option.value === value && <Check size={16} className="text-primary" />}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );
}
