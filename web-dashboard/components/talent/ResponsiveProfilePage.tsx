import React from "react";
import Sidebar from "@/components/Sidebar";
import SplitProfileLayout from "./desktop/SplitProfileLayout";
import StudentProfilePage from "./profile/StudentProfilePage";

export default function ResponsiveProfilePage() {
  return (
    <>
      <div className="hidden lg:flex bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white h-screen overflow-hidden">
        <Sidebar />
        <SplitProfileLayout />
      </div>
      <div className="lg:hidden">
        <StudentProfilePage />
      </div>
    </>
  );
}
