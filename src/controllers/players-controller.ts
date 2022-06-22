import {Handler} from 'express'

const index: Handler = (_, res) => {
   res.status(200).json({
        name: 'grandmasters',
   })
}

export {
    index,
}
