import express from 'express'
import { playersController, registerController } from 'controllers'
import { swaggerMiddlewares } from 'middlewares'

const router = express.Router()

router.get('/grandmasters', playersController.all)
router.post('/register', registerController.register)
router.use('/docs', ...swaggerMiddlewares)

export default router
