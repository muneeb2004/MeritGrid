import Link from "next/link";
import React from "react";

export default function AdvisorPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d101b] dark:text-white h-screen flex flex-col overflow-hidden">
        {/* Header */}
      <header className="flex-none bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 sticky top-0 z-50">
        <div className="max-w-md mx-auto flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="relative">
                <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>smart_toy</span>
                </div>
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-background-dark rounded-full"></span>
             </div>
             <div>
                <h1 className="text-lg font-bold leading-tight">MeritGrid AI</h1>
                <p className="text-xs text-primary font-medium">Always active</p>
             </div>
           </div>
           <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
             <span className="material-symbols-outlined">more_vert</span>
           </button>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
        <div className="max-w-md mx-auto flex flex-col gap-6 pb-4">
            {/* Timestamp */}
            <div className="text-center">
                <span className="text-xs text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    Today, 10:23 AM
                </span>
            </div>

            {/* AI Message */}
            <div className="flex gap-3">
                 <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-accent flex-shrink-0 flex items-center justify-center text-white text-xs">
                    <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                 </div>
                 <div className="flex flex-col gap-1 max-w-[85%]">
                    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm leading-relaxed">
                        <p>Hi Alex! I noticed you updated your profile with new volunteer work. 🌟</p>
                        <p className="mt-2">Based on that, you're now a <strong>95% match</strong> for the <span className="text-primary font-bold cursor-pointer hover:underline">Global Leaders Scholarship</span> at Habib University.</p>
                        <p className="mt-2">Would you like me to draft a personal statement for it?</p>
                    </div>
                 </div>
            </div>

            {/* User Message */}
            <div className="flex gap-3 flex-row-reverse">
                 <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4WtBqU_RuyJyc2lpnJrtSS-1kov7Ts0i2nYIU-1ceH3p4mAC127fbn2UB3PrQeCTm65SkcRrB80OYRvpko2Jsa0OFT3obWcI29H3JGhl6_Kb4WGZxb5NJzF29Hn4BCan2KjhvfQPuOmogmOZoSy-qzdJltMCJl-Dz4qGmj3RLS10AkhrWhY9d6q8A1qKbvI-PGVH-NHYvn5meHetrrHmr6ZeXMan0cmWIuXR3KibC2_4ocEsOukON60z3nyu5AgI8KbPtXSV57gGl" alt="User" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col gap-1 max-w-[85%] items-end">
                    <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-md shadow-primary/20 text-sm leading-relaxed">
                        <p>Yes, that would be amazing! Can you focus on my leadership experience?</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">Read 10:25 AM</span>
                 </div>
            </div>

            {/* AI Typing Indicator */}
             <div className="flex gap-3">
                 <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-accent flex-shrink-0 flex items-center justify-center text-white text-xs">
                    <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                 </div>
                 <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5 w-fit">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                 </div>
            </div>
        </div>
      </main>

      {/* Input Area */}
      <div className="flex-none p-4 pb-24 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
         <div className="max-w-md mx-auto">
             <div className="relative flex items-end gap-2 bg-gray-50 dark:bg-gray-800/50 rounded-[28px] p-2 pr-2 border border-transparent focus-within:border-primary/30 focus-within:bg-white dark:focus-within:bg-gray-800 transition-all shadow-inner">
                <button className="flex items-center justify-center size-10 rounded-full text-gray-400 hover:text-primary hover:bg-white dark:hover:bg-gray-700 transition-colors flex-shrink-0">
                    <span className="material-symbols-outlined">add_circle</span>
                </button>
                <textarea 
                    rows={1}
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent border-none focus:ring-0 p-3 max-h-32 min-h-[44px] text-sm resize-none text-[#0d101b] dark:text-white placeholder:text-gray-400"
                    style={{fieldSizing: 'content'} as React.CSSProperties}
                ></textarea>
                <button className="flex items-center justify-center size-10 rounded-full bg-primary text-white shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px] ml-0.5">send</span>
                </button>
             </div>
         </div>
      </div>
      

    </div>
  );
}
