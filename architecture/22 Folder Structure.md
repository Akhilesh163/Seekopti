# Project Folder Structure

## Monorepo Strategy

RestroCloud utilizes a **Monorepo architecture** powered by **Turborepo** and **PNPM workspaces**. 

### Rationale
In an enterprise SaaS containing multiple interconnected applications (POS Web App, QR Ordering App, Admin Portal, Backend API), a monorepo provides significant advantages:
1. **Shared Typings**: A single source of truth for TypeScript interfaces (e.g., `Order`, `MenuItem`, `User`). If a backend model changes, frontend builds instantly catch typing violations.
2. **Unified UI/UX**: A shared `ui` package ensures Shadcn UI components look identical across the Restaurant POS, the Admin Portal, and the Customer QR menu.
3. **Optimized Builds**: Turborepo aggressively caches build artifacts and test results locally and remotely, drastically cutting down CI/CD pipeline times.
4. **Dependency Management**: PNPM handles hoisting and deduping, ensuring all apps use the exact same versions of React, Tailwind, and Prisma.

---

## Root Structure

```text
restrocloud/
├── apps/
│   ├── web/                    # Main Restaurant Admin + POS (React)
│   ├── qr-menu/                # Customer QR ordering app (React)
│   ├── admin-portal/           # Platform admin dashboard for SaaS owners (React)
│   └── api/                    # Centralized Backend API server (Node.js/Express)
├── packages/
│   ├── shared-types/           # Shared TypeScript interfaces mapped from Prisma
│   ├── ui/                     # Shared Shadcn UI and custom components
│   ├── utils/                  # Shared utility functions (date formatting, currency logic)
│   ├── validators/             # Shared Zod schemas for cross-environment validation
│   └── config/                 # Shared configs (ESLint, TSConfig, Prettier)
├── infrastructure/
│   ├── docker/                 # Dockerfiles and docker-compose configurations
│   ├── nginx/                  # Reverse proxy and SSL configurations
│   ├── scripts/                # CI/CD and DB backup shell scripts
│   └── monitoring/             # Prometheus, Grafana, Promtail configs
├── docs/
│   └── architecture/           # System architecture design documents
├── turbo.json                  # Turborepo pipeline configuration
├── package.json                # Root package configurations & workspace scripts
├── .github/
│   └── workflows/              # GitHub Actions definitions
└── README.md
```

---

## Backend API (`apps/api/`)

The backend follows a **Domain-Driven Module Pattern** combined with a standard layered architecture (Controller → Service → Repository). This structure scales cleanly from 10 to 100+ modules without creating monolithic, unmaintainable files.

### Internal Folder Structure

```text
apps/api/
├── src/
│   ├── index.ts                # Application entry point, handles process lifecycle
│   ├── app.ts                  # Express app initialization and global middleware application
│   ├── config/                 # Environment configurations
│   │   ├── index.ts            # Consolidates process.env parsing
│   │   ├── database.ts         # Prisma/PG setup params
│   │   ├── redis.ts            # Cache instance configs
│   │   ├── s3.ts               # Object storage credentials
│   │   └── constants.ts        # Hardcoded application bounds/limits
│   ├── modules/                # Feature modules (Domain-driven)
│   │   ├── auth/               
│   │   │   ├── auth.controller.ts  # HTTP request/response handling
│   │   │   ├── auth.service.ts     # Core business logic and rules
│   │   │   ├── auth.repository.ts  # Database abstractions (Prisma queries)
│   │   │   ├── auth.routes.ts      # Express Router definitions for module
│   │   │   ├── auth.dto.ts         # Data Transfer Objects
│   │   │   ├── auth.validator.ts   # Zod schema validation middleware wrappers
│   │   │   └── auth.test.ts        # Unit tests for domain logic
│   │   ├── restaurant/         # (Follows same structure as auth)
│   │   ├── branch/
│   │   ├── menu/
│   │   ├── order/
│   │   ├── billing/
│   │   ├── kitchen/
│   │   ├── inventory/
│   │   ├── employee/
│   │   ├── attendance/
│   │   ├── payroll/
│   │   ├── customer/
│   │   ├── notification/
│   │   ├── report/
│   │   └── ... (additional modules)
│   ├── middleware/             # Global HTTP interception layers
│   │   ├── auth.middleware.ts        # Verifies JWT and injects user context
│   │   ├── tenant.middleware.ts      # Validates tenant_id context
│   │   ├── rbac.middleware.ts        # Enforces role-based permissions
│   │   ├── validation.middleware.ts  # Generic Zod interceptor
│   │   ├── rate-limit.middleware.ts  # Redis-based throttling
│   │   ├── error-handler.middleware.ts # Standardized error formatting
│   │   └── request-logger.middleware.ts# Morgan/Winston HTTP logging
│   ├── shared/                 # Code shared across multiple modules
│   │   ├── base.repository.ts  # Generic CRUD operations logic
│   │   ├── base.service.ts     # Generic service logic
│   │   ├── base.controller.ts  # Generic controller logic
│   │   └── pagination.ts       # Cursor parsing utilities
│   ├── socket/                 # Real-time communications
│   │   ├── index.ts            # Socket.IO initialization
│   │   ├── handlers/           # Event handlers mapped to namespaces
│   │   └── middleware/         # Socket authentication
│   ├── jobs/                   # Background Processing (BullMQ)
│   │   ├── queues.ts           # Queue definitions
│   │   ├── workers/            # BullMQ worker initialization
│   │   └── processors/         # Handlers (e.g., pdf-generator, email-sender)
│   ├── lib/                    # 3rd Party Integrations Wrappers
│   │   ├── prisma.ts           # Singleton Prisma client setup
│   │   ├── redis.ts            # Redis connection manager
│   │   ├── s3.ts               # AWS SDK wrappers
│   │   ├── email.ts            # Nodemailer / SMTP configs
│   │   ├── sms.ts              # Twilio / MSG91 API wrappers
│   │   ├── push.ts             # Firebase Admin SDK (FCM)
│   │   └── pdf.ts              # Puppeteer PDF generation
│   ├── utils/                  # Pure utility functions (hashing, math)
│   └── types/                  # API-specific type extensions (e.g., Express Request)
├── prisma/                     # Database schema definition
│   ├── schema.prisma           # Prisma DSL mapping DB tables and RLS
│   ├── migrations/             # SQL migration files history
│   └── seed.ts                 # Base data population script
├── tests/                      # Integration and E2E tests
├── Dockerfile                  # Containerization instructions
├── tsconfig.json               # TypeScript compiler config
└── package.json                # API dependencies and scripts
```

