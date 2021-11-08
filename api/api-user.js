const userService = require('../service/userService');

exports.userInfo = (req, res) => {
    res.json(userService.getLoggedUser(req.user));
};

exports.logout = (req, res) => {
    const action = req.query.action;
    const redirectUrl = req.query.return;
    if (action === 'logout') {
        res.json(userService.logoutUser(req, res, redirectUrl));
    }
};
