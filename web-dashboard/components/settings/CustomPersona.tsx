import React, { useState } from "react";

export default function CustomPersona() {
  const [tags, setTags] = useState(["Python", "Debate Club", "Internship"]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (idx: number) => {
    setTags(tags.filter((_, i) => i !== idx));
  };

  return (
    <div className="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3441] overflow-hidden">
      <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2a3441]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#0d121b] dark:text-white text-lg font-bold">
              Custom Persona Definition
            </h3>
            <p className="text-[#4c669a] dark:text-gray-400 text-sm">
              Define ideal candidate traits for targeted scouting.
            </p>
          </div>
          <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">
            person_search
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[#0d121b] dark:text-white text-sm font-medium">
              Persona Name
            </label>
            <input
              className="w-full rounded-lg border-[#d1d5db] dark:border-[#4a5568] bg-white dark:bg-[#2d3748] text-[#0d121b] dark:text-white text-sm px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
              placeholder="e.g., Future Leaders 2024"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#0d121b] dark:text-white text-sm font-medium">
              Education Level
            </label>
            <select className="w-full rounded-lg border-[#d1d5db] dark:border-[#4a5568] bg-white dark:bg-[#2d3748] text-[#0d121b] dark:text-white text-sm px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer">
              <option>Undergraduate</option>
              <option>Masters / MBA</option>
              <option>PhD</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#0d121b] dark:text-white text-sm font-medium">
            Target Keywords &amp; Skills
          </label>
          <div className="w-full rounded-lg border border-[#d1d5db] dark:border-[#4a5568] bg-white dark:bg-[#2d3748] p-3 flex flex-wrap gap-2 min-h-[80px]">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
              >
                {tag}
                <button
                  onClick={() => removeTag(i)}
                  className="hover:text-red-500 material-symbols-outlined text-[14px] cursor-pointer"
                >
                  close
                </button>
              </span>
            ))}
            <input
              className="flex-1 bg-transparent text-sm outline-none min-w-[120px] dark:text-white placeholder:text-gray-400"
              placeholder="Type and press Enter..."
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-sm font-medium text-primary hover:text-blue-700 flex items-center gap-1 cursor-pointer transition-colors">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            >
              add_circle
            </span>{" "}
            Save as New Persona
          </button>
        </div>
      </div>
    </div>
  );
}
