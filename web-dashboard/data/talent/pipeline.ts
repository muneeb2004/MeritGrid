export const PIPELINE_STAGES = [
  { id: 1, name: "Applied", count: 124, color: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300" },
  { id: 2, name: "Screening", count: 45, color: "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300" },
  { id: 3, name: "Interview", count: 18, color: "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300" },
  { id: 4, name: "Offer", count: 8, color: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300" },
];

export const RECENT_APPLICANTS = [
  {
    id: "1",
    name: "Alex Johnson",
    initials: "AJ",
    gpa: "3.8",
    location: "Karachi",
    program: "BSc Computer Science",
    match: 95,
    status: "Screening",
    statusColor: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    statusDot: "bg-blue-500",
    avatarBg: "bg-blue-100 dark:bg-blue-900",
    avatarColor: "text-blue-600"
  },
  {
    id: "2",
    name: "Zara Khan",
    initials: "ZK",
    gpa: "4.0",
    location: "Lahore",
    program: "BBA Honors",
    match: 88,
    status: "Interview",
    statusColor: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    statusDot: "bg-orange-500",
    avatarBg: "bg-purple-100 dark:bg-purple-900",
    avatarColor: "text-purple-600"
  }
];
