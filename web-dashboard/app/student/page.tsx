import Link from "next/link";
import React from "react";

export default function StudentPortalPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#111318] dark:text-white antialiased min-h-screen flex flex-col overflow-hidden relative">
       {/* Subtle Navy Geometric Watermark */}
      <div className="absolute inset-0 geometric-watermark pointer-events-none"></div>
      
      <div className="layout-container relative flex h-full grow flex-col z-10">
        {/* Top Navigation / Header */}
        <div className="px-4 md:px-40 flex justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <header className="flex items-center justify-between whitespace-nowrap px-4 py-3">
                    <div className="flex items-center gap-4 text-primary dark:text-white">
                        <div className="size-6">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg font-extrabold leading-tight tracking-[-0.015em]">MeritGrid</h2>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:text-white text-sm font-bold hover:bg-primary/20 transition-colors">
                            <span className="truncate">Help Center</span>
                        </button>
                    </div>
                </header>
            </div>
        </div>

        {/* Main Login Stack */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 z-10">
            <div className="w-full max-w-[440px] text-center">
                {/* Headline */}
                <div className="mb-8">
                    <h1 className="text-[#111318] dark:text-white tracking-tight text-[32px] md:text-[40px] font-extrabold leading-tight pb-3 pt-6">
                        Your Future,<br/>One Click Away.
                    </h1>
                </div>
                
                {/* Button Group Container */}
                <div className="flex flex-col gap-4 items-stretch px-4 py-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl">
                    {/* Continue with Google (White/Bordered) */}
                    <Link href="/student/dashboard" className="group flex items-center justify-center gap-3 w-full h-14 px-6 bg-white border-2 border-primary/20 hover:border-primary transition-colors text-[#111318] text-base font-bold rounded-xl shadow-sm cursor-pointer">
                        <svg className="size-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
                        </svg>
                        <span className="truncate">Continue with Google</span>
                    </Link>
                    
                    {/* Continue with Email (Solid Primary) */}
                    <button className="flex items-center justify-center gap-3 w-full h-14 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold rounded-xl shadow-md cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                        <span className="truncate">Continue with Email</span>
                    </button>
                    
                    {/* Meta Text */}
                    <div className="pt-4">
                        <p className="text-[#636f88] dark:text-gray-400 text-sm font-medium leading-normal">
                             Don&apos;t have an account? <a className="text-primary dark:text-blue-400 font-bold hover:underline" href="#">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
        
        {/* Bottom Illustration */}
        <div className="relative w-full flex justify-center mt-auto">
            <div className="w-full max-w-[600px] px-8 py-4">
                <div 
                    className="w-full bg-center bg-no-repeat bg-contain min-h-[180px] md:min-h-[260px]" 
                    role="img"
                    aria-label="Illustration of a happy student celebrating graduation wearing a cap" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZeU2Dp9jzwK5p3kvBSl6jcT1P2KXvkOMoxrhs4FKewnCo-pcAU04pq58H-1y50WyQUrEBmPJp-nlWQQ1gYB4yCvRtGfefR0XBscdWn2OHmcFrnO8ccZwOYyBNgkO1_a-tq483kichTrJvPApuJh2dIOjxsrxKHm1lhvNxWDoDh5HkaSr8Pi71VNthndENPnJH77RjlqMeE3c710LjS60PbIgM3atwpywP6L6MJPFhSI0Qk-xGutpggIxRzHzG2TA_QxxTpcM4cNE")' }}
                >
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
