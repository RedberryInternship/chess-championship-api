import 'dotenv/config'
import express from 'express'
import chalk from "chalk"

const server = express()

server.get('/', (_, res,) => {
   res.json({
       hello: 'My friend!_!',
   })
})


server.listen(process.env.APP_PORT, () => console.log(
    chalk.bold.blueBright(`Server started at http://localhost:${process.env.APP_PORT}`)
))
