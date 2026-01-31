"use client";

import React from "react";
import { Check } from "lucide-react";

interface SelectionCardProps {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function SelectionCard({
  label,
  description,
  icon,
  selected,
  onClick,
}: SelectionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative w-full p-5 
        flex flex-col items-center text-center
        border-2 rounded-xl
        transition-all
        ${
          selected
            ? "border-primary bg-primary/5 dark:bg-primary/10"
            : "border-border-default dark:border-gray-700 bg-white dark:bg-white/5 hover:border-primary/50"
        }
      `}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <Check size={14} className="text-white" />
        </div>
      )}
      {icon && (
        <div className={`mb-3 ${selected ? "text-primary" : "text-text-muted"}`}>
          {icon}
        </div>
      )}
      <p className={`font-bold ${selected ? "text-primary" : "text-text-main dark:text-white"}`}>
        {label}
      </p>
      {description && (
        <p className="text-sm text-text-muted mt-1">{description}</p>
      )}
    </button>
  );
}
