# SmartDesk - Backend

## Service Request & Ticketing System API

### Tech Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Validation**: Joi
- **API Documentation**: Swagger/OpenAPI

### Project Structure
```
backend/
├── src/
│   ├── controllers/
│   │   ├── ticketController.js
│   │   ├── userController.js
│   │   └── dashboardController.js
│   ├── models/
│   │   ├── Ticket.js
│   │   └── User.js
│   ├── routes/
│   │   ├── ticketRoutes.js
│   │   ├── userRoutes.js
│   │   └── dashboardRoutes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── services/
│   │   └── ticketService.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   └── config/
│       └── database.js
├── .env
└── server.js
```

### API Endpoints

#### Authentication
```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - Login user
GET    /api/auth/me          - Get current user
```

#### Tickets
```
GET    /api/tickets          - Get all tickets (with filters)
GET    /api/tickets/my       - Get my tickets
GET    /api/tickets/:id      - Get ticket by ID
POST   /api/tickets          - Create new ticket
PUT    /api/tickets/:id      - Update ticket
DELETE /api/tickets/:id      - Delete ticket
PATCH  /api/tickets/:id/status - Update ticket status
```

#### Dashboard
```
GET    /api/dashboard/stats  - Get dashboard statistics
GET    /api/dashboard/recent - Get recent tickets
```

### Data Models

#### Ticket Schema
```javascript
{
  ticketId: String (auto-generated),
  title: String (required),
  description: String (required),
  priority: Enum ['low', 'medium', 'high', 'critical'],
  status: Enum ['open', 'in-progress', 'resolved', 'closed'],
  category: String,
  createdBy: ObjectId (ref: User),
  assignedTo: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date,
  resolvedAt: Date,
  comments: [{
    user: ObjectId,
    text: String,
    timestamp: Date
  }]
}
```

#### User Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (hashed),
  role: Enum ['customer', 'agent', 'admin'],
  createdAt: Date
}
```

### Query Parameters for Filtering
```
?status=open,in-progress
?priority=high,critical
?search=keyword
?assignedTo=userId
?createdBy=userId
?sortBy=createdAt
?order=desc
?page=1
?limit=10
```

### Quick Start
```bash
cd backend
npm install
npm run dev
```

### Environment Variables
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/smartdesk
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Checkpoint Deliverables

#### T+4h - Architecture
- [x] Express server setup
- [x] MongoDB connection
- [x] Basic routes structure
- [x] Models defined

#### T+8h - Core Features
- [x] CRUD operations working
- [x] Authentication implemented
- [x] Ticket creation and listing

#### T+16h - Stability
- [x] Input validation
- [x] Error handling
- [x] Filtering and search
- [x] Pagination

#### T+24h - Final
- [x] Role-based access control
- [x] Dashboard statistics
- [x] API documentation
- [x] Performance optimization

### Testing
```bash
npm test
```

### API Response Format
```javascript
// Success
{
  success: true,
  data: { ... },
  message: "Operation successful"
}

// Error
{
  success: false,
  error: "Error message",
  details: { ... }
}
```
