# Eventura Backend

Welcome to the **Eventura** backend! This is the server-side component of the Eventura platform, built with Node.js, Express, and MongoDB. It provides RESTful APIs, JWT authentication, event management, and database connectivity.

## Features
- Express.js server for handling HTTP requests
- MongoDB integration using Mongoose
- User model with roles: Admin, Student, Faculty
- Event model with all event details
- JWT-based authentication for secure APIs
- Modular structure with Controllers and Routes

## Folder Structure
```
backend/
│   index.js             # Main server file
│   connect.js           # MongoDB connection logic
│   .env                 # Environment variables
│   package.json         # Project metadata and dependencies
│
├── Authentication/
│     auth.js            # JWT token generation & middleware
├── Controllers/
│     user.js            # User controller logic
│     event.js           # Event controller logic
├── Model/
│     user.js            # User schema/model
│     event.js           # Event schema/model
├── Routes/
│     user.js            # User routes (signup, login)
│     event.js           # Event routes (CRUD)
```

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- MongoDB (local or cloud instance)

### Installation
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Environment Variables
Create a `.env` file in the backend directory with the following content:
```
PORT=5000
MONGODB_URL="mongodb://127.0.0.1:27017/"
DB_NAME="Eventura"
JWT_SECRET="SecretMasala.com"
```

### Running the Server
- For production:
  ```sh
  npm start
  ```
- For development (with auto-reload):
  ```sh
  npm run dev
  ```

The server will start on the port specified in your `.env` file.

## Authentication (JWT)
- After signup or login, the backend returns a JWT token in the response.
- The frontend should store this token (e.g., localStorage) and send it in the `Authorization` header for protected routes:
  ```http
  Authorization: Bearer <token>
  ```

## API Endpoints

### User Routes
- `POST /user/signup` — Register a new user. Returns a JWT token.
- `POST /user/login` — Login (should return a JWT token; update your controller to do so).

### Event Routes
- `POST /event/` — Create a new event (protected, requires JWT).
- `GET /event/` — Get all events.
- `GET /event/:id` — Get event by ID.
- `PUT /event/:id` — Update event by ID (protected, requires JWT).
- `DELETE /event/:id` — Delete event by ID (protected, requires JWT).

## Example: Signup & Using JWT
**Signup:**
```http
POST /user/signup
Content-Type: application/json
{
  "username": "john",
  "password": "123456",
  "identity": "Student"
}
```
**Response:**
```json
{
  "message": "User created successfully",
  "user": { ... },
  "token": "<jwt_token>"
}
```

<I know I know, its very bad to store tokens in localstorage, i usually prefer storing them into, cookies for some security, but due to lack of time and stress, i applied the shortest way to do it >


**Using the Token:**
```http
GET /event/
Authorization: Bearer <jwt_token>
```

## Project Structure Details
- **index.js**: Sets up the Express server and connects to MongoDB.
- **connect.js**: Handles MongoDB connection logic.
- **Model/user.js**: Defines the user schema with roles and authentication fields.
- **Model/event.js**: Defines the event schema with all necessary details.
- **Routes/user.js**: Contains routes for user registration and login.
- **Routes/event.js**: Contains routes for event creation, retrieval, update, and deletion.
- **Controllers/**: Contains the logic for handling requests and interacting with the database.

## Contributing
Feel free to fork this repository and submit pull requests. Suggestions and improvements are welcome!

## License
This project is licensed under the ISC License.

---
*Happy Coding!*
