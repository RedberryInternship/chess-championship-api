import express from 'express'
import { playersController, registerController } from 'controllers'
import { swaggerMiddlewares } from 'middlewares'
import { registerSchema } from 'schemas'

const router = express.Router()

router.get('/grandmasters', playersController.all)
router.post('/register', registerSchema, registerController.register)
router.use('/docs', ...swaggerMiddlewares)

export default router
