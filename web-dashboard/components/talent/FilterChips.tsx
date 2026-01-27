import React from "react";
import FilterChip from "@/components/ui/FilterChip";

export default function FilterChips() {
  return (
    <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar pb-1">
      <FilterChip label="Top Matches" icon="auto_awesome" active />
      <FilterChip label="Summer 2024" icon="calendar_month" />
      <FilterChip label="Engineering" icon="code" />
      <FilterChip label="Local" icon="location_on" />
    </div>
  );
}
