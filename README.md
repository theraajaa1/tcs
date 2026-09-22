# Task Management Application

This repository contains an Angular frontend and a Spring Boot backend for a simple task management application.

## Prerequisites

- Java 21
- Node.js and npm
- Internet access for downloading Maven and npm dependencies

## Run the backend

From the repository root:

```bash
cd backend
./mvnw spring-boot:run
```

On Windows PowerShell, use `mvnw.cmd spring-boot:run` instead.

The backend starts on `http://localhost:8080`.

## Run the frontend

In a second terminal, from the repository root:

```bash
cd frontend
npm install
npm start
```

Open `http://localhost:4200` in a browser. The frontend expects the backend to be running at `http://localhost:8080`.

To create a production frontend build:

```bash
npm run build
```

## API

- `GET /api/tasks` lists tasks.
- `POST /api/tasks` creates a task. The request body contains `title` and an optional `description`.
- H2 console: `http://localhost:8080/h2-console`

## Current status

Working:

- Angular frontend can list and create tasks through the backend API.
- Spring Boot exposes the task endpoints and validates task requests.
- Tasks are persisted through Spring Data JPA while the application is running.

Missing or worth improving:

- The H2 database is in memory, so data is lost whenever the backend restarts. A persistent database and environment-based configuration would be useful.
- The API currently exposes only list and create operations; update, delete, filtering, and pagination are not implemented.
- Authentication, authorization, automated API tests, and broader frontend tests are not included.
- The frontend API URL and CORS origin are hardcoded for local development.
- User-facing loading, error, and validation states could be expanded.