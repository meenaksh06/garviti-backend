# GPS Tracking System - Backend

This is the **backend** of the GPS Tracking System, built using **Node.js**, **Express.js**, and **Prisma** for handling database interactions. The backend supports functionalities like user authentication, location tracking, and data management. The backend API communicates with the **React frontend**.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Routes](#api-routes)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Register and login users with JWT-based authentication.
- **Location Sharing**: API endpoint to receive and save real-time location data.
- **Prisma ORM**: ORM for managing database models and queries.
- **Middleware**: Custom middleware for authentication and error handling.
- **API Routes**: Defined routes for user authentication and location management.

---

## Installation

To set up the backend locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/gps-tracking-system.git

2. **Navigate to backend directory**:
    ```bash
    cd gps-tracking-system

3. **Install Dependencies**:
    npm install

4. **Create .env file**:
    Do needfull changes in database url

5. **Migrate the database**:
    npx prisma migrate dev

6. **Start the server**:
    npm start

This will start the server on http://localhost:5002 by default.

Technologies Used
Node.js: JavaScript runtime for building the backend API.
Express.js: Web framework for building the API.
Prisma: ORM for interacting with the database and managing models.
JWT (JSON Web Tokens): For authentication and authorization.
Bcrypt.js: For hashing passwords securely.
Cors: Middleware to allow cross-origin requests.


Contributing
We welcome contributions to improve the backend API! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to your branch (git push origin feature/your-feature).
Open a pull request to the main branch.



### Key Sections:
- **Features**: The core features provided by the backend, including user authentication and location sharing.
- **Installation**: A step-by-step guide to setting up the backend locally, including setting up environment variables and migrating the database with Prisma.
- **Running the Application**: Instructions for running the backend server.
- **API Routes**: Details of the available API routes for authentication and location sharing.
- **Folder Structure**: An explanation of the project's folder organization.
- **Technologies Used**: A list of technologies and libraries used in the backend.
- **Contributing**: A guide for contributing to the project.
- **License**: License information for the project.

This README is designed to provide a comprehensive guide for setting up and working with the backend of your GPS tracking system project.
