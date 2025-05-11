FROM node:18-alpine

# ติดตั้ง git, bash และ pnpm
RUN apk add --no-cache git bash && npm install -g pnpm

WORKDIR /app

# คัดลอกไฟล์ทั้งหมดเข้าไป
COPY . .

# ติดตั้ง dependencies ด้วย pnpm
RUN pnpm install

# สร้างโปรเจกต์
RUN pnpm build

# เปิดพอร์ต 8080
EXPOSE 8080

# รัน Ultraviolet
CMD ["pnpm", "start"]
