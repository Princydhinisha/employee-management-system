# Frontend (React)

## Run
1. Node (14+) and npm installed.
2. From `frontend/` run:
   - `npm install`
   - `npm start`
3. The app will open at http://localhost:3000 and proxy API calls to backend at http://localhost:8080

Notes: package.json already contains `proxy` set to `http://localhost:8080` so CORS is handled by the dev server.
