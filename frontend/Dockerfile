# Stage 1: build Quasar SPA ด้วย Node.js
FROM node:24-alpine AS builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Stage 2: เสิร์ฟไฟล์ SPA ด้วย Nginx
FROM nginx:1.27-alpine

COPY --from=builder /app/dist/spa/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
