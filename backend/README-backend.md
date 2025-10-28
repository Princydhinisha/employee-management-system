# Backend (Spring Boot)

## Run
1. Ensure Java 17+ and Maven are installed.
2. Ensure MySQL is running and database `employee_db` exists:
   - In MySQL run: `CREATE DATABASE employee_db;`
3. From `backend/` run:
   - `mvn spring-boot:run`
4. API base: `http://localhost:8080/api/employees`

MySQL credentials are set in `src/main/resources/application.properties`:
`root` / `Princy@30`
