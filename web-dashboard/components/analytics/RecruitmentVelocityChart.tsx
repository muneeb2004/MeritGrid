import React from "react";

export default function RecruitmentVelocityChart() {
  const data = [
    { month: "Jan", hires: 12 },
    { month: "Feb", hires: 18 },
    { month: "Mar", hires: 15 },
    { month: "Apr", hires: 25 },
    { month: "May", hires: 32 },
    { month: "Jun", hires: 28 },
  ];

  const maxHires = Math.max(...data.map((d) => d.hires)) + 5;
  
  // Calculate SVG points
  const points = data
    .map(
      (d, i) =>
        `${(i / (data.length - 1)) * 100},${100 - (d.hires / maxHires) * 100}`
    )
    .join(" ");

  // Create area path (close the loop at bottom corners)
  const areaPath = `0,100 ${points} 100,100`;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Recruitment Velocity
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hires made over time
          </p>
        </div>
        <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer text-slate-700 dark:text-slate-300">
          <option>Last 6 Months</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className="flex-1 relative w-full h-64">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400">
          {[100, 75, 50, 25, 0].map((val) => (
            <div key={val} className="w-full border-t border-slate-100 dark:border-slate-700 relative">
               <span className="absolute -top-3 -left-0">{Math.round((maxHires * val) / 100)}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full overflow-visible preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="velocityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area */}
          <polygon points={areaPath} fill="url(#velocityGradient)" />

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={`${(i / (data.length - 1)) * 100}%`}
              cy={`${100 - (d.hires / maxHires) * 100}%`}
              r="4"
              fill="white"
              stroke="var(--primary)"
              strokeWidth="2"
              className="hover:scale-150 transition-transform origin-center cursor-pointer"
            >
                <title>{d.month}: {d.hires} hires</title>
            </circle>
          ))}
        </svg>

        {/* X Axis Labels */}
        <div className="absolute -bottom-6 inset-x-0 flex justify-between text-xs text-slate-500 font-medium translate-y-2">
            {data.map((d) => (
                <span key={d.month}>{d.month}</span>
            ))}
        </div>
      </div>
    </div>
  );
}
