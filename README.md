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
- **Package Manager:** Yarn
- **Development Features:** Nodemon for automatic restarting of the server during development.
- **Deployment:** Dockerized to match the frontend environment and ensure seamless integration.

## Database

- **Technology:** MongoDB
- **Description:** NoSQL database used for storing application data. Integrated with the backend via Mongoose for schema definition and database management.
- **Deployment:** Configured to run in a Docker container for ease of development and deployment.

## CI/CD

- **GitHub Actions:** Utilized for continuous integration and deployment, automating the testing and deployment process to production environments.


## Usage

Here's how to get started with this project:

### Cloning the Repository

First, clone the repository to your local machine using Git:

```bash
git clone git@github.com:ksullivan91/tech-stack.git
cd tech-stack
```

### Running the Application with Docker
To start the application, use Docker Compose. This will build and start all the necessary containers defined in your docker-compose.yml file:

```bash
docker-compose up --build
```
This command builds the images if they don't exist and starts the containers. The --build option ensures that Docker rebuilds the images, which is useful if you've made changes to the Dockerfiles or your dependencies.

### Accessing the Application

Once the containers are up and running, you can access the application as follows:

- **Frontend**: Open your browser and navigate to `http://localhost:3000` to view the UI.
- **Backend/API**: The backend API is accessible at `http://localhost:3001`
