FROM node:carbon-alpine

RUN mkdir -p /home/api/src

ENV HOME=/home/api

WORKDIR $HOME

COPY ./package.json $HOME

RUN \
  apk add --no-cache \
    python \
    make \
    bash \
    g++ \
  && npm i \
  && npm cache clear --force
