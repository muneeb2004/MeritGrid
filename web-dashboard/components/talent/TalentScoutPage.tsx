import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import FilterChips from "./FilterChips";
import CandidateCard from "./CandidateCard";
import FloatingAction from "./FloatingAction";

export default function TalentScoutPage() {
  const candidates = [
    {
      name: "Sarah Jenkins",
      university: "University of Michigan",
      year: "Class of 2024",
      matchPercentage: 98,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHU9zkBFidEm_khQZjRteF8VOOfCEUXrxSyyQlubYGJUKB3YZwSi_ZpuR9GIMXrNKYtJkTkwQkIrrqwk2ycgH-yNwKzgllqQbhT-uQzSHNQCPwMQ2-TIn5As44xt_qgUemLf89JN7PazNJeKrnDBVs0YP4u0p0iqc1glJsrnaBzErzbQZZ9Y7ho06JJl1EaZQ3FsqhMh1ykSRe91PmdtY47b_w88yAxyCwzseKJDlxvFQjwYl7LOljn7M1BiDBiH8A29u5BrQLrs",
      isOnline: true,
      highlights: ["GPA: 3.9", "Data Science", "Internship Exp"],
      skills: [
        { name: "Python", percentage: 95, colorClass: "bg-primary" },
        { name: "SQL", percentage: 85, colorClass: "bg-primary/80" },
        { name: "Leadership", percentage: 70, colorClass: "bg-indigo-400" },
      ],
    },
    {
      name: "David Chen",
      university: "Stanford University",
      year: "Class of 2025",
      matchPercentage: 92,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQUOGyNGb_0FVBm_A8F5Gq7AfCFFcTMRPNtR9Q-DiL32WCJQIDIEPLSDC8q4nrn7-lAC5DCeXSWCteZ0YqabIlgFNe1wi2MWECkYy1H9XG2G9Pds2-Wsemb_47CcAh4w5kHW82rV-S4atcNJADSHGJ5eBs6TPXDMhhOnpuawWBo0g8RVfeU2IcKYi0vZIOcfp57wXAdQzcmljX2S0_EmaXzp3qpsqDL3JCGLZB5UH9XfmDRZbZlpsNsEJuWZNlk6O-HWt1IADV0Fo",
      isOnline: false,
      highlights: ["GPA: 3.7", "Computer Science", "Hackathon Winner"],
      skills: [
        { name: "Java", percentage: 90, colorClass: "bg-primary" },
        { name: "React", percentage: 80, colorClass: "bg-primary/70" },
        { name: "Design", percentage: 45, colorClass: "bg-indigo-400" },
      ],
    },
    {
      name: "Emily Davis",
      university: "Georgia Tech",
      year: "Class of 2024",
      matchPercentage: 88,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBer7VRx55IWU_Jmsw7Ac8R2xRrrA02AwG7EYoW9D6sVca8EzRcfsbLlAWHvflLx5jhk0yUiqoEwITZZyrLenqth0Bg5Q-LV4iWKujcf66RKjmK5u9DpnrLVCK6tAMCAKpIbHTY3EdeB1IQESBZfBNuqmsDft47JrTQVruObD9FbaVCvVeKeEWcuNs-0y2TqsqZuD6TXgwHeVVbZ0VQva3HZzhkDJnkbdqhRIIfonsPiYE6_lF9zU-GTMQcbeIc33oPwFHSHLpqs2M",
      isOnline: false,
      highlights: ["GPA: 3.8", "Machine Learning"],
      skills: [
        { name: "PyTorch", percentage: 88, colorClass: "bg-primary" },
        { name: "AWS", percentage: 65, colorClass: "bg-primary/60" },
      ],
      opacity: "opacity-90",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white transition-colors duration-200">
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 pb-2">
        <Header />
        <SearchBar />
        <FilterChips />
      </div>

      <div className="flex flex-col p-4 gap-4">
        {/* Result Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            24 Candidates Found
          </p>
          <button className="text-primary text-sm font-bold flex items-center gap-1 cursor-pointer">
            Sort by Relevance{" "}
            <span className="material-symbols-outlined text-[16px]">
              expand_more
            </span>
          </button>
        </div>

        {candidates.map((candidate, index) => (
          <CandidateCard key={index} {...candidate} />
        ))}
      </div>

      <FloatingAction />
      <div className="fixed bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
    </div>
  );
}
