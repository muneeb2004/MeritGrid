"use client";

import React from "react";
import InterviewPage from "./InterviewPage";
import DesktopInterviewInsights from "./DesktopInterviewInsights";

export default function ResponsiveInterviewPage() {
  return (
    <>
      <div className="hidden lg:block h-screen overflow-hidden">
        <DesktopInterviewInsights />
      </div>
      <div className="lg:hidden">
        <InterviewPage />
      </div>
    </>
  );
}
