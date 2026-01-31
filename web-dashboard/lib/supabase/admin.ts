/**
 * Supabase Admin Client
 *
 * Purpose: Privileged Supabase instance that bypasses Row Level Security (RLS).
 * Use Case: Server-side admin operations, background jobs, system-level queries.
 *
 * ⚠️ SECURITY WARNING: This client has full database access.
 * - NEVER expose to client-side code
 * - NEVER import in browser components
 * - Only use in trusted server-side contexts (API routes, server actions, cron jobs)
 *
 * @see https://supabase.com/docs/guides/api/creating-a-service-key
 */

import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Creates a Supabase admin client that bypasses RLS.
 * Use with extreme caution - only for server-side admin operations.
 *
 * @returns Supabase admin client instance
 * @throws Error if SUPABASE_SERVICE_ROLE_KEY is not defined in production
 */
export function createAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Fail loudly in production if service key is missing
  if (!serviceRoleKey && process.env.NODE_ENV === "production") {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is required for admin operations in production"
    );
  }

  // In development, warn but allow fallback to anon key for testing
  if (!serviceRoleKey) {
    console.warn(
      "⚠️ SUPABASE_SERVICE_ROLE_KEY not set. Admin client using anon key (limited permissions)."
    );
  }

  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    serviceRoleKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
