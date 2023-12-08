const fetch = require('node-fetch');
const apiDbHost = process.env.API_DB_HOST;
const apiOuServiceHost = process.env.API_OU_SERVICE_HOST;

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

exports.hierarchiesBySections = async (req, res) => {
    try {
        const selectedHierarchies = req.params.selectedHierarchies;
        const sections = req.params.sections;
        const attributes = req.params.attributes;
        const response = await fetch(`${apiDbHost}/api/hierarchyfilter/${selectedHierarchies}/${sections}/${attributes}/attributes/hierarchies`, {
            method: 'GET',
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.attributeKeys = async (req, res) => {
    try {
        const selectedHierarchies = req.params.selectedHierarchies;
        const sections = req.params.sections;
        const response = await fetch(`${apiDbHost}/api/hierarchyfilter/${selectedHierarchies}/${sections}/attributes/keys`, {
            method: 'GET',
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

exports.getSectionTypeAttributes = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/section/${req.params.sectionType}/attributes`;
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

exports.edgeHierarchyTypes = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/edge/edgehierarchies`;
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

exports.getDistinctSectionAttributes = async (req, res) => {
    try {
        const response = await fetch(`${apiDbHost}/api/section/alldistinct`, {
            method: 'GET',
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
        const userHierarchies = await getUsersHierarchies(req);
        if (!checkIfUserHasAccessToHierarchy(userHierarchies, req.params.hierarchies)) {
            return res.status(403).send("User not allowed to see some of the selected hierarchies.");
        }
        const url = `${apiDbHost}/api/tree/${req.params.hierarchies}/${req.params.date}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const checkIfUserHasAccessToHierarchy = (userHierarchies, hierarchies) => {
    let foundHier = true;

    const hierarchiesArr = hierarchies.split(',');

    hierarchiesArr.forEach((item) => {
        if (!userHierarchies.includes(item)) {
            foundHier = false;
        }
    });
    return foundHier;
};

const getUsersHierarchies = async (req) => {
    const url = `${apiOuServiceHost}/api/hierarchy/types`;
    const response = await fetch(url, {
        method: 'GET',
        headers : {
            user : JSON.stringify(req.user)
        }
    });
    const hierarchiesAllowedForUser = await response.json();
    return hierarchiesAllowedForUser;
};

exports.nodeAttributes = async (req, res) => {
    try {
        const userHierarchies = await getUsersHierarchies(req);
        if (!checkIfUserHasAccessToHierarchy(userHierarchies, req.params.hierarchies)) {
            return res.status(403).send("User not allowed to see some of the selected hierarchies.");
        }
        const url = `${apiDbHost}/api/node/${req.params.id}/${req.params.hierarchies}/${req.params.date}/attributes`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.parents = async (req, res) => {
    try {
        const userHierarchies = await getUsersHierarchies(req);
        if (!checkIfUserHasAccessToHierarchy(userHierarchies, req.params.hierarchies)) {
            return res.status(403).send("User not allowed to see some of the selected hierarchies.");
        }
        const url = `${apiDbHost}/api/node/${req.params.id}/${req.params.date}/parents/${req.params.hierarchies}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.children = async (req, res) => {
    try {
        const userHierarchies = await getUsersHierarchies(req);
        if (!checkIfUserHasAccessToHierarchy(userHierarchies, req.params.hierarchies)) {
            return res.status(403).send("User not allowed to see some of the selected hierarchies.");
        }
        const url = `${apiDbHost}/api/node/${req.params.id}/${req.params.date}/children/${req.params.hierarchies}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.predecessors = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/${req.params.id}/${req.params.date}/predecessors`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.successors = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/node/${req.params.id}/${req.params.date}/successors`;
        const response = await fetch(url, {
            method: 'GET'
        });
        return res.status(response.status).json(await response.json());
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.attributeOrders = async (req, res) => {
  try {
    const url = `${apiDbHost}/api/attributeorder`;
    const response = await fetch(url, {
        method: 'GET'
    });
    return res.status(response.status).json(await response.json());
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.insertAttributeOrder = async (req, res) => {
  try {
    const url = `${apiDbHost}/api/attributeorder`;
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

exports.deleteAttributeOrder = async (req, res) => {
  try {
    const url = `${apiDbHost}/api/attributeorder`;
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

exports.updateAttributeOrder = async (req, res) => {
  try {
    const url = `${apiDbHost}/api/attributeorder`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    return res.status(response.status).end();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports = (checkIfUserHasAccessToHierarchy, getUsersHierarchies);
