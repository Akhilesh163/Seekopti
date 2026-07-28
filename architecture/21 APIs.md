# REST API Documentation

## API Conventions

This document outlines the standard conventions, endpoints, and architectural principles for the RestroCloud REST API. The API is designed to be highly scalable, tenant-aware, and secure, serving the needs of the multi-tenant SaaS platform ranging from 100 to 100,000 restaurants.

### Core Principles
- **Base URL**: `https://api.restrocloud.com/v1`
- **Authentication**: Bearer JWT token in the `Authorization` header (`Authorization: Bearer <token>`).
- **Content-Type**: All requests and responses must use `application/json`.
- **Pagination**: Cursor-based pagination is enforced on all list endpoints for performance at scale.
  - Query Params: `?cursor=xxx&limit=20` (Default limit: 20, Max: 100).
- **Filtering**: Query parameters are used for exact matches and range queries.
  - Example: `?status=active&branch_id=b_123&date_gte=2024-01-01`
- **Sorting**: Standardized sort parameters.
  - Example: `?sort=created_at&order=desc`
- **Field Selection**: Partial responses to minimize bandwidth.
  - Example: `?fields=id,name,status,created_at`
- **Rate Limiting**: 
  - Standard tier: 100 requests per minute per IP/Tenant.
  - Enterprise tier: 1000 requests per minute per IP/Tenant.
  - Response headers include `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`.
- **Versioning**: URL-based routing to ensure backward compatibility. Currently `v1`.
- **Error Format**: Standardized JSON error schema.
  ```json
  {
    "error": {
      "code": "VALIDATION_FAILED",
      "message": "Invalid input provided.",
      "details": {
        "field": "email",
        "issue": "Invalid email format"
      },
      "request_id": "req_abc123"
    }
  }
  ```
- **HTTP Status Codes**:
  - `200 OK`: Successful GET, PUT, PATCH.
  - `201 Created`: Successful POST.
  - `204 No Content`: Successful DELETE.
  - `400 Bad Request`: Validation or logic errors.
  - `401 Unauthorized`: Missing or invalid JWT.
  - `403 Forbidden`: Valid JWT but insufficient permissions (RBAC).
  - `404 Not Found`: Resource does not exist.
  - `409 Conflict`: Resource state conflict (e.g., email already exists).
  - `422 Unprocessable Entity`: Semantic errors.
  - `429 Too Many Requests`: Rate limit exceeded.
  - `500 Internal Server Error`: Unhandled backend exception.

---

## Modules

> [!NOTE]
> All tenant contexts (`tenant_id`) are automatically inferred from the authenticated user's JWT. Cross-tenant access is physically blocked at the database level using Postgres Row-Level Security (RLS).

### 1. Authentication (`/auth`)

Handles identity, session management, and credential recovery.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | None | Register a new company/restaurant |
| POST | `/auth/login` | None | Authenticate user, receive JWT pair |
| POST | `/auth/refresh` | None | Refresh access token using refresh token |
| POST | `/auth/logout` | Bearer | Revoke current session token |
| POST | `/auth/forgot-password`| None | Initiate password reset email |
| POST | `/auth/reset-password` | None | Complete password reset |
| POST | `/auth/verify-email` | None | Verify user email address |
| GET | `/auth/sessions` | Bearer | List active sessions across devices |
| DELETE | `/auth/sessions/:id` | Bearer | Revoke specific session |
| POST | `/auth/change-password` | Bearer | Change password for authenticated user |

**Example: Login Response**
```json
{
  "data": {
    "user": {
      "id": "usr_987",
      "email": "manager@restaurant.com",
      "role": "Branch Manager",
      "tenant_id": "tnt_456",
      "branch_id": "br_123"
    },
    "tokens": {
      "access_token": "eyJhbG... (expires in 15m)",
      "refresh_token": "def502... (expires in 7d)"
    }
  }
}
```

### 2. Company (`/companies`) - Platform Admin Only

Super Admin endpoints to manage the multi-tenant landscape.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/companies` | Bearer | List all registered companies |
| POST | `/companies` | Bearer | Create a new company manually |
| GET | `/companies/:id` | Bearer | Get company details |
| PUT | `/companies/:id` | Bearer | Update company metadata |
| DELETE | `/companies/:id` | Bearer | Soft delete company and cascade |
| GET | `/companies/:id/subscription`| Bearer | Get subscription details |

### 3. Restaurants (`/restaurants`)

A Company can own multiple Restaurants (Brands).

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/restaurants` | Bearer | List all restaurants under company |
| POST | `/restaurants` | Bearer | Create a new restaurant brand |
| GET | `/restaurants/:id` | Bearer | Get restaurant details |
| PUT | `/restaurants/:id` | Bearer | Update restaurant settings/branding |
| DELETE | `/restaurants/:id` | Bearer | Delete restaurant |
| GET | `/restaurants/:id/onboarding`| Bearer | Get onboarding checklist status |

