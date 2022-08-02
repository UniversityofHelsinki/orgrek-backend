const fetch = require("node-fetch");
const apiOuServiceHost = process.env.API_OU_SERVICE_HOST;

exports.currentNodeAttributes = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/${req.params.id}/${req.params.date}/attributes`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.nodeParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents1/${req.params.id}/${req.params.date}`, {
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
        const response = await fetch(`${apiOuServiceHost}/api/node/parents1/historyandcurrent/${req.params.id}/${req.params.date}`, {
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
        const response = await fetch(`${apiOuServiceHost}/api/node/parents1/futureandcurrent/${req.params.id}/${req.params.date}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.nodeAllParents = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents1/all/${req.params.id}/${req.params.date}`, {
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
        const response = await fetch(`${apiOuServiceHost}/api/node/children1/${req.params.id}/${req.params.date}`, {
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
        const response = await fetch(`${apiOuServiceHost}/api/node/children1/historyandcurrent/${req.params.id}/${req.params.date}`, {
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
        const response = await fetch(`${apiOuServiceHost}/api/node/children1/futureandcurrent/${req.params.id}/${req.params.date}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.nodeAllChildren = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/children1/all/${req.params.id}/${req.params.date}`, {
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
        const url = `${apiOuServiceHost}/api/node/predecessors1/${req.params.id}/${req.params.date}`;
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
        const url = `${apiOuServiceHost}/api/node/successors1/${req.params.id}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.currentNodeFullNames = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/fullname/${req.params.id}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.historyAndCurrentNodeFullNames = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/fullname/historyandcurrent/${req.params.id}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.futureAndCurrentNodeFullnames = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/fullname/futureandcurrent/${req.params.id}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.allNodeFullNames = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/fullname/all/${req.params.id}/`;
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
            headers : {
                user : JSON.stringify(req.user)
            }
        });
        const data = await response.json();
        res.json(data);

    } catch (err) {
        console.log(err);
    }
};

exports.tree = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/tree/${req.params.hierarchy}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        const data = await response.json();
        res.json(data);

    } catch (err) {
        console.log(err);
    }
};
