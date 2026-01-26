import React from "react";

export default function PersonaBuilder() {
  return (
    <section className="mt-6 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary">person_add</span>
        <h2 className="text-lg font-bold text-[#111318] dark:text-white">
          Custom Persona
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Define the ideal traits for your "University Grad" persona to guide AI
        recommendations.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            Must-have Traits (comma separated)
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="e.g. Curiosity, Resilience, Fast Learner"
            defaultValue="Growth Mindset, Team Player, Analytical"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            Culture Fit Description
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-24 resize-none"
            placeholder="Describe your company culture..."
            defaultValue="We value innovation and autonomy. Candidates should be comfortable working in a fast-paced environment with minimal supervision."
          ></textarea>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
          Save Persona
        </button>
      </div>
    </section>
  );
}
