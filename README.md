## Overview

This project is built using a modern web development stack that includes a React frontend, a Node.js Express backend, MongoDB for persistence, Docker for containerization and environment consistency, and Yarn for package management. This setup is designed to offer a scalable, efficient, and developer-friendly workflow for full-stack web development.

## Frontend

- **Technology:** React
- **Build Tool:** Vite
- **Styling:** PostCSS
- **Package Manager:** Yarn
- **Development Features:** Hot Module Replacement (HMR) for rapid development cycles.
- **Deployment:** Served via Docker container for consistency across development and production environments.

## Backend

- **Technology:** Node.js with Express framework
- **Database:** MongoDB
- **Architecture:** RESTful API
- **Package Manager:** Yarn
- **Development Features:** Nodemon for automatic restarting of the server during development.
- **Deployment:** Dockerized to match the frontend environment and ensure seamless integration.

## Database

- **Technology:** MongoDB
- **Description:** NoSQL database used for storing application data. Integrated with the backend via Mongoose for schema definition and database management.
- **Deployment:** Configured to run in a Docker container for ease of development and deployment.

## Containerization

- **Technology:** Docker
- **Description:** Used to containerize both frontend and backend parts of the application, ensuring consistent environments across development, testing, and production. Facilitates easy deployment and scalability.
- **Configuration:** Docker Compose is used to define and run multi-container Docker applications, linking the frontend, backend, and database services seamlessly.

## Development & Build Tools

- **Package Manager:** Yarn, used across the entire stack for managing dependencies efficiently.
- **Code Quality:** ESLint and Prettier for code linting and formatting to maintain code quality and consistency.
- **Version Control:** Git, with GitHub as the remote repository, facilitating collaboration, version tracking, and CI/CD integration.

## CI/CD

- **GitHub Actions:** Utilized for continuous integration and deployment, automating the testing and deployment process to production environments.
