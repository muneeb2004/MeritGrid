"use server";

/**
 * Server actions for student onboarding
 *
 * This module handles saving student onboarding data to the database.
 * In development mode, it logs data to the console as a fallback when
 * the database is not yet connected.
 *
 */

import { z } from "zod";


// =============================================================================
// TYPES & VALIDATION
// =============================================================================

/**
 * Zod schema for validating onboarding form data.
 * Matches the OnboardingData interface in the onboarding page.
 */
const OnboardingSchema = z.object({
  // Step 1: Personal Identity
  fullName: z.string().min(1, "Full name is required"),
  nationality: z.enum(["national", "foreign"]),
  countryCode: z.string(),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  gender: z.string().min(1, "Gender is required"),

  // Step 2: Geographic Details
  address: z.string().min(1, "Address is required"),
  society: z.string().min(1, "Society/Apartment is required"),
  street: z.string().optional(),
  country: z.string(),
  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City is required"),

  // Step 3: Academic Standing
  educationLevel: z.string().min(1, "Education level is required"),
  institution: z.string().min(1, "Institution is required"),
  customInstitution: z.string().optional(),

  // Step 4: Intent & Preferences
  objectives: z.array(z.string()).min(1, "Select at least one objective"),
  budget: z.string().optional(),
  interests: z.array(z.string()),
});

export type OnboardingInput = z.infer<typeof OnboardingSchema>;

export interface OnboardingResult {
  success: boolean;
  mode?: "demo" | "production";
  userId?: string;
  error?: string;
}

// =============================================================================
// SERVER ACTIONS
// =============================================================================

/**
 * Saves student onboarding data to the database.
 *
 * In development mode (NODE_ENV=development), this function logs the data
 * to the console and returns success without requiring a database connection.
 * This allows for UI development and testing without a live database.
 *
 * In production mode, it validates the data with Zod and saves it to the
 * PostgreSQL database via Prisma.
 *
 * @param data - The onboarding form data
 * @returns OnboardingResult indicating success/failure
 */
export async function saveStudentOnboarding(
  data: OnboardingInput
): Promise<OnboardingResult> {
  try {
    // Validate input with Zod
    const validated = OnboardingSchema.parse(data);

    // ---------------------------------------------------------------------------
    // DEVELOPMENT FALLBACK
    // ---------------------------------------------------------------------------
    // In development mode, log data and return success without DB connection.
    // This follows the project's hybrid fetching pattern from GEMINI.md.
    if (process.env.NODE_ENV === "development") {
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("📝 DEMO MODE: Student onboarding data received");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("👤 Personal:", {
        fullName: validated.fullName,
        email: validated.email,
        phone: `${validated.countryCode} ${validated.phone}`,
        gender: validated.gender,
        nationality: validated.nationality,
      });
      console.log("📍 Location:", {
        address: validated.address,
        society: validated.society,
        city: validated.city,
        province: validated.province,
        country: validated.country,
      });
      console.log("🎓 Academic:", {
        educationLevel: validated.educationLevel,
        institution: validated.institution,
        customInstitution: validated.customInstitution || "(N/A)",
      });
      console.log("🎯 Preferences:", {
        objectives: validated.objectives,
        budget: validated.budget || "(N/A)",
        interests: validated.interests,
      });
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

      return {
        success: true,
        mode: "demo",
        userId: `demo-user-${Date.now()}`,
      };
    }

    // ---------------------------------------------------------------------------
    // PRODUCTION: Database Persistence
    // ---------------------------------------------------------------------------
    // Import Prisma client only in production to avoid build issues
    const { prisma } = await import("@/lib/db/postgresql");

    // Upsert user and student profile
    const result = await prisma.user.upsert({
      where: { email: validated.email },
      create: {
        email: validated.email,
        name: validated.fullName,
        role: "STUDENT",
        studentProfile: {
          create: {
            fullName: validated.fullName,
            nationality: validated.nationality,
            countryCode: validated.countryCode,
            phone: validated.phone,
            gender: validated.gender,
            address: validated.address,
            society: validated.society,
            street: validated.street || "",
            country: validated.country,
            province: validated.province,
            city: validated.city,
            educationLevel: validated.educationLevel,
            institution: validated.institution,
            customInstitution: validated.customInstitution || "",
            objectives: validated.objectives,
            budget: validated.budget || "",
            interests: validated.interests,
            onboardingCompletedAt: new Date(),
          },
        },
      },
      update: {
        name: validated.fullName,
        studentProfile: {
          upsert: {
            create: {
              fullName: validated.fullName,
              nationality: validated.nationality,
              countryCode: validated.countryCode,
              phone: validated.phone,
              gender: validated.gender,
              address: validated.address,
              society: validated.society,
              street: validated.street || "",
              country: validated.country,
              province: validated.province,
              city: validated.city,
              educationLevel: validated.educationLevel,
              institution: validated.institution,
              customInstitution: validated.customInstitution || "",
              objectives: validated.objectives,
              budget: validated.budget || "",
              interests: validated.interests,
              onboardingCompletedAt: new Date(),
            },
            update: {
              fullName: validated.fullName,
              nationality: validated.nationality,
              countryCode: validated.countryCode,
              phone: validated.phone,
              gender: validated.gender,
              address: validated.address,
              society: validated.society,
              street: validated.street || "",
              country: validated.country,
              province: validated.province,
              city: validated.city,
              educationLevel: validated.educationLevel,
              institution: validated.institution,
              customInstitution: validated.customInstitution || "",
              objectives: validated.objectives,
              budget: validated.budget || "",
              interests: validated.interests,
              onboardingCompletedAt: new Date(),
            },
          },
        },
      },
    });

    return {
      success: true,
      mode: "production",
      userId: result.id,
    };
  } catch (error) {
    // Handle Zod validation errors
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error instanceof z.ZodError || (error as any).errors) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const firstError = (error as any).errors[0];
      console.error("Validation error:", firstError);
      return {
        success: false,
        error: firstError ? firstError.message : "Validation error",
      };
    }

    // Handle other errors
    console.error("Failed to save onboarding data:", error);
    return {
      success: false,
      error: "Failed to save profile. Please try again.",
    };
  }
}
