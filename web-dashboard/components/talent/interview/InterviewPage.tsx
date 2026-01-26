import React from "react";
import InterviewHeader from "./InterviewHeader";
import MediaPlayer from "./MediaPlayer";
import AIAnalysisStats from "./AIAnalysisStats";
import SentimentTimeline from "./SentimentTimeline";
import KeyTakeaways from "./KeyTakeaways";
import InterviewFooter from "./InterviewFooter";

export default function InterviewPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white">
      <InterviewHeader />
      <MediaPlayer />
      <AIAnalysisStats />
      <SentimentTimeline />
      <KeyTakeaways />
      <InterviewFooter />
    </div>
  );
}
