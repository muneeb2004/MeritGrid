import React from "react";

export default function SettingsHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary text-[24px]">
              settings
            </span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-[#111318] dark:text-white">
              Settings
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Configuration & Preferences
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 overflow-hidden">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABvBowOSDL_hHTsRIwoCxovi3XuZ1JtToPmit95a_itp2wEu0G26ysrpCy8OuNvxs1svBZQpQKF1Eg03IfuqgDF8Qadl79a2WmL2ioGLmR-zVa3eLJcSRW7BGo0aFJbO7XpRD1V4M9DjHuZfTGySnKsnS4K8yPYVZlGBglzxy3Ab_grtu87E-rK4jA_XJkV9GYN1pOiw4eSwjgw3bhF2m9PWfnbTW57FvheTsbU2kLqTyTahS4vjgPHK4kFanhpHCTgixlBjaxRJo"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
