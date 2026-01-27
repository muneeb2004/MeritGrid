export abstract class BaseService {
  /**
   * Secure Error Handler
   * Purpose: Standardizes errors without leaking internal system details.
   */
  protected handleError(error: unknown, context: string): never {
    // Log the actual error internally (to MongoDB/Sentry)
    console.error(`[${context}]`, error);
    
    // Throw a sanitized error to the client
    throw new Error('An unexpected error occurred. Please try again later.');
  }

  // Common methods for all services
}
