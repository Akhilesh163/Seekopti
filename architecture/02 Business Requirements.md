# Business Requirements: RestroCloud Platform

## 1. Functional Requirements

### 1.1 Authentication & Authorization
- **Description:** Centralized identity management for all platform users.
- **Key Features:** Email/Password login, OTP login, JWT issuance, password reset, RBAC enforcement, session management.
- **Business Rules:** Passwords must be hashed (Argon2/Bcrypt). Sessions expire after 24h, refresh tokens after 7 days.
- **Data Requirements:** User ID, Email, Phone, Hashed Password, Role, Tenant ID.

### 1.2 Company Management (SaaS Admin Portal)
- **Description:** Super Admin portal to manage global tenants.
- **Key Features:** Tenant onboarding, global metrics viewing, feature toggling, platform-wide announcements.
- **Business Rules:** Only Super Admins can access. Cannot view raw tenant customer data (PII).

### 1.3 Subscription & Billing Management
- **Description:** SaaS billing for the restaurants.
- **Key Features:** Plan management, automated invoicing, payment gateway integration, usage tracking (e.g., SMS counts).
- **Business Rules:** Grace period of 7 days post-expiry before account locking.
- **Data Requirements:** Subscription Tier, Start/End Date, Payment Status, Auto-renew flag.

### 1.4 Restaurant (Brand) Management
- **Description:** Top-level configuration for a tenant.
- **Key Features:** Brand identity (logos, colors), global settings, global tax configurations.
- **Business Rules:** A tenant can have multiple brands, but usually maps 1:1.

### 1.5 Branch Management
- **Description:** Physical location management.
- **Key Features:** Geo-location, timezone, specific business hours, branch-specific pricing.
- **Business Rules:** A branch inherits global settings unless overridden.

### 1.6 POS & Billing
- **Description:** Core transactional engine.
- **Key Features:** Order entry, multi-tender split payments, offline mode, discount application, KOT generation.
- **Business Rules:** Must operate without internet. Invoices must be sequential per branch for tax compliance.

### 1.7 Order Management
- **Description:** Lifecycle tracking of all orders.
- **Key Features:** State machine (Draft → Placed → Accepted → Preparing → Ready → Dispatched → Completed/Cancelled).
- **Business Rules:** Cancelled orders must require an authorization PIN and a reason code.

### 1.8 Kitchen Display System (KDS)
- **Description:** Digital kitchen routing.
- **Key Features:** Station routing (e.g., drinks to Bar, food to Grill), bump bars, prep timer alerts, summary screens.
- **Business Rules:** Items exceeding prep SLA highlight in red.

### 1.9 QR Ordering
- **Description:** Contactless guest ordering.
- **Key Features:** Dynamic QR per table, digital menu browsing, Apple/Google Pay checkout, live order status.
- **Business Rules:** Requires active branch hours and available menu items.

### 1.10 Table Management
- **Description:** Floor plan and seating.
- **Key Features:** Visual layout editor, table status (empty, seated, ordered, billed, cleaning), split/merge tables.
- **Business Rules:** Cannot merge a table with an active unsettled bill.

### 1.11 Reservations
- **Description:** Guest booking system.
- **Key Features:** Booking calendar, waitlist management, SMS reminders, no-show tracking.
- **Business Rules:** Overbooking prevented by default unless overridden by manager.

### 1.12 Takeaway Management
- **Description:** Customer pickup handling.
- **Key Features:** Name/Phone capture, scheduled pickup times, arrival notifications.

### 1.13 Delivery Management
- **Description:** In-house fleet and aggregator delivery tracking.
- **Key Features:** Rider assignment, map tracking, delivery zones, delivery fees.
- **Business Rules:** Delivery orders require complete address and phone validation.

### 1.14 Menu Management
- **Description:** Centralized catalog.
- **Key Features:** Categories, sub-categories, items, variants (sizes), modifier groups (add-ons), combos, allergen info.
- **Business Rules:** Deleting an item soft-deletes it to preserve historical order data.

