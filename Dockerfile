# Use Node.js Alpine
FROM node:18-alpine

# Install bash, git, and pnpm
RUN apk add --no-cache bash git && npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install all dependencies
RUN pnpm install

# Build project (optional)
RUN pnpm build || echo "No build script defined"

# Expose the port Cloud Run expects
EXPOSE 8080

# Start the app
CMD ["node", "server.js"]
