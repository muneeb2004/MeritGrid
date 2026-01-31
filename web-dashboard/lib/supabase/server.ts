/**
 * Supabase Server Client
 *
 * Purpose: Server-side Supabase instance for Next.js server components and API routes.
 * Use Case: Server-side auth verification, storage operations, real-time from server.
 *
 * Note: This client respects Row Level Security (RLS) policies.
 *
 * @see https://supabase.com/docs/guides/auth/server-side/nextjs
 */

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Creates a Supabase client for use in server components and API routes.
 * Handles cookie management for auth session persistence.
 *
 * Note: For database queries, prefer using Prisma. Use this for Supabase Auth/Storage.
 *
 * @returns Promise resolving to Supabase server client instance
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing user sessions.
          }
        },
      },
    }
  );
}
