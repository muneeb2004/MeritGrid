/**
 * PostgreSQL Database Client (Prisma + Supabase)
 *
 * Purpose: Handles connection to Supabase PostgreSQL via Prisma ORM.
 * 
 * Architecture:
 * - Uses Supabase PostgreSQL as the managed database
 * - Prisma provides type-safe queries and migrations
 * - Connection pooling via Supabase's pgbouncer (Transaction mode)
 *
 * Connection Types:
 * - DATABASE_URL: Pooled connection (6543) - For serverless/API routes
 * - DIRECT_URL: Direct connection (5432) - For migrations only
 *
 * @see https://supabase.com/docs/guides/database/connecting-to-postgres#connecting-with-drizzle
 */

import { PrismaClient } from "./generated-client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Development fallback for build phase (Prisma needs a valid URL syntax)
const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://placeholder:placeholder@localhost:5432/placeholder";

// Warn in production if DATABASE_URL is missing
if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  console.error(
    "❌ CRITICAL: DATABASE_URL is not defined in production. Database operations will fail."
  );
}

// Development mode logging
if (!process.env.DATABASE_URL && process.env.NODE_ENV === "development") {
  console.warn(
    "⚠️ DATABASE_URL not set. Using placeholder connection string for build phase."
  );
}

// Configure pool for Supabase's pgbouncer (Transaction mode)
const pool = new Pool({
  connectionString,
  // Supabase Pooler uses Transaction mode - don't use prepared statements
  // This is handled by the ?pgbouncer=true query param in the URL
});

const adapter = new PrismaPg(pool);

// Singleton pattern for Prisma client
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// Preserve client across hot reloads in development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// Named export for consistency with other db clients
export const pgClient = prisma;
