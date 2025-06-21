FROM node:18-alpine

RUN apk add --no-cache bash git && npm install -g pnpm

WORKDIR /app
COPY . .

RUN pnpm install
RUN pnpm build || echo "skip build if not present"

EXPOSE 8080
CMD ["node", "server.js"]