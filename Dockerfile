FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN mkdir -p dist && cp -r src/* dist/

EXPOSE 8080
CMD ["node", "server.js"]