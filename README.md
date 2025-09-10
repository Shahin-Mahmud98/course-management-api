# Course Management API

A RESTful API for managing online courses, user authentication, and course purchases built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Role-based authorization (user/admin)
- Course management (CRUD operations for admins)
- Course purchase system
- Input validation and error handling
- Secure password hashing with bcryptjs

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd course-management-api

2.  **Install dependencies:
    npm install
3.  **Set up environment variables:**
Create a `.env` file in the root directory and add the following variables, replacing the placeholders with your own values:

PORT=5000
MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
JWT_SECRET=<YOUR_JWT_SECRET_KEY>

# -then next procedure what you want ?

4.  **Run the application:**
    ```bash
    # To run in development mode with nodemon
    npm run dev

    # or to run normally
    node server.js




## Postman collection

### API Endpoints

All endpoints are prefixed with `/api`.

To test the API, you can use the following Postman collection. Create a new collection and add these requests:

## 1. Register User
- Method: POST
- URL: `http://localhost:5000/api/auth/register`

-{
  -"name": "John Doe",
  "email": "john@example.com",
  -"password": "password123",
  -"role": "user"
-}

## Login User

-http://localhost:5000/api/auth/login

-get current user: http://localhost:5000/api/auth/

