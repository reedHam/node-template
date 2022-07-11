FROM node:lts-alpine3.15

ENV NODE_ENV "production"

WORKDIR /usr/bin/app

COPY package.json ./
COPY yarn.lock ./
COPY ./build ./build
RUN yarn install --production

CMD node build/src.js