FROM node:18-alpine

# Install bash + pnpm
RUN apk add --no-cache bash git && npm install -g pnpm

WORKDIR /app

# Copy all files
COPY . .

# Install deps and build
RUN pnpm install
RUN pnpm build
RUN pnpm add http-proxy-middleware

# ✅ บอก Cloud Run ว่าฟังบนพอร์ต 8080
EXPOSE 8080

# ✅ ต้องรัน server.js
CMD ["node", "server.js"]