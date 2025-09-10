FROM node:22-slim

RUN apt-get update -y && apt-get install --no-install-recommends -y \ 
  git \
  # for git
  openssh-client \
  # for Git editor
  vim \
  # for handle Linux signals
  dumb-init

WORKDIR /usr/src/app

ADD package.json yarn.lock .yarnrc.yml ./

RUN corepack enable

RUN yarn install --immutable

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
