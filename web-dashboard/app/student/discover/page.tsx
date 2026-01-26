import Link from "next/link";
import React from "react";

export default function DiscoverPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-white pb-24 min-h-screen">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5 px-4 pt-12 pb-4 flex items-center justify-between transition-colors">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            MeritGrid
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Find your future
          </p>
        </div>
        <button className="relative overflow-hidden h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="User Profile Avatar"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVLbZpyjmzytXmaOcqHUOOJ-2cInSpAe6QCCHFZ8YVx9XCQog4AWUz0kuEvGKLoR1Wc_wqDNO-oywvw17lp6y0yBzawYpPPqV4DwYQWfkOqImn3DN2xuDOFXM1-2N9ei2wHrpDd16-7JJsLYOkRIFjt6k7ifAKqA0y3jDAasWwTpqCOqNSTrxadFNh2b5GZezcAc8DFjLxcps8bTwaQbgV1X2fjihMnPUpjazzHY60SEHryyJsVk4wKDPh1GhOWsNnVeqMSzg4__l2"
          />
        </button>
      </header>
      
      {/* Search Bar */}
      <div className="px-4 py-4">
        <div className="relative group">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-focus-within:text-primary transition-colors">
              search
            </span>
          </div>
          <input
            className="block w-full rounded-xl border-0 bg-white dark:bg-card-dark py-3 pl-10 pr-3 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-white/10 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow outline-none"
            placeholder="Search universities..."
            type="text"
          />
        </div>
      </div>
      
      {/* Filter Chips */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
        <div className="flex items-center gap-3 px-4 min-w-max">
          {/* Active Chip */}
          <button className="flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-white shadow-md shadow-primary/20 transition-transform active:scale-95 cursor-pointer">
            All
          </button>
          {/* Inactive Chips */}
          <button className="flex h-9 items-center justify-center rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 px-5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors active:scale-95 cursor-pointer">
            Engineering
          </button>
          <button className="flex h-9 items-center justify-center rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 px-5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors active:scale-95 cursor-pointer">
            Medical
          </button>
          <button className="flex h-9 items-center justify-center rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 px-5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors active:scale-95 cursor-pointer">
            Business
          </button>
          <button className="flex h-9 items-center justify-center rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 px-5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors active:scale-95 cursor-pointer">
            Arts
          </button>
        </div>
      </div>
      
      {/* University List */}
      <div className="flex flex-col gap-6 p-4">
        {/* Card 1: Habib University */}
        <Link href="/student/discover/habib">
        <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card-light dark:bg-card-dark shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 transition-all hover:shadow-md active:scale-[0.98] duration-200 cursor-pointer">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClud6SXSOXgikbTarblXWgTkUIUyXa_TH5bmSypV_VTDh3XA5zTkWHX0-O0DR-gVBluNNX5SS4nx3y9PBAq5qX8kgWJUsDUYDdmvgvCX9RJgW3ZK1VgCW_9w1YqCXlNLMQeJqcpVVsgxKJ2A9GD4VOqbxZDc4BVNr3E1hAOZ-qY8DpwaV6wrRiAPAZR_GU0_ziaLSuy1S-5G1-fqRR2UHdzs9Ggk0IujdewGm6f-oytFCQTi65UtxiSHoSeOvmHlspsLotx6W6-2oa')",
              }}
            ></div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {/* Match Badge */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-primary/95 backdrop-blur-sm px-3 py-1.5 shadow-lg">
              <span className="material-symbols-outlined text-[18px] text-white">
                auto_awesome
              </span>
              <span className="text-xs font-bold text-white">95% Match</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Habib University
              </h3>
              <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">bookmark</span>
              </button>
            </div>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-[16px]">
                location_on
              </span>
              <p className="text-sm font-medium">Karachi, Pakistan</p>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-500/20">
                Liberal Arts
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-500/20">
                Science
              </span>
            </div>
          </div>
        </article>
        </Link>
        
        {/* Card 2: NED University */}
        <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card-light dark:bg-card-dark shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 transition-all hover:shadow-md active:scale-[0.98] duration-200">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDI4uDhycYZbwrefq2gOSeXzenyimsoxotv4lhU3cj3Yq4yZnW10CelHVjWypLKdMDs1Y_r8Vfea5qdNvBZsiIPX5Fu4qxKTEQHmWdNaPVJ1YWrvhM5V76Vbc75MiyTqHfj0tzjJ5Fzf9vccm9VojJlWX-F1kG68Xgqx2ICZpqAJ1mF6ueCAlQf5hVcNGgLjPhBDycN8XF-2C9Pj_Jb44nO8dHYsgMKv0DmKHj87fq3EFMtGBfpuNewk17XPosN4AUUWkXoWobNGuxj')",
              }}
            ></div>
            {/* Match Badge */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-white/95 dark:bg-card-dark/95 backdrop-blur-sm px-3 py-1.5 shadow-lg">
              <span className="material-symbols-outlined text-[18px] text-primary">
                auto_awesome
              </span>
              <span className="text-xs font-bold text-primary">
                88% Match
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                NED University
              </h3>
              <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">bookmark</span>
              </button>
            </div>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-[16px]">
                location_on
              </span>
              <p className="text-sm font-medium">Karachi, Pakistan</p>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="inline-flex items-center rounded-md bg-orange-50 dark:bg-orange-900/30 px-2 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 ring-1 ring-inset ring-orange-700/10 dark:ring-orange-500/20">
                Engineering
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10 dark:ring-gray-500/20">
                Public
              </span>
            </div>
          </div>
        </article>
        
        {/* Card 3: Placeholder (IBA) */}
        <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card-light dark:bg-card-dark shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 transition-all hover:shadow-md active:scale-[0.98] duration-200">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsXBnsBQGg9z6t1um_pc3HAHxfdCMssgPA4DKB4VYAKoVMva1h-YdNNDNuMy4C0Z79PiiDzSuXSbLd44qmwBxqi7TX5EvzztxRpDwyJW6m5z0CbL2Sk6zbUGdxVMyZhF-bsjkR1kpWkErkf4jliFbt6kk7sMyFBzH9KgGkpPCbTitAQzzw8O4d1oPbrGV-z0bLYKY-EUWB4pxRcqxhS1BMOG4USz8nl1uy2urBJ_HGbq3Lk9lc0CDJCEthofzVD7CygatJbW2mSJr8')",
              }}
            ></div>
            {/* Match Badge */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-white/95 dark:bg-card-dark/95 backdrop-blur-sm px-3 py-1.5 shadow-lg">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                76% Match
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                IBA Karachi
              </h3>
              <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">bookmark</span>
              </button>
            </div>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-[16px]">
                location_on
              </span>
              <p className="text-sm font-medium">Karachi, Pakistan</p>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="inline-flex items-center rounded-md bg-teal-50 dark:bg-teal-900/30 px-2 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 ring-1 ring-inset ring-teal-700/10 dark:ring-teal-500/20">
                Business
              </span>
            </div>
          </div>
        </article>
      </div>
      

    </div>
  );
}
