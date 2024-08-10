FROM node:22-bookworm AS dev

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git

RUN mkdir -p /app && chown node:node /app

WORKDIR /app

COPY package.json package-lock.json ./

USER node

# RUN npm install