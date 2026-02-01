"use client";

import React, { useState } from "react";
import { updateAcademics } from "@/app/actions/profile";

interface AcademicRecord {
  id: string;
  subject: string;
  grade: string;
  credits?: number;
  year: string;
}

interface EditAcademicsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    educationLevel: string;
    institution: string;
    customInstitution: string;
    program: string;
    gpa: number | null;
    education: AcademicRecord[];
  };
}

export default function EditAcademicsModal({
  isOpen,
  onClose,
  initialData,
}: EditAcademicsModalProps) {
  const [formData, setFormData] = useState({
    educationLevel: initialData.educationLevel,
    institution: initialData.institution,
    customInstitution: initialData.customInstitution,
    program: initialData.program,
    gpa: initialData.gpa?.toString() || "",
  });
  const [records, setRecords] = useState<AcademicRecord[]>(initialData.education);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addRecord = () => {
    setRecords([
      ...records,
      { id: Date.now().toString(), subject: "", grade: "", credits: undefined, year: "" },
    ]);
  };

  const updateRecord = (id: string, field: keyof AcademicRecord, value: string | number) => {
    setRecords(records.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const removeRecord = (id: string) => {
    setRecords(records.filter(r => r.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const result = await updateAcademics({
        educationLevel: formData.educationLevel,
        institution: formData.institution,
        customInstitution: formData.customInstitution,
        program: formData.program,
        gpa: formData.gpa ? parseFloat(formData.gpa) : undefined,
        education: records.filter(r => r.subject && r.grade),
      });
      if (!result.success) {
        throw new Error(result.error);
      }
      onClose();
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white dark:bg-[#101622] rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#101622] px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">school</span>
            Edit Academic Information
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium">
              {error}
            </div>
          )}

          {/* General Academic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Education Level
              </label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="">Select Level</option>
                <option value="O-Level">O-Level</option>
                <option value="Matric">Matric</option>
                <option value="A-Level">A-Level</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Institution
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Program / Major
              </label>
              <input
                type="text"
                name="program"
                value={formData.program}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                GPA
              </label>
              <input
                type="number"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
                step="0.01"
                min="0"
                max="4"
                placeholder="e.g., 3.75"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Subject Records */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-800 dark:text-white">Subject Grades</h3>
              <button
                type="button"
                onClick={addRecord}
                className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-1"
              >
                <span className="material-symbols-outlined !text-sm">add</span>
                Add Subject
              </button>
            </div>

            <div className="space-y-3">
              {records.map((record) => (
                <div key={record.id} className="flex gap-3 items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2">
                    <input
                      type="text"
                      placeholder="Subject"
                      value={record.subject}
                      onChange={(e) => updateRecord(record.id, "subject", e.target.value)}
                      className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Grade"
                      value={record.grade}
                      onChange={(e) => updateRecord(record.id, "grade", e.target.value)}
                      className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Credits"
                      value={record.credits || ""}
                      onChange={(e) => updateRecord(record.id, "credits", parseFloat(e.target.value))}
                      className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      value={record.year}
                      onChange={(e) => updateRecord(record.id, "year", e.target.value)}
                      className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeRecord(record.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <span className="material-symbols-outlined !text-lg">delete</span>
                  </button>
                </div>
              ))}

              {records.length === 0 && (
                <p className="text-center text-sm text-slate-400 py-4">
                  No subjects added. Click &quot;Add Subject&quot; to add your grades.
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
