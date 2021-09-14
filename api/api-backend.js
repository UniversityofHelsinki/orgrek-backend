const fetch = require('node-fetch');
const apiBackendHost = process.env.API_BACKEND_HOST;


exports.hello = async (req, res) => {
    try {
        console.log(req.headers);
        let headers = {
            'accept': 'application/json',
        }
        const response = await fetch(`${apiBackendHost}/api/user`, {
            method: 'GET',
            headers: headers
        });
        const data = await response.json();
        console.log(data);
        res.res.json(data);
    } catch (err) {
        console.log(err);
        console.error(err.stack);
    }
}
