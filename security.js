let ReverseProxyStrategy = require('passport-reverseproxy');
const Constants = require('./Constants');

const ipaddr = require('ipaddr.js');
const localhostIP = ipaddr.process('127.0.0.1');

const shibbolethAuthentication = (app, passport) => {
    passport.use(new ReverseProxyStrategy({
            headers: {
                'eppn': {alias: 'eppn', required: true},
                'preferredlanguage': {alias: 'preferredLanguage', required: false},
                'hyGroupCn': {alias: 'hyGroupCn', required: false},
                'displayName': {alias: 'displayName', required: false}
            },
            whitelist: localhostIP
        })
    );
    app.use(passport.initialize());

    app.use((req, res, next) => {
        passport.authenticate('reverseproxy', {session: false})(req, res, next);
    });
};

const isAdminOrWriter = (req, res, next) => {
    if (!req.user.roles || !req.user.roles.includes(Constants.ROLE_ADMIN) && !req.user.roles.includes(Constants.ROLE_WRITER)) {
        return res.status(403).json({
            status: 403,
            message: 'FORBIDDEN'
        })
    }
    next();
}

const isAdmin = (req, res, next) => {
    if (!req.user.roles || !req.user.roles.includes(Constants.ROLE_ADMIN)) {
        return res.status(403).json({
            status: 403,
            message: 'FORBIDDEN'
        })
    }
    next();
};

module.exports = {
    shibbolethAuthentication : shibbolethAuthentication,
    isAdmin: isAdmin,
    isAdminOrWriter: isAdminOrWriter
};
