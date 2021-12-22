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
    }
};

exports.getNodeByUniqueId = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/${req.params.id}`;
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
        const url = `${apiDbHost}/api/edge/types`;
        const response = await fetch(url, {
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
        const url = `${apiDbHost}/api/node/predecessors/${req.params.id}`;
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
        const url = `${apiDbHost}/api/node/successors/${req.params.id}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};
