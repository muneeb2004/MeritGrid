import React from "react";
import ComparePage from "./ComparePage";
import DesktopComparisonTable from "./DesktopComparisonTable";

export default function ResponsiveComparisonPage() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopComparisonTable />
      </div>
      <div className="lg:hidden">
        <ComparePage />
      </div>
    </>
  );
}
