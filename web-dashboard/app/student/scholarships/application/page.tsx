import Link from "next/link";
import React from "react";

export default function ScholarshipApplicationPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-text-main dark:text-white pb-20">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-border-default/30">
        <div className="flex items-center p-4 justify-between">
          <Link href="/student/scholarships">
            <div className="text-primary cursor-pointer">
              <span className="material-symbols-outlined text-2xl">
                arrow_back_ios
              </span>
            </div>
          </Link>
          <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Scholarship Application
          </h2>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-md md:max-w-3xl mx-auto w-full">
        {/* Header Info */}
        <div className="px-4 pt-6">
          <h1 className="text-text-main dark:text-white text-2xl font-bold tracking-tight">
            MeritGrid Excellence Award
          </h1>
          <p className="text-text-muted dark:text-[#a0accf] text-sm mt-1">
            Application Period: Fall 2024
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-6 justify-between items-end">
            <p className="text-text-main dark:text-white text-base font-medium leading-normal">
              Form Progress
            </p>
            <p className="text-text-muted dark:text-[#a0accf] text-sm font-normal leading-normal">
              Step 2 of 4
            </p>
          </div>
          <div className="rounded-full bg-border-default dark:bg-gray-700 overflow-hidden">
            <div
              className="h-2 rounded-full bg-primary"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
        <div className="h-4"></div>

        {/* Personal Essay Section */}
        <section className="flex flex-col gap-1">
          <h3 className="text-text-main dark:text-white tracking-light text-xl font-bold leading-tight px-4">
            Personal Essay
          </h3>
          <div className="px-4 py-3">
            <label className="flex flex-col w-full">
              <p className="text-text-muted dark:text-[#a0accf] text-sm font-medium leading-normal pb-3">
                Tell us about your academic goals, personal achievements, and
                how this scholarship will impact your future.
              </p>
              <textarea
                className="form-input flex w-full resize-none overflow-hidden rounded-xl text-text-main dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-default dark:border-gray-700 bg-input dark:bg-[#1a1e2e] min-h-48 placeholder:text-text-muted/50 p-4 text-base font-normal leading-relaxed"
                placeholder="Start typing your essay here..."
              ></textarea>
            </label>
            <div className="flex justify-end pt-2">
              <p className="text-text-muted dark:text-[#a0accf] text-xs font-normal">
                0 / 500 words
              </p>
            </div>
          </div>
        </section>

        {/* Recommendation Letters Section */}
        <section className="flex flex-col gap-1 mt-4">
          <h3 className="text-text-main dark:text-white tracking-light text-xl font-bold leading-tight px-4">
            Recommendation Letters
          </h3>
          <div className="px-4 py-4">
            <div className="border-2 border-dashed border-border-default dark:border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center bg-white/50 dark:bg-[#1a1e2e]/50 text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-3 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  upload_file
                </span>
              </div>
              <p className="text-text-main dark:text-white font-medium">
                Upload or drag letters here
              </p>
              <p className="text-text-muted dark:text-[#a0accf] text-xs mt-1">
                PDF or Word documents (Max 5MB)
              </p>
              <button className="mt-4 px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold rounded-lg transition-colors cursor-pointer">
                Browse Files
              </button>
            </div>
          </div>
        </section>

        {/* Checkbox / Terms Section */}
        <section className="px-4 py-4 mb-24">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center mt-1">
              <input
                className="peer appearance-none h-5 w-5 border-2 border-border-default dark:border-gray-700 rounded bg-input dark:bg-[#1a1e2e] checked:bg-primary checked:border-primary transition-all duration-200 cursor-pointer"
                type="checkbox"
              />
              <span className="material-symbols-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
                check
              </span>
            </div>
            <p className="text-sm text-text-muted dark:text-[#a0accf] leading-relaxed">
              I certify that the information provided is accurate and I agree to
              the{" "}
              <span className="text-primary font-medium underline">
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span className="text-primary font-medium underline">
                Privacy Policy
              </span>{" "}
              of the MeritGrid program.
            </p>
          </label>
        </section>

        {/* Sticky Footer Action */}
        <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-border-default/30 z-40 lg:pl-0">
         {/* lg:pl-0 because this is a centred focused page, or we might need to adjust if sidebar is present. 
             Since max-w-md mx-auto is used for main content, the footer should probably match or be screen width.
             If StudentLayout wraps this, the footer might be obscured by or obscure the BottomNav.
             We'll keep it fixed bottom. */}
          <div className="max-w-md md:max-w-3xl mx-auto">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform cursor-pointer hover:bg-primary/90">
              Next Step
            </button>
          </div>
        </footer>
      </main>
      {/* Extra space for the sticky footer */}
      <div className="h-10 bg-transparent"></div>
    </div>
  );
}
