const apiGw = require('./api-gw');
const apiDb = require('./api-db');
const apiOUService = require('./api-ou-service');
const apiUserService = require('./api-user');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

module.exports = (router) => {
    router.use('/docs', swaggerUi.serve);
    router.get('/docs', swaggerUi.setup(swaggerDocument));
    router.get('/tree/:type/byDate/:date', apiGw.tree);
    router.get('/texts', apiDb.texts);
    router.get('/texts/:language/:ns', apiDb.textsByLang);
    router.get('/node/:id/:date/:selectedHierarchy/attributes', apiOUService.currentNodeAttributes);
    router.get('/node/historyandcurrent/:id/:date/:selectedHierarchy/attributes', apiOUService.historyAndCurrentNodeAttributes);
    router.get('/node/futureandcurrent/:id/:date/:selectedHierarchy/attributes', apiOUService.futureAndCurrentNodeAttributes);
    router.get('/edge/types', apiOUService.hierarchyTypes);
    router.get('/node/parents/:id/:date', apiOUService.nodeParentsWithTypesByIdAndDate);
    router.get('/node/children/:id/:date', apiOUService.nodeChildrenWithTypesByIdAndDate);
    router.get('/node/historyandcurrent/parents/:id/:date', apiOUService.nodeHistoryAndCurrentParentsWithTypesByIdAndDate);
    router.get('/node/historyandcurrent/children/:id/:date', apiOUService.nodeHistoryAndCurrentChildrenWithTypesByIdAndDate);
    router.get('/node/:id', apiDb.getNodeByUniqueId);
    router.get('/node/predecessors/:id/:date', apiOUService.nodePredecessors);
    router.get('/node/successors/:id/:date', apiOUService.nodeSuccessors);
    router.get('/node/futureandcurrent/parents/:id/:date', apiOUService.nodeFutureAndCurrentParentsWithTypesByIdAndDate);
    router.get('/node/futureandcurrent/children/:id/:date', apiOUService.nodeFutureAndCurrentChildrenWithTypesByIdAndDate);
    router.get('/node/fullname/:id/:date', apiOUService.currentNodeFullNames);
    router.get('/node/fullname/all/:id', apiOUService.allNodeFullNames);
    router.get('/node/fullname/historyandcurrent/:id/:date', apiOUService.historyAndCurrentNodeFullNames);
    router.get('/node/fullname/futureandcurrent/:id/:date', apiOUService.futureAndCurrentNodeFullnames);
    router.get('/node/fullname/favorable/:id/:date', apiOUService.favorableFullNames);
    router.get('/node/all/parents/:id/:date', apiOUService.nodeAllParents);
    router.get('/node/all/children/:id/:date', apiOUService.nodeAllChildren);
    router.get('/tree/:hierarchies/:date', apiOUService.tree);
    router.get('/hierarchyFilters', apiDb.hierarchyFilters);
    router.get('/hierarchyFilters/:date', apiDb.validHierarchyFilters);
    router.post('/hierarchyFilters', apiDb.insertHierarchyFilters);
    router.put('/hierarchyFilters', apiDb.updateHierarchyFilter);
    router.delete('/hierarchyFilters', apiDb.deleteHierarchyFilter);
    router.post('/texts', apiDb.insertTexts);
    router.put('/texts', apiDb.updateText);
    router.delete('/texts', apiDb.deleteText);
    router.get('/user', apiUserService.userInfo);
    router.get('/logout', apiUserService.logout);
    router.put('/node/attributes/:nodeId/:skipValidation', apiDb.updateAttributes);
    router.post('/node/attributes/:nodeId/:skipValidation', apiDb.insertAttributes);
    router.post('/node/addNewUpperUnit', apiDb.addNewUpperUnit);
    router.put('/node/properties/:nodeId', apiDb.updateNodeProperties);
    router.put('/node/parentUnit/properties', apiDb.updateParentUnitProperties);
    router.put('/node/:id/attributes/names', apiOUService.updateNodeNameAttributes);
    router.get('/node/attributes/names/:id', apiOUService.getNodeNameAttributes);
    router.put('/node/:id/attributes/types', apiOUService.updateNodeTypeAttributes);
    router.get('/node/attributes/types/:id', apiOUService.getNodeTypeAttributes);
};
