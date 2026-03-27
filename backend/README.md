# SmartDesk Backend API

Backend API for SmartDesk Ticket Management System built with Node.js, Express, and PostgreSQL.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation Steps

#### 1. Install Dependencies
```bash
cd backend
npm install
```

#### 2. Configure Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=smartdesk_db
DB_USER=postgres
DB_PASSWORD=your_password_here

JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d

CORS_ORIGIN=http://localhost:5173
```

#### 3. Setup PostgreSQL Database

**Option A: Using pgAdmin or psql**
```sql
CREATE DATABASE smartdesk_db;
```

**Option B: Using Command Line**
```bash
psql -U postgres
CREATE DATABASE smartdesk_db;
\q
```

#### 4. Run Database Setup Script
```bash
npm run db:setup
```

This will:
- Create all necessary tables (users, tickets, comments)
- Create indexes for better performance
- Insert demo data
- Create demo accounts

#### 5. Start the Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📝 Demo Accounts

After running `npm run db:setup`, you'll have these demo accounts:

| Role  | Email | Password |
|-------|-------|----------|
| Admin | admin@example.com | password123 |
| Agent | agent@example.com | password123 |
| User  | user@example.com | password123 |

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Request password reset

### Tickets
- `GET /api/tickets` - Get all tickets (filtered by role)
- `GET /api/tickets/stats` - Get ticket statistics
- `GET /api/tickets/:id` - Get single ticket
- `POST /api/tickets` - Create new ticket (User only)
- `PUT /api/tickets/:id` - Update ticket (Agent/Admin)
- `DELETE /api/tickets/:id` - Delete ticket (Admin only)

### Comments
- `GET /api/tickets/:ticketId/comments` - Get ticket comments
- `POST /api/tickets/:ticketId/comments` - Add comment

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/agents` - Get all agents (Admin)
- `GET /api/users/:id` - Get single user (Admin)
- `POST /api/users` - Create user (Admin)
- `PUT /api/users/:id` - Update user (Admin)
- `DELETE /api/users/:id` - Delete user (Admin)

### Admin Analytics
- `GET /api/admin/stats` - Get dashboard statistics
- `GET /api/admin/analytics/metrics` - Get performance metrics
- `GET /api/admin/analytics/priority-distribution` - Get priority distribution
- `GET /api/admin/analytics/category-distribution` - Get category distribution

## 🔒 Authentication

All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## 🗄️ Database Schema

### Users Table
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- email (VARCHAR UNIQUE)
- password (VARCHAR - hashed)
- role (VARCHAR - user/agent/admin)
- phone, location, bio (optional fields)
- created_at, updated_at (TIMESTAMP)

### Tickets Table
- id (SERIAL PRIMARY KEY)
- title (VARCHAR)
- description (TEXT)
- status (VARCHAR - open/in-progress/resolved/closed)
- priority (VARCHAR - low/medium/high/urgent)
- category (VARCHAR)
- user_id (FOREIGN KEY → users)
- assigned_to (FOREIGN KEY → users)
- created_at, updated_at (TIMESTAMP)

### Comments Table
- id (SERIAL PRIMARY KEY)
- ticket_id (FOREIGN KEY → tickets)
- user_id (FOREIGN KEY → users)
- comment (TEXT)
- created_at (TIMESTAMP)

## 🛠️ Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js          # PostgreSQL connection
│   │   └── setupDatabase.js     # Database setup script
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── ticketController.js  # Ticket CRUD operations
│   │   ├── commentController.js # Comment operations
│   │   ├── userController.js    # User management
│   │   └── adminController.js   # Admin analytics
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication
│   │   └── errorHandler.js      # Global error handler
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   ├── ticketRoutes.js      # Ticket endpoints
│   │   ├── userRoutes.js        # User endpoints
│   │   └── adminRoutes.js       # Admin endpoints
│   ├── validators/
│   │   ├── authValidator.js     # Auth validation
│   │   └── ticketValidator.js   # Ticket validation
│   └── server.js                # Main server file
├── .env                         # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🧪 Testing the API

### Using cURL

**Register:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","confirmPassword":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

**Get Tickets (with token):**
```bash
curl -X GET http://localhost:5000/api/tickets \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Using Postman or Thunder Client
1. Import the API endpoints
2. Set Authorization header with Bearer token
3. Test all endpoints

## 🔧 Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running
- Check database credentials in `.env`
- Ensure database `smartdesk_db` exists

### Port Already in Use
- Change PORT in `.env` file
- Or kill the process using port 5000

### JWT Token Issues
- Ensure JWT_SECRET is set in `.env`
- Check token expiration time

## 📦 Dependencies

- **express** - Web framework
- **pg** - PostgreSQL client
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing
- **express-validator** - Input validation
- **morgan** - HTTP request logger

## 🚀 Deployment

### Production Checklist
- [ ] Set NODE_ENV=production
- [ ] Use strong JWT_SECRET
- [ ] Configure production database
- [ ] Enable HTTPS
- [ ] Set up database backups
- [ ] Configure logging
- [ ] Set up monitoring

## 📄 License

MIT

## 👨‍💻 Author

Roshan-113

---

**Happy Coding! 🎉**
