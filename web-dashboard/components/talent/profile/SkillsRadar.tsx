import React from "react";

export default function SkillsRadar() {
  return (
    <section className="bg-white dark:bg-background-dark border-y border-[#dcdfe5] dark:border-gray-800 px-4 py-6">
      <h3 className="text-[#111318] dark:text-white text-lg font-bold mb-6">
        Skills Analysis
      </h3>
      <div className="flex justify-center py-4">
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Simple SVG Radar Chart Representation */}
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
            ></circle>
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
            ></circle>
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
            ></circle>
            <path
              d="M50 5 L50 95 M5 50 L95 50"
              stroke="#e5e7eb"
              strokeWidth="0.5"
            ></path>
            {/* Skill Polygon */}
            <polygon
              points="50,10 85,50 50,80 15,50"
              fill="rgba(23, 84, 207, 0.2)"
              stroke="#1754cf"
              strokeWidth="2"
            ></polygon>
          </svg>
          <span className="absolute -top-4 text-xs font-bold text-gray-500">
            TECHNICAL
          </span>
          <span className="absolute -bottom-4 text-xs font-bold text-gray-500">
            CULTURE
          </span>
          <span className="absolute -right-8 text-xs font-bold text-gray-500">
            COMMUNICATION
          </span>
          <span className="absolute -left-8 text-xs font-bold text-gray-500">
            LEADERSHIP
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-8">
        <div className="flex items-center gap-2 p-3 bg-background-light dark:bg-gray-800 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-xs font-bold dark:text-gray-200">
            Python/React
          </span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-background-light dark:bg-gray-800 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-xs font-bold dark:text-gray-200">
            Public Speaking
          </span>
        </div>
      </div>
    </section>
  );
}
