FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN  npm install

COPY . .

ENV APP_PORT 8000

EXPOSE $APP_PORT
CMD ['npm', 'run', 'dev']
