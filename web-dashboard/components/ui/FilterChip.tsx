import React from "react";

interface FilterChipProps {
  label: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
  color?: string; // Hex color for the dot indicator if active/custom style
  className?: string;
}

export default function FilterChip({
  label,
  icon,
  active = false,
  onClick,
  color,
  className = "",
}: FilterChipProps) {
  const baseStyles = "flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl px-5 transition-colors cursor-pointer text-sm font-medium leading-normal";
  
  // If active, use primary color or custom style. If inactive, use gray.
  const activeStyles = "bg-primary text-white shadow-sm font-semibold";
  const inactiveStyles = "bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent";

  return (
    <div 
      className={`${baseStyles} ${active ? activeStyles : inactiveStyles} ${className}`}
      onClick={onClick}
    >
      {color && !active && <div className="size-2 rounded-full" style={{ backgroundColor: color }}></div>}
      {icon && (
        <span className={`material-symbols-outlined text-[18px] ${!active ? "text-gray-500" : ""}`}>
          {icon}
        </span>
      )}
      <p>{label}</p>
    </div>
  );
}
