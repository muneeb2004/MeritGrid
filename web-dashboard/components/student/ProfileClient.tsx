"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProfilePhotoUpload from "./ProfilePhotoUpload";
import EditPersonalInfoModal from "./EditPersonalInfoModal";
import EditAcademicsModal from "./EditAcademicsModal";
import EditInterestsModal from "./EditInterestsModal";

interface AcademicRecord {
  id: string;
  subject: string;
  grade: string;
  credits?: number;
  year: string;
}

interface ProfileClientProps {
  user: {
    id: string;
    email: string | null;
    image: string | null;
  };
  profile: {
    fullName: string | null;
    phone: string | null;
    gender: string | null;
    nationality: string | null;
    address: string | null;
    city: string | null;
    province: string | null;
    country: string | null;
    countryCode: string | null;
    educationLevel: string | null;
    institution: string | null;
    customInstitution: string | null;
    program: string | null;
    gpa: number | null;
    bio: string | null;
    interests: string[];
    education: AcademicRecord[] | null;
    onboardingCompletedAt: Date | null;
  };
  profileStrength: number;
  missingFields: string[];
}

const fieldLabels: Record<string, string> = {
  fullName: "Full Name",
  phone: "Phone Number",
  educationLevel: "Education Level",
  city: "City",
};

const DEFAULT_IMAGE = "https://ui-avatars.com/api/?name=Student&background=6366f1&color=fff&size=200";

