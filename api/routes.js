const apiGw = require('./api-gw');
const apiDb = require('./api-db');
const apiOUService = require('./api-ou-service');
const apiUserService = require('./api-user');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const { isAdmin, isAdminOrWriter } = require('../security');

module.exports = (router) => {
    router.use('/docs', swaggerUi.serve);
    router.get('/docs', swaggerUi.setup(swaggerDocument));
    router.get('/tree/:type/byDate/:date', apiGw.tree);
    router.get('/texts', apiDb.texts);
    router.get('/texts/:language/:ns', apiDb.textsByLang);
    router.get('/node/:id/:date/:selectedHierarchy/attributes', apiOUService.currentNodeAttributes);
    router.get('/node/historyandcurrent/:id/:date/:selectedHierarchy/attributes', apiOUService.historyAndCurrentNodeAttributes);
    router.get('/node/futureandcurrent/:id/:date/:selectedHierarchy/attributes', apiOUService.futureAndCurrentNodeAttributes);
    router.get('/hierarchy/types', apiOUService.hierarchyTypes);
    router.get('/edge/edgehierarchies', apiDb.edgeHierarchyTypes);
    router.get('/node/:id/parents/hierarchies/:selectedHierarchies', apiOUService.nodeAllParentsWithTypesByIdAndDate);
    router.get('/node/parents/:id/:date/:selectedHierarchy', apiOUService.nodeParentsWithTypesByIdAndDate);
    router.get('/node/children/:id/:date/:selectedHierarchy', apiOUService.nodeChildrenWithTypesByIdAndDate);
    router.get('/node/historyandcurrent/parents/:id/:date/:selectedHierarchy', apiOUService.nodeHistoryAndCurrentParentsWithTypesByIdAndDate);
    router.get('/node/historyandcurrent/children/:id/:date/:selectedHierarchy', apiOUService.nodeHistoryAndCurrentChildrenWithTypesByIdAndDate);
    router.get('/node/:id', apiDb.getNodeByUniqueId);
    router.get('/node/predecessors/:id/:date', apiOUService.nodePredecessors);
    router.get('/node/successors/:id', apiOUService.nodeSuccessors);
    router.put('/node/successor', isAdminOrWriter, apiOUService.modifySuccessors);
    router.get('/node/futureandcurrent/parents/:id/:date/:selectedHierarchy', apiOUService.nodeFutureAndCurrentParentsWithTypesByIdAndDate);
    router.get('/node/futureandcurrent/children/:id/:date/:selectedHierarchy', apiOUService.nodeFutureAndCurrentChildrenWithTypesByIdAndDate);
    router.get('/node/fullname/:id/:date', apiOUService.currentNodeFullNames);
    router.get('/node/fullname/all/:id', apiOUService.allNodeFullNames);
    router.get('/node/fullname/historyandcurrent/:id/:date', apiOUService.historyAndCurrentNodeFullNames);
    router.get('/node/fullname/futureandcurrent/:id/:date', apiOUService.futureAndCurrentNodeFullnames);
    router.get('/node/fullname/favorable/:id/:date', apiOUService.favorableFullNames);
    router.get('/node/all/parents/:id/:date/:selectedHierarchy', apiOUService.nodeAllParents);
    router.get('/node/all/children/:id/:date/:selectedHierarchy', apiOUService.nodeAllChildren);
    router.get('/tree/:hierarchies/:date', apiOUService.tree);
    router.get('/hierarchyFilters', apiDb.hierarchyFilters);
    router.get('/hierarchyFilters/:date', apiDb.validHierarchyFilters);
    router.post('/hierarchyFilters', isAdmin, apiDb.insertHierarchyFilters);
    router.put('/hierarchyFilters', isAdmin, apiDb.updateHierarchyFilter);
    router.delete('/hierarchyFilters', isAdmin, apiDb.deleteHierarchyFilter);
    router.get('/hierarchyFilters/:selectedHierarchies/:sections/attributes/keys', apiDb.attributeKeys);
    router.get('/hierarchyFilters/:selectedHierarchies/:sections/:attributes/attributes/keys', apiDb.hierarchiesBySections);
    router.post('/texts', isAdminOrWriter, apiDb.insertTexts);
    router.put('/texts', isAdminOrWriter, apiDb.updateText);
    router.delete('/texts', isAdminOrWriter, apiDb.deleteText);
    router.get('/user', apiUserService.userInfo);
    router.get('/logout', apiUserService.logout);
    router.post('/node/addNewUpperUnit', isAdminOrWriter, apiDb.addNewUpperUnit);
    router.put('/node/properties/:nodeId', isAdminOrWriter, apiDb.updateNodeProperties);
    router.put('/node/parentUnit/properties', isAdminOrWriter, apiDb.updateParentUnitProperties);
    router.put('/node/parents/update', isAdminOrWriter, apiOUService.updateParents);
    router.put('/node/:id/attributes/names', isAdminOrWriter, apiOUService.updateNodeNameAttributes);
    router.get('/node/:id/attributes/names', apiOUService.getNodeNameAttributes);
    router.put('/node/:id/attributes/types', isAdminOrWriter, apiOUService.updateNodeTypeAttributes);
    router.get('/node/:id/attributes/types', apiOUService.getNodeTypeAttributes);
    router.put('/node/:id/attributes/codes', isAdminOrWriter, apiOUService.updateNodeCodeAttributes);
    router.get('/node/:id/attributes/codes', apiOUService.getNodeCodeAttributes);
    router.put('/node/:id/attributes/others', isAdminOrWriter, apiOUService.updateNodeOtherAttributes);
    router.get('/node/:id/attributes/others/hierarchies/:hierarchies', apiOUService.getNodeOtherAttributes);
    router.get('/node/attributes/distinctattributes', apiOUService.getDistinctNodeAttrs);
    router.get('/node/section/:sectionType/attributes', apiDb.getSectionTypeAttributes);
    router.get('/node/section/alldistinct', apiDb.getDistinctSectionAttributes);
    router.put('/node/:id/update',isAdminOrWriter, apiOUService.updateNode);
    router.post('/node/:id/insert', isAdminOrWriter, apiOUService.insert);
    router.get('/section/all', apiOUService.getSectionAttributes);
    router.put('/section/update', isAdmin, apiOUService.updateSection);
    router.post('/section/insert', isAdmin, apiOUService.insertSection);
    router.delete('/section/:id/delete', isAdmin, apiOUService.deleteSection);
    router.get('/hierarchy/publicityList', apiOUService.getPublicityList);
    router.put('/hierarchy/updatePublicity', isAdmin, apiOUService.updatePublicity);
    router.post('/hierarchy/insertPublicity', isAdmin, apiOUService.insertPublicity);
};
