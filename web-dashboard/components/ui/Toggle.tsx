"use client";

import React from "react";

interface ToggleOption {
  value: string;
  label: string;
}

interface ToggleProps {
  label?: string;
  options: ToggleOption[];
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}

export default function Toggle({
  label,
  options,
  value,
  onChange,
  required,
  error,
}: ToggleProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-main dark:text-white mb-2">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`
              flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-all
              ${
                value === option.value
                  ? "bg-white dark:bg-primary text-primary dark:text-white shadow-sm"
                  : "text-text-muted hover:text-text-main dark:hover:text-white"
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );
}
