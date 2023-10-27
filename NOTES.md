## Project init

npm init

## Init TypeScript

npx tsc --init

## Install dev dependencies

npm i -D typescript ts-node-dev @types/express @types/config pino-pretty
@types/nodemailer @types/lodash @types/jsonwebtoken

## Install Express

npm i express

## Install dependencies

npm i mongoose @typegoose/typegoose config argon2 pino dayjs nanoid nodemailer
lodash jsonwebtoken dotenv zod

## Install Prettier

npm install --save-dev --save-exact prettier

## Description

pino - форматирования ( log ) в процессе разработки, подсветка события.
dayjs - минималистичная JavaScript-библиотека, которая анализирует, проверяет, манипулирует и отображает даты и время в современных браузерах с помощью API

## Docker:

$ docker pull mongo:7.0-rc
$ docker images
$ docker run --name quizerland-server -p 27017:27017 -d mongo:7.0-rc

( quizerland-server ) крутится в docker
