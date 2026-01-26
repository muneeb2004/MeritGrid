import React from "react";
import Link from "next/link";
import SkillGraph from "./SkillGraph";


interface Skill {
  name: string;
  percentage: number;
  colorClass: string;
}

interface CandidateProps {
  name: string;
  university: string;
  year: string;
  matchPercentage: number;
  imageUrl: string;
  highlights: string[];
  skills: Skill[];
  isOnline?: boolean;
  opacity?: string;
}

export default function CandidateCard({
  name,
  university,
  year,
  matchPercentage,
  imageUrl,
  highlights,
  skills,
  isOnline,
  opacity,
}: CandidateProps) {
  return (
    <Link href="/talent/1" className="block">
      <div
        className={`flex flex-col bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 ${
          opacity ? opacity : ""
        }`}
      >
      {/* Card Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <div className="relative">
            <div
              className="size-14 rounded-full bg-gray-200 bg-cover bg-center"
              style={{ backgroundImage: `url("${imageUrl}")` }}
            ></div>
            {isOnline && (
              <div className="absolute bottom-0 right-0 size-4 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></div>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-[#111318] dark:text-white leading-tight truncate">
              {name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium truncate">
              {year}
            </p>
            <p className="text-xs text-primary font-bold mt-0.5 truncate">
              {university}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 px-2.5 py-1 rounded-lg">
            <span className="material-symbols-outlined text-[16px] fill-current">
              bolt
            </span>
            <span className="text-xs font-bold">{matchPercentage}% Match</span>
          </div>
        </div>
      </div>

      {/* Academic Highlights */}
      <div className="flex flex-wrap gap-2 mb-4">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="px-2 py-1 bg-gray-50 dark:bg-gray-800/50 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
          >
            {highlight}
          </div>
        ))}
      </div>

      {/* Skill Proficiency Graph */}
      <div className="mb-4 space-y-2">
        {skills.map((skill, index) => (
          <SkillGraph
            key={index}
            label={skill.name}
            percentage={skill.percentage}
            colorClass={skill.colorClass}
          />
        ))}
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 mt-1">
        <button className="flex items-center justify-center gap-2 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">
            bookmark
          </span>
          Save
        </button>
        <button className="flex items-center justify-center gap-2 h-10 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Message
        </button>
      </div>
      </div>
    </Link>
  );
}
