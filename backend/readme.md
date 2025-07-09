# 🔧 Eventura Backend

Server-side code for **Eventura** using **Node.js**, **Express**, and **MongoDB**.  
A robust backend supporting role-based authentication, modular MVC architecture, and a secure REST API.

---

## 💡 Features

- 🚀 Express HTTP Server  
- 🛢️ MongoDB with Mongoose  
- 🔐 JWT Authentication  
- 🧑‍💼 Roles: Admin / Student / Faculty  
- 🧱 Modular structure (MVC)  

---

## 📁 Folder Structure

```bash
backend/
│   index.js             # Entry point
│   connect.js           # MongoDB connection
│   .env                 # Environment variables
│
├── Authentication/
│     auth.js            # JWT auth utils
├── Controllers/
│     user.js, event.js  # Controller logic
├── Model/
│     user.js, event.js  # DB schemas
├── Routes/
│     user.js, event.js  # API routes
```

---

## 🚀 Setup & Run

### ✅ Prerequisites

- Node.js (v16+)
- MongoDB

### 📦 Installation

```bash
cd backend
npm install
```

### ⚙️ Create `.env` file

```env
PORT=5000
MONGODB_URL="mongodb://127.0.0.1:27017/"
DB_NAME="Eventura"
JWT_SECRET="SecretMasala.com"
```

### ▶️ Start Server

```bash
npm start      # production
npm run dev    # development (nodemon)
```

---

## 🔐 JWT Auth

After login/signup → Receive JWT token

Send token in headers:

```http
Authorization: Bearer <jwt_token>
```

---

## 🔗 API Endpoints

### 👤 User

- `POST /user/signup` – Register (returns JWT)
- `POST /user/login` – Login (returns JWT)

### 📅 Event

- `POST /event/` – Create event (protected)
- `GET /event/` – All events
- `GET /event/:id` – Event by ID
- `PUT /event/:id` – Update (protected)
- `DELETE /event/:id` – Delete (protected)

---

## ✍ Example: Signup & Use Token

### Request

```http
POST /user/signup
Content-Type: application/json

{
  "username": "john",
  "password": "123456",
  "identity": "Student"
}
```

### Response

```json
{
  "message": "User created successfully",
  "user": { ... },
  "token": "<jwt_token>"
}
```

### Authenticated Request

```http
GET /event/
Authorization: Bearer <jwt_token>
```

> ⚠️ Yes, we know using `localStorage` isn’t best practice for tokens 😅 — but hey, it’s a hackathon!

---

## 📂 Breakdown

- `index.js`: App entry
- `connect.js`: DB logic
- `Model/`: DB schemas
- `Routes/`: API endpoints
- `Controllers/`: Request handlers

---

## 🤝 Contributions

Feel free to fork and improve!

---

## 📜 License

ISC License
