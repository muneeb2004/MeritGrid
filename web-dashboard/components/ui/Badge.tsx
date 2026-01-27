import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "success" | "warning" | "error" | "purple";
  size?: "sm" | "md";
  className?: string;
  icon?: string;
  iconFill?: boolean;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconFill = false,
}: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg uppercase tracking-wider";
  
  const variants = {
    primary: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300",
    secondary: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    outline: "bg-transparent border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400",
    success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    warning: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    error: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    purple: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px] gap-1",
    md: "px-3 py-1 text-xs gap-1.5",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {icon && (
        <span 
          className="material-symbols-outlined text-[14px]"
          style={iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}
