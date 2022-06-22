import express from "express"
import {playersController, registerController} from 'controllers'

const router = express.Router()

router.get('grandmasters', playersController.index)
router.post('register', registerController.register)

export default router
