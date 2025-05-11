FROM node:18-alpine

RUN apk add --no-cache git bash && npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm build

EXPOSE 8080

CMD ["pnpm", "start"]
