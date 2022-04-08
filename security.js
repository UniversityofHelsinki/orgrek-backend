let ReverseProxyStrategy = require('passport-reverseproxy');
const Constants = require('./Constants');

const ipaddr = require('ipaddr.js');
const localhostIP = ipaddr.process('127.0.0.1');

module.exports.shibbolethAuthentication = (app, passport) => {
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

const calculateUserRoles = (user) => {
    for (const [key, value] of Object.entries(Constants.ROLES)) {
        if (user.hyGroupCn.includes(value)) {
            user.roles.push(key);
        }
    }

    console.log(user);
};

module.exports.addUserRoles = (app) => {
    app.use((req, res, next) => {
        req.user.roles = ['ROLE_READER'];
        calculateUserRoles(req.user);
        next();
    });
};
