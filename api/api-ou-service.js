const fetch = require("node-fetch");
const apiOuServiceHost = process.env.API_OU_SERVICE_HOST;


exports.nodeParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents/${req.params.id}/${req.params.date}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};


exports.nodeChildrenWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/children/${req.params.id}/${req.params.date}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};