### 4. Branches (`/branches`)

Physical locations for a restaurant brand.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/branches` | Bearer | List all branches |
| POST | `/branches` | Bearer | Create a new branch |
| GET | `/branches/:id` | Bearer | Get branch settings |
| PUT | `/branches/:id` | Bearer | Update branch configurations |
| DELETE | `/branches/:id` | Bearer | Close/delete branch |
| PATCH| `/branches/:id/hours` | Bearer | Update operating hours |

### 5. Users & Roles (`/users`, `/roles`, `/permissions`)

Identity and Access Management via Permission Matrix.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/users` | Bearer | List users for tenant |
| POST | `/users` | Bearer | Invite/Create new user |
| GET | `/users/:id` | Bearer | Get user profile |
| PUT | `/users/:id` | Bearer | Update user (role, status) |
| DELETE | `/users/:id` | Bearer | Deactivate user |
| GET | `/roles` | Bearer | List available roles |
| GET | `/permissions` | Bearer | List system permissions matrix |

### 6. Menu (`/menu-items`, `/categories`, `/modifiers`, `/combos`)

Hierarchical menu architecture.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/categories` | Bearer | List menu categories |
| GET | `/menu-items` | Bearer | List menu items |
| POST | `/menu-items` | Bearer | Create new menu item |
| GET | `/menu-items/:id` | Bearer | Get item details including modifiers |
| PUT | `/menu-items/:id` | Bearer | Update item |
| DELETE | `/menu-items/:id` | Bearer | Delete item |
| POST | `/menu-items/bulk-import`| Bearer | Import items via CSV/JSON |
| GET | `/modifiers` | Bearer | List modifier groups |

**Example: Create Menu Item**
```json
{
  "name": "Truffle Burger",
  "category_id": "cat_001",
  "price": 15.99,
  "cost_price": 4.50,
  "tax_group_id": "tx_std",
  "description": "Wagyu beef with truffle mayo.",
  "modifier_groups": [
    {
      "id": "mod_grp_1",
      "min_selections": 0,
      "max_selections": 1
    }
  ],
  "branch_overrides": [
    {
      "branch_id": "br_ny_1",
      "price": 18.99,
      "is_active": true
    }
  ]
}
```

### 7. Orders (`/orders`)

Core transaction entity. Follows robust state machine (Draft -> Placed -> KOT Generated -> Prepared -> Billed -> Settled).

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/orders` | Bearer | List orders (filterable by branch, status) |
| POST | `/orders` | Bearer | Create order (Dine-in, Takeaway, Delivery) |
| GET | `/orders/:id` | Bearer | Get full order state & KOTs |
| PATCH| `/orders/:id/status` | Bearer | Transition order status |
| DELETE | `/orders/:id` | Bearer | Cancel order (requires reason) |
| POST | `/orders/:id/kot` | Bearer | Generate KOT for unsent items |

### 8. Billing (`/bills`)

Financial settlement of orders.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/bills` | Bearer | Generate bill for an order |
| POST | `/bills/:id/discounts`| Bearer | Apply discount/coupon |
| POST | `/bills/:id/payments` | Bearer | Process partial/full payment |
| POST | `/bills/:id/split` | Bearer | Split bill by items or evenly |
| POST | `/bills/:id/refund` | Bearer | Initiate refund / create credit note |

### 9. Tables (`/tables`, `/reservations`)

Floor plan and seating mechanics.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/tables` | Bearer | List tables with real-time status |
| POST | `/tables` | Bearer | Create a table/zone |
| PATCH| `/tables/:id/status` | Bearer | Update table status (e.g., dirty -> clean) |
| POST | `/tables/merge` | Bearer | Merge multiple tables |
| GET | `/reservations` | Bearer | List reservations |
| POST | `/reservations` | Bearer | Create reservation |

### 10. QR Ordering (`/qr`)

Customer-facing lightweight API for self-ordering.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/qr/menu/:branch_id/:table_id`| None | Fetch localized menu for QR |
| POST | `/qr/order` | None | Customer places order |
| GET | `/qr/order/:id/status` | None | Poll order status |
| POST | `/qr/order/:id/add-items` | None | Add items to existing session |

### 11. Kitchen (`/kitchen`)

Kitchen Display System (KDS) integration.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/kitchen/orders` | Bearer | KDS Feed: Get active KOTs |
| PATCH| `/kitchen/items/:id/status`| Bearer | Mark item as preparing/ready |
| POST | `/kitchen/items/:id/refire` | Bearer | Refire a returned/spoiled item |

