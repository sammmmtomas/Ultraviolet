FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Ensure dist files exist before container starts
RUN mkdir -p dist && cp -r dist/* ./dist/

EXPOSE 8080
CMD ["node", "server.js"]