/**
 * Supabase Client Exports
 *
 * Barrel file for Supabase client utilities.
 * Import from `@/lib/supabase` for cleaner imports.
 *
 * Usage:
 * - Browser: `import { createClient } from "@/lib/supabase/client"`
 * - Server: `import { createClient } from "@/lib/supabase/server"`
 * - Admin: `import { createAdminClient } from "@/lib/supabase/admin"`
 */

// Re-export for convenience, but prefer direct imports for tree-shaking
export { createClient as createBrowserClient } from "./client";
export { createClient as createServerClient } from "./server";
export { createAdminClient } from "./admin";
