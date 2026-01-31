"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, GraduationCap, BookOpen, School, Award } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Toggle from "@/components/ui/Toggle";
import SelectionCard from "@/components/ui/SelectionCard";
import Button from "@/components/ui/Button";
import {
  COUNTRIES,
  PAKISTAN_PROVINCES,
  PAKISTAN_CITIES,
  EDUCATION_LEVELS,
  GENDER_OPTIONS,
  PRIMARY_OBJECTIVES,
  INTEREST_TAGS,
} from "@/data/onboardingData";
import { getInstitutionsForLevel, getInstitutionLabel } from "@/data/institutions";
import { saveStudentOnboarding } from "@/app/actions/onboarding";

const STORAGE_KEY = "meritgrid_onboarding";

interface OnboardingData {
  // Step 1: Personal Identity
  fullName: string;
  username: string; // [NEW]
  password: string; // [NEW]
  nationality: "national" | "foreign";
  countryCode: string;
  phone: string;
  email: string;
  gender: string;
  // Step 2: Geographic Details
  address: string;
  society: string;
  street: string;
  country: string;
  province: string;
  city: string;
  // Step 3: Academic Standing
  educationLevel: string;
  institution: string;
  customInstitution: string;
  // Step 4: Intent & Preferences
  objectives: string[];
  budget: string;
  interests: string[];
}

const initialData: OnboardingData = {
  fullName: "",
  username: "",
  password: "",
  nationality: "national",
  countryCode: "+92",
  phone: "",
  email: "",
  gender: "",
  address: "",
  society: "",
  street: "",
  country: "PK",
  province: "",
  city: "",
  educationLevel: "",
  institution: "",
  customInstitution: "",
  objectives: [],
  budget: "",
  interests: [],
};

