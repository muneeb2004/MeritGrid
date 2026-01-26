"use client";

import React, { useState } from "react";

// Reusable toggle component
const Toggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <div
    className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer"
    onClick={onChange}
  >
    <div
      className={`block w-10 h-6 rounded-full border-2 transition-colors duration-200 ease-in-out ${
        checked
          ? "bg-primary border-primary"
          : "bg-gray-200 dark:bg-gray-700 border-gray-200 dark:border-gray-700"
      }`}
    ></div>
    <div
      className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
        checked ? "transform translate-x-4" : ""
      }`}
    ></div>
  </div>
);

export default function BiasMitigation() {
  const [anonymized, setAnonymized] = useState(true);
  const [diverseSlate, setDiverseSlate] = useState(true);
  const [schoolBlindness, setSchoolBlindness] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      {/* Bias Mitigation Card */}
      <div className="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3441] overflow-hidden sticky top-8">
        <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2a3441]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-[#0d121b] dark:text-white text-lg font-bold">
                Bias Mitigation
              </h3>
              <p className="text-[#4c669a] dark:text-gray-400 text-sm">
                Ethics &amp; Compliance
              </p>
            </div>
            <span className="material-symbols-outlined text-[#059669] bg-[#059669]/10 p-2 rounded-full">
              shield
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {/* Feature 1 */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-[#0d121b] dark:text-white text-sm font-bold">
                  Anonymized Profiles
                </p>
                <div className="group relative">
                  <span className="material-symbols-outlined text-[#9ca3af] text-[16px] cursor-help">
                    info
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded hidden group-hover:block z-10">
                    Removes photos, names, and gender markers from candidate
                    review.
                  </div>
                </div>
              </div>
              <p className="text-[#4c669a] dark:text-gray-400 text-xs">
                Hide name, photo, and gender during initial screening.
              </p>
            </div>
            <Toggle
              checked={anonymized}
              onChange={() => setAnonymized(!anonymized)}
            />
          </div>
          <hr className="border-[#e5e7eb] dark:border-[#2a3441]" />
          {/* Feature 2 */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-[#0d121b] dark:text-white text-sm font-bold">
                  Diverse Slate
                </p>
              </div>
              <p className="text-[#4c669a] dark:text-gray-400 text-xs">
                Ensure top candidates include representation from diverse
                backgrounds.
              </p>
            </div>
            <Toggle
              checked={diverseSlate}
              onChange={() => setDiverseSlate(!diverseSlate)}
            />
          </div>
          <hr className="border-[#e5e7eb] dark:border-[#2a3441]" />
          {/* Feature 3 */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-[#0d121b] dark:text-white text-sm font-bold">
                  School Blindness
                </p>
              </div>
              <p className="text-[#4c669a] dark:text-gray-400 text-xs">
                Remove university branding/prestige bias from algorithm.
              </p>
            </div>
            <Toggle
              checked={schoolBlindness}
              onChange={() => setSchoolBlindness(!schoolBlindness)}
            />
          </div>
          <div className="mt-2 bg-[#f0f9ff] dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-3 flex gap-3 items-start">
            <span
              className="material-symbols-outlined text-primary mt-0.5"
              style={{ fontSize: "20px" }}
            >
              auto_awesome
            </span>
            <p className="text-xs text-blue-800 dark:text-blue-100 leading-relaxed">
              <strong>AI Insight:</strong> Enabling &quot;Anonymized Profiles&quot; has
              shown to increase interview diversity by 14% in similar
              industries.
            </p>
          </div>
        </div>
      </div>
      
      {/* Quick Visualization */}
      <div className="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3441] overflow-hidden">
        <div
          className="h-40 w-full bg-cover bg-center relative"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJuYiMLPPz5X87I8V9PhzJKIV_qmmSt8lgjPLlhyd-ly7rUZH6iZtO2cnJ0cRUglmF6vgG0reUDR2VmBKVhPNH1jZsXmG-LKoihxTIJcsnJv0jAWlhgtMbALbLa6Rvt356SK5xlJneb-pSwJzPaiXyWbhNCutSwaaBauV7O4w26ue_C2t-PVZ_6koSL5pA-8YIg7LYWYzrMrvw9INsseQyVn306XtLrXwnZulv7sKemzoj8WUGpf7mVTwQ9uonEeH0WEGEhford1dE")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <p className="text-white text-sm font-medium">
              Impact Preview: Current configuration favors top 15% technical
              talent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
