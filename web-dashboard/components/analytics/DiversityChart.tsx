import React from "react";

export default function DiversityChart() {
  const genderData = [
    { label: "Male", value: 55, color: "#1152d4" },
    { label: "Female", value: 40, color: "#F59E0B" },
    { label: "Other", value: 5, color: "#10b981" },
  ];

  const ethnicityData = [
    { label: "White", value: 40, color: "#1152d4" },
    { label: "Asian", value: 30, color: "#F59E0B" },
    { label: "Hispanic", value: 20, color: "#10b981" },
    { label: "Black", value: 10, color: "#6366f1" },
  ];

  const renderDoughnut = (
    data: { label: string; value: number; color: string }[],
    title: string
  ) => {
    let accumulatedAngle = 0;
    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
      <div className="flex flex-col items-center">
        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">
          {title}
        </h4>
        <div className="relative size-40">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {data.map((item, index) => {
              const startAngle = accumulatedAngle;
              const sliceAngle = (item.value / total) * 360;
              accumulatedAngle += sliceAngle;

              // SVG Arc calculation
              const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
              const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
              const x2 =
                50 + 50 * Math.cos((Math.PI * (startAngle + sliceAngle)) / 180);
              const y2 =
                50 + 50 * Math.sin((Math.PI * (startAngle + sliceAngle)) / 180);
              
              const largeArcFlag = sliceAngle > 180 ? 1 : 0;

              return (
                <path
                  key={index}
                  d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  stroke="white"
                  strokeWidth="2"
                  className="hover:opacity-90 transition-opacity cursor-pointer dark:stroke-gray-800"
                />
              );
            })}
            <circle cx="50" cy="50" r="30" fill="white" className="dark:fill-gray-800" />
          </svg>
          {/* Center text if needed */}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Diversity Metrics
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Demographic breakdown
          </p>
        </div>
        <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 transition-colors">
            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>more_horiz</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {renderDoughnut(genderData, "Gender Identity")}
        {renderDoughnut(ethnicityData, "Ethnicity")}
      </div>
    </div>
  );
}
