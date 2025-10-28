# Employee Management System (Separate Frontend & Backend)

This archive contains two separate projects in one zip:
- `backend/` — Spring Boot REST API (Maven)
- `frontend/` — React app (create-react-app style)

## Quick start (recommended order)
1. Create the MySQL database:
   - `CREATE DATABASE employee_db;`
2. Start backend:
   - cd backend
   - mvn spring-boot:run
3. Start frontend (in another terminal):
   - cd frontend
   - npm install
   - npm start
4. Open frontend at http://localhost:3000 (it proxies API requests to backend at :8080)

MySQL credentials are set to root / Princy@30 in backend/src/main/resources/application.properties
