import express from 'express'
import chalk from "chalk";

const server = express()

server.get('/', (req, res,) => {
   res.json({
       hello: 'My friend!',
   })
})


server.listen(4444, () => console.log(
    chalk.bold.blueBright('Server started at http://localhost:4444')
))
