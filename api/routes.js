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

    /**
     * @swagger
     *     /api/texts/{lang}:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all texts with specific language
     *       description: Return all texts with language
     *       parameters:
     *         - in: path
     *           name: lang
     *           enum: [fi, en, sv]
     *           required: true
     *       responses:
     *         200:
     *           description: all texts
     *         default:
     *           description: Unexpected error
     */
    router.get('/texts/:language', apiDb.textsByLang);

    /**
     * @swagger
     *     /api/node/{id}/{date}/attributes:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all current node attributes
     *       description: Return all current node attributes
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: int
     *           required: true
     *           description: Unique id of the node to get
     *         - in: path
     *           name: date
     *           schema:
     *              type: string
     *           required: true
     *           description: String date of the day to get node attributes
     *       responses:
     *         200:
     *           description: all current node attributes
     *         default:
     *           description: Unexpected error
     */
    router.get('/node/:id/:date/attributes', apiDb.currentNodeAttributes);

    /**
     * @swagger
     *     /api/edge/types:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all hierarchy types
     *       description: Return all hierarchy types
     *       responses:
     *         200:
     *           description: all hierarchy types
     *         default:
     *           description: Unexpected error
     */
    router.get('/edge/types', apiDb.hierarchyTypes);

}
