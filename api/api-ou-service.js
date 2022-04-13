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

exports.nodeHistoryAndCurrentParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents/historyandcurrent/${req.params.id}/${req.params.date}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.nodeFutureAndCurrentParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents/futureandcurrent/${req.params.id}/${req.params.date}`, {
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
exports.nodeHistoryAndCurrentChildrenWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/children/historyandcurrent/${req.params.id}/${req.params.date}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.nodeFutureAndCurrentChildrenWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/children/futureandcurrent/${req.params.id}/${req.params.date}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.nodePredecessors = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/predecessors/${req.params.id}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.nodeSuccessors = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/successors/${req.params.id}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.hierarchyTypes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/edge/types`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);

    } catch (err) {
        console.log(err);
    }
};
