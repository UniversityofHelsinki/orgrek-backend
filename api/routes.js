const apiGw = require('./api-gw');
const apiDb = require('./api-db');

const swaggerUi = require('swagger-ui-express');
const apiSpecs = require('../config/swagger'); // swagger config


module.exports = (router) => {

    router.use('/docs', swaggerUi.serve);
    router.get('/docs', swaggerUi.setup(apiSpecs));

    /**
     * @swagger
     *     /api/tree/{type}:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return organisation tree by type
     *       description: Return organisation tree by type
     *       parameters:
     *         - in: path
     *           name: type
     *           enum: [talous, opetus, tutkimus]
     *           required: true
     *           description: type of the organisation.
     *       responses:
     *         200:
     *           description: organisation tree
     *         default:
     *           description: Unexpected error
     */
    router.get('/tree/:type', apiGw.tree);

    /**
     * @swagger
     *     /api/texts/:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all texts
     *       description: Return all texts
     *       responses:
     *         200:
     *           description: all texts
     *         default:
     *           description: Unexpected error
     */
    router.get('/texts', apiDb.texts);
}
