# Stage 1: Build React + Vite
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Increase memory for build
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm run build

# Stage 2: Serve static files via Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
