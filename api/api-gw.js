const fetch = require('node-fetch');
const apiGatewayHost = process.env.API_GATEWAY_HOST;
const hyOrganisationApiKey = process.env.HY_ORGANISATION_API_KEY;

exports.tree = async (req, res) => {
    try {
        let headers = {
            'accept': 'application/json',
            'X-Api-Key': hyOrganisationApiKey,
        }
        const url = `https://${apiGatewayHost}/organisation/current/tree/${req.params.type}`
        console.log(url);
        let response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });
        const data = await response.json();
        console.log(data);
        res.json({tree: data});
    } catch (err) {
        console.log(err);
        console.error(err.stack);
    }
}
