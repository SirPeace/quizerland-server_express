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

pino - форматирование ( log ) в процессе разработки, подсветка события.

dayjs - минималистичная JavaScript-библиотека, которая анализирует, проверяет, манипулирует и отображает даты и время в современных браузерах с помощью API

nanoId - удобный для работы с URL генератор уникальных строковых идентификаторов на JavaScript.

argon2 — новейший алгоритм среди них и в настоящее время считается самым надежным из доступных алгоритмов хеширования паролей. Bcrypt — более старый алгоритм, но он до сих пор широко используется и считается безопасным.

## Docker:

$ docker pull mongo:7.0-rc
$ docker images
$ docker run --name quizerland-server -p 27017:27017 -d mongo:7.0-rc

( quizerland-server ) крутится в docker

Проверка подключения

$ curl http://localhost:3000
Ответ - curl: (7) Failed to connect to localhost port 3000 after 2254 ms: Couldn't connect to server