### 1.15 Tax Management
- **Description:** Dynamic taxation engine.
- **Key Features:** Tax groups (GST, VAT, State/Local), inclusive/exclusive toggles, item-level overrides.
- **Business Rules:** Tax calculation must perfectly match localized accounting standards.

### 1.16 Discount & Coupon Management
- **Description:** Promotions engine.
- **Key Features:** Flat/Percentage discounts, buy-one-get-one (BOGO), conditional logic (e.g., "orders over $50").
- **Business Rules:** Max discount limits apply. Cannot apply two exclusive coupons simultaneously.

### 1.17 Inventory Management
- **Description:** Stock tracking.
- **Key Features:** Raw materials, semi-finished goods, unit conversions (Kg to Grams), physical stock counts, wastage logs.
- **Business Rules:** Real-time deduction based on recipe when an order is completed.

### 1.18 Purchase Orders & Vendor Management
- **Description:** Procurement flow.
- **Key Features:** Vendor database, automated PO generation based on par levels, GRN (Goods Received Note).
- **Business Rules:** Received quantities update stock; price variances update average moving cost.

### 1.19 Supplier Ledger
- **Description:** Accounts payable for vendors.
- **Key Features:** Invoice tracking, payment recording, outstanding balances.

### 1.20 Stock Transfer
- **Description:** Inter-branch inventory movement.
- **Key Features:** Dispatch notes, receipt acknowledgment, transit loss tracking.
- **Business Rules:** Sender branch stock reduces on dispatch; receiver stock increases on receipt.

### 1.21 Employee Management
- **Description:** HR database.
- **Key Features:** Profiles, document storage, role assignment, wage rates.
- **Business Rules:** Sensitive docs encrypted.

### 1.22 Attendance
- **Description:** Time tracking.
- **Key Features:** Clock-in/out, PIN/RFID/Biometric support, break tracking.
- **Business Rules:** Geofencing blocks clock-in if off-site (for mobile app users).

### 1.23 Shift Management
- **Description:** Labor scheduling.
- **Key Features:** Roster creation, shift swaps, overtime alerts.

### 1.24 Payroll
- **Description:** Salary computation.
- **Key Features:** Hourly/Fixed pay, deductions, bonuses, payslip generation.

### 1.25 Leave Management
- **Description:** Time off.
- **Key Features:** Leave types, accruals, approval workflows.

### 1.26 Expense Tracking
- **Description:** Petty cash and operational expenses.
- **Key Features:** Receipt uploads, categories, approval chains.

### 1.27 Accounting Integration
- **Description:** Sync with external accounting.
- **Key Features:** Chart of accounts mapping, daily journal entries sync.

### 1.28 Customer CRM
- **Description:** Guest database.
- **Key Features:** Purchase history, average spend, lifetime value, preferences.

### 1.29 Loyalty Program
- **Description:** Retention engine.
- **Key Features:** Points accrual/redemption, tier upgrades.

### 1.30 Gift Cards
- **Description:** Pre-paid value.
- **Key Features:** Digital/Physical issuance, balance tracking.

### 1.31 Marketing
- **Description:** Outreach.
- **Key Features:** SMS/Email campaigns, audience segmentation.

### 1.32 Notifications
- **Description:** Internal/External alerts.
- **Key Features:** Push, SMS, Email, Webhooks.

### 1.33 Reports & Analytics
- **Description:** Data insights.
- **Key Features:** Sales summaries, item performance, labor cost, heatmaps.

### 1.34 Settings
- **Description:** Platform config.
- **Key Features:** Printer routing, receipt templates, POS behavior toggles.

### 1.35 Printer Management
- **Description:** Hardware bridging.
- **Key Features:** IP printer discovery, routing rules (e.g., "Cold drinks print at Bar").

### 1.36 Audit Logs
- **Description:** Security tracking.
- **Key Features:** User action tracking (who, what, when, IP).

### 1.37 Activity Logs
- **Description:** System events.
- **Key Features:** Integration sync statuses, error logs.

### 1.38 API Keys
- **Description:** Developer access.
- **Key Features:** Scoped key generation, rotation.

### 1.39 Webhooks
- **Description:** Event subscriptions.
- **Key Features:** Payload delivery for `OrderCreated`, `InventoryLow`, etc.

