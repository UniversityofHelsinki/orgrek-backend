let ReverseProxyStrategy = require('passport-reverseproxy');

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
