/**
 * Standardized Error Codes
 * 
 * Purpose: Centralized error codes for consistent API responses.
 * Never expose internal error messages to clients - use these codes instead.
 */

export const ErrorCodes = {
  // Authentication Errors (AUTH_*)
  AUTH_EXPIRED: 'AUTH_EXPIRED',
  AUTH_INVALID_TOKEN: 'AUTH_INVALID_TOKEN',
  AUTH_UNAUTHORIZED: 'AUTH_UNAUTHORIZED',
  AUTH_FORBIDDEN: 'AUTH_FORBIDDEN',
  AUTH_SESSION_EXPIRED: 'AUTH_SESSION_EXPIRED',
  AUTH_MFA_REQUIRED: 'AUTH_MFA_REQUIRED',

  // Validation Errors (VALIDATION_*)
  VALIDATION_FAILED: 'VALIDATION_FAILED',
  VALIDATION_INVALID_INPUT: 'VALIDATION_INVALID_INPUT',
  VALIDATION_MISSING_FIELD: 'VALIDATION_MISSING_FIELD',
  VALIDATION_INVALID_FORMAT: 'VALIDATION_INVALID_FORMAT',

  // Resource Errors (RESOURCE_*)
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND',
  RESOURCE_ALREADY_EXISTS: 'RESOURCE_ALREADY_EXISTS',
  RESOURCE_CONFLICT: 'RESOURCE_CONFLICT',
  RESOURCE_DELETED: 'RESOURCE_DELETED',

  // Rate Limiting Errors (RATE_LIMIT_*)
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  RATE_LIMIT_USER: 'RATE_LIMIT_USER',
  RATE_LIMIT_IP: 'RATE_LIMIT_IP',

  // Internal Errors (INTERNAL_*)
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  INTERNAL_DATABASE: 'INTERNAL_DATABASE',
  INTERNAL_CACHE: 'INTERNAL_CACHE',
  INTERNAL_SERVICE: 'INTERNAL_SERVICE',
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

/**
 * Error Messages (user-facing, sanitized)
 */
export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCodes.AUTH_EXPIRED]: 'Your session has expired. Please log in again.',
  [ErrorCodes.AUTH_INVALID_TOKEN]: 'Invalid authentication token.',
  [ErrorCodes.AUTH_UNAUTHORIZED]: 'You must be logged in to access this resource.',
  [ErrorCodes.AUTH_FORBIDDEN]: 'You do not have permission to access this resource.',
  [ErrorCodes.AUTH_SESSION_EXPIRED]: 'Your session has expired. Please log in again.',
  [ErrorCodes.AUTH_MFA_REQUIRED]: 'Multi-factor authentication is required.',

  [ErrorCodes.VALIDATION_FAILED]: 'Validation failed. Please check your input.',
  [ErrorCodes.VALIDATION_INVALID_INPUT]: 'Invalid input provided.',
  [ErrorCodes.VALIDATION_MISSING_FIELD]: 'Required field is missing.',
  [ErrorCodes.VALIDATION_INVALID_FORMAT]: 'Invalid format provided.',

  [ErrorCodes.RESOURCE_NOT_FOUND]: 'The requested resource was not found.',
  [ErrorCodes.RESOURCE_ALREADY_EXISTS]: 'This resource already exists.',
  [ErrorCodes.RESOURCE_CONFLICT]: 'A conflict occurred with the current state.',
  [ErrorCodes.RESOURCE_DELETED]: 'This resource has been deleted.',

  [ErrorCodes.RATE_LIMIT_EXCEEDED]: 'Too many requests. Please try again later.',
  [ErrorCodes.RATE_LIMIT_USER]: 'User rate limit exceeded. Please wait.',
  [ErrorCodes.RATE_LIMIT_IP]: 'IP rate limit exceeded. Please wait.',

  [ErrorCodes.INTERNAL_ERROR]: 'An unexpected error occurred. Please try again later.',
  [ErrorCodes.INTERNAL_DATABASE]: 'An unexpected error occurred. Please try again later.',
  [ErrorCodes.INTERNAL_CACHE]: 'An unexpected error occurred. Please try again later.',
  [ErrorCodes.INTERNAL_SERVICE]: 'An unexpected error occurred. Please try again later.',
};

/**
 * Create a standardized API error response
 */
export function createErrorResponse(code: ErrorCode, details?: string) {
  return {
    success: false,
    error: {
      code,
      message: ErrorMessages[code],
      ...(details && process.env.NODE_ENV === 'development' ? { details } : {}),
    },
  };
}
