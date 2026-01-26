import Link from "next/link";
import React from "react";

export default function RecentHires() {
  return (
    <section className="mt-6 px-4">
      <h2 className="text-lg font-bold mb-3 px-1 text-[#111318] dark:text-white">
        Recent Hires Success
      </h2>
      <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {/* Row 1 */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                AM
              </div>
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white">
                  Alex Marin
                </p>
                <p className="text-xs text-gray-500">Engineering • 3mo in</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#07883b]">94%</p>
              <p className="text-[10px] text-gray-400 uppercase">
                Success Score
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                SK
              </div>
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white">
                  Sarah Kovar
                </p>
                <p className="text-xs text-gray-500">Marketing • 1mo in</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#07883b]">88%</p>
              <p className="text-[10px] text-gray-400 uppercase">
                Success Score
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                JT
              </div>
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white">
                  James T.
                </p>
                <p className="text-xs text-gray-500">Sales • 2mo in</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
                76%
              </p>
              <p className="text-[10px] text-gray-400 uppercase">
                Success Score
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-3 text-center">
          <Link
            href="#"
            className="text-xs font-bold text-primary flex items-center justify-center gap-1 hover:underline"
          >
            See Full Performance Report
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
