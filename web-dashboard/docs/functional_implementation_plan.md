# MeritGrid: Functional Implementation Plan

This document outlines the phase-wise transition from a UI prototype to a fully functional production-ready application.

## 1. Architectural Strategy

### 1.1 Hybrid Database Implementation

We will adopt a hybrid storage strategy to maximize efficiency and scalability.

| Data Type | Primary Storage | Reason |
| :--- | :--- | :--- |
| **Auth & Users** | PostgreSQL | Strict schemas, ACID compliance, complex relationships. |
| **Portal Profiles** | PostgreSQL | Relational data between students, organizations, and talents. |
| **Applications** | PostgreSQL | Critical for audit trails, status tracking, and relational integrity. |
| **Scholarships/Jobs** | MongoDB | Highly variable schemas (different fields for different industries/grants). |
| **Activity Logs** | MongoDB | High write volume, time-series nature, no need for complex joins. |
| **Document Metadata** | MongoDB | Flexible structure for storing varying types of file attachments/metadata. |

### 1.2 Multi-Tenant Multi-Portal Logic

- **Shared Auth Core**: Centralized identity management using NextAuth.js or similar.
- **Server Actions**: Leveraging Next.js Server Actions for secure direct-to-database mutations.
- **Zod Validation**: Unified schema validation for both frontend forms and backend API routes.

---

## 2. Phase-wise Implementation

### Phase 1: Infrastructure & Shared Core

- [x] **Environment Setup**: Initialize PostgreSQL (Prisma 7 with `@prisma/adapter-pg`) and MongoDB (Mongoose) clients.
- [x] **Identity & Access**: Implement role-based authentication (RBAC)specifically for `STUDENT`, `TALENT`, and `ORG` roles.
- [x] **Centralized Service Layer**: Create abstract data service classes to handle DB choices internally.
- [x] **Common Schemas**: Define base Zod schemas for multi-portal data exchange.

### Phase 2: Student Portal Functionality

- [ ] **Unified Profile Engine**: Real-time CRUD for student profiles (PostgreSQL).
- [ ] **Smart Scholarship Logic**: Transition `ScholarshipCard` to fetch from MongoDB but track application status in PostgreSQL.
- [ ] **Deadline Synchronization**: Convert the interactive calendar to sync with server-side events.
- [ ] **Application Submission Flow**: Implement the multi-step form for scholarship applications.

### Phase 3: Talent Portal Functionality

- [ ] **Pipeline Automation**: Connect the Kanban board to live application state transitions (PostgreSQL).
- [ ] **Candidate Insight Layer**: Real-time matching scores using background worker processes or edge functions.
- [ ] **Job/Grant Listing Builder**: A flexible MongoDB-backed form for talents to create highly customized scholarship/job posts.

### Phase 4: Integration & Advanced Workflows

- [ ] **Real-time Notifications**: Hybrid system using MongoDB for storage and Socket.io or Server-Sent Events (SSE) for delivery.
- [ ] **Document Processing**: Secure upload and virus scanning integration with MongoDB tracking.
- [ ] **Search & Discovery Engine**: Implement full-text search (ElasticSearch or MongoDB Atlas Search).

---

## 3. Scalability & Production Readiness

- **Database Indexing**: Strategic indexing for high-frequency queries in both PG and Mongo.
- **Caching Layer**: Implementation of Redis for session management and expensive dashboard metrics.
- **Migration Strategy**: Automated migration scripts for PostgreSQL and schema-less evolution for MongoDB.

---

## 4. Hyper-Scalability Strategy

To handle Millions of Users, the following technical gates are implemented:

| Layer | Strategy | Implementation |
| :--- | :--- | :--- |
| **Edge Layer** | Multi-Region Deployment | Use Vercel Edge / Cloudflare Workers for global low-latency. |
| **Compute** | Stateless Services | All logic is horizontally scalable; no local state storage. |
| **Caching** | Distributed Cache | Redis used for session data, rate limiting, and computed metrics. |
| **Database** | Sharding & Read-Replicas | PostgreSQL read-replicas; MongoDB Atlas global clusters with sharding. |
| **Assets** | Persistent CDN | All media served through optimized image-processing CDNs. |

---

## 5. Deep Security Protocol

Security is baked into every layer, not added as a wrapper:

- **Identity Management**: Zero Trust architecture; JWTs rotate frequently; multi-factor authentication (MFA) support.
- **Data Protection**: AES-256 encryption at rest; PII (Personally Identifiable Information) masking and separation.
- **API Defense**:
  - Global Rate Limiting (based on IP + User ID).
  - CSRF protection on all mutations.
  - No SQL Injection via strict ORM/ODM parameterization.
- **Validation**: Recursive Zod validation on ALL inputs (Client -> Server -> Database).
- **Error Handling**: Standardized secure responses that hide stack traces and internal DB schemas.

---

## 6. Choice-Verification Protocol

Whenever a new feature is added, the following decision tree must be applied:

1. **Does it require multi-row transactions across multiple tables?** -> PostgreSQL
2. **Is the data structure highly likely to change frequently (Schema Evolution)?** -> MongoDB
3. **Is it high-frequency "fire-and-forget" data?** -> MongoDB
4. **Is it related to core business identity/roles?** -> PostgreSQL
5. **Does it require global low-latency (Read-Heavy)?** -> Implementation with Redis Caching.
6. **Does it involve PII?** -> Apply encryption/masking service wrappers.
