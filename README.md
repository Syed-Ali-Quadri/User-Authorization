# Node.js Authentication Example

This repository provides a simple authentication system using Node.js, Express.js, bcrypt, and JSON Web Tokens (JWT).

## Features

- User registration with hashed passwords stored securely in a database.
- User login with JWT authentication.
- Session management using cookies.
- Middleware for protecting routes (e.g., profile page).
- Logout functionality.

## Prerequisites

- Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- MongoDB or any other database system compatible with Mongoose.

## Usage

- Navigate to `http://localhost:3000/register` to create a new user account.
- After registration, you can log in at `http://localhost:3000/` with your credentials.
- Access `http://localhost:3000/profile` after logging in to view the profile page.
- Click on `Logout` to clear the session cookie and log out.

## License

This markdown structure organizes the content with headings, subheadings, code blocks, and bullet points, making it suitable for a GitHub `README.md` file.
