"use client";

import React, { useState } from "react";

export default function SkillPrioritization() {
  const [techSoftBalance, setTechSoftBalance] = useState(60);
  const [gpaWeight, setGpaWeight] = useState(75);
  const [codingWeight, setCodingWeight] = useState(90);
  const [leadershipWeight, setLeadershipWeight] = useState(45);

  return (
    <div className="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3441] overflow-hidden">
      <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2a3441]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#0d121b] dark:text-white text-lg font-bold">
              Skill Prioritization
            </h3>
            <p className="text-[#4c669a] dark:text-gray-400 text-sm">
              Adjust how the AI weighs hard skills versus interpersonal traits.
            </p>
          </div>
          <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">
            tune
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-8">
        {/* Dual Slider Visual */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <label className="text-[#0d121b] dark:text-white text-sm font-semibold">
              Technical Proficiency vs. Soft Skills
            </label>
            <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-1 rounded">
              {techSoftBalance}% Technical
            </span>
          </div>
          <div className="relative h-12 w-full pt-4">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-[#e5e7eb] dark:bg-[#2d3748] rounded-full -translate-y-1/2"></div>
            {/* Active bar area */}
            <div
              className="absolute top-1/2 left-0 h-2 bg-primary rounded-l-full -translate-y-1/2"
              style={{ width: `${techSoftBalance}%` }}
            ></div>
            {/* Handle */}
            <input
              type="range"
              min="0"
              max="100"
              value={techSoftBalance}
              onChange={(e) => setTechSoftBalance(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div
              className="absolute top-1/2 size-6 bg-white border-2 border-primary rounded-full shadow-md -translate-y-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center group"
              style={{ left: `${techSoftBalance}%` }}
            >
              <div className="size-1.5 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
            </div>
            {/* Labels below */}
            <div className="flex justify-between w-full mt-4 text-xs font-medium text-[#6b7280] dark:text-gray-500">
              <span>Soft Skills Heavy</span>
              <span>Balanced</span>
              <span>Technical Heavy</span>
            </div>
          </div>
        </div>
        <hr className="border-[#e5e7eb] dark:border-[#2a3441]" />
        {/* Individual Sliders */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[#0d121b] dark:text-white text-sm font-medium">
                Academic Performance (GPA)
              </span>
              <span className="text-[#0d121b] dark:text-white text-sm font-bold">
                {gpaWeight}%
              </span>
            </div>
            <input
              className="w-full accent-primary cursor-pointer"
              max="100"
              min="0"
              type="range"
              value={gpaWeight}
              onChange={(e) => setGpaWeight(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[#0d121b] dark:text-white text-sm font-medium">
                Coding Assessment Score
              </span>
              <span className="text-[#0d121b] dark:text-white text-sm font-bold">
                {codingWeight}%
              </span>
            </div>
            <input
              className="w-full accent-primary cursor-pointer"
              max="100"
              min="0"
              type="range"
              value={codingWeight}
              onChange={(e) => setCodingWeight(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[#0d121b] dark:text-white text-sm font-medium">
                Leadership Experience
              </span>
              <span className="text-[#0d121b] dark:text-white text-sm font-bold">
                {leadershipWeight}%
              </span>
            </div>
            <input
              className="w-full accent-primary cursor-pointer"
              max="100"
              min="0"
              type="range"
              value={leadershipWeight}
              onChange={(e) => setLeadershipWeight(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
