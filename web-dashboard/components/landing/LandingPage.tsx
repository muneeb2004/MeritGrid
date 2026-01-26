import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display overflow-x-hidden antialiased">
      <div className="relative flex min-h-screen w-full flex-col">
        <header className="sticky top-0 z-50 w-full border-b border-[#f0f2f4] dark:border-gray-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  grid_view
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#111318] dark:text-white">
                MeritGrid
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                href="#"
              >
                Platform
              </Link>
              <Link
                className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                href="#"
              >
                Solutions
              </Link>
              <Link
                className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                href="#"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                href="#"
              >
                Resources
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link 
                className="hidden md:block text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
                href="/student"
              >
                Student Portal
              </Link>
              <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300">
                Log in
              </button>
              <Link
                className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
                href="/talent"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-grid-pattern">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex flex-1 flex-col gap-6 text-center lg:text-left z-10">
                  <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-primary dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-700/30">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
                    New AI Matching Engine v2.0
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#111318] dark:text-white">
                    Stop Chasing Colleges. <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                      Let Them Find You.
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    MeritGrid bridges the gap between ambitious students and
                    top-tier recruitment teams. Create one profile, get
                    discovered by hundreds of universities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                    <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-glow transition-all hover:bg-primary-dark hover:-translate-y-0.5 cursor-pointer">
                      Join the Network
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "18px" }}
                      >
                        arrow_forward
                      </span>
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-8 py-3.5 text-base font-bold text-gray-700 dark:text-gray-200 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-0.5 cursor-pointer">
                      <span
                        className="material-symbols-outlined text-gray-500 dark:text-gray-400"
                        style={{ fontSize: "20px" }}
                      >
                        play_circle
                      </span>
                      Watch Demo
                    </button>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-green-500"
                        style={{ fontSize: "18px" }}
                      >
                        check_circle
                      </span>
                      <span>Free for students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-green-500"
                        style={{ fontSize: "18px" }}
                      >
                        check_circle
                      </span>
                      <span>Verified recruiters</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 w-full lg:w-auto justify-center lg:justify-end perspective-1000 group">
                  <div className="relative w-full max-w-[600px] aspect-[4/3] transition-transform duration-500 ease-out transform group-hover:scale-[1.02]">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-70"></div>
                    <div
                      className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10 bg-white dark:bg-gray-800"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKCPrX_tFAUR2IwOCroORt4Tg_Ly5SK0JaS25cf8u_qXmNmw0tyh_DMrl_bfSDfpJq9BMvbN-z9SYKwRhfOlkOYFxEkhVoB16RCEVpFVhKEJALavgpu0vD6LSTO02xPYIQpJq2Qoz4-h7RUDs7cZ3xWqO4NAcH9BYhebAp2dd2yYjtCMte-PB-JxGYQ9R5UQbyVzLNDCR31koJIKq15OZjA-qkFp8-JSFgplUvdyytKj12knbqj23RRNLByIHFNc2_G3MIl2tuPCR6')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur rounded-xl p-4 shadow-lg w-full max-w-[280px] transform translate-y-4 translate-x-4 border-l-4 border-accent">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center"
                              style={{
                                backgroundImage:
                                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBk-qE84mgUSX9H0htvbc4v4sef1KvWWLASFnor4DOmAZEV1XEd7LDPN9jgcjEHIM7aKuAlFuhGylwz60P7S-z98zm_B1pb3lutD5prZeo_Q1CFd_Pdo5DpFuO50vOGIuED7cIX8tHP2Zyr1PFMG4_vFyZFN5qqflJ4RC4LNpgbCHVYqT3MX-1IZoFJj2TYCKU5I0OfchNb7N9x8xx-FRsS13Pu-CRD5OVRLApph6mzKxEKO5D9U_5IbkBAcoNPPqPT-djnpgA_Snho')",
                              }}
                            ></div>
                            <div>
                              <div className="h-2.5 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                              <div className="h-2 w-16 bg-gray-100 dark:bg-gray-800 rounded"></div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="h-8 flex-1 bg-primary/10 rounded flex items-center justify-center text-primary text-xs font-bold">
                              98% Match
                            </div>
                            <div className="h-8 w-8 bg-green-100 dark:bg-green-900/30 rounded flex items-center justify-center text-green-600 dark:text-green-400">
                              <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "16px" }}
                              >
                                check
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New Section: Your Future, Simplified */}
          <section className="bg-white dark:bg-background-dark py-16 border-b border-gray-100 dark:border-gray-800 relative z-20">
            <div className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h4 className="md:hidden text-primary text-xs font-bold uppercase leading-normal tracking-widest mb-3">
                  How MeritGrid Works
                </h4>
                <h2 className="text-2xl font-black tracking-tight text-[#111318] dark:text-white sm:text-3xl mb-3">
                  <span className="md:hidden">Your Path to Recruitment</span>
                  <span className="hidden md:inline">Your Future, Simplified</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                  <span className="md:hidden">Get discovered by top universities in 3 simple steps.</span>
                  <span className="hidden md:inline">Three simple steps to unlock opportunities from top institutions.</span>
                </p>
              </div>

              {/* Desktop View (Grid) */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-primary/30 to-gray-200 dark:from-gray-800 dark:via-primary/50 dark:to-gray-800 -z-10"></div>
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-soft group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300">
                      <span className="material-symbols-outlined text-4xl text-primary">
                        person_add
                      </span>
                    </div>
                    <div className="absolute -bottom-3 bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-700 text-xs font-bold text-primary shadow-sm">
                      STEP 1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-2">
                    Create Your Profile
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
                    Build a comprehensive digital portfolio showcasing your
                    academics, interests, and extracurriculars.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-soft group-hover:border-accent/50 group-hover:shadow-lg transition-all duration-300">
                      <span className="material-symbols-outlined text-4xl text-accent">
                        auto_awesome
                      </span>
                    </div>
                    <div className="absolute -bottom-3 bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-700 text-xs font-bold text-accent shadow-sm">
                      STEP 2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-2">
                    AI Matching
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
                    Our smart engine analyzes your data to find the perfect
                    college programs that fit your unique profile.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-soft group-hover:border-green-500/50 group-hover:shadow-glow transition-all duration-300">
                      <span className="material-symbols-outlined text-4xl text-green-600 dark:text-green-500">
                        handshake
                      </span>
                    </div>
                    <div className="absolute -bottom-3 bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-700 text-xs font-bold text-green-600 dark:text-green-500 shadow-sm">
                      STEP 3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-2">
                    Connect with Colleges
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
                    Receive direct messages from admissions officers and
                    schedule interviews to secure your spot.
                  </p>
                </div>
              </div>

              {/* Mobile View (Timeline) */}
              <div className="md:hidden mt-4">
                <div className="grid grid-cols-[56px_1fr] gap-x-3">
                  {/* Step 1: Create Profile */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 shadow-sm z-10 relative">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "28px" }}
                      >
                        edit_document
                      </span>
                      <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary border-2 border-white dark:border-gray-800 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="w-0.5 bg-slate-200 dark:bg-gray-700 h-full grow my-3 rounded-full"></div>
                  </div>
                  <div className="flex flex-col pb-10 pt-1">
                    <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-2">
                      Create Your Profile
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                      Showcase your academic achievements, extracurriculars, and
                      skills in one dynamic portfolio.
                    </p>
                  </div>

                  {/* Step 2: AI Matching (Gold Accent) */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-gray-800 dark:to-gray-900 border border-yellow-400/40 shadow-[0_4px_20px_-4px_rgba(234,179,8,0.25)] z-10 relative group">
                      <span
                        className="material-symbols-outlined text-yellow-600 dark:text-yellow-400"
                        style={{ fontSize: "28px" }}
                      >
                        hub
                      </span>
                      <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-yellow-500 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">
                          2
                        </span>
                      </div>
                    </div>
                    <div className="w-0.5 bg-slate-200 dark:bg-gray-700 h-full grow my-3 rounded-full"></div>
                  </div>
                  <div className="flex flex-col pb-10 pt-1">
                    <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-2 flex items-center gap-2">
                      AI Smart Matching
                      <span className="inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 text-[10px] font-bold text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700/50">
                        NEW
                      </span>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                      Our neural algorithms instantly connect your unique
                      profile with universities looking for students just like
                      you.
                    </p>
                  </div>

                  {/* Step 3: Get Recruited */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 shadow-sm z-10 relative">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "28px" }}
                      >
                        verified
                      </span>
                      <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary border-2 border-white dark:border-gray-800 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">
                          3
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pb-6 pt-1">
                    <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight mb-2">
                      Get Recruited
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                      Receive direct offers and scholarship opportunities from
                      top institutions.
                    </p>
                  </div>
                </div>
                
                {/* Mobile CTA */}
                <div className="mt-8">
                   <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-blue-600/20">
                    <span className="text-white text-base font-bold leading-normal tracking-wide">Start Your Journey</span>
                    <span className="material-symbols-outlined text-white ml-2" style={{fontSize: '20px'}}>arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark py-10">
            <div className="container mx-auto max-w-7xl px-4 text-center">
              <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Trusted by admissions teams at
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500">
                <div className="text-xl font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="material-symbols-outlined">school</span>{" "}
                  Stanford
                </div>
                <div className="text-xl font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="material-symbols-outlined">history_edu</span>{" "}
                  MIT
                </div>
                <div className="text-xl font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    auto_stories
                  </span>{" "}
                  Harvard
                </div>
                <div className="text-xl font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    account_balance
                  </span>{" "}
                  Yale
                </div>
                <div className="text-xl font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="material-symbols-outlined">lightbulb</span>{" "}
                  Princeton
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-black tracking-tight text-[#111318] dark:text-white sm:text-4xl mb-4">
                  Smarter connections, better futures.
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                  Our platform serves both sides of the admissions desk with
                  precision tools designed for the modern era.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "28px" }}
                    >
                      person_outline
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#111318] dark:text-white">
                    Student Profiles
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Build a comprehensive profile that highlights academic
                    achievements, portfolios, and extracurriculars in one
                    shareable link.
                  </p>
                </div>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "28px" }}
                    >
                      manage_search
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#111318] dark:text-white">
                    College Scouting
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Admissions teams use AI-driven precision filters to find the
                    exact candidates that match their institution&apos;s culture and
                    needs.
                  </p>
                </div>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "28px" }}
                    >
                      bar_chart
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#111318] dark:text-white">
                    Real-time Analytics
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Track application interest, profile views, and engagement
                    instantly with our recruitment dashboard.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-white dark:bg-background-dark overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                  <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGYqBYwF5s4inAQCY7pfPi8TDMYyulJ-qIRARLcZjlrCgDr4OzFt2Xpj88wJG79i54bJP5Owpsz-J162BTd3boW8s3mEjvcKSDY9p0S5KzwT3AbP95kgMGjj3fvZol3mgD7UcjXyVCMa0LoSpx_g4j0JaioWvaEJIEK1XmnuLKxiLkFgXy-8pIA8bgUdD0okLUYPz4mBQLgZIfnD4K6JxoVfsPmU7aTUN9QLgEZ4GIWP_DKSiHEW7Y6w67fNUnbAyncd_leVlv4K_V')",
                      backgroundSize: "cover",
                      height: "400px",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute bottom-6 right-6 bg-navy text-white p-4 rounded-lg shadow-lg max-w-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-accent">
                          bolt
                        </span>
                        <span className="font-bold text-sm">Instant Match</span>
                      </div>
                      <div className="text-xs text-gray-300">
                        You appeared in 12 new searches today.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-black text-[#111318] dark:text-white mb-6">
                    Data-driven decisions, <br />
                    human-centric results.
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-primary font-bold text-sm">
                          1
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#111318] dark:text-white">
                          Create your digital portfolio
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Upload transcripts, extracurriculars, and personal
                          statements in minutes.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-primary font-bold text-sm">
                          2
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#111318] dark:text-white">
                          Get matched by AI
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Our algorithm connects you with institutions looking
                          for your specific talents.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-primary font-bold text-sm">
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#111318] dark:text-white">
                          Connect &amp; Interview
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Direct messaging with admissions officers opens the
                          door to your future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-navy">
            <div className="container mx-auto max-w-4xl px-4 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Ready to find your perfect match?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Join over 50,000 students and 200+ universities transforming the
                admissions process today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 cursor-pointer">
                  Get Started for Free
                </button>
                <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition cursor-pointer">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex size-6 items-center justify-center rounded bg-primary text-white">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "16px" }}
                    >
                      grid_view
                    </span>
                  </div>
                  <span className="text-xl font-bold text-[#111318] dark:text-white">
                    MeritGrid
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mb-6">
                  The modern bridge for higher education. We help students shine
                  and colleges find their next class of leaders.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="text-gray-400 hover:text-primary transition"
                    href="#"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </Link>
                  <Link
                    className="text-gray-400 hover:text-primary transition"
                    href="#"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#111318] dark:text-white mb-4">
                  Product
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <Link className="hover:text-primary" href="#">
                      For Students
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primary" href="#">
                      For Colleges
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primary" href="#">
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primary" href="#">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#111318] dark:text-white mb-4">
                  Company
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <Link className="hover:text-primary" href="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primary" href="#">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primary" href="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primary" href="#">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#111318] dark:text-white mb-4">
                  Legal
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <Link className="hover:text-primary" href="#">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primary" href="#">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primary" href="#">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2025 MeritGrid Inc. All rights reserved.</p>
              <div className="mt-4 md:mt-0 flex gap-6">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                  Systems Normal
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
