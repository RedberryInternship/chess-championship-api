import express from "express"
import {playersController, registerController} from 'controllers'
import YAML from 'yamljs'
import path from "path"
import swaggerUI, {SwaggerUiOptions} from 'swagger-ui-express'

const swaggerDocument = YAML.load(path.join(__dirname, './config/swagger.yaml'))

const options: SwaggerUiOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Chess Tournament API',
}

const router = express.Router()

router.get('/grandmasters', playersController.all)
router.post('/register', registerController.register)
router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, options))

export default router
