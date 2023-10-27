require('dotenv').config()
import express from 'express'
import config from 'config'
import connectToDb from './utilities/connectToDb'
import log from './utilities/logger'
import router from './routes'

const app = express()

const port = config.get<number>('port')

app.listen(port, () => {
  log.info(`Сервер запущен на http://localhost:${port}`), connectToDb()
})
