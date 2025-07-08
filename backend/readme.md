# Eventura Backend

Welcome to the **Eventura** backend! This is the server-side component of the Eventura platform, built with Node.js, Express, and MongoDB. It provides RESTful APIs and handles user authentication, event management, and database connectivity.

## Features
- Express.js server for handling HTTP requests
- MongoDB integration using Mongoose
- User model with roles: Admin, Student, Faculty
- Environment-based configuration

## Folder Structure
```
backend/
│   index.js           # Main server file
│   connect.js         # MongoDB connection logic
│   .env               # Environment variables
│   package.json       # Project metadata and dependencies
│
├── Controllers/       # (Currently empty, for future controllers)
├── Model/
│     user.js          # User schema/model
├── Routes/
│     user.js          # (Currently empty, for future user routes)
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

## API Endpoints
- `GET /` — Health check endpoint (returns "Helllo")

## Project Structure Details
- **index.js**: Sets up the Express server and connects to MongoDB.
- **connect.js**: Handles MongoDB connection logic.
- **Model/user.js**: Defines the user schema with roles and authentication fields.
- **Routes/user.js**: Placeholder for user-related routes (to be implemented).
- **Controllers/**: Placeholder for controller logic (to be implemented).

## Contributing
Feel free to fork this repository and submit pull requests. Suggestions and improvements are welcome!

## License
This project is licensed under the ISC License.

---
*Happy Coding!*
