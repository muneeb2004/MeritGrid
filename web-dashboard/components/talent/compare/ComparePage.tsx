import React from "react";
import ComparisonHeader from "./ComparisonHeader";
import ComparisonTabs from "./ComparisonTabs";
import CandidateComparisonCard from "./CandidateComparisonCard";
import AIComparisonSummary from "./AIComparisonSummary";

const candidates = [
  {
    id: "1",
    name: "Alex Rivera",
    university: "Computer Science, Stanford",
    year: "Class of 2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALE-vht7wbohJg81iD74EO4CNk9U9bNHan6NPeLxOZXfGJX3w4lD2w2cPEmRsqEggTnxVBF5dTfIzoRh_pkkQO7tSExGJLmJOXiaEwvP6skI_k9H4SsuSufvBy7ruMH0MwpDPt90EBnYohbEfMZgFGzkgMtVzTuu2Tz52ceOOlbvNsE-7rsmWVnIHHQInHvijyxyPWNljg8l-9wI2SvyJ8b2_ceaf6n3iVLT-IJ0qe8hv2uZMGAT6KRlLzTT7Ici1a846hwgYDi1o",
    matchScore: 98,
    gpa: "3.95 GPA",
    gpaLabel: "Honors",
    skills: [
      { name: "Python & ML", level: "Expert", percentage: 95 },
      { name: "Data Visualization", level: "Advanced", percentage: 85 },
    ],
    aiInsight:
      "Alex shows exceptional technical depth in NLP projects. Best fit for R&D roles requiring independent research capabilities.",
    experience: [
      { role: "Software Intern at Google (6 mo)" },
      { role: "Lead Researcher at AI Lab" },
    ],
  },
  {
    id: "2",
    name: "Jordan Smith",
    university: "Management, MIT",
    year: "Class of 2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBysuGLI7aJUrvqHso2Vtj6gStgjSzHFngEV37LcVi-BuzpH-SCJyNMHHELWrq8yd-DDiWLIEt2i2Fx6H8K2eDvbt4Xrakkjc5l8w4rNvdXEucYhwXiuo3jbn6LEKC5lCe48fntMv29TIHryByjIQ9wpwUgwGATS6Tye_GMHMiE-HEKEs6fUaLUqtevu6rQPTALrJiTlxVh0Laht9nnBRTPKN2_j09kX9B08Bx37N3CFtcILfQ7SreMgzkn8Y6wP8GdIvtyi3I_QI",
    matchScore: 92,
    gpa: "3.88 GPA",
    gpaLabel: "Cum Laude",
    skills: [
      { name: "Leadership", level: "Master", percentage: 98 },
      { name: "Financial Modeling", level: "Advanced", percentage: 80 },
    ],
    aiInsight:
      "Jordan possesses strong cross-functional leadership traits. Ranked in the top 2% of candidates for stakeholder management.",
    experience: [
      { role: "Product Intern at Stripe (3 mo)" },
      { role: "Student Union President" },
    ],
  },
  {
    id: "3",
    name: "Marcus Chen",
    university: "Eng. Physics, UC Berkeley",
    year: "Class of 2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDddp2yHIha7hTmEEWBdgoK6LzyWP8AZGA0JAYQReklOyNW7cjrba7pRC9VFMvnzn1wJ9RdrE3c9gXbuAKlsN7ncia3SU7Rtg_8lgj-1xzP8AEB7rybp06j8O_Scn9VR982Rck5vUFa_Y1zTldFuJUlNr-UhcEzXQ6sTKycRb7MvDigqGP8IF96KSkbLp9YMypvdoYD79bQQVh4FLvZTfWs0y3_w6YZS8rYiapONXrMa5bhQCG_TlZeRrdVoLguwbGGA8YjzL-iVSc",
    matchScore: 89,
    gpa: "4.00 GPA",
    gpaLabel: "Valedictorian",
    skills: [
      { name: "Problem Solving", level: "Master", percentage: 99 },
      { name: "Quantum Computing", level: "High Potential", percentage: 70 },
    ],
    aiInsight:
      "Perfect academic record. Demonstrates high cognitive flexibility. Recommended for fast-track engineering path.",
    experience: [
      { role: "SpaceX Rocketry Intern" },
      { role: "Tutor for Physics 101 (2 yrs)" },
    ],
  },
];

export default function ComparePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
      <ComparisonHeader />
      <ComparisonTabs />

      {/* Section Header */}
      <div className="px-4 pt-6">
        <h3 className="text-[#111318] dark:text-white text-xl font-extrabold leading-tight tracking-tight">
          AI Scouting Analysis
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Deep comparison of top-tier university applicants
        </p>
      </div>

      {/* Horizontal Scrollable Comparison Grid */}
      <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 p-4 mt-2">
        {candidates.map((candidate) => (
          <CandidateComparisonCard key={candidate.id} {...candidate} />
        ))}
      </div>

      <AIComparisonSummary />

      {/* Scroll Indicator (Bottom) - Visual only */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 items-center px-4 py-2 bg-black/50 backdrop-blur-md rounded-full pointer-events-none">
        <div className="size-1.5 rounded-full bg-white"></div>
        <div className="size-1.5 rounded-full bg-white/30"></div>
        <div className="size-1.5 rounded-full bg-white/30"></div>
      </div>
    </div>
  );
}
