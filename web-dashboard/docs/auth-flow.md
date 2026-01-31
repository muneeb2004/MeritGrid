# MeritGrid Authentication Flow

Authentication and authorization flow using NextAuth.js with RBAC.

## Login Flow

```mermaid
sequenceDiagram
    actor User
    participant Client as Next.js Client
    participant API as API Routes
    participant Auth as NextAuth.js
    participant DB as PostgreSQL

    User->>Client: Click "Sign In"
    Client->>Auth: Redirect to /api/auth/signin
    Auth->>User: Show OAuth/Credentials Form
    User->>Auth: Submit Credentials
    Auth->>DB: Validate User
    DB-->>Auth: User Record + Role
    Auth->>Auth: Create Session (JWT)
    Auth-->>Client: Set HttpOnly Cookie
    Client-->>User: Redirect to Dashboard
```

## Session Validation

```mermaid
sequenceDiagram
    actor User
    participant Client as Next.js Client
    participant API as API Routes
    participant Auth as NextAuth.js
    participant DB as PostgreSQL

    User->>Client: Access Protected Page
    Client->>API: Request with Session Cookie
    API->>Auth: Validate Session
    Auth->>Auth: Verify JWT Signature
    Auth-->>API: Session + User + Role
    API->>API: Check RBAC Permissions
    alt Has Permission
        API-->>Client: Return Data
        Client-->>User: Render Page
    else No Permission
        API-->>Client: 403 Forbidden
        Client-->>User: Access Denied
    end
```

## Role-Based Access Control (RBAC)

```mermaid
graph TD
    subgraph Roles
        A[ADMIN]
        B[ORG]
        C[TALENT]
        D[STUDENT]
    end

    subgraph Permissions
        E[Manage Users]
        F[Create Scholarships]
        G[Review Applications]
        H[Apply to Scholarships]
        I[View Own Profile]
    end

    A --> E
    A --> F
    A --> G
    A --> H
    A --> I

    B --> F
    B --> G
    B --> I

    C --> G
    C --> I

    D --> H
    D --> I
```

## Roles & Permissions Matrix

| Permission | ADMIN | ORG | TALENT | STUDENT |
| --- | --- | --- | --- | --- |
| Manage Users | ✅ | ❌ | ❌ | ❌ |
| Create Scholarships | ✅ | ✅ | ❌ | ❌ |
| Review Applications | ✅ | ✅ | ✅ | ❌ |
| Apply to Scholarships | ✅ | ❌ | ❌ | ✅ |
| View Own Profile | ✅ | ✅ | ✅ | ✅ |

## Session Configuration

- **Cookie**: `HttpOnly`, `Secure`, `SameSite: strict`
- **Expiry**: 1 hour (with refresh token rotation)
- **Storage**: JWT in cookie, session metadata in Redis
