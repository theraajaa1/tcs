# Task frontend

Angular frontend for the Spring Boot task API.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

The frontend expects the backend at `http://localhost:8080`:

- `GET /api/tasks`
- `POST /api/tasks`

The POST body contains `title` and an optional `description`.

## Build

```bash
npm run build
```
