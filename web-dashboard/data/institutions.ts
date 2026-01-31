/**
 * Institution Data by Education Level
 * 
 * - Matric/Intermediate: Pakistan Boards of Intermediate and Secondary Education
 * - O-Level/A-Level: CAIE recognized institutions
 * - Undergraduate/Postgraduate: HEC recognized universities
 */

// Popular schools for Matric (Government recognized)
export const MATRIC_SCHOOLS = [
  "Beaconhouse School System",
  "The City School",
  "Lahore Grammar School",
  "Karachi Grammar School",
  "Nixor College",
  "Habib Public School",
  "St. Patrick's High School",
  "St. Joseph's Convent School",
  "Convent of Jesus and Mary",
  "Foundation Public School",
  "Aga Khan Higher Secondary School",
  "The Lyceum School",
  "Dawood Public School",
  "Happy Home School",
  "Army Public School",
  "PAF Model Schools",
  "Cadet College Hasanabdal",
  "Cadet College Petaro",
  "Government High School (Various)",
  "Municipal Corporation School (Various)",
] as const;

// Popular colleges for Intermediate (FSc/FA)
export const INTERMEDIATE_COLLEGES = [
  "DJ Science College",
  "Government College University",
  "Adamjee Government Science College",
  "SM Science College",
  "Islamia College",
  "Forman Christian College",
  "Kinnaird College",
  "St. Patrick's College",
  "Notre Dame College",
  "Punjab College",
  "Superior College",
  "KIPS College",
  "Star College",
  "Roots Millennium College",
  "Aga Khan Higher Secondary School",
  "Bahria College",
  "Army Public College",
  "PAF College",
  "Cadet College (Various)",
  "Government College (Various)",
] as const;

// CAIE recognized schools for O-Level
export const OLEVEL_SCHOOLS = [
  "Karachi Grammar School",
  "Lahore Grammar School",
  "Beaconhouse School System",
  "The City School",
  "Nixor College",
  "Bay View Academy",
  "The Lyceum School",
  "Froebel's International School",
  "Foundation Public School",
  "Habib Public School",
  "St. Patrick's High School",
  "Convent of Jesus and Mary",
  "St. Michael's Convent School",
  "Mama Parsi Girls Secondary School",
  "B.V.S. Parsi High School",
  "The Educators",
  "Roots International Schools",
  "Headstart School",
  "Beacon Light Academy",
  "Generations School",
] as const;

// CAIE recognized colleges for A-Level
export const ALEVEL_COLLEGES = [
  "Karachi Grammar School",
  "Lahore Grammar School",
  "Nixor College",
  "Cedar College",
  "Southshore School for A-Level Studies",
  "Beaconhouse Margalla Campus",
  "The City School PAF Chapter",
  "Bay View Academy",
  "Aga Khan Higher Secondary School",
  "Lyceum School",
  "Generations School",
  "Roots Millennium",
  "Salamat International",
  "Headstart School",
  "Froebel's International School",
  "The Educators",
  "Superior College A-Levels",
  "Westminster Academy",
  "British Overseas School",
  "Beacon Light Academy",
] as const;

// HEC recognized universities for Undergraduate
export const UNIVERSITIES = [
  "LUMS - Lahore University of Management Sciences",
  "IBA - Institute of Business Administration",
  "NED University of Engineering & Technology",
  "NUST - National University of Sciences & Technology",
  "Aga Khan University",
  "Habib University",
  "FAST-NUCES",
  "COMSATS University",
  "Quaid-i-Azam University",
  "University of Karachi",
  "University of Punjab",
  "University of Engineering & Technology (UET)",
  "GIKI - Ghulam Ishaq Khan Institute",
  "IST - Institute of Space Technology",
  "PIEAS",
  "Bahria University",
  "Air University",
  "SZABIST",
  "Karachi University",
  "Mehran University",
  "NCA - National College of Arts",
  "PNEC - Pakistan Navy Engineering College",
  "CUST - Capital University of Science & Technology",
  "Shaheed Zulfikar Ali Bhutto Institute",
  "University of Central Punjab",
  "Beaconhouse National University",
  "Riphah International University",
  "Dow University of Health Sciences",
  "King Edward Medical University",
  "Allama Iqbal Medical College",
  "Jinnah Medical & Dental College",
  "Ziauddin University",
  "Liaquat University of Medical & Health Sciences",
] as const;

// Postgraduate programs - same universities plus international
export const POSTGRAD_INSTITUTIONS = [
  ...UNIVERSITIES,
  "Oxford University (International)",
  "Cambridge University (International)",
  "Harvard University (International)",
  "MIT (International)",
  "Stanford University (International)",
  "Imperial College London (International)",
  "University of Edinburgh (International)",
  "University of Manchester (International)",
  "University of Toronto (International)",
  "McGill University (International)",
  "University of Melbourne (International)",
  "National University of Singapore (International)",
] as const;

/**
 * Get institutions based on education level
 */
export function getInstitutionsForLevel(level: string): readonly string[] {
  switch (level) {
    case "matric":
      return MATRIC_SCHOOLS;
    case "intermediate":
      return INTERMEDIATE_COLLEGES;
    case "olevel":
      return OLEVEL_SCHOOLS;
    case "alevel":
      return ALEVEL_COLLEGES;
    case "undergraduate":
      return UNIVERSITIES;
    case "postgraduate":
      return POSTGRAD_INSTITUTIONS;
    default:
      return [];
  }
}

/**
 * Get label for institution field based on education level
 */
export function getInstitutionLabel(level: string): string {
  switch (level) {
    case "matric":
      return "School Name";
    case "intermediate":
      return "College Name";
    case "olevel":
      return "School Name (CAIE)";
    case "alevel":
      return "College Name (CAIE)";
    case "undergraduate":
      return "University Name (HEC)";
    case "postgraduate":
      return "University/Institution";
    default:
      return "Institution Name";
  }
}
