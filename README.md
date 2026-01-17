# Express.js - REST API

A lightweight RESTful API for CRUD operations on users built with Node.js and Express.js.

## Features
- Home route for health check
- Get all users / Get user by ID
- Create, update (PUT/PATCH), and delete users
- JSON request parsing middleware

## Tech Stack
- Node.js, Express.js, JavaScript (ES Modules)
- Postman / Thunder Client for testing

## Quick Start

**Prerequisites:** Node.js v18+, npm

Server runs at `http://localhost:3001`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create user |
| PUT | `/api/users/:id` | Update user |
| PATCH | `/api/users/:id` | Partial update |
| DELETE | `/api/users/:id` | Delete user |

## Example Request
```bash
curl http://localhost:3001/api/users
```

## Future Enhancements
- Database integration (MongoDB/PostgreSQL)
- JWT authentication
- Input validation (Joi/Zod)
- Pagination, filtering, Swagger docs

---
**Author:** Badri Narayanan B R
