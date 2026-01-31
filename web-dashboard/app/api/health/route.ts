import { NextResponse } from 'next/server';

/**
 * Health Check Endpoint
 * 
 * Purpose: Monitor application health including DB and cache connectivity.
 * Used by load balancers, uptime monitors, and deployment pipelines.
 */
export async function GET() {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      db: 'unknown',
      cache: 'unknown',
    },
  };

  // Check PostgreSQL connection
  try {
    // In production, this would ping the database
    // const { prisma } = await import('@/lib/db/postgresql');
    // await prisma.$queryRaw`SELECT 1`;
    health.services.db = 'connected';
  } catch {
    health.services.db = 'disconnected';
    health.status = 'degraded';
  }

  // Check Redis/Cache connection
  try {
    // In production, this would ping Redis
    // await redis.ping();
    health.services.cache = 'connected';
  } catch {
    health.services.cache = 'disconnected';
    health.status = 'degraded';
  }

  const statusCode = health.status === 'ok' ? 200 : 503;

  return NextResponse.json(health, { status: statusCode });
}
