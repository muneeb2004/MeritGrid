"use client";

import Link from "next/link";
import React from "react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-navy-sidebar text-slate-300 flex flex-col h-full shrink-0 transition-transform duration-300 md:translate-x-0 md:static md:shrink-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-bold leading-tight tracking-wide">
              MeritGrid
            </h1>
            <p className="text-slate-400 text-xs font-medium">
              University Dashboard
            </p>
          </div>
          {/* Close button for mobile */}
          <button 
            onClick={onClose}
            className="md:hidden ml-auto text-slate-400 hover:text-white"
          >
             <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto no-scrollbar">
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 group cursor-pointer">
            <span className="material-symbols-outlined group-hover:text-white">
              dashboard
            </span>
            <span className="text-sm font-medium group-hover:text-white">
              Dashboard
            </span>
          </div>
          <Link
            href="/talent"
            className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/20 text-white border-l-4 border-primary shadow-sm"
          >
            <span className="material-symbols-outlined icon-fill text-primary">
              group
            </span>
            <span className="text-sm font-bold">Candidates</span>
          </Link>
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 group cursor-pointer">
            <span className="material-symbols-outlined group-hover:text-white">
              chat_bubble
            </span>
            <Link href="/messages" className="flex-1 flex items-center justify-between">
                <span className="text-sm font-medium group-hover:text-white">
                Messages
                </span>
                <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                4
                </span>
            </Link>
          </div>
          <Link
            href="/offers"
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 group"
          >
           <span className="material-symbols-outlined group-hover:text-white">
              dataset
            </span>
            <span className="text-sm font-medium group-hover:text-white">
              Offers
            </span>
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 group"
          >
            <span className="material-symbols-outlined group-hover:text-white">
              bar_chart
            </span>
            <span className="text-sm font-medium group-hover:text-white">
              Analytics
            </span>
          </Link>
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 group cursor-pointer">
            <span className="material-symbols-outlined group-hover:text-white">
              calendar_month
            </span>
            <span className="text-sm font-medium group-hover:text-white">
              Interviews
            </span>
          </div>
          <Link
            href="/talent/pipeline"
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 group"
          >
            <span className="material-symbols-outlined group-hover:text-white">
              view_kanban
            </span>
            <span className="text-sm font-medium group-hover:text-white">
              Pipeline
            </span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-700/50">
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 group mb-2"
          >
            <span className="material-symbols-outlined group-hover:text-white">
              settings
            </span>
            <span className="text-sm font-medium group-hover:text-white">
              Settings
            </span>
          </Link>
          <div className="flex items-center gap-3 px-3 py-2">
            <div
              className="size-8 rounded-full bg-slate-600 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsR6rHnwKhEYqr2ZdFU-r1b4J54WIhoZqAEMceFj80PIJ7hxlRNt6IhOtxiJwsJpafqq6RbCpw1JVv4YXr8gF8_YPwtmAa6c1Is7Rtvui5ymw4UAaQIwbr9szfGGM8pXnBAYRxoYvhoK1JOWBtTmMDw_E83F0jYE68zcjfppgFMRXdR4gI-1-9V5hmSqNGnbUub1qTrMQVuiZioZVuz5MXROheNxd6vB0kXKjCrfv0ytf7_SBvHZma2jzKNqQOL6goQ-WPpY282iM-')",
              }}
            ></div>
            <div className="flex flex-col">
              <p className="text-white text-sm font-medium">Alex Morgan</p>
              <p className="text-slate-500 text-xs">Senior Recruiter</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
