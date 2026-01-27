import React from "react";
import Button from "./Button";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon = "event_busy",
  title,
  description,
  actionLabel,
  onAction,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-20 px-10 text-center ${className}`}>
      <div className="bg-gray-50 dark:bg-gray-800 size-20 rounded-full flex items-center justify-center mb-4 border border-gray-100 dark:border-gray-700">
        <span className="material-symbols-outlined text-3xl text-gray-300 dark:text-gray-500">
          {icon}
        </span>
      </div>
      <h4 className="font-bold text-text-main dark:text-white text-lg">{title}</h4>
      <p className="text-sm text-text-muted dark:text-gray-400 mt-2 max-w-xs">{description}</p>
      {actionLabel && (
        <Button 
          variant="secondary" 
          className="mt-6"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
