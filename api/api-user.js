const userService = require('../service/userService');

exports.userInfo = (req, res) => {
    res.json(userService.getLoggedUser(req.user));
};