export default function ProfileClient({
  user,
  profile,
  profileStrength,
  missingFields,
}: ProfileClientProps) {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [interestsOpen, setInterestsOpen] = useState(false);

  const displayName = profile.fullName || "Student";
  const displayImage = user.image || DEFAULT_IMAGE;
  const displayProgram = profile.program || profile.educationLevel || "Student";
  const displayLocation = profile.city && profile.province
    ? `${profile.city}, ${profile.province}`
    : profile.city || profile.province || "Not specified";
  const displayBio = profile.bio || "No personal statement added yet.";
  const hasMissingFields = missingFields.length > 0;

  return (
    <>
      {/* Modals */}
      <EditPersonalInfoModal
        isOpen={personalInfoOpen}
        onClose={() => setPersonalInfoOpen(false)}
        initialData={{
          fullName: profile.fullName || "",
          phone: profile.phone || "",
          gender: profile.gender || "",
          nationality: profile.nationality || "",
          address: profile.address || "",
          city: profile.city || "",
          province: profile.province || "",
          country: profile.country || "",
          countryCode: profile.countryCode || "",
        }}
      />

      <EditAcademicsModal
        isOpen={academicsOpen}
        onClose={() => setAcademicsOpen(false)}
        initialData={{
          educationLevel: profile.educationLevel || "",
          institution: profile.institution || "",
          customInstitution: profile.customInstitution || "",
          program: profile.program || "",
          gpa: profile.gpa,
          education: profile.education || [],
        }}
      />

      <EditInterestsModal
        isOpen={interestsOpen}
        onClose={() => setInterestsOpen(false)}
        initialInterests={profile.interests || []}
      />

      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Missing Fields Alert */}
          {hasMissingFields && (
            <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="size-10 bg-amber-100 dark:bg-amber-800/50 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-amber-600 dark:text-amber-400">warning</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-amber-800 dark:text-amber-200">Complete Your Profile</h3>
                  <p className="text-xs text-amber-700 dark:text-amber-300">
                    Missing: {missingFields.map(f => fieldLabels[f] || f).join(", ")}. Complete your profile to unlock all features.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPersonalInfoOpen(true)}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-lg transition-colors shrink-0"
              >
                Complete Now
              </button>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white dark:bg-[#101622] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 sticky top-24">
                <div className="mb-6 px-2">
                  <h1 className="text-lg font-bold text-[#101622] dark:text-white leading-tight">
                    Master Profile
                  </h1>
                  <p className="text-xs text-slate-500 mt-1">Application Management</p>
                </div>
                <nav className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-1 lg:space-y-1">
                  <button
                    onClick={() => setPersonalInfoOpen(true)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined !text-xl">person</span>
                    Personal Info
                  </button>
                  <button
                    onClick={() => setAcademicsOpen(true)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined !text-xl text-slate-400">school</span>
                    Academics
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer">
                    <span className="material-symbols-outlined !text-xl text-slate-400">description</span>
                    Documents
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer">
                    <span className="material-symbols-outlined !text-xl text-slate-400">history_edu</span>
                    Statement
                  </button>
                  <button
                    onClick={() => setInterestsOpen(true)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined !text-xl text-slate-400">interests</span>
                    Interests
                  </button>
                </nav>
              </div>
            </aside>

            {/* Profile Content Area */}
            <div className="flex-1 space-y-6">
              {/* Profile Header */}
              <div className="bg-white dark:bg-[#101622] rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <ProfilePhotoUpload currentImage={displayImage} />
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-[#101622] dark:text-white">{displayName}</h2>
                        <p className="text-slate-500 font-medium">{displayProgram} Applicant</p>
                      </div>
                      <div className="flex gap-3 justify-center">
                        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm rounded-lg transition-all cursor-pointer">
                          Preview Profile
                        </button>
                        <button
                          onClick={() => setPersonalInfoOpen(true)}
                          className="px-4 py-2 bg-primary text-white font-bold text-sm rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                          Edit Master Info
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Profile Strength</p>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-24 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${profileStrength >= 80 ? 'bg-green-500' : profileStrength >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                              style={{ width: `${profileStrength}%` }}
                            />
                          </div>
                          <span className={`text-xs font-bold ${profileStrength >= 80 ? 'text-green-600' : profileStrength >= 50 ? 'text-amber-600' : 'text-red-600'}`}>
                            {profileStrength}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Status</p>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold ${
                          profile.onboardingCompletedAt ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {profile.onboardingCompletedAt ? 'Verified' : 'Pending'}
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Location</p>
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{displayLocation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info Section */}
              <section className="bg-white dark:bg-[#101622] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="bg-[#101622] px-6 py-4 flex justify-between items-center">
                  <h3 className="text-white font-bold tracking-tight flex items-center gap-2">
                    <span className="material-symbols-outlined !text-lg text-primary">person</span>
                    Personal Information
                  </h3>
                  <button
                    onClick={() => setPersonalInfoOpen(true)}
                    className="text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined !text-xl">edit</span>
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Full Name</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{displayName}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Email</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{user.email || "Not added"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Phone</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{profile.phone || "Not added"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Gender</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white capitalize">{profile.gender || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Nationality</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white capitalize">{profile.nationality || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Address</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{profile.address || "Not added"}</p>
                  </div>
                </div>
              </section>

              {/* Academics Section */}
              <section className="bg-white dark:bg-[#101622] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="bg-[#101622] px-6 py-4 flex justify-between items-center">
                  <h3 className="text-white font-bold tracking-tight flex items-center gap-2">
                    <span className="material-symbols-outlined !text-lg text-primary">school</span>
                    Academic Information
                  </h3>
                  <button
                    onClick={() => setAcademicsOpen(true)}
                    className="text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined !text-xl">edit</span>
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Education Level</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{profile.educationLevel || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Institution</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{profile.institution || profile.customInstitution || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Program</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{profile.program || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">GPA</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{profile.gpa ? profile.gpa.toFixed(2) : "Not added"}</p>
                  </div>
                </div>

                {/* Subject Grades Table */}
                {profile.education && profile.education.length > 0 && (
                  <div className="border-t border-slate-100 dark:border-slate-800">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-semibold border-b border-slate-100 dark:border-slate-800">
                          <th className="px-6 py-3">Subject</th>
                          <th className="px-6 py-3">Grade</th>
                          <th className="px-6 py-3">Credits</th>
                          <th className="px-6 py-3">Year</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {profile.education.map((record) => (
                          <tr key={record.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                            <td className="px-6 py-3 font-semibold text-slate-800 dark:text-slate-200">{record.subject}</td>
                            <td className="px-6 py-3">
                              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary font-bold rounded">{record.grade}</span>
                            </td>
                            <td className="px-6 py-3 text-slate-500">{record.credits || "-"}</td>
                            <td className="px-6 py-3 text-slate-500">{record.year}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>

              {/* Personal Statement Section */}
              <section className="bg-white dark:bg-[#101622] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="bg-[#101622] px-6 py-4 flex justify-between items-center">
                  <h3 className="text-white font-bold tracking-tight flex items-center gap-2">
                    <span className="material-symbols-outlined !text-lg text-primary">history_edu</span>
                    Personal Statement
                  </h3>
                  <button className="text-white/70 hover:text-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined !text-xl">edit_note</span>
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{displayBio}</p>
                </div>
              </section>

              {/* Interests Section */}
              <section className="bg-white dark:bg-[#101622] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="bg-[#101622] px-6 py-4 flex justify-between items-center">
                  <h3 className="text-white font-bold tracking-tight flex items-center gap-2">
                    <span className="material-symbols-outlined !text-lg text-primary">interests</span>
                    Interests
                  </h3>
                  <button
                    onClick={() => setInterestsOpen(true)}
                    className="text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined !text-xl">edit</span>
                  </button>
                </div>
                <div className="p-6">
                  {profile.interests && profile.interests.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-sm">No interests added. Click edit to add your interests.</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
