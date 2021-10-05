const fetch = require('node-fetch');
const apiDbHost = process.env.API_DB_HOST;


exports.texts = async (req, res) => {
    try {
        console.log(`${apiDbHost}/api/texts`);
        const response = await fetch(`${apiDbHost}/api/texts`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
}

exports.textsByLang = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/texts/${req.params.language}`
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
}

exports.currentAttributes = async (req, res) => {
    try {
        const url = `${apiDbHost}/api/${req.params.id}/${req.params.date}/attributes`
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);

    } catch (err) {
        console.log(err);
    }
}