### Backend Architecture Rationale
- **Controller → Service → Repository**: Ensures strict separation of concerns. Controllers only parse HTTP and return JSON. Services contain pure business logic and transactional boundaries. Repositories abstract the ORM (Prisma), meaning if we swap the ORM, the Service layer remains untouched.
- **Dependency Injection**: Services receive repositories, making unit testing highly effective via mocking.
- **Tenant Context Isolation**: The `tenant.middleware` automatically appends `tenant_id` to Prisma queries or relies on Postgres RLS to ensure data bleed is impossible.

---

## Frontend Web (`apps/web/`)

The core Web App functions as the Restaurant Admin Dashboard and the Web POS terminal. Built with React, Vite, and Zustand for state management.

### Internal Folder Structure

```text
apps/web/
├── src/
│   ├── main.tsx                # React DOM render entry and provider wrapping
│   ├── App.tsx                 # Core layout and router initialization
│   ├── routes/                 # Centralized React Router configuration
│   ├── pages/                  # Page-level components mapping to routes
│   │   ├── auth/               # Login, Register, Forgot Password screens
│   │   ├── dashboard/          # Analytics and metric overview
│   │   ├── pos/                # High-performance Point of Sale terminal UI
│   │   ├── orders/             # Order management and history
│   │   ├── menu/               # Catalog, modifier, and combo management
│   │   ├── inventory/          # POs, stock levels, GRNs
│   │   ├── employees/          # Staff directory and HR controls
│   │   ├── customers/          # CRM views
│   │   ├── reports/            # Data tables and chart visualizers
│   │   ├── settings/           # Configuration panels
│   │   └── ... (additional page modules)
│   ├── components/             # Reusable UI building blocks
│   │   ├── ui/                 # Wrapped Shadcn components (buttons, dialogs)
│   │   ├── layout/             # Sidebars, Navbars, Page Wrappers
│   │   ├── forms/              # Reusable React Hook Form wrappers
│   │   ├── tables/             # Generic data grid components
│   │   ├── charts/             # ECharts / Recharts wrappers
│   │   └── shared/             # Domain-specific shared components (e.g., UserAvatar)
│   ├── hooks/                  # Custom React Hooks
│   │   ├── queries/            # React Query hooks (e.g., useOrders, useMenu)
│   │   ├── mutations/          # React Query mutations (e.g., useCreateOrder)
│   │   └── ...                 # UI hooks (e.g., useDebounce, useMediaQuery)
│   ├── services/               # API interaction layer
│   │   ├── api.ts              # Axios instance configuration and interceptors
│   │   └── ...                 # Domain API calls (e.g., authService.ts)
│   ├── store/                  # Global State (Zustand)
│   │   ├── authStore.ts        # JWT token and user profile state
│   │   ├── posStore.ts         # Cart, active bill, offline state management
│   │   └── uiStore.ts          # Sidebar collapse, global modal states
│   ├── lib/                    # Core library initializations (e.g., Socket.io client)
│   ├── utils/                  # Helper functions
│   ├── types/                  # Frontend-specific UI types
│   └── styles/                 # Global CSS and Tailwind directives
├── public/                     # Static assets (images, icons, manifest)
├── index.html                  # HTML template
├── vite.config.ts              # Bundler configuration
├── tailwind.config.ts          # Utility classes configuration
├── tsconfig.json               # TypeScript config
└── package.json                # Web app dependencies
```

### Frontend Architecture Rationale
- **Page vs. Component**: `pages/` contain routed components that stitch state and data fetching together. `components/` are ideally pure, receiving data via props, making them highly testable and reusable.
- **Server State vs. Client State**: React Query (`hooks/queries`) handles all server state (fetching, caching, invalidating). Zustand (`store/`) is strictly reserved for transient client UI state (e.g., cart items in the POS before submission).
- **Service Layer**: API calls are decoupled from components into `services/`. This provides a central place to swap endpoint URLs or modify headers without diving into React components.

---

## Infrastructure Directory Rationale
The `infrastructure/` folder holds the operations footprint outside the application code:
- Docker compose files provide local isolated environments for Redis, Postgres, and the API.
- Promtail and Prometheus configs sit here to easily deploy monitoring sidecars alongside the Node.js instances in production.
