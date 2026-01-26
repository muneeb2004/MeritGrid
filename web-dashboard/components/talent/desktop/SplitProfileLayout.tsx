import React from "react";
import ProfileStickySidebar from "./ProfileStickySidebar";
import ProfileMainContent from "./ProfileMainContent";

export default function SplitProfileLayout() {
  return (
    <div className="flex flex-1 overflow-hidden relative h-full">
      <ProfileStickySidebar />
      <ProfileMainContent />
    </div>
  );
}
