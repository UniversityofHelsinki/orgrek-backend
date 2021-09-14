const fetch = require('node-fetch');
const apiBackendHost = process.env.API_BACKEND_HOST;


exports.texts = async (req, res) => {
    try {
        console.log(req.headers);
        let headers = {
            'cookie': req.headers.cookie,
            'eppn': req.headers.eppn ,
            'hyGroupCn' : req.headers.hyGroupCn,
            'preferredlanguage': req.headers.preferredlanguage
        }
        console.log("parsed headers:" , headers);
        const response = await fetch(`${apiBackendHost}/api/texts/all?lang=fi`, {
            method: 'GET',
            headers: headers
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        res.res.json(data);
    } catch (err) {
        console.log(err);
    }
}
