const apiGw = require('./api-gw');

module.exports = (router) => {
    router.get('/tree/:type', apiGw.tree);
}
