# my-quasar-express-app

Lab 1.1 — สร้างและรัน Quasar Frontend ด้วย Git, Docker และ Docker Compose

## รันโหมดพัฒนา

```bash
cd frontend
npm install
npm run dev
```

## รันด้วย Docker

```bash
docker build -t my-quasar-frontend:latest -f frontend/Dockerfile ./frontend
docker run -d -p 8080:80 --name my-quasar-frontend-container my-quasar-frontend:latest
```

## รันด้วย Docker Compose

```bash
docker compose up -d --build
docker compose down
```

เปิด http://localhost:8080/
