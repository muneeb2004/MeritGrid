import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db/postgresql";
import StudentLayoutClient from "./ClientLayout";

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  
  let profile = null;
  if (session?.user?.email) {
    // Try to find profile by User ID first, then Email if needed (though relation is via User ID)
    // Auth session provides ID.
    const userId = (session.user as any).id;
    if (userId) {
        profile = await prisma.studentProfile.findUnique({
            where: { userId: userId }
        });
    }
    
    // Fallback: If no userId in session (rare), look up User by email then Profile?
    // Not needed if auth is working correctly.
  }

  return (
    <StudentLayoutClient user={session?.user} profile={profile}>
      {children}
    </StudentLayoutClient>
  );
}
