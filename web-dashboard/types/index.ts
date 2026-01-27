/**
 * Shared Type Definitions
 * 
 * Purpose: Centralized TypeScript interfaces used across the app.
 * Usage:
 * - Ensuring type safety between Services and Components.
 * - Shared enums (User roles, Application statuses).
 */

export enum UserRole {
  STUDENT = 'STUDENT',
  TALENT = 'TALENT',
  ORG = 'ORG',
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
}
