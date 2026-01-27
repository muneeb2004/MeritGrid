import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
  startIcon?: string;
  endIcon?: string;
  isLoading?: boolean;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  startIcon,
  endIcon,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95";

  const variants = {
    primary:
      "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark focus:ring-primary",
    secondary:
      "bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "bg-transparent border border-gray-200 dark:border-gray-700 text-text-main dark:text-white hover:border-primary hover:text-primary focus:ring-primary",
    ghost:
      "bg-transparent text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2.5",
    icon: "h-10 w-10 p-0",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="material-symbols-outlined animate-spin text-[20px]">
          progress_activity
        </span>
      ) : (
        <>
          {startIcon && (
            <span className="material-symbols-outlined text-[20px]">
              {startIcon}
            </span>
          )}
          {children}
          {endIcon && (
            <span className="material-symbols-outlined text-[20px]">
              {endIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}
