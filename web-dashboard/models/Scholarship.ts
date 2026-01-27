import mongoose, { Schema, Document } from 'mongoose';

/**
 * Scholarship Model (MongoDB)
 * 
 * Purpose: Highly flexible document for scholarships, grants, and job listings.
 * Scalability: MongoDB handles schema evolution as we add new types of opportunities.
 */

export interface IScholarship extends Document {
  title: string;
  foundation: string;
  amount: string;
  deadline: Date;
  description: string;
  eligibility: string[];
  matchCriteria: Record<string, unknown>; // Complex matching logic
  tags: string[];
  imageUrl?: string;
  isUrgent: boolean;
  metadata: Record<string, unknown>; // Catch-all for varied grant fields
  createdAt: Date;
  updatedAt: Date;
}

const ScholarshipSchema: Schema = new Schema(
  {
    title: { type: String, required: true, index: true },
    foundation: { type: String, required: true },
    amount: { type: String, required: true },
    deadline: { type: Date, required: true, index: true },
    description: { type: String, required: true },
    eligibility: [{ type: String }],
    matchCriteria: { type: Schema.Types.Mixed, default: {} },
    tags: [{ type: String, index: true }],
    imageUrl: { type: String },
    isUrgent: { type: Boolean, default: false },
    metadata: { type: Schema.Types.Mixed, default: {} },
  },
  {
    timestamps: true,
    // Strict false allows for flexible metadata storage while maintaining core fields
    strict: false, 
  }
);

// Add text index for search scalability
ScholarshipSchema.index({ title: 'text', description: 'text', tags: 'text' });

export default mongoose.models.Scholarship || mongoose.model<IScholarship>('Scholarship', ScholarshipSchema);
