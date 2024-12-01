FROM node:22-slim

RUN apt-get update -y && apt-get install -y \ 
  git \
  openssh-client 

WORKDIR /usr/src/app

ADD package.json yarn.lock .yarnrc.yml ./

RUN corepack enable

RUN yarn install --immutable