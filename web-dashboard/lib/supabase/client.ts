/**
 * Supabase Browser Client
 *
 * Purpose: Client-side Supabase instance for browser environments.
 * Use Case: Auth state management, real-time subscriptions, storage access from React components.
 *
 * @see https://supabase.com/docs/guides/auth/server-side/nextjs
 */

import { createBrowserClient } from "@supabase/ssr";

/**
 * Creates a Supabase client for use in browser/client components.
 * This client is used for auth state, real-time subscriptions, and storage.
 *
 * Note: For database queries, prefer using Prisma via server actions/API routes.
 *
 * @returns Supabase browser client instance
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
