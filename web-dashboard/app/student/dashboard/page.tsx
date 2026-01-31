import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db/postgresql";

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  // Fetch Student Profile
  // We assume user.id is available in session (added via callbacks in auth.ts)
  const userId = (session.user as any).id; 
  
  const profile = await prisma.studentProfile.findUnique({
    where: { userId: userId },
    include: {
        // We might want to include related data later (e.g. applications)
    }
  });

  // Strict Protection: If no profile, they must onboard.
  if (!profile) {
    redirect("/student/onboarding");
  }

  // Dynamic Data
  const displayName = profile.fullName || session.user.name || "Student";
  const displayImage = session.user.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuD4WtBqU_RuyJyc2lpnJrtSS-1kov7Ts0i2nYIU-1ceH3p4mAC127fbn2UB3PrQeCTm65SkcRrB80OYRvpko2Jsa0OFT3obWcI29H3JGhl6_Kb4WGZxb5NJzF29Hn4BCan2KjhvfQPuOmogmOZoSy-qzdJltMCJl-Dz4qGmj3RLS10AkhrWhY9d6q8A1qKbvI-PGVH-NHYvn5meHetrrHmr6ZeXMan0cmWIuXR3KibC2_4ocEsOukON60z3nyu5AgI8KbPtXSV57gGl";
  
  // NOTE: Applications are mock for now as per requirement to focus on dynamic PROFILE data first.
  // Real application fetching will be integrated with MongoDB later.

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] transition-colors duration-200 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-12 bg-white dark:bg-background-dark">
        {/* Top App Bar / Navigation - Only visible on mobile since layout handles desktop */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 ios-blur px-4 pt-6 pb-4 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Student profile avatar"
                  className="h-full w-full object-cover"
                  src={displayImage}
                />
              </div>
              <div>
                <p className="text-xs font-medium text-[#4c739a] dark:text-slate-400 uppercase tracking-wider">
                  Good Morning
                </p>
                <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white">
                  {displayName}
                </h2>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href="/student/notifications"
                className="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[#0d141b] dark:text-white cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-[24px]">
                  notifications
                </span>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            {/* Left Column: Applications */}
            <div>
              {/* Section Header */}
              <div className="pt-6 pb-2">
                <h2 className="text-[22px] font-bold leading-tight tracking-tight dark:text-white">
                  Application Status
                </h2>
                <p className="text-sm text-[#4c739a] dark:text-slate-400">
                  Tracking 4 active applications
                </p>
              </div>

              {/* List Item: Habib University */}
              <div className="mt-4 group active:scale-[0.98] transition-all cursor-pointer">
                <div className="flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 ring-1 ring-slate-100 dark:ring-slate-700"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCm4BWsYAgzUqFC6fOTOuXlkOFK2YuE2WTueUDoOmizs6vBJmHmJorax1JfnEUBSx6y2isrhQaSNsUqK6pJvmyIrocPLkjoJi15JH9oO0nksRdBZtoolIcVsSBpcRKUyVdxCsvPFL12IfSnQ6FnwdF86xm__wMhlKVoPkv_uo7cB_48myfKwsKmEtcuTzmK8wxgfHxCUYETkwteuqq9QNWzh33QoCt2ct9unm9Eurxa7nCcrrFsF-4cUGe4kSY_Pp_hzL40zPLQPolz")',
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">
                          Habib University
                        </p>
                        <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">
                          BSc Computer Science
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-1 text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                        Interview Scheduled
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border-t border-slate-50 dark:border-slate-800 pt-3">
                    <span className="material-symbols-outlined text-primary text-sm">
                      calendar_today
                    </span>
                    <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">
                      Oct 24, 2023 • 10:00 AM
                    </p>
                    <span className="material-symbols-outlined ml-auto text-slate-300 dark:text-slate-600">
                      chevron_right
                    </span>
                  </div>
                </div>
              </div>
              
              {/* ... (Keeping other list items same structure but just one for brevity if I wanted, but standard keeps all) ... */}
               {/* List Item: IBA */}
              <div className="mt-4 group active:scale-[0.98] transition-all cursor-pointer">
                <div className="flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 ring-1 ring-slate-100 dark:ring-slate-700"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbGZwaMXLzbL1HFj4fBHQLis5DDq1VWr-_A-G0KHj6LoPaD0hbHHGm4kiYqKH314nsKazxwkYUiZCWMmmedbitVnC37fhxumMKZdZbJUifUwNFL6WP7_YsupW_VHtpl0PkjDHLjwDOQpRDacSkE6QSolPnxONkK7B2m36pwofpNW-nwhfJHqWpHsAT711N7KpjzyEozyxnnooEZhhe0aGjOg6w_POqFKh3jE9H8Gp4ESARuMdp2YpFAIGtaMR5oFlBgyC_BTbX35Yu")',
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">
                          IBA Karachi
                        </p>
                        <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">
                          BBA Honors
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                      Under Review
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <p className="text-[#4c739a] dark:text-slate-400 text-xs font-semibold uppercase">
                        Step 2 of 4: Document Verification
                      </p>
                      <p className="text-primary text-xs font-bold">50%</p>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center border-t border-slate-50 dark:border-slate-800 pt-1">
                    <span className="material-symbols-outlined ml-auto text-slate-300 dark:text-slate-600">
                      chevron_right
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Next Steps & Tasks */}
            <div>
              {/* Section Header: Next Steps */}
              <div className="pt-8 lg:pt-6 pb-2">
                <h3 className="text-lg font-bold leading-tight tracking-tight dark:text-white">
                  Next Steps
                </h3>
              </div>

              {/* Upcoming Tasks Cards */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex flex-col gap-2">
                  <span className="material-symbols-outlined text-primary">
                    upload_file
                  </span>
                  <p className="text-sm font-bold dark:text-white">
                    Upload Transcripts
                  </p>
                  <p className="text-xs text-[#4c739a] dark:text-slate-400">
                    Due in 2 days
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                  <span className="material-symbols-outlined text-slate-500">
                    payments
                  </span>
                  <p className="text-sm font-bold dark:text-white">
                    Pay Application Fee
                  </p>
                  <p className="text-xs text-[#4c739a] dark:text-slate-400">
                    Completed
                  </p>
                </div>
              </div>

              {/* More Status List (Compact) */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50/50 dark:bg-slate-900/50 rounded-lg shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-500">
                        school
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold dark:text-white">
                        LUMS Admission
                      </p>
                      <p className="text-xs text-[#4c739a] dark:text-slate-400">
                        Decision Pending
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300">
                    chevron_right
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50/50 dark:bg-slate-900/50 rounded-lg shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-500">
                        school
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold dark:text-white">
                        FAST University
                      </p>
                      <p className="text-xs text-[#4c739a] dark:text-slate-400">
                        Application Started
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Home Indicator (Visual Only) - Mobile only */}
      </div>
    </div>
  );
}
