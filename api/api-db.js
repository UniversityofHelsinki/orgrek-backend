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
