# MeritGrid System Workflow & Status Report

## 1. System Overview
MeritGrid is a dual-sided marketplace connecting Students (Applicants) with Institutions (Recruiters). The platform uses a specialized entry flow from the Landing Page to route users to their respective portals.

### Entry Workflow
- **Public Landing Page** (`/`): Main marketing site.
  - **"Student Portal" Link**: Routes to `/student`.
  - **"Get Started" Button**: Routes to `/talent` (Institution Entry).

---

## 2. Portal Status Breakdown

### A. Student Portal (Mobile-First)
**Route Base:** `/student`
**Status:** ✅ Core Flow Implemented (Mobile Optimized)

#### Implemented Workflows:
1.  **Dashboard** (`/student/dashboard`):
    -   Personalized greeting and avatar.
    -   Application Status Cards (Habib, IBA, etc.) with progress bars.
    -   "Next Steps" action items (Upload transcripts, Pay fee).
    -   Persistent Bottom Navigation (Home, Discover, Documents, Profile).
2.  **University Discovery** (`/student/discover`):
    -   Search bar and category filters (Engineering, Medical, etc.).
    -   University Cards with AI "Match %" badges.
    -   **Detail View** (`/student/discover/[id]`): Full university profile with "One-Click Apply".
3.  **Profile Management** (`/student/profile`):
    -   iOS-style editor for Academics, Documents, and Personal Statement.
    -   Document upload simulation with progress indicators.
4.  **Scholarship Tracker** (`/student/scholarships`):
    -   Funding potential dashboard.
    -   Submission status and deadline countdowns.
    -   **Search** (`/student/scholarships/search`): Dedicated search for funding.
5.  **Notifications** (`/student/notifications`):
    -   Priority "Talent Scout Alerts".
    -   Chronological activity feed.

#### Missing Elements (Gaps):
-   **Application Submission Wizard**: Actual form submission flow is simulated via status cards.
-   **Settings**: Account management, password reset, privacy controls.

#### Demo Implementations (New):
-   **Advisor Interface** (`/student/advisor`): Functional chat interface demo with "MeritGrid AI".
-   **Interview Scheduler** (`/student/schedule`): Calendar booking flow.

---

### B. Institution Portal (Desktop-First)
**Route Base:** `/talent`
**Status:** ✅ Core Demo Implemented

#### Implemented Workflows:
1.  **Entry / Login** (`/talent`):
    -   Dedicated login portal separate from students.
    -   SSO Options (Google/Microsoft placeholder buttons).
2.  **Dashboard** (`/talent/dashboard`):
    -   **Pipeline Management**: Visual Kanban-like metrics (Applied, Screening, Interview).
    -   **Candidate Grid**: List of recent applicants with Match Scores.

#### Missing Elements (Gaps):
-   **Advanced Search**: Filtering students by GPA, specific skills, or "Open to Work" status.
-   **Profile Viewer**: Detailed view of a student applicant from the recruiter's perspective.

-   **Collaboration Tools**: Team notes on candidates, interview feedback forms.
-   **Scholarship Admin**: Tools to create and manage the scholarships visible to students.

---

## 3. Data Architecture (Implied)
-   **User Types**: Separated into `Student` and `Institution` roles.
-   **Applications**: Many-to-Many relationship between Students and University Programs.
-   **Matches**: AI-generated score linking Student Specifications to Program Requirements.

## 4. Immediate Next Steps
1.  **Institution Dashboard**: Flesh out the `/talent/dashboard` with real pipeline capabilities.
2.  **Advisor Chat**: Implement the conversational interface for the Student Portal.
3.  **Data Integration**: Connect the "Apply" buttons to a persistent application state.
