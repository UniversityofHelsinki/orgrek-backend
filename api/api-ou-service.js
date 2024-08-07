const fetch = require('node-fetch');
const {checkIfUserHasAccessToHierarchy, getUsersHierarchies} = require('./api-db');
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

exports.nodeParentsWithTypesByIdAndDate = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/node/parents/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
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
        const response = await fetch(`${apiOuServiceHost}/api/node/parents/all/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
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
        const response = await fetch(`${apiOuServiceHost}/api/node/children/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
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
        const response = await fetch(`${apiOuServiceHost}/api/node/children/all/${req.params.id}/${req.params.date}/${req.params.selectedHierarchy}`, {
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
        const url = `${apiOuServiceHost}/api/node/predecessors/${req.params.id}/${req.params.date}`;
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
    const currentDate = new Date().toLocaleDateString('fi-FI');
    try {
        const url = `${apiOuServiceHost}/api/node/successors/${req.params.id}/${currentDate}`;
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

exports.hierarchyTypes = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/hierarchy/types`;
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

exports.updateParents = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/edge/parents`;
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

exports.updateChildren = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/edge/children`;
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
        const userHierarchies = await getUsersHierarchies(req);
        if (!checkIfUserHasAccessToHierarchy(userHierarchies, req.params.hierarchies)) {
            return res.status(403).send("User not allowed to see some of the selected hierarchies.");
        }
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/attributes/others/hierarchies/${req.params.hierarchies}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.getDistinctNodeAttrs = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/attributes/distinctattributes`;
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

exports.insert = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/${req.params.id}/insert`;
        const response = await fetch(url, {
            method: 'POST',
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

exports.modifySuccessors = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/node/successor`;
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

exports.getSectionAttributes = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/section/all`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.getDistinctSectionAttributes = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/section/alldistinct`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateSection = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/section/update`;
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

exports.insertSection = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/section/insert`;
        const response = await fetch(url, {
            method: 'POST',
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

exports.deleteSection = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/section/${req.params.id}/delete` ;
        const response = await fetch(url, {
            method: 'DELETE',
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

exports.getPublicityList = async (req, res) => {
    try {
        const response = await fetch(`${apiOuServiceHost}/api/hierarchy/publicityList`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updatePublicity = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/hierarchy/updatePublicity`;
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

exports.insertPublicity = async (req, res) => {
    try {
        const url = `${apiOuServiceHost}/api/hierarchy/insertPublicity`;
        const response = await fetch(url, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                user : JSON.stringify(req.user),
            },
            body: JSON.stringify(req.body)
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
