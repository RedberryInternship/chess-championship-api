import { Handler } from 'express'

const register: Handler = (_, res) =>
  res.status(201).json({
    success: true,
  })

export { register }
