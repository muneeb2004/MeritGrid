"use client";

import React from "react";
// Since the request was specifically for the "Mobile view" UI code provided,
// and the prompt implies this IS the messaging center for now, I will strictly render the provided mobile view.
// In a real responsive app, we might check screen size or have a responsive layout wrapper.
// But given the "Mobile view" focus of the prompt, I'll render the mobile view component.
// I'll wrap it in a div to ensure full screen usage.
import MobileMessageView from "@/components/messages/MobileMessageView";

export default function MessagesPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900">
        <MobileMessageView />
    </div>
  );
}
