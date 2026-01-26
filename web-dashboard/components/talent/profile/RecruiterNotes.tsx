import React from "react";

export default function RecruiterNotes() {
  return (
    <section className="p-4 mt-4 bg-white dark:bg-background-dark border-y border-[#dcdfe5] dark:border-gray-800">
      <h3 className="text-[#111318] dark:text-white text-lg font-bold mb-4">
        Recruiter Notes
      </h3>
      <div className="space-y-4">
        <div className="p-4 bg-background-light dark:bg-gray-800 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-bold text-primary">Sarah Miller</span>
            <span className="text-[10px] text-gray-400">2 days ago</span>
          </div>
          <p className="text-sm text-[#111318] dark:text-gray-200">
            Spoke with Alex briefly. Very articulate and clear technical
            foundation. Would be a great cultural fit for the Innovation Lab.
          </p>
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-background-light dark:bg-gray-800 border-none rounded-lg text-sm px-4 h-10 focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="Add a note..."
            type="text"
          />
          <button className="bg-primary text-white rounded-lg h-10 w-10 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </section>
  );
}
