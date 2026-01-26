import React from "react";

interface SkillGraphProps {
  label: string;
  percentage: number;
  colorClass?: string;
  bgClass?: string; // Optional: Allow overriding the background color of the bar container
}

export default function SkillGraph({
  label,
  percentage,
  colorClass = "bg-primary",
  bgClass = "bg-gray-100 dark:bg-gray-700",
}: SkillGraphProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-bold w-16 text-gray-600 dark:text-gray-400">
        {label}
      </span>
      <div className={`flex-1 h-2 rounded-full overflow-hidden ${bgClass}`}>
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
