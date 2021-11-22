const utf8 = require('utf8');
const Constants = require("../Constants");

exports.getLoggedUser = (user) => {
    let eppn = utf8.decode(user.eppn.split('@')[0]);
    let hyGroupCn = concatenateArray(utf8.decode(user.hyGroupCn).split(';'));
    let preferredLanguage = utf8.decode(user.preferredLanguage);
    let displayName = utf8.decode(user.displayName);
    return {
        eppn: eppn,
        hyGroupCn: hyGroupCn,
        preferredLanguage: preferredLanguage,
        displayName: displayName
    };
};

const concatenateArray = (data) => Array.prototype.concat.apply([], data);

exports.logoutUser = (req, res, url) => {
    req.logout();
    if (req.cookies) {
        Object.keys(req.cookies).forEach(cookie => {
            if (!cookie.includes(Constants.SHIBBOLETH_COOKIE_NAME)) {
                res.clearCookie(cookie);
            }
        });
    }
    res.redirect(url);
};