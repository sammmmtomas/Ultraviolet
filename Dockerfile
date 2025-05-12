FROM node:18-alpine

WORKDIR /app

COPY . .

RUN apk add --no-cache git bash rsync

RUN mkdir -p dist && rsync -av src/ dist/

EXPOSE 8080

CMD ["node", "server.js"]