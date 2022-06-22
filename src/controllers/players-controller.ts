import {Handler} from 'express'
import players from 'config/players'

const all: Handler = (_, res) => {
   res.status(200).json(players)
}

export {
    all,
}
