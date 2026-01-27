import { PrismaClient } from "@prisma/client";

/**
 * PostgreSQL Database Client (Prisma)
 * 
 * Purpose: Handles connection to the relational database.
 * Scaling: Uses a singleton pattern to prevent exhausting connection pooling in development.
 */

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const pgClient = prisma;