### 1.40 Integrations
- **Description:** Third-party connections.
- **Key Features:** Payment gateways, delivery aggregators.

---

## 2. Non-Functional Requirements

- **Performance:** 
  - API response <200ms (p95).
  - POS billing operations <500ms (must feel instantaneous).
  - Web dashboards load in <2s.
- **Scalability:** Architecture must gracefully support 100,000+ restaurants and 1,000,000+ concurrent users/devices globally.
- **Availability:** 99.9% uptime SLA (allowing ~43 minutes downtime/month).
- **Security:** Strict adherence to OWASP Top 10, GDPR compliant data handling, PCI-DSS readiness (no raw card data stored).
- **Reliability:** Zero data loss for financial transactions. Multi-AZ automatic failover for databases.
- **Maintainability:** Highly modular architecture. Mandatory >80% unit/integration test coverage.
- **Usability:** POS must be highly responsive to touch, operable by non-technical staff with <1 hour of training.

---

## 3. Complete RBAC Permission Matrix

*Legend: C = Create, R = Read, U = Update, D = Delete, - = No Access*
*(Note: Showing a representative subset due to format constraints, to be expanded in implementation)*

| Module | Super Admin | Company Admin | Rest. Owner | Rest. Admin | Branch Mgr | Cashier | Captain | Waiter | Kitchen | Inventory |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Global Settings** | CRUD | R | R | R | R | - | - | - | - | - |
| **Subscription** | CRUD | RU | R | R | - | - | - | - | - | - |
| **Branch Mgmt** | CRUD | CRUD | CRUD | CRUD | R | - | - | - | - | - |
| **POS Billing** | R | R | R | R | RU | CRUD | CR | CR | R | - |
| **Menu Mgmt** | CRUD | CRUD | CRUD | CRUD | R | R | R | R | R | R |
| **Inventory Core** | CRUD | CRUD | CRUD | CRUD | RU | R | - | - | R | CRUD |
| **Purchase Orders** | CRUD | CRUD | CRUD | CRUD | CRU | - | - | - | - | CRUD |
| **Employee Mgmt** | CRUD | CRUD | CRUD | CRUD | R | - | - | - | - | - |
| **Reports** | R | R | R | R | R (Branch) | - | - | - | - | R (Inv) |
| **KDS** | R | R | R | R | R | R | R | - | RU | - |

*(Footnotes: Branch Managers can only Read/Update entities associated with their specific branch. Cashiers can only Create/Update orders assigned to their shift register.)*

---

## 4. Multi-Tenant Architecture

### 4.1 Comparison Table

| Approach | Setup Complexity | Isolation/Security | Scalability (100k+ tenants) | Cost | Maintenance/Migrations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **DB Per Tenant** | High | Very High | Poor (Connection limits) | Very High | Very Hard |
| **Separate Schema** | Medium | High | Poor/Medium | High | Hard |
| **Shared Schema (RLS)**| Medium | High (Database Level) | Excellent | Low | Easy (One schema) |

### 4.2 Recommendation: Shared DB Shared Schema with RLS
**Recommendation:** We strictly implement **Shared Schema with Row-Level Security (RLS)**.

**10+ Reasons Why:**
1. **Cost Efficiency:** Maximizes hardware utilization without idle DB instances.
2. **Migration Speed:** Running `ALTER TABLE` happens once, not 100,000 times.
3. **Connection Pooling:** PgBouncer can efficiently manage connections to a single DB.
4. **Agility:** Onboarding a new tenant takes milliseconds (just an INSERT into the tenants table).
5. **Cross-Tenant Aggregation:** Super Admin analytics are natively easier to query.
6. **Robust Isolation:** Postgres RLS guarantees data separation at the kernel level of the database, preventing application-layer query mistakes.
7. **ORM Compatibility:** Prisma integrates cleanly with client extensions to inject `tenant_id`.
8. **Operational Simplicity:** Only one database cluster to monitor, backup, and tune.
9. **Performance:** Query planner optimizes across all data globally.
10. **Enterprise Ejection Path:** If an enterprise demands a dedicated DB, logical replication can extract their `tenant_id` to a dedicated cluster later.

