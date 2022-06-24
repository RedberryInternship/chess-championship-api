import swaggerUI, {SwaggerUiOptions} from 'swagger-ui-express'
import YAML from "yamljs";
import path from "path";

const options: SwaggerUiOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Chess Tournament API',
}

const swaggerDocument = YAML.load(path.join(__dirname, '../config/swagger.yaml'))

const swaggerMiddlewares = [swaggerUI.serve, swaggerUI.setup(swaggerDocument, options)]

export default swaggerMiddlewares
