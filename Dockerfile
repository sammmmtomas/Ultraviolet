FROM node:18-alpine

RUN apk add --no-cache bash git

WORKDIR /app
COPY . .

RUN npm install

EXPOSE 8080
CMD ["node", "server.js"]