### 4.3 Data Isolation Strategy
- **Middleware:** Every authenticated API request extracts `tenant_id` from the JWT.
- **Query Scoping:** The ORM client is extended to automatically inject `WHERE tenant_id = X` into every query.
- **RLS Policies:** At the Postgres level: `CREATE POLICY tenant_isolation ON orders USING (tenant_id = current_setting('app.current_tenant')::uuid);`

---

## 5. Dashboard Requirements

### Platform Dashboard (Super Admin)
- Active Tenants, MRR (Monthly Recurring Revenue), Churn Rate, API Latency p95, System Error Rate, SMS Gateway usage, Global Gross Merchandise Value (GMV).

### Restaurant Dashboard (Owner)
- Consolidated Brand Sales, Top Performing Branches, Consolidated Food Cost %, Labor Cost %, Franchise Royalties owed, aggregated feedback score.

### Branch Dashboard (Manager)
- Real-time Today's Sales, Open Table Count, Active Orders, Wait Time Avg, Top Selling Items today, Staff currently clocked in, Void/Discount % (Theft indicator).

**Refresh Strategy:** Core metrics (Sales, Tables) stream via WebSockets. Heavy analytical metrics (Food Cost %) calculate via background materialized views refreshing hourly.

---

## 6. Order Flows

### Dine-In State Transition
1. **Seated:** Table opened.
2. **Draft KOT:** Captain adds items.
3. **Placed:** KOT fired to kitchen (Prints/KDS). State -> `Preparing`.
4. **Ready:** Kitchen bumps order. Waiter notified. State -> `Served`.
5. **Billed:** Guest asks for check. Invoice generated. State -> `Payment Pending`.
6. **Completed:** Payment received. Table cleared.

### Delivery State Transition
`Draft` → `Placed` → `Accepted` (by POS) → `Preparing` → `Ready for Pickup` → `Dispatched` (Rider assigned) → `Delivered`.

---

## 7. Business Logic Workflows (Example: Inventory Deduction)
1. POS completes an Order.
2. POS publishes `OrderCompleted` event to BullMQ.
3. Inventory Worker picks up the job.
4. Fetches ordered items and their mapped standard recipes.
5. Iterates through raw ingredients (e.g., 1 Burger = 1 Bun, 150g Patty, 20g Sauce).
6. Executes a DB transaction reducing raw stock by exact quantities.
7. Checks if new stock level < Par Level. If yes, generates `LowStockAlert` event.
8. Triggers Webhook/Notification to Branch Manager.

---

## 8. Security Requirements
- **Auth:** JWT Access Tokens (15m expiry) + HttpOnly Secure Refresh Tokens (7d).
- **Passwords:** Argon2id hashing.
- **Protection:** Helmet.js for headers, CSRF tokens, strict CORS, express-rate-limit.
- **Validation:** Zod schemas for all inbound API requests (prevents NoSQL/SQL injection and malformed data).
- **Secrets:** Managed via AWS Secrets Manager / GitHub Secrets.
- **GDPR:** End-user data anonymization utilities, "Right to be Forgotten" endpoints.

---

## 9. Performance Optimization
- **Database:** UUID v7 or sequential IDs to prevent index fragmentation. Composite indexes on `(tenant_id, branch_id, created_at)`.
- **Caching:** Redis caches catalog/menu data (invalidated on update). 
- **API:** Cursor-based pagination for large datasets (orders, inventory logs). Gzip/Brotli compression.
- **Connection Pooling:** PgBouncer in transaction mode to handle thousands of concurrent serverless/edge functions.

---

## 10. Backup & DR (Disaster Recovery)
- **Primary:** AWS RDS Postgres / Aurora Auto-Scaling.
- **Backups:** Continuous WAL archiving to S3 for Point-in-Time Recovery (PITR) up to 5 minutes ago. Daily full snapshots retained for 30 days.
- **RTO/RPO:** Recovery Time Objective (RTO) < 1 hour. Recovery Point Objective (RPO) < 5 minutes.
- **High Availability:** Multi-AZ deployment. If primary DB fails, standby promotes to primary in < 30 seconds automatically.
