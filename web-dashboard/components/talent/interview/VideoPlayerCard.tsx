import React from "react";

export default function VideoPlayerCard() {
  return (
    <>
      {/* Video Player Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="relative bg-black aspect-video w-full group">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCF1qWI9pFBJv34v-ZIN6pL-jh8i-yfkhguIraz-5JSbBibVGWd8WCbmMQxpJVzw9Jn5DUy8ESuCmb9FYPz-QnTtW77WwbPgbOeToRcoP7AaBcjcm8V4p7mxNif1ubzt3_wjwpPuFZuVNW1GYGPl3v1oQkxy-sioNaMF5YVZzYADHwsJ7pPURMU57CzjQMSBTmQQp4cdtjffnfim_qKJnGPjvtCgkgTWu_7JEmpsu_Z6b1r4hOmCwP2255i_eHsWc7GTe0UIr8cLf6r')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="size-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center text-white transition-all transform hover:scale-105 cursor-pointer">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "40px" }}
              >
                play_arrow
              </span>
            </button>
          </div>
          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Progress Bar */}
            <div className="relative h-1.5 bg-white/30 rounded-full cursor-pointer group/progress mb-4">
              <div className="absolute top-0 left-0 h-full w-[35%] bg-primary rounded-full"></div>
              <div className="absolute top-1/2 left-[35%] -translate-y-1/2 size-3 bg-white rounded-full shadow opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <button className="hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">play_arrow</span>
                </button>
                <span className="text-xs font-medium font-mono">
                  08:23 / 24:15
                </span>
                <button className="hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">volume_up</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-2 py-1 text-xs bg-white/20 rounded hover:bg-white/30 transition-colors cursor-pointer">
                  1x Speed
                </button>
                <button className="hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">fullscreen</span>
                </button>
              </div>
            </div>
          </div>
          {/* AI Insight Badge Overlay */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-medium text-white">
              Live AI Analysis
            </span>
          </div>
        </div>
        {/* Sentiment Timeline */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "18px" }}
              >
                ecg_heart
              </span>
              Sentiment Timeline
            </h3>
            <div className="flex gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-slate-500">
                <span className="size-2 rounded-full bg-emerald-500"></span>
                Confidence
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <span className="size-2 rounded-full bg-amber-500"></span>
                Hesitation
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <span className="size-2 rounded-full bg-blue-500"></span>
                Neutral
              </span>
            </div>
          </div>
          {/* Waveform Visualization - Simulated */}
          <div className="h-16 w-full flex items-end gap-[2px] opacity-90 mask-image-gradient">
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[30%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[45%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[40%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[60%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[75%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[80%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[65%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[40%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[35%]"></div>
            <div className="w-1 bg-amber-500 rounded-t-sm h-[50%]"></div>
            <div className="w-1 bg-amber-500 rounded-t-sm h-[45%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[30%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[40%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[70%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[85%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[90%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[80%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[50%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[40%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[30%]"></div>
            <div className="w-1 bg-amber-500 rounded-t-sm h-[60%]"></div>
            <div className="w-1 bg-amber-500 rounded-t-sm h-[55%]"></div>
            <div className="w-1 bg-amber-500 rounded-t-sm h-[50%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[40%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[35%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[70%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[75%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[65%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[45%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[40%]"></div>
            {/* Extended bars for fullness */}
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[30%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[35%]"></div>
            <div className="w-1 bg-amber-500/40 rounded-t-sm h-[40%]"></div>
            <div className="w-1 bg-amber-500/40 rounded-t-sm h-[45%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[35%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[30%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[60%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[70%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[85%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[90%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[75%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[50%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[45%]"></div>
            <div className="w-1 bg-amber-500 rounded-t-sm h-[55%]"></div>
            <div className="w-1 bg-amber-500 rounded-t-sm h-[60%]"></div>
            <div className="w-1 bg-amber-500 rounded-t-sm h-[50%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[40%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[35%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[70%]"></div>
            <div className="w-1 bg-emerald-500 rounded-t-sm h-[80%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[40%]"></div>
            <div className="w-1 bg-blue-500/30 rounded-t-sm h-[30%]"></div>
             <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-t-sm h-[20%]"></div>
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-t-sm h-[20%]"></div>
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-t-sm h-[20%]"></div>
            <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-t-sm h-[20%]"></div>
             <div className="w-1 bg-gray-200 dark:bg-gray-700 rounded-t-sm h-[20%]"></div>
          </div>
          <div className="relative w-full h-px bg-slate-200 dark:bg-slate-700 mt-2">
            <div className="absolute -top-1 left-[35%] h-3 w-0.5 bg-black dark:bg-white"></div>
            <span className="absolute top-2 left-[35%] -translate-x-1/2 text-xs font-mono text-slate-500">
              08:23
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
