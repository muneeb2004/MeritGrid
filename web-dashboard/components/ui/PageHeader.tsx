import React from "react";
import Link from "next/link";
import Button from "./Button";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  actions?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backHref,
  actions,
  className = "",
}) => {
  return (
    <header className={`sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          {backHref ? (
            <Link href={backHref}>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                arrow_back_ios
              </span>
            </Link>
          ) : (
            <div className="w-8" /> 
          )}
          
          {/* Action Area (Right Side) */}
          <div className="flex items-center gap-2">
            {actions || (
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <span className="material-symbols-outlined text-text-main dark:text-white">
                  notifications
                </span>
              </Button>
            )}
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold tracking-tight text-text-main dark:text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-text-muted dark:text-gray-400 font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
