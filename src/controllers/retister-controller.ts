import { Handler } from 'express'
import { validationResult } from 'express-validator'

const register: Handler = (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() })
  } else {
    res.status(201).send()
  }
}

export { register }
