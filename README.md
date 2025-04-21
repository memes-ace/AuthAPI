# AuthAPI

Node.js + Express backend for user authentication and management with MongoDB.

## Features

- User registration, login, password reset
- User profile management (get and update)
- Admin functionality to list all users
- JWT authentication and role-based authorization
- Password hashing with bcrypt
- Input validation and sanitization
- Security best practices with helmet and cors
- Global error handling
- Environment variable management with dotenv
- Render.com deployment ready

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Running Locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

The server will run on `http://localhost:5000` (or the port specified in `.env`).

## API Endpoints

### Register User

- URL: `/api/register`
- Method: POST
- Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User

- URL: `/api/login`
- Method: POST
- Body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Update Profile

- URL: `/api/profile/update`
- Method: PUT
- Headers: `Authorization: Bearer <token>`
- Body (any of the fields can be updated):

```json
{
  "name": "John Updated",
  "email": "johnupdated@example.com",
  "password": "newpassword123"
}
```

### Admin Get All Users

- URL: `/api/admin/users`
- Method: GET
- Headers: `Authorization: Bearer <admin_token>`

## Deployment on Render.com

1. Push your project to GitHub.
2. Create a new Web Service on Render.com.
3. Connect your GitHub repository.
4. Set the environment variables on Render:
   - `DB_URI`
   - `JWT_SECRET`
   - `PORT`
5. Use the following build and start commands:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Deploy and get your live API URL.

---

This project uses modern ES6 syntax and follows best practices for production-ready Node.js applications.
