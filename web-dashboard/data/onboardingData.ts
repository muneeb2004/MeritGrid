/**
 * Onboarding Data Constants
 * 
 * Countries, provinces, cities, and options for the student onboarding flow.
 * Note: Israel is excluded from the countries list as per requirements.
 */

export const COUNTRIES = [
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "QA", name: "Qatar", dialCode: "+974" },
  { code: "KW", name: "Kuwait", dialCode: "+965" },
  { code: "OM", name: "Oman", dialCode: "+968" },
  { code: "BH", name: "Bahrain", dialCode: "+973" },
  { code: "MY", name: "Malaysia", dialCode: "+60" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "TR", name: "Turkey", dialCode: "+90" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "BD", name: "Bangladesh", dialCode: "+880" },
  { code: "NP", name: "Nepal", dialCode: "+977" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94" },
  { code: "AF", name: "Afghanistan", dialCode: "+93" },
  { code: "IR", name: "Iran", dialCode: "+98" },
] as const;

export const PAKISTAN_PROVINCES = [
  { code: "SD", name: "Sindh" },
  { code: "PB", name: "Punjab" },
  { code: "KP", name: "Khyber Pakhtunkhwa" },
  { code: "BL", name: "Balochistan" },
  { code: "GB", name: "Gilgit-Baltistan" },
  { code: "AJK", name: "Azad Jammu & Kashmir" },
  { code: "ICT", name: "Islamabad Capital Territory" },
] as const;

export const PAKISTAN_CITIES: Record<string, string[]> = {
  SD: ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah", "Mirpur Khas"],
  PB: ["Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Sialkot"],
  KP: ["Peshawar", "Mardan", "Abbottabad", "Swat", "Kohat", "Dera Ismail Khan"],
  BL: ["Quetta", "Gwadar", "Turbat", "Khuzdar", "Chaman"],
  GB: ["Gilgit", "Skardu", "Hunza", "Chilas"],
  AJK: ["Muzaffarabad", "Mirpur", "Rawalakot", "Kotli"],
  ICT: ["Islamabad"],
};

export const EDUCATION_LEVELS = [
  { id: "matric", label: "O-Level / Matric", description: "Secondary school" },
  { id: "intermediate", label: "A-Level / Intermediate", description: "Higher secondary" },
  { id: "undergraduate", label: "Undergraduate", description: "Bachelor's degree" },
  { id: "postgraduate", label: "Post-Graduate", description: "Master's / PhD" },
] as const;

export const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
] as const;

export const PRIMARY_OBJECTIVES = [
  { id: "multi_apply", label: "Applying to multiple institutes at once" },
  { id: "scholarships", label: "Explore scholarships" },
  { id: "rankings", label: "Research university rankings" },
  { id: "exploring", label: "Unsure / Just exploring" },
] as const;

export const INTEREST_TAGS = [
  "Computer Science",
  "Engineering",
  "Business",
  "Medicine",
  "Arts & Design",
  "Law",
  "Social Sciences",
  "Natural Sciences",
  "Media & Communications",
  "Architecture",
] as const;

export type Country = (typeof COUNTRIES)[number];
export type Province = (typeof PAKISTAN_PROVINCES)[number];
export type EducationLevel = (typeof EDUCATION_LEVELS)[number]["id"];
export type Gender = (typeof GENDER_OPTIONS)[number]["value"];
