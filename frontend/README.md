# SmartDesk - Ticket Management System

A full-stack ticket management system built with React, Node.js, Express, and PostgreSQL.

## 🏗️ Project Structure

```
SmartDesk/
├── frontend/           # React + Vite frontend application
│   ├── src/           # Source files
│   ├── public/        # Static assets
│   ├── index.html     # Entry HTML
│   └── package.json   # Frontend dependencies
│
├── backend/           # Node.js + Express backend API
│   ├── src/          # Source files
│   │   ├── config/   # Database configuration
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Auth & error handling
│   │   ├── routes/       # API routes
│   │   └── validators/   # Input validation
│   └── package.json  # Backend dependencies
│
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### 1. Clone Repository
```bash
git clone https://github.com/Roshan-113/SmartDesk.git
cd SmartDesk
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create `backend/.env` file:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=smartdesk_db
PORT=5000
NODE_ENV=development
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
```

Create database and setup tables:
```bash
npm run db:create
npm run db:setup
```

Start backend server:
```bash
npm run dev
```
Backend will run on: http://localhost:5000

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create `frontend/.env` file:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start frontend server:
```bash
npm run dev
```
Frontend will run on: http://localhost:5173

## 🎮 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@example.com | password123 |
| Agent | agent@example.com | password123 |
| User | user@example.com | password123 |

## ✨ Features

### User Features
- Create and manage support tickets
- View ticket status and history
- Add comments to tickets
- Search and filter tickets
- Update profile and settings

### Agent Features
- View assigned tickets
- Update ticket status
- Add comments and solutions
- Dashboard with statistics

### Admin Features
- Manage all tickets
- User management (CRUD)
- Assign tickets to agents
- View analytics and reports
- System statistics

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios
- Context API

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt
- express-validator

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Password recovery

### Tickets
- `GET /api/tickets` - Get all tickets (role-based)
- `GET /api/tickets/:id` - Get ticket details
- `POST /api/tickets` - Create new ticket
- `PUT /api/tickets/:id` - Update ticket
- `DELETE /api/tickets/:id` - Delete ticket (admin)

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/stats` - Get user statistics

### Admin
- `GET /api/admin/users` - Get all users
- `POST /api/admin/users` - Create user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/analytics` - Get analytics

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Role-based authorization
- Input validation
- SQL injection prevention
- CORS configuration
- Protected routes

## 📝 Database Schema

### Users Table
- id, name, email, password, role, phone, location, bio
- Roles: user, agent, admin

### Tickets Table
- id, title, description, status, priority, category
- user_id, assigned_to, created_at, updated_at
- Status: open, in-progress, resolved, closed
- Priority: low, medium, high, urgent

### Comments Table
- id, ticket_id, user_id, comment, created_at

## 🧪 Testing

Access the application at http://localhost:5173 and test with demo accounts.

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
```

### Backend
```bash
cd backend
NODE_ENV=production node src/server.js
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License

## 👨‍💻 Author

Roshan-113

## 🆘 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ for efficient ticket management**
