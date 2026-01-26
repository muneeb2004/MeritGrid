import React from "react";
import Link from "next/link";

interface Skill {
  name: string;
  level: string;
  percentage: number;
}

interface Experience {
  role: string;
}

interface ComparisonCardProps {
  id: string | number;
  name: string;
  university: string;
  year: string;
  imageUrl: string;
  matchScore: number;
  gpa: string;
  gpaLabel?: string;
  skills: Skill[];
  aiInsight: string;
  experience: Experience[];
}

export default function CandidateComparisonCard({
  id,
  name,
  university,
  year,
  imageUrl,
  matchScore,
  gpa,
  gpaLabel,
  skills,
  aiInsight,
  experience,
}: ComparisonCardProps) {
  return (
    <div className="snap-center shrink-0 w-[320px] bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm flex flex-col h-full">
      <Link href={`/talent/${id}`} className="block">
        {/* Profile Header */}
        <div className="p-5 flex flex-col items-center text-center border-b border-gray-100 dark:border-gray-800">
          <div className="w-20 h-20 rounded-full border-4 border-primary/10 overflow-hidden mb-3">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url("${imageUrl}")` }}
            ></div>
          </div>
          <h4 className="text-lg font-bold text-[#111318] dark:text-white">
            {name}
          </h4>
          <p className="text-primary text-sm font-semibold">{university}</p>
          <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
            {year}
          </p>
        </div>

        {/* Match Score Section */}
        <div className="p-5 bg-primary/5 dark:bg-primary/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
              AI Match Score
            </span>
            <span className="text-xl font-extrabold text-primary">
              {matchScore}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full"
              style={{ width: `${matchScore}%` }}
            ></div>
          </div>
        </div>

        {/* Attributes Table */}
        <div className="p-5 space-y-6 flex-1">
          {/* Academics */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-gray-400 text-lg">
                school
              </span>
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                Academics
              </span>
            </div>
            <p className="text-base font-bold text-[#111318] dark:text-white">
              {gpa}{" "}
              {gpaLabel && (
                <span className="text-xs font-medium text-gray-500">
                  ({gpaLabel})
                </span>
              )}
            </p>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-gray-400 text-lg">
                psychology
              </span>
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                Top Skills
              </span>
            </div>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-[#111318] dark:text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-primary font-bold italic">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-primary">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-sm">
                auto_awesome
              </span>
              <span className="text-xs font-bold text-primary">AI Insight</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
              {aiInsight}
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-gray-400 text-lg">
                work
              </span>
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                Experience
              </span>
            </div>
            <ul className="text-xs space-y-2 text-gray-600 dark:text-gray-400">
              {experience.map((exp, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{exp.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>

      {/* Footer Actions */}
      <div className="p-4 grid grid-cols-2 gap-3 border-t border-gray-100 dark:border-gray-800 mt-auto">
        <button className="flex items-center justify-center gap-2 h-11 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">bookmark</span>{" "}
          Shortlist
        </button>
        <button className="flex items-center justify-center gap-2 h-11 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">mail</span> Invite
        </button>
      </div>
    </div>
  );
}
