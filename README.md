# 🚀 SmartDesk – Service Request & Ticketing System

## 📌 Overview

SmartDesk is a modern **Service Request & Ticketing System** built using a MERN-style architecture.
It helps organizations efficiently manage, track, and resolve service tickets with a clean UI and structured backend.

This project focuses on:

* Scalable frontend using React
* Structured backend using Node.js & Express
* Database operations using PostgreSQL

---

## 🎯 Problem Statement

Managing service requests manually leads to:

* Lack of tracking
* Delayed responses
* Poor accountability

SmartDesk solves this by providing a centralized system for ticket creation, tracking, and resolution.

---

## 💡 Solution

SmartDesk allows users to:

* Create service tickets
* Track ticket status (Open → In Progress → Closed)
* Assign priorities (High / Medium / Low)
* Filter and search tickets
* View analytics through dashboard

---

# 🧠 System Architecture

## 🔷 Frontend (React)

Handles UI, user interaction, and API communication.

### Responsibilities:

* UI Components (Dashboard, Ticket List, Forms)
* Routing (React Router)
* State Management (Hooks / Context API)
* API Calls (fetch/axios)
* Form handling & validation

---

## 🔷 Backend (Node.js + Express)

Handles business logic and API endpoints.

### Responsibilities:

* REST API creation
* Request validation
* Business logic handling
* Database operations

---

## 🔷 Database (PostgreSQL)

Stores structured ticket data.

### Example Table: `tickets`

```sql
CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  priority VARCHAR(50),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# ✨ Features

## 📝 Ticket Management

* Create, update, delete tickets
* Assign priority and status

## 🔍 Search & Filters

* Filter by priority and status
* Search tickets by title

## 📊 Dashboard

* Total tickets
* Open vs Closed tickets
* Priority insights

## 🎨 UI/UX

* Modern dark mode design
* Responsive layout
* Clean and intuitive interface

---

# 🏗️ Project Structure

## 📁 Frontend

```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
```

---

## 📁 Backend

```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   ├── server.js
```

---

# 🔗 API Endpoints

## 🎫 Ticket Routes

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | /tickets     | Get all tickets      |
| POST   | /tickets     | Create new ticket    |
| PUT    | /tickets/:id | Update ticket status |
| DELETE | /tickets/:id | Delete ticket        |

---

# 🔄 Application Flow

1. User creates a ticket (Frontend)
2. Request sent to backend API
3. Backend processes logic
4. Data stored in PostgreSQL
5. Response sent back to frontend
6. UI updates dynamically

---

# ⚙️ Tech Stack

## Frontend:

* React (Vite)
* Tailwind CSS
* React Router

## Backend:

* Node.js
* Express.js

## Database:

* PostgreSQL

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```
git clone https://github.com/your-username/smartdesk.git
cd smartdesk
```

---

## 2️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 3️⃣ Setup Backend

```
cd backend
npm install
npm start
```

---

## 4️⃣ Setup Database

* Install PostgreSQL
* Create database
* Run SQL table script

---

# 📸 Screenshots

(Add your UI screenshots here)

---

# 🧠 Future Enhancements

* User authentication (JWT)
* Role-based access (Admin/User)
* Real-time updates
* Email notifications
* AI-based ticket suggestions

---

# 🏆 Hackathon Highlights

* Clean architecture (Frontend + Backend separation)
* Real-world problem solving
* Scalable design
* Modern UI/UX

---

# 👨‍💻 Team

* Roshan Sikotariya
* Nihar Parecha
* Himani Solanki

---

# 📜 License

This project is developed for hackathon purposes only.
