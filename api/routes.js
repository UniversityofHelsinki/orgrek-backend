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
     *     /api/{id}/{date}/attributes:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all current attributes
     *       description: Return all current attributes
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: string
     *           required: true
     *           description: String ID of the node to get
     *         - in: path
     *           name: date
     *           schema:
     *              type: string
     *           required: true
     *           description: String date of the day to get node attributes
     *       responses:
     *         200:
     *           description: all current attributes
     *         default:
     *           description: Unexpected error
     */
    router.get('/:id/:date/attributes', apiDb.currentAttributes);

}
