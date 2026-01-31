# MeritGrid System Architecture

High-level overview of the MeritGrid platform architecture.

## System Overview

```mermaid
graph TD
    subgraph Client["Client Layer"]
        A[Next.js App<br/>React + TypeScript]
        B[Mobile Web<br/>Responsive PWA]
    end

    subgraph API["API Layer"]
        C[Next.js API Routes]
        D[Services Layer<br/>BaseService Pattern]
        E[Authentication<br/>NextAuth.js]
    end

    subgraph Data["Data Layer"]
        F[(PostgreSQL<br/>Prisma ORM)]
        G[(MongoDB<br/>Mongoose)]
        H[(Redis<br/>Cache + Sessions)]
    end

    subgraph External["External Services"]
        I[Email Provider<br/>SendGrid/SES]
        J[File Storage<br/>S3/Cloudinary]
        K[Analytics<br/>Sentry/Vercel]
    end

    A --> C
    B --> C
    C --> E
    C --> D
    D --> F
    D --> G
    D --> H
    D --> I
    D --> J
    C --> K
```

## Component Responsibilities

| Layer | Component | Purpose |
| --- | --- | --- |
| Client | Next.js App | SSR/SSG pages, React components |
| API | API Routes | HTTP endpoints, request validation |
| API | Services | Business logic, data orchestration |
| API | NextAuth.js | Authentication, session management |
| Data | PostgreSQL | Users, roles, applications (relational) |
| Data | MongoDB | Scholarships, careers (document) |
| Data | Redis | Session cache, rate limiting |

## Key Design Decisions

1. **Hybrid Database**: PostgreSQL for ACID transactions, MongoDB for flexible schemas
2. **Service Layer Pattern**: All business logic in `services/` extending `BaseService`
3. **Demo Data Fallback**: Database calls gracefully fall back to mock data during development
4. **Edge-Ready**: Designed for Vercel Edge Functions and AWS deployment
