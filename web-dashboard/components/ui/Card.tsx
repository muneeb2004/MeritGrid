import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  noPadding?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hoverEffect = false,
  noPadding = false,
  onClick,
}: CardProps) {
  const baseStyles = "bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden";
  const hoverStyles = hoverEffect ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" : "";
  const paddingStyles = noPadding ? "" : "p-4 md:p-6";

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${paddingStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
