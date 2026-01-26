import React from "react";

export default function DepartmentalProgress() {
  return (
    <section className="mt-6 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-[#111318] dark:text-white">
          Departmental Progress
        </h2>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-[#111318] dark:text-gray-200">
                Engineering
              </span>
              <span className="text-primary font-bold">85%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[85%] rounded-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-[#111318] dark:text-gray-200">
                Product Design
              </span>
              <span className="text-primary font-bold">62%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[62%] rounded-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-[#111318] dark:text-gray-200">
                Marketing
              </span>
              <span className="text-primary font-bold">45%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[45%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
