import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import AIInsights from "./AIInsights";
import SkillsRadar from "./SkillsRadar";
import AchievementsTimeline from "./AchievementsTimeline";
import RecruiterNotes from "./RecruiterNotes";
import ActionAccordions from "./ActionAccordions";
import BottomActionBar from "./BottomActionBar";

export default function StudentProfilePage() {
  return (
    <div className="min-h-screen pb-24 bg-background-light dark:bg-background-dark font-display">
      <ProfileHeader />
      <main className="max-w-md mx-auto">
        <ProfileInfo />
        <AIInsights />
        <SkillsRadar />
        <AchievementsTimeline />
        <RecruiterNotes />
        <ActionAccordions />
      </main>
      <BottomActionBar />
    </div>
  );
}
