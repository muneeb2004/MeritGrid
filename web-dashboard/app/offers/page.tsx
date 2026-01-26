import React from "react";
import MobileOfferManagementView from "@/components/offers/MobileOfferManagementView";
import DesktopOfferManagementView from "@/components/offers/DesktopOfferManagementView";

export default function OffersPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900">
      <div className="md:hidden">
        <MobileOfferManagementView />
      </div>
      <div className="hidden md:block">
        <DesktopOfferManagementView />
      </div>
    </div>
  );
}
