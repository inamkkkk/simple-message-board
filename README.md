# Simple Message Board

A simple message board application built with Node.js, Express, and MongoDB.

## Features

*   Users can register and login.
*   Users can create new posts.
*   Users can reply to existing posts.
*   Authentication using JWT.

## Requirements

*   Node.js
*   MongoDB

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure the application:

    *   Create a `.env` file based on the `.env.example` file.
    *   Set the `MONGODB_URI` environment variable to your MongoDB connection string.
    *   Set the `JWT_SECRET` environment variable to a strong, random secret.

4.  Run the application:

    
    npm start
    

## API Endpoints

*   `POST /api/auth/register`: Register a new user.
*   `POST /api/auth/login`: Login an existing user.
*   `POST /api/posts`: Create a new post (requires authentication).
*   `GET /api/posts`: Get all posts.
*   `GET /api/posts/:postId`: Get a single post.
*   `POST /api/posts/:postId/replies`: Create a reply to a post (requires authentication).

## Project Structure


message-board/
├── server.js          # Main application entry point
├── routes/
│   ├── auth.js        # Authentication routes
│   └── posts.js       # Post routes
├── controllers/
│   ├── authController.js   # Authentication controller
│   └── postsController.js  # Post controller
├── models/
│   ├── User.js          # User model
│   └── Post.js          # Post model
├── middlewares/
│   └── authMiddleware.js  # Authentication middleware
├── utils/
│   └── jwt.js         # JWT utility functions
└── .env.example     # Example environment variables
