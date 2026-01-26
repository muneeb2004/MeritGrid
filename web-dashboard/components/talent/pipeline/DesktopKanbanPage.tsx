import React from "react";
import Sidebar from "@/components/Sidebar";
import KanbanColumn from "./KanbanColumn";
import KanbanCard from "./KanbanCard";

export default function DesktopKanbanPage() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex-shrink-0 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7ebf3] dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 z-20">
          <div className="flex items-center gap-4">
               <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden md:block">TalentPipeline</h2>
            {/* Global Search */}
            <label className="flex flex-col min-w-40 !h-10 w-[360px]">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-slate-200 dark:ring-slate-700 focus-within:ring-2 focus-within:ring-primary transition-all">
                <div className="text-[#4c669a] flex border-none bg-[#f6f8fc] dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined text-xl">
                    search
                  </span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f6f8fc] dark:bg-slate-800 focus:border-none h-full placeholder:text-[#4c669a] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                  placeholder="AI Talent Scout..."
                />
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-700 pl-6">
              <button className="text-slate-500 hover:text-primary cursor-pointer">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-white dark:ring-slate-800 shadow-sm cursor-pointer"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9bbDraJBWdvOxPsHAKRI4xBPNA2dFZ_eNf98NDryndfrQSxtWdhwNBbPgxT-R17IKwt7a8CylWEUJSburna-lyWJlMWdFYpSpStZQXxmf2pTcObCIHsVTPWwPk1qOMpptbqa7Il9sRtF0ZexyJIqBcWsYzLFdSi8KdH2kIJGZ3phDWWS0Obpo6XwbW7fGdptOzndnz5Otu1b5BktJSnu-xaji7VAEFYSUp-3pVAlAlEupqLbmUzFawTM84AFpGaMh8NcTO6egkyNB')",
                }}
              ></div>
            </div>
          </div>
        </header>

        {/* Sub-header & Controls */}
        <div className="flex-shrink-0 bg-background-light dark:bg-background-dark pt-6 pb-2 px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight">
                University Recruitment - Fall 2024
              </h1>
              <p className="text-[#4c669a] dark:text-slate-400 text-sm font-normal">
                Track student candidates from top universities.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">add</span>
                <span className="text-sm font-medium">Add Candidate</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">
                  auto_awesome
                </span>
                <span className="text-sm font-medium">AI Auto-Sort</span>
              </button>
            </div>
          </div>
          {/* Filters */}
          <div className="flex gap-3 py-2 overflow-x-auto no-scrollbar">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-4 pr-3 hover:border-primary/50 transition-colors group cursor-pointer">
              <p className="text-slate-700 dark:text-slate-300 text-xs font-semibold">
                Role: All
              </p>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-sm">
                keyboard_arrow_down
              </span>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-4 pr-3 hover:border-primary/50 transition-colors group cursor-pointer">
              <p className="text-slate-700 dark:text-slate-300 text-xs font-semibold">
                University: Stanford, MIT +2
              </p>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-sm">
                keyboard_arrow_down
              </span>
            </button>
             <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/20 pl-4 pr-3 hover:bg-primary/20 transition-colors group cursor-pointer">
              <p className="text-primary text-xs font-bold">Min AI Match: &gt;85%</p>
              <span className="material-symbols-outlined text-primary text-sm">close</span>
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <main className="flex-1 overflow-hidden relative">
          <div className="kanban-container h-full w-full overflow-x-auto overflow-y-hidden p-6">
            <div className="flex h-full gap-6 min-w-max pb-4">
              {/* COLUMN 1: Sourced */}
              <KanbanColumn
                title="Sourced"
                count={45}
                colorClass="bg-slate-400"
              >
                <KanbanCard
                  name="Emily Chen"
                  university="UC Berkeley"
                  major="CS"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBbuUIFgBV9mNdgDShRST3RS9CEpmZk-R6VxOdhUdlN7wKxtCX4u3wC2PhPBB5uSgcSiD48_FMy7CB7hcThJGCqOBCku0OFpgQGbXS6NFbH2JqLfxWv1C-0tSrW5wgzeQxch9k9tDmZg8Aj_-v53h2iPxnDTHA_uOAHJ1hXaQPEKcdZsRaAmlZD29FuEUDnkyI_0xA5LlVx0rf1STzSJxmqu3_4k3hH837Tq59aKMIjzmweZd2O-u-d-xm3Xb1hyPogIT0B8UBMIi-Z"
                  matchScore={88}
                  tags={["Dean's List", "Python"]}
                  progressBar={{
                    label: "",
                    percentage: 20,
                    colorClass: "bg-primary",
                  }}
                />
                <KanbanCard
                  name="Marcus Johnson"
                  university="Georgia Tech"
                  major="Eng"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDqZbWOdma2hLS00ukLpJmeSjcXGrpO7qLEOc25FosNfSYWi0vDaS-Gj8OURFXwwW8uWiv-H3jNv6hiVFHi5pzxzwRjZxh0BuuZV78WbEQreZhr-XZPoMC73ORnT1LXvdgFBJs1df3uff6dK_BPeR72CMCtJ4cib7GO9vQeAfK7c0qRw6vHEh6rJdp8BioVcQKGbwvthEEw5Hr_taUBdOip6jwmvtvL4qKPtsOckezfGxbP0TrVaFdwknaQc3qXYGIqjv3d62oJF64q"
                  matchScore={72}
                  tags={["Robotics Club"]}
                  progressBar={{
                    label: "",
                    percentage: 20,
                    colorClass: "bg-primary",
                  }}
                />
                 <button className="m-3 p-2 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg text-slate-500 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors flex justify-center items-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined text-lg">add</span>
                        Add Candidate
                </button>
              </KanbanColumn>

              {/* COLUMN 2: Screening */}
              <KanbanColumn
                title="Screening"
                count={12}
                colorClass="bg-blue-400"
              >
                 <KanbanCard
                  name="Sarah Jenkins"
                  university="Stanford"
                  major="CS"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBJnqLp91vZgdepBr6s-0a8ipVg5x5cITi50mrKinpaeQsHGgJuTCAt-91spS7a6MycD-6h7ErQNOilvA48KcWv3HiDrM7YVfQ9dWqbnOT0aFAS9C-Fd5NRdKM6b6f4IGqTrQNqw3ysAnAzyb9roO0F3Zp8YT0y7dHfUHi32Q15pDTH6hK6l4C55-NJXCV3BP1wMMuRobbxuBXo7Qlw4Q47KFqp-Mafn50MwZ0DTf7nksiPDdZk6mnnQZSBYksDcvSwPZyzXZ2dAW61"
                  matchScore={98}
                  tags={["5 As", "Debate Champ"]}
                  progressBar={{
                    label: "Screening in progress",
                    percentage: 40,
                    colorClass: "bg-primary",
                  }}
                />
                <KanbanCard
                  name="David Kim"
                  university="MIT"
                  major="Data Sci"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAM4azpxdlX18Po5ie5833zsWGOoFLveq9J49ccRdKeu7L_y-5EGkRc3NHsUjJcCntR4McQ-uw8rYP-DbIuDi2W8eKwoEHNugiWxvhN13hy8Ln8lUZshMrGipwO6N5pK75bV7oWei8X6IDBdTxhUf2qOUKlIZsE5jI1mqglonFfTWR44gph-j6mbCmC6aU3TmtCMoz5GkmKiFLZbtHfLXf-R96rJjDp3j-qHMXyZzoHZ--gTiUEE2UVIjM0Ddr-MQZ_4ti4L3kqFy6D"
                  matchScore={92}
                  tags={["Kaggle Master"]}
                  progressBar={{
                    label: "",
                    percentage: 40,
                    colorClass: "bg-primary",
                  }}
                />
              </KanbanColumn>

              {/* COLUMN 3: Interviewing */}
              <KanbanColumn
                title="Interviewing"
                count={5}
                colorClass="bg-indigo-500"
              >
                  <KanbanCard
                  name="Priya Patel"
                  university="Carnegie Mellon"
                  major="UX"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDdTCR06KLsZrzOjoSpMLTWV0CdxlarBtv9xPVQovWGLmhlCD3vg08YRXvpOyGPlPeBkZigQbGamiKqn6x8JXqr0ZEm_tywfOy8kPSCZMUfLyxwg7fB_mcaIwz-l9s36vGw83NaPMMj4NShmCMvC2k_Y8T8Q8MhPZwnD3TLTeS3N8799QNm8c4w1LJiAIcLupe74-sgTluY-g8sDQtuHEgFiA431crjWnQugi2tMK6XcsEaa2H5JRB4Bh0OO31pmb9NiMaI6XMlH7aL"
                  matchScore={95}
                  tags={["Design Lead", "Figma"]}
                  progressBar={{
                    label: "Round 2 scheduled",
                    percentage: 65,
                    colorClass: "bg-primary",
                  }}
                />
              </KanbanColumn>

              {/* COLUMN 4: Tech Task */}
              <KanbanColumn
                title="Tech Task"
                count={3}
                colorClass="bg-purple-500"
              >
                 <KanbanCard
                  name="James Wilson"
                  university="Waterloo"
                  major="Soft Eng"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBFxl-mzAGVIZz8hA0rOqZi6artB1U04R-saCC2M-9L8eshnZO_eXdP9boug6QpJYl21j70BTsqISni5BeYYtCPw4JKfp6kDyHezQ7BiFy7wpveIaxC3rmFS360-Mms6OItQqzQo915bn0FZzW5fzuO0i7pkstTjIjXpWdBLjLUu9Qr_XSINSha14NWJL_QdmAF7y7STnuRHjZxhwEef1TE1maWZz71vampybtQXee8CfzrUKOnxQ2rarr3k8_s83_71AXNP0VDTRe3"
                  matchScore={89}
                  tags={["Hackathon Winner"]}
                  progressBar={{
                    label: "Review pending",
                    percentage: 80,
                    colorClass: "bg-primary",
                  }}
                />
              </KanbanColumn>

              {/* COLUMN 5: Offer */}
              <KanbanColumn title="Offer" count={2} colorClass="bg-green-500">
                  <KanbanCard
                  name="Aisha Okafor"
                  university="Harvard"
                  major="MBA"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDd_c_Su3GGMy8VhFYBm_MB3ENURJBXOBCcAPPRe3MgddeMeTEFVYoT8X0jh5XiTLtDHC6hE694LK9AcxMX4SowCsEPwvGGIsZQXDBXOMsV0AkRT8DzHSlrFxylTHLZn8KplbM1_CN8lNo9IHU0LAqPl9TSRqNBOVwKmvZlRajFbQ1Ayml6kGif8H5Hvkdjl1xuG9OpbvuCkBJGE4_FdvHxkcLUQS201Jpf8nEz00PF1lygs640pULOsZRzrnP-1-noy_pfkusCpfiP"
                  matchScore={99}
                  tags={["Offer Sent"]}
                  offer={true}
                  progressBar={{
                    label: "Awaiting signature",
                    percentage: 100,
                    colorClass: "bg-green-500",
                  }}
                />
              </KanbanColumn>

               {/* Add Column Placeholder */}
                <div className="flex flex-col w-[340px] h-full rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400 gap-2 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-4xl">add_circle</span>
                    <span className="font-medium">Add Stage</span>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
