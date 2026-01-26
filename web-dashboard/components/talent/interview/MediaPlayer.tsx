import React from "react";

export default function MediaPlayer() {
  return (
    <section className="p-4 bg-white dark:bg-background-dark">
      <div
        className="relative flex items-center justify-center bg-black bg-cover bg-center aspect-video rounded-xl overflow-hidden shadow-lg"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuV3oKCjRY5NlXytDYjMOj8aFYXl4l0xempYz_Jlxvc3rvIFcGCKUJuA3yxR3MCxNFiRO6KSaYzW5spaTSHmcluCXrJwd4WnmnMeieDPw9ySbF5wcXm5FkhudL40EWRMuluBxxZUV45ndFvc0NruxyntfuGy39Fs3LsJY6DMyptoLCyozDt3-3Df4Fd5QflTYViG7NQ1v0UWqN6Vp5QxajzjvtXJZ89IjdG_55lXOjsCfdPStSAiZODHVTC195UZDA9y3e9Nj4GzM")',
        }}
      >
        <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors cursor-pointer">
          <span className="material-symbols-outlined fill-icon text-4xl">
            play_arrow
          </span>
        </button>
        <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex h-1.5 items-center justify-center mb-2">
            <div className="h-full w-1/4 rounded-full bg-primary"></div>
            <div className="relative">
              <div className="absolute -left-1.5 -top-1.5 size-4 rounded-full bg-primary border-2 border-white"></div>
            </div>
            <div className="h-full flex-1 rounded-full bg-white/30"></div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white text-[10px] font-bold tracking-wider">
              04:12 / 12:45
            </p>
            <div className="flex gap-2">
              <span className="material-symbols-outlined text-white text-lg cursor-pointer hover:text-gray-200">
                closed_caption
              </span>
              <span className="material-symbols-outlined text-white text-lg cursor-pointer hover:text-gray-200">
                settings
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