// Helper to load saved data from localStorage
function loadSavedData(): OnboardingData {
  if (typeof window === "undefined") return initialData;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...initialData, ...parsed, transcript: null };
    }
  } catch {
    // Invalid data, ignore
  }
  return initialData;
}

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof OnboardingData | "submit", string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    setIsMounted(true);
    const saved = loadSavedData();
    if (saved) {
        setData(prev => ({ ...prev, ...saved }));
    }
  }, []);

  // Save to localStorage on data change
  useEffect(() => {
    if (!isMounted) return;
    const toSave = { ...data, transcript: null };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [data, isMounted]);

  const updateField = <K extends keyof OnboardingData>(field: K, value: OnboardingData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleObjective = (id: string) => {
    setData((prev) => ({
      ...prev,
      objectives: prev.objectives.includes(id)
        ? prev.objectives.filter((o) => o !== id)
        : [...prev.objectives, id],
    }));
  };

  const toggleInterest = (tag: string) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.includes(tag)
        ? prev.interests.filter((t) => t !== tag)
        : [...prev.interests, tag],
    }));
  };

  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof OnboardingData, string>> = {};

    if (step === 1) {
      if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!data.username.trim()) newErrors.username = "Username is required";
      else if (data.username.length < 3) newErrors.username = "Username must be 3+ chars";
      
      if (!data.password) newErrors.password = "Password is required";
      else if (data.password.length < 8) newErrors.password = "Password must be 8+ chars";

      if (!data.phone.trim()) newErrors.phone = "Phone number is required";
      if (!data.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Invalid email";
      if (!data.gender) newErrors.gender = "Please select your gender";
    }

    if (step === 2) {
      if (!data.address.trim()) newErrors.address = "Address is required";
      if (!data.society.trim()) newErrors.society = "Society/Apartment name is required";
      if (!data.province) newErrors.province = "Province is required";
      if (!data.city) newErrors.city = "City is required";
    }

    if (step === 3) {
      if (!data.educationLevel) newErrors.educationLevel = "Education level is required";
      if (data.educationLevel && !data.institution) newErrors.institution = "Please select your institution";
      if (data.institution === "other" && !data.customInstitution.trim()) {
        newErrors.customInstitution = "Please enter your institution name";
      }
      // Transcript is optional during registration
    }

    if (step === 4) {
      if (data.objectives.length === 0) newErrors.objectives = "Select at least one objective";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (validateStep()) {
      if (step < 4) {
        setStep(step + 1);
      } else {
        // Complete onboarding - save to database
        setIsSubmitting(true);
        setErrors((prev) => ({ ...prev, submit: undefined }));

        try {
          const result = await saveStudentOnboarding(data);

          if (result.success) {
            localStorage.removeItem(STORAGE_KEY);
            router.push("/student/dashboard");
          } else {
            setErrors((prev) => ({ ...prev, submit: result.error || "Something went wrong" }));
          }
        } catch (error) {
          console.error("Onboarding failed:", error);
          setErrors((prev) => ({ ...prev, submit: "Something went wrong. Please try again." }));
        } finally {
          setIsSubmitting(false);
        }
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getEducationIcon = (id: string) => {
    switch (id) {
      case "olevel": return <School size={28} />;
      case "matric": return <School size={28} />;
      case "alevel": return <BookOpen size={28} />;
      case "intermediate": return <BookOpen size={28} />;
      case "undergraduate": return <GraduationCap size={28} />;
      case "postgraduate": return <Award size={28} />;
      default: return null;
    }
  };

  const provinceOptions = data.country === "PK"
    ? PAKISTAN_PROVINCES.map((p) => ({ value: p.code, label: p.name }))
    : [];

  const cityOptions = data.province && PAKISTAN_CITIES[data.province]
    ? PAKISTAN_CITIES[data.province].map((c) => ({ value: c, label: c }))
    : [];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <header className="px-6 md:px-12 py-4 border-b border-border-default dark:border-gray-800">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/student" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-text-main dark:text-white">Step {step}</span>
            <span className="text-sm text-text-muted">of 4</span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-800">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      {/* Form Content */}
      <main className="px-6 py-8">
        <div className="max-w-xl mx-auto">
          {/* Step 1: Personal Identity */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-text-main dark:text-white">Personal Identity</h1>
                <p className="text-text-muted mt-1">Let&apos;s start with your basic information</p>
              </div>

              <Input
                label="Full Name (as on CNIC/Passport)"
                value={data.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                placeholder="Enter your full legal name"
                required
                error={errors.fullName}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Username (Unique ID)"
                    value={data.username}
                    onChange={(e) => updateField("username", e.target.value)}
                    placeholder="e.g. muneeb_alien"
                    required
                    error={errors.username}
                />
                <Input
                    label="Password"
                    type="password"
                    value={data.password}
                    onChange={(e) => updateField("password", e.target.value)}
                    placeholder="Min 8 characters"
                    required
                    error={errors.password}
                />
              </div>

              <Toggle
                label="Nationality"
                options={[
                  { value: "national", label: "National (Pakistan)" },
                  { value: "foreign", label: "Foreign Student" },
                ]}
                value={data.nationality}
                onChange={(v) => updateField("nationality", v as "national" | "foreign")}
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-main dark:text-white mb-1.5">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="w-24 shrink-0">
                    <Select
                      options={COUNTRIES.map((c) => ({ value: c.dialCode, label: c.dialCode }))}
                      value={data.countryCode}
                      onChange={(v) => updateField("countryCode", v)}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      type="tel"
                      inputMode="numeric"
                      value={data.phone}
                      onChange={(e) => updateField("phone", e.target.value.replace(/\D/g, ""))}
                      placeholder="3XX XXXXXXX"
                      error={errors.phone}
                    />
                  </div>
                </div>
              </div>

              <Input
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                required
                error={errors.email}
              />

              <Select
                label="Gender"
                options={GENDER_OPTIONS.map((g) => ({ value: g.value, label: g.label }))}
                value={data.gender}
                onChange={(v) => updateField("gender", v)}
                placeholder="Select your gender"
                required
                error={errors.gender}
              />
            </div>
          )}

          {/* Step 2: Geographic Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-text-main dark:text-white">Geographic Details</h1>
                <p className="text-text-muted mt-1">Where are you located?</p>
              </div>

              <Input
                label="House/Flat & Block"
                value={data.address}
                onChange={(e) => updateField("address", e.target.value)}
                placeholder="e.g., House 123, Block A"
                required
                error={errors.address}
              />

              <Input
                label="Apartments/Society Name"
                value={data.society}
                onChange={(e) => updateField("society", e.target.value)}
                placeholder="e.g., Creek Vistas, Bahria Town"
                required
                error={errors.society}
              />

              <Input
                label="Street / Area"
                value={data.street}
                onChange={(e) => updateField("street", e.target.value)}
                placeholder="e.g., Main Boulevard, DHA Phase 5"
              />

              <Select
                label="Country"
                options={COUNTRIES.map((c) => ({ value: c.code, label: c.name }))}
                value={data.country}
                onChange={(v) => {
                  updateField("country", v);
                  updateField("province", "");
                  updateField("city", "");
                }}
                required
                searchable
              />

              {data.country === "PK" && (
                <>
                  <Select
                    label="State/Province"
                    options={provinceOptions}
                    value={data.province}
                    onChange={(v) => {
                      updateField("province", v);
                      updateField("city", "");
                    }}
                    placeholder="Select province"
                    required
                    error={errors.province}
                  />

                  <Select
                    label="City"
                    options={cityOptions}
                    value={data.city}
                    onChange={(v) => updateField("city", v)}
                    placeholder="Select city"
                    required
                    searchable
                    disabled={!data.province}
                    error={errors.city}
                  />
                </>
              )}
            </div>
          )}

          {/* Step 3: Academic Standing */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-text-main dark:text-white">Academic Standing</h1>
                <p className="text-text-muted mt-1">What&apos;s your current education level?</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {EDUCATION_LEVELS.map((level) => (
                  <SelectionCard
                    key={level.id}
                    id={level.id}
                    label={level.label}
                    description={level.description}
                    icon={getEducationIcon(level.id)}
                    selected={data.educationLevel === level.id}
                    onClick={() => updateField("educationLevel", level.id)}
                  />
                ))}
              </div>
              {errors.educationLevel && (
                <p className="text-sm text-red-500">{errors.educationLevel}</p>
              )}

              {/* Institution Selection - appears after education level is selected */}
              {data.educationLevel && (
                <div className="space-y-4 pt-2">
                  <Select
                    label={getInstitutionLabel(data.educationLevel)}
                    options={[
                      ...getInstitutionsForLevel(data.educationLevel).map((inst) => ({
                        value: inst,
                        label: inst,
                      })),
                      { value: "other", label: "+ My institution is not listed" },
                    ]}
                    value={data.institution}
                    onChange={(v) => {
                      updateField("institution", v);
                      if (v !== "other") updateField("customInstitution", "");
                    }}
                    placeholder="Search or select your institution"
                    required
                    searchable
                    error={errors.institution}
                  />

                  {data.institution === "other" && (
                    <Input
                      label="Enter Institution Name"
                      value={data.customInstitution}
                      onChange={(e) => updateField("customInstitution", e.target.value)}
                      placeholder="Enter your school/college/university name"
                      required
                      error={errors.customInstitution}
                    />
                  )}
                </div>
              )}
            </div>
          )}

          {/* Step 4: Intent & Preferences */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-text-main dark:text-white">Intent & Preferences</h1>
                <p className="text-text-muted mt-1">Help us personalize your experience</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main dark:text-white mb-2">
                  Primary Objective <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {PRIMARY_OBJECTIVES.map((obj) => (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => toggleObjective(obj.id)}
                      className={`
                        w-full p-3 text-left text-sm font-medium rounded-xl border-2 transition-all
                        ${
                          data.objectives.includes(obj.id)
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border-default dark:border-gray-700 text-text-main dark:text-white hover:border-primary/50"
                        }
                      `}
                    >
                      {obj.label}
                    </button>
                  ))}
                </div>
                {errors.objectives && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.objectives}</p>
                )}
              </div>

              <Input
                label="Maximum Annual Tuition Budget (PKR)"
                type="tel"
                inputMode="numeric"
                value={data.budget}
                onChange={(e) => updateField("budget", e.target.value.replace(/\D/g, ""))}
                placeholder="e.g., 500000"
                hint="Helps us match you with affordable scholarships"
              />

              <div>
                <label className="block text-sm font-medium text-text-main dark:text-white mb-2">
                  Interests (Optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleInterest(tag)}
                      className={`
                        px-3 py-1.5 text-sm font-medium rounded-full border transition-all
                        ${
                          data.interests.includes(tag)
                            ? "border-primary bg-primary text-white"
                            : "border-border-default dark:border-gray-700 text-text-main dark:text-white hover:border-primary"
                        }
                      `}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={handleBack} startIcon="arrow_back">
                Back
              </Button>
            )}
            <Button
              type="button"
              fullWidth
              onClick={handleNext}
              endIcon={!isSubmitting ? (step < 4 ? "arrow_forward" : "check") : undefined}
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {step < 4 ? "Continue" : "Complete Setup"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
