import Link from "next/link";
import React from "react";

export default function UniversityDetailPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d101b] dark:text-white font-display min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24">
        {/* Hero Section with Overlaid Navigation */}
        <div className="relative w-full h-[320px] bg-gray-200">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnONhiYFaHD5I5GM7n0Cd-rcyXIrLVpjySNMmsfdrnB6D3vH5wN1C9ZqGbs0kKG9ceJ7jGJsSCmi8gwzv3qZsgmRYqeqsWfR-l1MVDgHMLgkWcamqfrtoea9o5svkTreOk7yP0rXof3RXCwViM0WoHpaplRwgzMUPJe4ld9Lmoif-XC1WgkBek5jDJPE8fQU1JXxyuRO5zi-6Tey__puygWIj1uitmR0wZXF_Bw3dLzSdn-_81VJw2RGx0JohA1qAD_kgAk3SjHTMy')",
            }}
          ></div>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
          {/* Navigation Bar */}
          <div className="absolute top-0 left-0 w-full p-4 pt-12 flex justify-between items-center z-10">
            <Link
              href="/student/discover"
              className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors text-white cursor-pointer"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "24px" }}
              >
                arrow_back_ios_new
              </span>
            </Link>
            <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors text-white cursor-pointer">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "24px" }}
              >
                favorite
              </span>
            </button>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative -mt-6 bg-background-light dark:bg-background-dark rounded-t-3xl px-5 pt-8 w-full flex-1">
          {/* Title Header */}
          <div className="flex flex-col gap-1 mb-6">
            <h1 className="text-3xl font-bold tracking-tight leading-tight text-[#0d101b] dark:text-white">
              Habib University
            </h1>
            <div className="flex items-center gap-1.5 text-[#4c599a] dark:text-gray-400">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "18px" }}
              >
                location_on
              </span>
              <p className="text-sm font-medium">Karachi, PK</p>
            </div>
          </div>

          {/* AI Insight Card */}
          <div className="mb-8">
            <div className="flex gap-4 bg-primary/10 dark:bg-primary/20 p-5 rounded-2xl border border-primary/10">
              <div className="text-primary flex items-start justify-center shrink-0 pt-0.5">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "28px" }}
                >
                  auto_awesome
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                  MeritGrid AI Insight
                </p>
                <p className="text-[#0d101b] dark:text-white text-base font-medium leading-relaxed">
                  You are a strong candidate due to your Debate experience.
                </p>
              </div>
            </div>
          </div>

          {/* Programs Offered Section */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-lg font-bold text-[#0d101b] dark:text-white">
                Programs Offered
              </h2>
              <button className="text-primary text-sm font-semibold cursor-pointer">
                View All
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5">
              {/* Program Card 1 */}
              <div className="min-w-[140px] p-4 bg-white dark:bg-[#1a1f36] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                <div className="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <span className="text-sm font-semibold text-[#0d101b] dark:text-gray-200 leading-tight">
                  Computer Science
                </span>
              </div>
              {/* Program Card 2 */}
              <div className="min-w-[140px] p-4 bg-white dark:bg-[#1a1f36] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <span className="text-sm font-semibold text-[#0d101b] dark:text-gray-200 leading-tight">
                  Electrical Engineering
                </span>
              </div>
              {/* Program Card 3 */}
              <div className="min-w-[140px] p-4 bg-white dark:bg-[#1a1f36] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                <div className="size-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined">diversity_3</span>
                </div>
                <span className="text-sm font-semibold text-[#0d101b] dark:text-gray-200 leading-tight">
                  Social Development
                </span>
              </div>
              {/* Program Card 4 */}
              <div className="min-w-[140px] p-4 bg-white dark:bg-[#1a1f36] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                <div className="size-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <span className="material-symbols-outlined">palette</span>
                </div>
                <span className="text-sm font-semibold text-[#0d101b] dark:text-gray-200 leading-tight">
                  Communication Design
                </span>
              </div>
            </div>
          </div>

          {/* Campus Life Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#0d101b] dark:text-white mb-3">
              Campus Life
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-[#4c599a] dark:text-gray-400 text-sm leading-relaxed">
                Habib University offers a vibrant community focused on liberal arts
                and sciences. Students engage in diverse clubs, sports, and
                cultural events that foster creativity and critical thinking.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-32 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMRJy6QfyDuum_LxaeXcgOngU2oxwWbzN6x8P7s1yfzkj_BuybwoFCocR5UEE86s2nX1FMyGAD649An2tU6vMp2Fpj9BqV2-IAITApafZ3wJglxyKELNJoH6akGcKVUcMpjrkU195z2TaIxe0Xzeu-P3HanjyJvAAh7Sy186fl6YJ2mFQHrjBZYPpe4AIEkqNqfK0J5xx3lDjibKj2dQFmqB5HrqdP8HIjqsRaqzj5j7kzd72p4cOTYrd9x-S0y1edQWvaD8fJulbT')",
                    }}
                  ></div>
                </div>
                <div className="h-32 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXAQ-_s5d816h2LfgFqYugXgN3pINiFgK4G4FAG2IrKCIr1x3ypoQ9ktsnAF2Cm59CYKp4VadO_Q_H-rylkjQUaRn3mK-m0YzfKkIo2jPAWZOenP3AA5Futm9JU24ItLPN8oYgdG_mSl6rVYPlFP0AoqQCl67hMD5OcaNiyFVVNkg7pzcMVfgFV6HAeUbAzZu1ZjWJX7UGzzkb188ktHy2hBJhryzXPyzrrEN7bX7FEIdm79eThhxEd2O1K6-1ZuLs20FvvWis0pID')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white font-bold text-sm backdrop-blur-sm px-3 py-1 rounded-full bg-white/20">
                      +12 more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-[#101322]/90 backdrop-blur-lg border-t border-gray-200 dark:border-white/5 safe-area-bottom">
        <div className="px-5 py-4 pb-8">
          <button className="w-full flex items-center justify-center h-14 bg-primary hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl text-lg font-bold shadow-lg shadow-blue-500/20 transition-all transform active:scale-[0.98] cursor-pointer">
            One-Click Apply
          </button>
        </div>
      </div>
    </div>
  );
}
