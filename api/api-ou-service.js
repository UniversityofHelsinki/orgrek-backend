const fetch = require("node-fetch");
const apiOuServiceHost = process.env.API_OU_SERVICE_HOST;

exports.currentNodeAttributes = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}/attributes`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.historyAndCurrentNodeAttributes = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/historyandcurrent/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}/attributes`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.futureAndCurrentNodeAttributes = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/futureandcurrent/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}/attributes`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.nodeParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents1/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.nodeHistoryAndCurrentParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents1/historyandcurrent/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.nodeFutureAndCurrentParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents1/futureandcurrent/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.nodeAllParents = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents1/all/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.nodeChildrenWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/children1/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
exports.nodeHistoryAndCurrentChildrenWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/children1/historyandcurrent/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.nodeFutureAndCurrentChildrenWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/children1/futureandcurrent/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.nodeAllChildren = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/children1/all/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
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
        res.status(500).send(err);
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
        res.status(500).send(err);
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
        res.status(500).send(err);
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
        res.status(500).send(err);
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
        res.status(500).send(err);
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
        res.status(500).send(err);
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
        res.status(500).send(err);
    }
};

exports.tree = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/tree/${req.params.hierarchies}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        const data = await response.json();
        res.json(data);

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.favorableFullNames = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/fullname/favorable/${req.params.id}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateNodeNameAttributes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/names`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.getNodeNameAttributes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/names`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateNodeTypeAttributes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/types`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.getNodeTypeAttributes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/types`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateNodeCodeAttributes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/codes`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.getNodeCodeAttributes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/codes`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateNodeOtherAttributes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/others`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.getNodeOtherAttributes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/others`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.nodeAllParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/${req.params.id}/allParents/${req.params.selectedHierarchies}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateNode = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/update`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

