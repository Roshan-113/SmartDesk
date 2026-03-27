# 🎫 Service Request & Ticketing System


## 📋 Problem Statement

Build a ticketing system where customers/staff create service requests and agents resolve them.

**Objective:** Improve service tracking, accountability, and turnaround management.

**Expected Outcome:** Status-driven ticket workflow with searchable and filterable ticket records.

---

## 🏗️ Tech Stack (T0 Confirmed)

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + Vite |
| **Styling** | Tailwind CSS |
| **Routing** | React Router v6 |
| **State** | React Context API |
| **Icons** | Lucide React |
| **HTTP Client** | Axios (ready for backend) |

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

**Access:** http://localhost:5173

### 🔐 Demo Credentials (Frontend Only - No Backend Required)

| Role | Email | Password |
|------|-------|----------|
| **User** | user@example.com | any |
| **Agent** | agent@example.com | any |
| **Admin** | admin@example.com | any |

---

## 📁 Project Structure (T+4 Architecture)

```
frontend/
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── common/              # SearchBar, StatCard
│   │   ├── layout/              # Navbar, Sidebar, DashboardLayout
│   │   ├── ticket/              # TicketCard, TicketTable
│   │   └── ui/                  # Button, Badge, Modal (Design System)
│   │
│   ├── pages/
│   │   ├── auth/                # Login, Register
│   │   ├── user/                # Dashboard, CreateTicket, MyTickets
│   │   ├── agent/               # Dashboard, AssignedTickets
│   │   ├── admin/               # Dashboard, AllTickets, Users, Analytics
│   │   └── shared/              # TicketDetail, Unauthorized
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx        # Main routing configuration
│   │   ├── PrivateRoute.jsx     # Authentication guard
│   │   └── RoleRoute.jsx        # 🔥 Role-based access control
│   │
│   ├── services/
│   │   ├── api.js               # Axios instance (base config)
│   │   ├── authService.js       # Authentication logic
│   │   ├── ticketService.js     # Ticket CRUD operations
│   │   └── userService.js       # User management
│   │
│   ├── context/
│   │   ├── AuthContext.jsx      # Global auth state
│   │   └── TicketContext.jsx    # 🔥 Global ticket management
│   │
│   ├── hooks/
│   │   ├── useAuth.js           # Auth hook
│   │   └── useTickets.js        # Tickets hook
│   │
│   ├── utils/
│   │   ├── constants.js         # Status, Priority, Roles
│   │   ├── helpers.js           # Color mapping functions
│   │   └── formatDate.js        # Date utilities
│   │
│   ├── config/
│   │   └── env.js               # 🔥 Environment configuration
│   │
│   ├── styles/
│   │   ├── auth.css             # Auth page styles
│   │   ├── user.css             # User page styles
│   │   ├── admin.css            # Admin page styles
│   │   └── globals.css          # Global styles
│   │
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind imports
│
├── .env                         # Environment variables
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🗂️ Data Models (T+4 Sketched)

### User Model
```javascript
{
  id: number,
  name: string,
  email: string,
  role: 'user' | 'agent' | 'admin',
  createdAt: timestamp,
  status: 'active' | 'inactive'
}
```

### Ticket Model
```javascript
{
  id: number,
  title: string,
  description: string,
  status: 'open' | 'in-progress' | 'resolved' | 'closed',
  priority: 'low' | 'medium' | 'high' | 'urgent',
  category: 'technical' | 'billing' | 'feature' | 'other',
  userId: number,
  assignedTo: number | null,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Comment Model
```javascript
{
  id: number,
  ticketId: number,
  userId: number,
  author: string,
  text: string,
  timestamp: string
}
```

---

## 🎯 Main Screens/Routes (T+4 Defined)

### Public Routes
- `/login` - User authentication
- `/register` - New user registration

### User Routes (Role: user)
- `/user/dashboard` - User overview with stats
- `/user/tickets/create` - Create new ticket
- `/user/tickets` - View my tickets
- `/tickets/:id` - Ticket details with comments

### Agent Routes (Role: agent)
- `/agent/dashboard` - Agent overview
- `/agent/tickets` - Assigned tickets list

### Admin Routes (Role: admin)
- `/admin/dashboard` - System overview & analytics
- `/admin/tickets` - All tickets management
- `/admin/users` - User management
- `/admin/analytics` - Performance metrics

### Shared Routes
- `/tickets/:id` - Ticket detail (all roles)
- `/unauthorized` - Access denied page

---

## ✅ T+4 Checkpoint Deliverables

### ✅ Repository Created
- Git initialized
- Clean folder structure
- All files organized

### ✅ Base Project Running
- Vite dev server working
- Tailwind CSS configured
- All dependencies installed

### ✅ Main Screens/Routes Defined
- 12+ pages implemented
- Role-based routing working
- Navigation functional

### ✅ Project Structure
- Components organized by feature
- Pages separated by role
- Services layer ready for API
- Reusable UI components

### ✅ Data Models Sketched
- User, Ticket, Comment models defined
- Status and priority enums
- Relationships documented

---

## 🎨 Features Implemented

### Authentication & Authorization
- ✅ Login/Register pages
- ✅ Role-based access control (User/Agent/Admin)
- ✅ Protected routes
- ✅ Automatic role-based redirects

### Ticket Management
- ✅ Create tickets with priority & category
- ✅ View ticket list with filters
- ✅ Search functionality
- ✅ Status tracking (Open, In Progress, Resolved, Closed)
- ✅ Priority levels (Low, Medium, High, Urgent)
- ✅ Ticket detail view with comments

### User Interface
- ✅ Responsive design (mobile-friendly)
- ✅ Modern Tailwind CSS styling
- ✅ Separate CSS files (auth, user, admin)
- ✅ Reusable component library
- ✅ Consistent design system

### Dashboard & Analytics
- ✅ User dashboard with ticket stats
- ✅ Agent dashboard with assigned tickets
- ✅ Admin dashboard with system overview
- ✅ Analytics page with metrics

---

## 🔧 Constraints & Considerations (Met)

✅ **Ticket Properties:** Priority, status, timestamps included  
✅ **Filtering:** Search and filter by status, priority  
✅ **Role Split:** User, Agent, Admin roles implemented  
✅ **Quick Triage:** Priority-based sorting available

---

## 📊 Progressive Milestones

### ✅ T+4: Create ticket + list tickets
- Create ticket form functional
- Ticket list with table view
- Mock data working

### 🔜 T+8: Assign + update status
- Agent assignment (ready for backend)
- Status update functionality
- Real-time updates (when backend added)

### 🔜 T+12: Comments + filtering
- Comment system implemented
- Advanced filtering
- Search optimization

---

## 🔌 Backend Integration (Ready)

All services are ready for backend integration:

```javascript
// Example: Replace mock data in src/services/ticketService.js
export const ticketService = {
  getAllTickets: async () => {
    return api.get('/tickets')  // Replace mock with this
  }
}
```

**Environment Setup:**
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🎓 Evaluation Criteria

| Criteria | Status |
|----------|--------|
| Clean project structure | ✅ Organized by feature |
| Role-based authentication | ✅ 3 roles implemented |
| Status-driven workflow | ✅ 4 statuses tracked |
| Searchable records | ✅ Search implemented |
| Filterable records | ✅ Filters working |
| Priority tracking | ✅ 4 priority levels |
| Timestamp tracking | ✅ Created/Updated times |
| Responsive design | ✅ Mobile-friendly |

---

## 👥 Team Information

**Domain:** Service Management  
**Problem:** Ticket tracking for small businesses  
**Tech Stack:** React + Vite + Tailwind CSS  

---

## 📝 License

