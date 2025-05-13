FROM node:18-alpine

RUN apk add --no-cache git bash && npm install -g pnpm

WORKDIR /app

COPY . .

# สั่ง build ให้มี dist เต็ม
RUN pnpm install && pnpm build

# ตรวจสอบว่ามี index.html
RUN ls dist/index.html || (echo "❌ dist/index.html not found!" && exit 1)

EXPOSE 8080
CMD ["node", "server.js"]