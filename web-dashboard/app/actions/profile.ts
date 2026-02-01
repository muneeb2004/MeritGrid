"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db/postgresql";
import { revalidatePath } from "next/cache";

// Type definitions for update payloads
interface PersonalInfoUpdate {
  fullName?: string;
  phone?: string;
  gender?: string;
  nationality?: string;
  address?: string;
  city?: string;
  province?: string;
  country?: string;
  countryCode?: string;
}

interface AcademicRecord {
  id: string;
  subject: string;
  grade: string;
  credits?: number;
  year: string;
}

interface AcademicsUpdate {
  educationLevel?: string;
  institution?: string;
  customInstitution?: string;
  program?: string;
  gpa?: number;
  education?: AcademicRecord[];
}

// Update Personal Information
export async function updatePersonalInfo(data: PersonalInfoUpdate) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const userId = (session.user as any).id;

    await prisma.studentProfile.update({
      where: { userId },
      data: {
        fullName: data.fullName,
        phone: data.phone,
        gender: data.gender,
        nationality: data.nationality,
        address: data.address,
        city: data.city,
        province: data.province,
        country: data.country,
        countryCode: data.countryCode,
        updatedAt: new Date(),
      },
    });

    revalidatePath("/student/profile");
    return { success: true };
  } catch (error) {
    console.error("Error updating personal info:", error);
    return { success: false, error: "Failed to update personal information" };
  }
}

// Update Academic Information
export async function updateAcademics(data: AcademicsUpdate) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const userId = (session.user as any).id;

    await prisma.studentProfile.update({
      where: { userId },
      data: {
        educationLevel: data.educationLevel,
        institution: data.institution,
        customInstitution: data.customInstitution,
        program: data.program,
        gpa: data.gpa,
        education: data.education ? JSON.parse(JSON.stringify(data.education)) : undefined,
        updatedAt: new Date(),
      },
    });

    revalidatePath("/student/profile");
    return { success: true };
  } catch (error) {
    console.error("Error updating academics:", error);
    return { success: false, error: "Failed to update academic information" };
  }
}

// Update Interests
export async function updateInterests(interests: string[]) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const userId = (session.user as any).id;

    await prisma.studentProfile.update({
      where: { userId },
      data: {
        interests,
        updatedAt: new Date(),
      },
    });

    revalidatePath("/student/profile");
    return { success: true };
  } catch (error) {
    console.error("Error updating interests:", error);
    return { success: false, error: "Failed to update interests" };
  }
}

// Update Bio/Personal Statement
export async function updateBio(bio: string) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const userId = (session.user as any).id;

    await prisma.studentProfile.update({
      where: { userId },
      data: {
        bio,
        updatedAt: new Date(),
      },
    });

    revalidatePath("/student/profile");
    return { success: true };
  } catch (error) {
    console.error("Error updating bio:", error);
    return { success: false, error: "Failed to update bio" };
  }
}

// Update Profile Photo URL (called after Supabase upload)
export async function updateProfilePhoto(imageUrl: string) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const userId = (session.user as any).id;

    await prisma.user.update({
      where: { id: userId },
      data: {
        image: imageUrl,
        updatedAt: new Date(),
      },
    });

    revalidatePath("/student/profile");
    revalidatePath("/student/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error updating profile photo:", error);
    return { success: false, error: "Failed to update profile photo" };
  }
}
