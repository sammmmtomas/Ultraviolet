FROM node:18-alpine

RUN apk add --no-cache git bash

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
