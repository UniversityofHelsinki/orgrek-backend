const apiGw = require('./api-gw');
const apiDb = require('./api-db');
const apiOUService = require('./api-ou-service');
const apiUserService = require('./api-user');

const swaggerUi = require('swagger-ui-express');
const apiSpecs = require('../config/swagger'); // swagger config


module.exports = (router) => {

    router.use('/docs', swaggerUi.serve);
    router.get('/docs', swaggerUi.setup(apiSpecs));

    /**
     * @swagger
     *     /api/tree/{type}/byDate/{date}:
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
     *         - in: path
     *           name: date
     *       responses:
     *         200:
     *           description: organisation tree
     *         default:
     *           description: Unexpected error
     */
    router.get('/tree/:type/byDate/:date', apiGw.tree);

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
     *     /api/texts/{lang}/{namespace}:
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
     *         - in: path
     *           name: namespace
     *           required: true
     *       responses:
     *         200:
     *           description: all texts
     *         default:
     *           description: Unexpected error
     */
    router.get('/texts/:language/:ns', apiDb.textsByLang);

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

    /**
     * @swagger
     *     /api/node/parents/{id}/{date}/:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all current node parents
     *       description: Return all current node parents
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: int
     *           required: true
     *           description: unique of the node to get parents from
     *         - in: path
     *           name: date
     *           schema:
     *              type: string
     *           required: true
     *           description: String date of the day to get node parent from
     *       responses:
     *         200:
     *           description: all current node parents
     *         default:
     *           description: Unexpected error
     */
    router.get('/node/parents/:id/:date', apiOUService.nodeParentsWithTypesByIdAndDate);

    /**
     * @swagger
     *     /api/node/children/{id}/{date}/:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all current node children
     *       description: Return all current node children
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: int
     *           required: true
     *           description: unique of the node to get children from
     *         - in: path
     *           name: date
     *           schema:
     *              type: string
     *           required: true
     *           description: String date of the day to get node children from
     *       responses:
     *         200:
     *           description: all current node children
     *         default:
     *           description: Unexpected error
     */
    router.get('/node/children/:id/:date', apiOUService.nodeChildrenWithTypesByIdAndDate);


    /**
     * @swagger
     *     /api/node/history/parents/{id}/{date}/:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all past and current node parents
     *       description: Return all past and current node parents
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: int
     *           required: true
     *           description: unique of the node to get parents from
     *         - in: path
     *           name: date
     *           schema:
     *              type: string
     *           required: true
     *           description: String date of the day to get node parent from
     *       responses:
     *         200:
     *           description: all current node parents
     *         default:
     *           description: Unexpected error
     */
    router.get('/node/history/parents/:id/:date', apiOUService.nodeHistoryParentsWithTypesByIdAndDate);

    /**
     * @swagger
     *     /api/node/history/children/{id}/{date}/:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return all past and current node children
     *       description: Return all past and current node children
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: int
     *           required: true
     *           description: unique of the node to get children from
     *         - in: path
     *           name: date
     *           schema:
     *              type: string
     *           required: true
     *           description: String date of the day to get node children from
     *       responses:
     *         200:
     *           description: all current node children
     *         default:
     *           description: Unexpected error
     */
    router.get('/node/history/children/:id/:date', apiOUService.nodeHistoryChildrenWithTypesByIdAndDate);



    /**
     * @swagger
     *     /api/node/{id}:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return node by unique id
     *       description: Return node by unique id
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: int
     *           required: true
     *           description: Unique id of the node to get
     *       responses:
     *         200:
     *           description: node by unique id
     *         default:
     *           description: Unexpected error
     */
    router.get('/node/:id', apiDb.getNodeByUniqueId);

    /**
     * @swagger
     *     /api/node/predecessors/{id}:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return node's predecessors by unique id
     *       description: Return node's predecessors by unique id
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: int
     *           required: true
     *           description: Unique id of the node to get
     *       responses:
     *         200:
     *           description: node's predecessors by unique id
     *         default:
     *           description: Unexpected error
     */
    router.get('/node/predecessors/:id', apiDb.nodePredecessors);

    /**
     * @swagger
     *     /api/node/successors/{id}:
     *     get:
     *       tags:
     *         - retrieve
     *       summary: Return node's successors by unique id
     *       description: Return node's successors by unique id
     *       parameters:
     *         - in: path
     *           name: id
     *           schema:
     *              type: int
     *           required: true
     *           description: Unique id of the node to get
     *       responses:
     *         200:
     *           description: node's successors by unique id
     *         default:
     *           description: Unexpected error
     */
    router.get('/node/successors/:id', apiDb.nodeSuccessors);

    router.get('/user', apiUserService.userInfo);

    router.get('/logout', apiUserService.logout);
};
