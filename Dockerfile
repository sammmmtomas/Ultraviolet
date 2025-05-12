FROM node:18-alpine

RUN apk add --no-cache git bash

WORKDIR /app

COPY . .

RUN mkdir -p dist && cp src/* dist/

EXPOSE 8080

CMD ["node", "server.js"]