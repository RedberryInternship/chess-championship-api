import { check } from 'express-validator'

export default [
  check('name')
    .isLength({
      min: 2,
    })
    .withMessage('name parameter should be at least 2 characters long.')
    .isString()
    .withMessage('name parameter should be string.'),
]
