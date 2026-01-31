/**
 * React Query Key Factory
 * 
 * Purpose: Centralized query key management for consistent cache invalidation.
 * All React Query hooks should use keys from this file.
 */

export const queryKeys = {
  // User queries
  users: {
    all: ['users'] as const,
    detail: (id: string) => ['users', id] as const,
    profile: () => ['users', 'profile'] as const,
    session: () => ['users', 'session'] as const,
  },

  // Scholarship queries
  scholarships: {
    all: ['scholarships'] as const,
    list: (filters?: Record<string, unknown>) => ['scholarships', 'list', filters] as const,
    detail: (id: string) => ['scholarships', id] as const,
    search: (query: string) => ['scholarships', 'search', query] as const,
    featured: () => ['scholarships', 'featured'] as const,
  },

  // Career/Job queries
  careers: {
    all: ['careers'] as const,
    list: (filters?: Record<string, unknown>) => ['careers', 'list', filters] as const,
    detail: (id: string) => ['careers', id] as const,
    search: (query: string) => ['careers', 'search', query] as const,
    recommendations: () => ['careers', 'recommendations'] as const,
  },

  // Application queries
  applications: {
    all: ['applications'] as const,
    list: (userId?: string) => ['applications', 'list', userId] as const,
    detail: (id: string) => ['applications', id] as const,
    byScholarship: (scholarshipId: string) => ['applications', 'scholarship', scholarshipId] as const,
    byCareer: (careerId: string) => ['applications', 'career', careerId] as const,
  },

  // Organization queries
  organizations: {
    all: ['organizations'] as const,
    detail: (id: string) => ['organizations', id] as const,
    members: (orgId: string) => ['organizations', orgId, 'members'] as const,
  },

  // Analytics queries
  analytics: {
    dashboard: () => ['analytics', 'dashboard'] as const,
    summary: (dateRange?: { start: string; end: string }) => 
      ['analytics', 'summary', dateRange] as const,
  },

  // Notifications queries
  notifications: {
    all: ['notifications'] as const,
    unread: () => ['notifications', 'unread'] as const,
  },
} as const;

/**
 * Helper to invalidate all queries for a namespace
 * Usage: queryClient.invalidateQueries({ queryKey: queryKeys.scholarships.all })
 */
export type QueryKeys = typeof queryKeys;
