import React, { useState } from "react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [technicalRating, setTechnicalRating] = useState(4);
  const [softSkillsRating, setSoftSkillsRating] = useState(5);
  const [alignmentRating, setAlignmentRating] = useState(3);
  const [notes, setNotes] = useState("");
  const [recommend, setRecommend] = useState(true);

  if (!isOpen) return null;

  const renderStars = (
    rating: number,
    setRating: (r: number) => void,
    max: number = 5
  ) => {
    return (
      <div className="flex items-center gap-1 text-primary dark:text-[#3b82f6]">
        {[...Array(max)].map((_, i) => (
          <span
            key={i}
            className={`material-symbols-outlined cursor-pointer hover:scale-110 transition-transform ${
              i < rating
                ? "filled-icon"
                : "empty-icon text-[#cfd7e7] dark:text-slate-600"
            }`}
            onClick={() => setRating(i + 1)}
            style={{ fontVariationSettings: `'FILL' ${i < rating ? 1 : 0}` }}
          >
            star
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-[#0d121b]/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
        onClick={onClose}
      >
        {/* Modal Container */}
        <div
          className="relative w-full max-w-[640px] flex flex-col bg-white dark:bg-[#1e2532] rounded-xl shadow-2xl overflow-hidden animate-fade-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <header className="flex items-center justify-between px-6 py-4 bg-primary text-white border-b border-primary/10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/90">
                rate_review
              </span>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                Submit Final Evaluation
              </h2>
            </div>
            <button
              className="flex items-center justify-center size-8 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white"
              onClick={onClose}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                close
              </span>
            </button>
          </header>
          {/* Modal Content */}
          <div className="flex flex-col p-6 sm:p-8 gap-8 overflow-y-auto max-h-[calc(100vh-160px)]">
            {/* Ratings Section */}
            <div className="flex flex-col gap-5">
              {/* Rating Item: Technical Proficiency */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-col">
                  <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                    Technical Proficiency
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Coding standards, system design
                  </p>
                </div>
                {renderStars(technicalRating, setTechnicalRating)}
              </div>
              <div className="h-px w-full bg-[#e7ebf3] dark:bg-slate-700"></div>
              {/* Rating Item: Soft Skills */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-col">
                  <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                    Soft Skills
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Communication, leadership, empathy
                  </p>
                </div>
                {renderStars(softSkillsRating, setSoftSkillsRating)}
              </div>
              <div className="h-px w-full bg-[#e7ebf3] dark:bg-slate-700"></div>
              {/* Rating Item: Company Alignment */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-col">
                  <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                    Company Alignment
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Culture fit, mission understanding
                  </p>
                </div>
                {renderStars(alignmentRating, setAlignmentRating)}
              </div>
            </div>
            {/* Text Area Section */}
            <div className="flex flex-col gap-3">
              <label
                className="text-[#0d121b] dark:text-white text-sm font-bold leading-normal"
                htmlFor="feedback-text"
              >
                Detailed Observations
              </label>
              <div className="relative">
                <textarea
                  className="w-full resize-none rounded-lg border border-[#e7ebf3] dark:border-slate-600 bg-[#f8fafc] dark:bg-[#151a23] p-4 text-[#0d121b] dark:text-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                  id="feedback-text"
                  placeholder="Enter specific feedback regarding the candidate&apos;s performance..."
                  rows={5}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={500}
                ></textarea>
                <div className="absolute bottom-3 right-3 text-xs text-slate-400 font-medium">
                  {notes.length}/500
                </div>
              </div>
            </div>
            {/* Toggle Section */}
            <div className="flex items-center justify-between p-4 bg-[#f8fafc] dark:bg-[#151a23] rounded-lg border border-[#e7ebf3] dark:border-slate-600">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined filled-icon">
                    recommend
                  </span>
                </div>
                <div>
                  <p className="text-[#0d121b] dark:text-white text-sm font-bold">
                    Recommend for Next Stage
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    Advance candidate to onsite interview
                  </p>
                </div>
              </div>
              {/* Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={recommend}
                  onChange={(e) => setRecommend(e.target.checked)}
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/40 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-[#f8f9fc] dark:bg-[#1a202c] border-t border-[#e7ebf3] dark:border-slate-700">
            <button
              className="px-5 py-2.5 text-sm font-bold text-[#0d121b] dark:text-white bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              onClick={onClose}
            >
              Save as Draft
            </button>
            <button
              className="px-5 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
              onClick={onClose}
            >
              <span>Submit Feedback</span>
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
