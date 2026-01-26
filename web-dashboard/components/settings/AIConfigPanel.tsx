import React from "react";

export default function AIConfigPanel() {
  return (
    <div className="space-y-6">
      {/* Skill Weighting Section */}
      <section className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary">tune</span>
          <h2 className="text-lg font-bold text-[#111318] dark:text-white">
            Skill Weighting Engine
          </h2>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Adjust how the AI prioritizes technical proficiency versus soft skills
          when ranking candidates.
        </p>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Technical Skills
              </span>
              <span className="text-sm font-bold text-primary">60%</span>
            </div>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary"
              defaultValue="60"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Soft Skills & Culture
              </span>
              <span className="text-sm font-bold text-primary">40%</span>
            </div>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary"
              defaultValue="40"
            />
          </div>
        </div>
      </section>

      {/* Bias Mitigation Section */}
      <section className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary">
            security
          </span>
          <h2 className="text-lg font-bold text-[#111318] dark:text-white">
            Bias Mitigation
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-background-light dark:bg-gray-800/50 rounded-lg">
            <div>
              <p className="text-sm font-bold text-[#111318] dark:text-white">
                Anonymize Candidates
              </p>
              <p className="text-xs text-gray-500">
                Hide names and profile photos during initial screening
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 bg-background-light dark:bg-gray-800/50 rounded-lg">
            <div>
              <p className="text-sm font-bold text-[#111318] dark:text-white">
                Diversity Booster
              </p>
              <p className="text-xs text-gray-500">
                Ensure diverse candidate pool representation
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}
