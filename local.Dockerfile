# syntax=docker/dockerfile:1

FROM node:24-trixie-slim

ARG CONTAINER_USER=node

RUN apt-get update -y && apt-get install --no-install-recommends -y \ 
  git \
  # for git
  openssh-client \
  # for Git editor
  vim \
  # for handle Linux signals
  dumb-init \
  && rm -rf /var/lib/apt/lists/*
  
# create user if not exist
RUN id -u $CONTAINER_USER > /dev/null 2>&1 || useradd -m $CONTAINER_USER

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
RUN mkdir -p /pnpm \
&& chown -R $CONTAINER_USER:$CONTAINER_USER /pnpm \
&& npm install -g pnpm@latest-11

USER $CONTAINER_USER

WORKDIR /workspaces

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