### 12. Inventory (`/inventory`)

Stock tracking, POs, and GRNs.

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/inventory/stock` | Bearer | View current stock levels |
| POST | `/inventory/purchase-orders` | Bearer | Create PO for vendor |
| POST | `/inventory/grn` | Bearer | Goods Receipt Note (receive stock) |
| POST | `/inventory/transfers` | Bearer | Inter-branch stock transfer |
| POST | `/inventory/adjustments` | Bearer | Manual stock adjustment (audit/loss) |
| POST | `/inventory/waste` | Bearer | Log wasted ingredients |

### 13-34. Remaining Modules

For brevity in this foundational document, standard REST principles apply across the remaining domains:
- **Vendors (`/vendors`)**: Manage suppliers and AP ledger.
- **Recipes (`/recipes`)**: Link Menu Items to Inventory Items via yield/BOM.
- **Employees (`/employees`)**: HR profiles, document storage via S3.
- **Attendance (`/attendance`)**: Biometric/PIN clock-in, break tracking.
- **Shifts (`/shifts`)**: Roster management, swaps.
- **Payroll (`/payroll`)**: Salary structures, payslip generation (PDF via Puppeteer).
- **Leaves (`/leaves`)**: Accruals, applications, workflow.
- **Expenses (`/expenses`)**: Branch-level petty cash.
- **Customers (`/customers`)**: CRM profiles, LTV tracking.
- **Loyalty (`/loyalty`)**: Rule configuration, points ledger.
- **Coupons/Discounts (`/coupons`)**: Code validation, constraints.
- **Gift Cards (`/gift-cards`)**: Issuance, redemption logic.
- **Taxes (`/taxes`)**: Complex tax groups (e.g., GST, VAT, inclusive/exclusive).
- **Notifications (`/notifications`)**: In-app inbox, FCM tokens.
- **Reports (`/reports`)**: Async generation of heavy analytics queries (CSV/PDF).
- **Dashboard (`/dashboard`)**: Aggregated metrics for visualizations.
- **Settings (`/settings`)**: POS, Printer mappings, terminal configurations.
- **Audit (`/audit-logs`)**: Immutable logging of sensitive actions.
- **Webhooks (`/webhooks`)**: Outbound event subscriptions.
- **API Keys (`/api-keys`)**: 3rd party developer access.
- **Integrations (`/integrations`)**: Delivery aggregators, accounting sync.
- **Marketing (`/campaigns`)**: SMS/Email broadcasts.

---

## WebSocket Events (Socket.IO)

Real-time communication is critical for the POS, KDS, and QR Ordering systems. Clients connect with their JWT token, and the `tenant_id` and `branch_id` dictates the rooms they join.

### Namespaces & Rooms
- **Namespace**: `/`
- **Rooms**: `tenant:{tenant_id}`, `branch:{branch_id}`, `kds:{branch_id}:{department_id}`

### Server-to-Client Events (Emitted by Server)

| Event Name | Payload Scope | Description |
|------------|---------------|-------------|
| `order:new` | `{ order_id, table_id, amount, items }` | A new order was created (via POS, QR, or Aggregator). |
| `order:status-change` | `{ order_id, old_status, new_status }` | Order moved states (e.g., Prepared -> Billed). |
| `order:cancelled` | `{ order_id, reason }` | Order was voided. |
| `kitchen:new-kot` | `{ kot_id, order_id, items, time }` | New KOT arrived at the kitchen station. |
| `kitchen:item-status`| `{ item_id, status }` | KDS marked an item as preparing/done. |
| `kitchen:item-ready` | `{ order_id, ready_items }` | Alert waiter/customer that food is ready. |
| `table:status-change`| `{ table_id, status, order_id }`| Table visual state updated (Available, Occupied, Billed).|
| `notification:new` | `{ id, title, message, type }` | Real-time push notification for users. |
| `attendance:clock-in`| `{ employee_id, time }` | Employee punched in. |
| `inventory:low-stock`| `{ item_id, current_stock, threshold }`| Alert manager that an ingredient is critically low. |
| `pos:sale-completed` | `{ bill_id, total }` | Bill settled successfully. |

### Client-to-Server Events (Emitted by Client)
*Note: Most state mutations should happen via REST POST/PUT requests. WebSockets are primarily used for fast state subscriptions. However, specific high-frequency low-latency updates are supported.*

- `kds:mark-ready`: `{ item_id }`
- `kds:mark-preparing`: `{ item_id }`
- `pos:ping`: Ensure terminal is online.
