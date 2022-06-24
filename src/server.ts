import 'dotenv/config'
import express from 'express'
import chalk from "chalk"
import router from 'router'
import {join} from 'path'
import {indexController} from 'controllers'

const server = express()

server.use('/', express.static(join(__dirname, '../public')))

server.get('/', indexController.index)
server.use('/api', router)

server.listen(process.env.APP_PORT, () => console.log(
    chalk.bold.blueBright(`Server started at http://localhost:${process.env.APP_PORT}`)
))
