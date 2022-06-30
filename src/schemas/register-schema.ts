import { check } from 'express-validator'
import players from 'config/players'

export default [
  check('name')
    .isLength({
      min: 2,
    })
    .withMessage('name parameter should be at least 2 characters long.')
    .isString()
    .withMessage('name parameter should be string.'),
  check('email')
    .isEmail()
    .withMessage('email parameter should have correct format.')
    .custom((value) => {
      if (!value.endsWith('@redberry.ge')) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('email parameter should end with redberry.ge')
      }

      return true
    }),
  check('phone')
    .isNumeric()
    .withMessage('phone parameter should have only digits.')
    .isLength({
      min: 9,
      max: 9,
    })
    .withMessage('phone parameter should be 9 digits long.'),
  check('date_of_birth')
    .isString()
    .withMessage('date of birth parameter is required.'),
  check('experience_level')
    .isIn(['beginner', 'normal', 'professional'])
    .withMessage(
      'experience level should be beginner, normal or professional.'
    ),
  check('already_participated')
    .isBoolean({ strict: true })
    .withMessage('already participated parameter should be true or false.'),
  check('character_id')
    .isIn(players.map((el) => el.id))
    .withMessage('such character does not exists.'),
]
