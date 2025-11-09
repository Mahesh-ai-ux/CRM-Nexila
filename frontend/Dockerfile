# Stage 1: Build the Vite app
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built app with Nginx
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
