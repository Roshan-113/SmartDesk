# 🎫 SmartDesk - Ticket Management System

A modern, full-stack ticket management system for efficient customer support and issue tracking.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 📋 Overview

SmartDesk is a comprehensive ticket management system that enables organizations to efficiently handle customer support requests, track issues, and manage user interactions. Built with modern web technologies, it provides role-based access for Users, Agents, and Administrators.

---

## ✨ Features

### 👤 User Features
- Create and submit support tickets
- Track ticket status in real-time
- Add comments and updates to tickets
- View personal ticket history
- Search and filter tickets
- Update profile and settings

### 🎧 Agent Features
- View assigned tickets dashboard
- Update ticket status and priority
- Add solutions and comments
- Track performance metrics
- Manage multiple tickets efficiently

### 👨‍💼 Admin Features
- Complete user management (CRUD operations)
- View all tickets across the system
- Assign tickets to agents
- Analytics and reporting dashboard
- System-wide statistics
- Priority and category management

---

## 🏗️ Project Structure

```
SmartDesk/
│
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components (17 pages)
│   │   ├── services/     # API integration layer
│   │   ├── context/      # React Context (Auth, Tickets)
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # Helper functions
│   └── package.json
│
├── backend/              # Node.js + Express API
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Business logic (5 controllers)
│   │   ├── middleware/   # Auth & error handling
│   │   ├── routes/       # API routes (25+ endpoints)
│   │   └── validators/   # Input validation
│   └── package.json
│
└── docs/                 # Documentation
    └── SETUP_GUIDE.md    # Detailed setup instructions
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Roshan-113/SmartDesk.git
cd SmartDesk
```

2. **Setup Backend**
```bash
cd backend
npm install
```

Create `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=smartdesk_db
PORT=5000
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5173
```

Create database and setup:
```bash
npm run db:create
npm run db:setup
npm run dev
```

3. **Setup Frontend**
```bash
cd frontend
npm install
```

Create `frontend/.env`:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start frontend:
```bash
npm run dev
```

4. **Access Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

---

## 🎮 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@example.com | password123 |
| **Agent** | agent@example.com | password123 |
| **User** | user@example.com | password123 |

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **express-validator** - Input validation

---

## 📊 Database Schema

### Tables

**users**
- id, name, email, password, role, phone, location, bio
- Roles: `user`, `agent`, `admin`

**tickets**
- id, title, description, status, priority, category
- user_id, assigned_to, created_at, updated_at
- Status: `open`, `in-progress`, `resolved`, `closed`
- Priority: `low`, `medium`, `high`, `urgent`

**comments**
- id, ticket_id, user_id, comment, created_at

---

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt (10 rounds)
- ✅ Role-based authorization
- ✅ Input validation on all endpoints
- ✅ SQL injection prevention
- ✅ CORS configuration
- ✅ Protected API routes
- ✅ Secure password reset flow

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Password recovery

### Tickets
- `GET /api/tickets` - Get tickets (role-filtered)
- `GET /api/tickets/:id` - Get ticket details
- `POST /api/tickets` - Create ticket
- `PUT /api/tickets/:id` - Update ticket
- `DELETE /api/tickets/:id` - Delete ticket

### Users
- `GET /api/users/profile` - Get profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/stats` - Get statistics

### Admin
- `GET /api/admin/users` - Get all users
- `POST /api/admin/users` - Create user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/analytics` - Get analytics

[View complete API documentation](docs/SETUP_GUIDE.md)

---

## 📱 Pages & Routes

### Public Routes
- `/login` - Login page
- `/register` - Registration
- `/forgot-password` - Password recovery

### User Routes
- `/user/dashboard` - User dashboard
- `/user/tickets` - My tickets
- `/user/tickets/create` - Create ticket
- `/tickets/:id` - Ticket details

### Agent Routes
- `/agent/dashboard` - Agent dashboard
- `/agent/tickets` - Assigned tickets

### Admin Routes
- `/admin/dashboard` - Admin dashboard
- `/admin/tickets` - All tickets
- `/admin/users` - User management
- `/admin/analytics` - Analytics

### Shared Routes
- `/profile` - User profile
- `/settings` - Settings

---

## 🧪 Testing

### Manual Testing
1. Login with demo accounts
2. Test ticket creation and management
3. Test role-based access control
4. Test search and filter functionality
5. Test comment system
6. Test user management (admin)

### Test Scenarios
- User can create tickets
- Agent can update ticket status
- Admin can manage users
- Comments are properly displayed
- Search and filter work correctly
- Authentication is enforced

---

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
# Output in frontend/dist/
```

### Backend
```bash
cd backend
NODE_ENV=production node src/server.js
```

### Environment Variables
Update `.env` files with production values:
- Use strong JWT_SECRET
- Configure production database
- Set proper CORS_ORIGIN
- Enable HTTPS

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Roshan-113**
- GitHub: [@Roshan-113](https://github.com/Roshan-113)

---

## 🆘 Support

For detailed setup instructions, see [SETUP_GUIDE.md](docs/SETUP_GUIDE.md)

For issues and questions:
- Open an issue on GitHub
- Check the troubleshooting section in SETUP_GUIDE.md

---

## 🎯 Roadmap

- [ ] Email notifications
- [ ] File attachments for tickets
- [ ] Real-time updates with WebSockets
- [ ] Advanced analytics dashboard
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Export reports (PDF, CSV)

---

## 📸 Screenshots

### Login Page
Modern split-screen design with SmartDesk branding

### User Dashboard
Clean interface showing ticket statistics and recent tickets

### Admin Panel
Comprehensive user management and analytics

---

## ⚡ Performance

- Fast page loads with Vite
- Optimized database queries with indexes
- Efficient state management
- Responsive design for all devices

---

## 🌟 Acknowledgments

- Built with React and Node.js
- Styled with Tailwind CSS
- Icons from Heroicons
- Database: PostgreSQL

---

**Built with ❤️ for efficient ticket management**

---

## 📞 Contact

For any inquiries or support, please open an issue on GitHub.

---

**Last Updated:** March 27, 2026
**Version:** 1.0.0
**Status:** ✅ Production Ready
