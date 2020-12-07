FROM node:14.15.1-stretch-slim

# run in /app
WORKDIR /app

# copy source code to folder
COPY . .

RUN apt-get update

# install requirements
RUN apt-get -y install libtool automake autoconf nasm make

# install node requirements
RUN npm ci

# build prodiction static code in ./out
RUN npm run production

# install an http server
RUN npm install --global http-server

# open port
EXPOSE 8080

# run basic webserver
# todo: make it run NGINX
CMD [ "http-server", "out" ]