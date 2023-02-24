const fetch = require('node-fetch');
const apiDbHost = process.env.API_DB_HOST;


exports.texts = async (req, res) => {
    try {
        const response = await fetch(`${apiDbHost}/api/texts`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.textsByLang = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/texts/${req.params.language}/${req.params.ns}`;
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


exports.currentNodeAttributes = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/${req.params.id}/${req.params.date}/attributes`;
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

exports.historyAndCurrentNodeAttributes = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/historyandcurrent/${req.params.id}/${req.params.date}/attributes`;
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

exports.futureAndCurrentNodeAttributes = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/futureandcurrent/${req.params.id}/${req.params.date}/attributes`;
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

exports.getNodeByUniqueId = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/${req.params.id}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.insertTexts = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/texts`;
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

exports.updateText = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/texts`;
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

exports.deleteText = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/texts`;
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

exports.hierarchyFilters = async (req, res) => {
    try {
        const response = await fetch(`${apiDbHost}/api/hierarchyfilter/all`, {
            method: 'GET',
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.validHierarchyFilters = async (req, res) => {
    try {
        const response = await fetch(`${apiDbHost}/api/hierarchyfilter/${req.params.date}/now`, {
            method: 'GET',
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.insertHierarchyFilters = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/hierarchyfilter`;
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

exports.updateHierarchyFilter = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/hierarchyfilter`;
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

exports.deleteHierarchyFilter = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/hierarchyfilter`;
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

exports.updateAttributes = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/attributes/${req.params.nodeId}/${req.params.skipValidation}`;
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

exports.insertAttributes = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/attributes/${req.params.nodeId}/${req.params.skipValidation}`;
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

exports.addNewUpperUnit = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/addNewUpperUnit`;
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

exports.updateNodeProperties = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/properties/${req.params.nodeId}`;
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

exports.updateParentUnitProperties = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/parentUnit/properties`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
