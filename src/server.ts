import 'dotenv/config'
import express from 'express'
import chalk from "chalk"
import router from 'routes'

const server = express()

server.use('/api', router)

server.listen(process.env.APP_PORT, () => console.log(
    chalk.bold.blueBright(`Server started at http://localhost:${process.env.APP_PORT}`)
))
