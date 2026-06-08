# ---- Build stage: generate the static site into /app/dist ----
FROM node:22-slim AS build

# run in /app
WORKDIR /app

# install node requirements first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# copy source code and build the static site to ./dist
COPY . .
RUN npm run build

# ---- Serve stage: lightweight static file server ----
FROM node:22-slim AS serve

WORKDIR /app

# install an http server
RUN npm install --global http-server

# bring over only the generated static output
COPY --from=build /app/dist ./dist

# open port (http-server listens on 8080 by default)
EXPOSE 8080

# run basic webserver
# todo: make it run NGINX
CMD [ "http-server", "dist" ]
