FROM node:lts-alpine3.15

ENV NODE_ENV "production"

WORKDIR /usr/bin/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install 

CMD node src/main.js