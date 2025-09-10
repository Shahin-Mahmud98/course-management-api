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
# -then next procedure what you want ?




## Post collection

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

