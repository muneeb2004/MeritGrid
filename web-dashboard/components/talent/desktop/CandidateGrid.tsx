import React from "react";
import DesktopCandidateCard from "./DesktopCandidateCard";

const candidates = [
  {
    id: 1,
    name: "Sarah Jenkins",
      role: "Computer Science",
    university: "Stanford",
    year: "24",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSeXhfy7s5XmGiJuKhuE1tXjZOikRsymuUE2oIzB-14VreyYi4TmZ30FXu7VV1M1mkjo_jyLp1f0LMOhzh_sfpLoWXsovIuLtBv64jE3Hu5Brx16ProNr7smJ-Xq_vehfloaD_jPcRd0RCDCRpuueWLNPu5tG73TSL00fOuZojGrWatFgxderP6ljB6JAVeqhLa-fpbnK8OBpCGnPaJfs20HIhBRotXnh_FQ38lkwdwmGtwEDZxBDr2ZfPFyZ8t3la-_YK-x4pawjN",
    matchScore: 98,
    tags: ["Dean's List", "Hackathon Winner", "Python"],
    matchColorClass:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  },
  {
    id: 2,
    name: "David Chen",
      role: "Economics",
    university: "Yale",
    year: "25",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4agRk4QUICkDi9lwq9tI-wKOkEHP-1eA4syTUSrou8-kl69se2ioa9VKfhk7_h3mhFLDEP4PPRSzlhBcGkG_pP6tG9HSS7n6uYOKxuzOyygfqTAObCaoC6jn0IYz3c5i9COdtyq1k6IU24p1ZItZuSbCDpWSzea7OS8TMA1Ts52TCK_xGinWe6sGc-pqAwiNeOII63UliIG4noweLn-1QaRrojaAAvyFM4_PXfcN5ScM-6B4XJ_aH33-eLyDckScvFHS3uhAm7RAQ",
    matchScore: 95,
    tags: ["Debate Captain", "Intern @ Big4", "Data Analysis"],
    matchColorClass:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  },
  {
    id: 3,
    name: "Amara Okafor",
      role: "Data Science",
    university: "MIT",
    year: "24",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCis5P_kQCa62ahlN7u-fmVQagmkG4IKT2PKiPpiVovOVR4igeWC77aZwnWCZEFn4b1Yi2QYuU02Z1fjYcceb55MIYZuh0jr2AikHDUPZfd3Ad3d5Zp6lPMROCed-jDxiVpmHqFnelmAjhhzYYNYxKVUxkre4IaDqrAWlFkCjvOqn_RjpQAUR_rADSAXQCRETlVi2a2j0-mU4WGh_hlEAHcuhk9TyNxe5ZlG_qTXcUJ0_qHdtBdnSnUj-BmBbeOzLH7WNVkzf00Lb-2",
    matchScore: 92,
    tags: ["Published Author", "3.9 GPA", "Machine Learning"],
    matchColorClass:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  },
  {
    id: 4,
    name: "Marcus Liu",
      role: "Mech Eng",
    university: "Georgia Tech",
    year: "25",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1cG19vMkuFb6aU5GeBxZOUCJJopt5G9thGnTm4z5pFOFP0f-ZEJiMDLQVdTRblE3ZP43a2uYNrHIsJaU13WkI6DU8LdksxDzQtyVZIbANLbDgITE-VLAmqc4Qd4RAGBITz1QV3fZ7X4WsCzfkY8OOaW03mmmLZ8AQEfzQ1K1iveI0ir0p53HM9_zpBhipMHVT8NrUfROn2Qh-kkkmrLh_gByW-xDMb3U94ZsTWLQuF8mhGDOdmCfwoFHnX4tY9nUIvH8QYQdEooX5",
    matchScore: 88,
    tags: ["Robotics Club", "CAD Pro", "Leadership"],
    matchColorClass:
      "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
      role: "Physics",
    university: "Caltech",
    year: "24",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlh6qFVe8ThvltmxCPbQy7xmpGGuK9qH-VPszDn381lwqiNXTEU8KojIpWzDuM5OKYQtFZqkkCJOCZyGhO_h8i0lAfCBmGEfNu1vljZ02jK9cGPnoJ1fbm77A3W5XIMknOU7nAkOhRuPh9TiG9qkUmGN1pEJFBQGAPHLixf_e7YZtVhtJzX-3mUbhciRAGQcm4prL3Fmnrkq8Z4dQSNy89DopD4vdCIUOWQWXscpTHKCiAvhVZ5R8fTc2oMt7RH-T1H1HS1-mlO4T6",
    matchScore: 85,
    tags: ["Research Assistant", "Quantum Computing"],
    matchColorClass:
      "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
  },
  {
    id: 6,
    name: "Priya Patel",
      role: "Business",
    university: "Wharton",
    year: "25",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBy7jhson01Z2YHFD9jh54JfCDHOI2VhBGRDodA0aXoanWnSW0OumCepdto8LmniTXGvPL4oymQWbVetNYSnpqzIvTkCHH_eh0MWf8Sl-At08-Kg3k2tVmgdwU1w8qvaoXTDhCqeQskeWA_imeQ4BcwF_XzfVntYgg1R6VWOKZk7pF_6Btv0BjCaoeN1hjOtfqiIgP07ZpxXtfpDvSUqNIOzwVmxqDr57SNboPa7bilUCg0sZIuf632m4pAi0-Dmogz5jgYjzCor77J",
    matchScore: 82,
    tags: ["Startup Founder", "Fintech", "Marketing"],
    matchColorClass:
      "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
  },
];

export default function CandidateGrid() {
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {candidates.map((candidate) => (
            <DesktopCandidateCard key={candidate.id} {...candidate} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
            <span className="material-symbols-outlined animate-spin">sync</span>
            Load More Candidates
          </button>
        </div>
      </div>
    </div>
  );
}
