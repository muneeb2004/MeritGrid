import React from "react";
import PipelinePage from "./PipelinePage";
import DesktopKanbanPage from "./DesktopKanbanPage";

export default function ResponsivePipelinePage() {
  return (
    <>
      <div className="hidden lg:block h-screen overflow-hidden">
        <DesktopKanbanPage />
      </div>
      <div className="lg:hidden">
        <PipelinePage />
      </div>
    </>
  );
}
