"use client";

import React from "react";
import { usePathname } from "next/navigation";
import StudentSidebar from "@/components/student/StudentSidebar";
import StudentBottomNav from "@/components/student/StudentBottomNav";

interface StudentLayoutClientProps {
  children: React.ReactNode;
  user: any; // Type should be refined using shared types
  profile: any;
}

export default function StudentLayoutClient({
  children,
  user,
  profile,
}: StudentLayoutClientProps) {
  const pathname = usePathname();
  
  // Hide sidebar on landing page and onboarding flow (unauthenticated views logic, handled via parent but good to keep for full width)
  // Actually, parent Layout handles the protection now. 
  // BUT the Onboarding page (/student/onboarding) is part of /student layout?
  // If we protect /student layout, we block onboarding?
  // We need to allow onboarding.
  
  const isFullWidthPage = pathname === "/student" || pathname.startsWith("/student/onboarding");

  // Full-width layout without sidebar for unauthenticated pages OR onboarding
  if (isFullWidthPage) {
    return <>{children}</>;
  }

  // Authenticated pages get sidebar layout
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display">
      {/* Desktop Sidebar */}
      <StudentSidebar user={user} profile={profile} />

      {/* Main Content Area */}
      <main className="flex-1 w-full lg:pl-64 transition-all duration-300">
        <div className="mx-auto w-full lg:max-w-7xl lg:px-8 lg:py-6">
            {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <StudentBottomNav />
    </div>
  );
}
