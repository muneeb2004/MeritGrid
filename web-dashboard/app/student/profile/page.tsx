import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db/postgresql";
import ProfileClient from "@/components/student/ProfileClient";

// Mandatory fields for profile completion
const MANDATORY_FIELDS = ["fullName", "phone", "educationLevel", "city"] as const;

// Calculate profile strength based on filled fields
function calculateProfileStrength(profile: Record<string, unknown> | null): number {
  if (!profile) return 0;
  
  const fields = [
    "fullName", "nationality", "phone", "gender",
    "address", "city", "province", "country",
    "educationLevel", "institution", "program",
    "gpa", "bio"
  ];
  
  let filled = 0;
  for (const field of fields) {
    const value = profile[field as keyof typeof profile];
    if (value !== null && value !== undefined && value !== "") {
      filled++;
    }
  }
  
  return Math.round((filled / fields.length) * 100);
}

// Check which mandatory fields are missing
function getMissingMandatoryFields(profile: Record<string, unknown> | null): string[] {
  if (!profile) return [...MANDATORY_FIELDS];
  
  return MANDATORY_FIELDS.filter(field => {
    const value = profile[field as keyof typeof profile];
    return value === null || value === undefined || value === "";
  });
}

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/student/login");
  }

  const userId = (session.user as any).id;
  
  // Fetch profile data
  const profile = await prisma.studentProfile.findUnique({
    where: { userId: userId },
    include: { user: true }
  });

  if (!profile) {
    redirect("/student/onboarding");
  }

  // Calculate profile metrics
  const profileStrength = calculateProfileStrength(profile as unknown as Record<string, unknown>);
  const missingFields = getMissingMandatoryFields(profile as unknown as Record<string, unknown>);

  // Parse education JSON if exists
  const educationData = profile.education as Array<{
    id: string;
    subject: string;
    grade: string;
    credits?: number;
    year: string;
  }> | null;

  return (
    <ProfileClient
      user={{
        id: profile.user.id,
        email: profile.user.email,
        image: profile.user.image,
      }}
      profile={{
        fullName: profile.fullName,
        phone: profile.phone,
        gender: profile.gender,
        nationality: profile.nationality,
        address: profile.address,
        city: profile.city,
        province: profile.province,
        country: profile.country,
        countryCode: profile.countryCode,
        educationLevel: profile.educationLevel,
        institution: profile.institution,
        customInstitution: profile.customInstitution,
        program: profile.program,
        gpa: profile.gpa,
        bio: profile.bio,
        interests: profile.interests,
        education: educationData,
        onboardingCompletedAt: profile.onboardingCompletedAt,
      }}
      profileStrength={profileStrength}
      missingFields={missingFields}
    />
  );
}
