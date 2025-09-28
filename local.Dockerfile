# syntax=docker/dockerfile:1

FROM node:22-slim

ARG CONTAINER_USER=node

RUN apt-get update -y && apt-get install --no-install-recommends -y \ 
  git \
  # for git
  openssh-client \
  # for Git editor
  vim \
  # for handle Linux signals
  dumb-init \
  # for Gemini Code Assist
  curl \
  ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# create user if not exist
RUN id -u $CONTAINER_USER > /dev/null 2>&1 || useradd -m $CONTAINER_USER

USER $CONTAINER_USER

WORKDIR /home/${CONTAINER_USER}/app

ENV PATH="/home/${CONTAINER_USER}/bin:${PATH}"

ADD package.json yarn.lock .yarnrc.yml ./

RUN <<EOF
mkdir -p $HOME/bin
corepack enable yarn --install-directory $HOME/bin
yarn install --immutable
EOF

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
