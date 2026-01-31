"use client";

import React from "react";
import { usePathname } from "next/navigation";
import StudentSidebar from "@/components/student/StudentSidebar";
import StudentBottomNav from "@/components/student/StudentBottomNav";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Hide sidebar on landing page and onboarding flow (unauthenticated views)
  const isFullWidthPage = pathname === "/student" || pathname.startsWith("/student/onboarding");

  // Full-width layout without sidebar for unauthenticated pages
  if (isFullWidthPage) {
    return <>{children}</>;
  }

  // Authenticated pages get sidebar layout
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display">
      {/* Desktop Sidebar */}
      <StudentSidebar />

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
