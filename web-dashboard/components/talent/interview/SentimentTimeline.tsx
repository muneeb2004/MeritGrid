import React from "react";

export default function SentimentTimeline() {
  return (
    <section className="bg-white dark:bg-background-dark px-4 py-4 border-t border-[#dcdfe5] dark:border-white/10">
      <h3 className="text-lg font-bold mb-4 text-[#111318] dark:text-white">
        Sentiment Markers
      </h3>
      <div className="grid grid-cols-[40px_1fr] gap-x-2">
        <div className="flex flex-col items-center gap-1 pt-1">
          <div className="text-[#07883b]">
            <span className="material-symbols-outlined fill-icon">
              check_circle
            </span>
          </div>
          <div className="w-[2px] bg-[#dcdfe5] dark:bg-white/10 h-8 grow"></div>
        </div>
        <div className="flex flex-1 flex-col pb-6">
          <p className="text-base font-bold leading-tight text-[#111318] dark:text-white">
            Positive Sentiment
          </p>
          <p className="text-[#636f88] text-sm font-medium mb-1">
            02:15 - Background Discussion
          </p>
          <p className="text-sm text-[#111318] dark:text-gray-300">
            Detailed explanation of previous project challenges and leadership
            role.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 pt-1">
          <div className="text-[#636f88]">
            <span className="material-symbols-outlined">
              radio_button_checked
            </span>
          </div>
          <div className="w-[2px] bg-[#dcdfe5] dark:bg-white/10 h-8 grow"></div>
        </div>
        <div className="flex flex-1 flex-col pb-6">
          <p className="text-base font-bold leading-tight text-[#111318] dark:text-white">
            Neutral Response
          </p>
          <p className="text-[#636f88] text-sm font-medium mb-1">
            05:40 - Availability & Logistics
          </p>
          <p className="text-sm text-[#111318] dark:text-gray-300">
            Standard confirmation of relocation willingness and notice period.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 pt-1">
          <div className="text-[#f59e0b]">
            <span className="material-symbols-outlined fill-icon">warning</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col pb-2">
          <p className="text-base font-bold leading-tight text-[#111318] dark:text-white">
            Hesitant Marker
          </p>
          <p className="text-[#636f88] text-sm font-medium mb-1">
            08:22 - Conflict Management
          </p>
          <p className="text-sm text-[#111318] dark:text-gray-300">
            Paused for 4 seconds before answering about handling team
            disagreement.
          </p>
        </div>
      </div>
    </section>
  );
}
