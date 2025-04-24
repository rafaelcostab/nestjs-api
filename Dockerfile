FROM node:23.7.0-alpine

RUN apk update && apk add --no-cache openssl procps

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]

