const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const https = require('https');
const ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/api/hello", async (req, res) => {
    try {
        console.log(req.headers);
        const response = await fetch('https://organisaatiorekisteri.ohtu-dev.it.helsinki.fi/api/hierarchy/a1/2021-07-20/justrootnode', {method: 'GET', headers: req.headers, agent: httpsAgent}  );
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
        console.error(err.stack);
    }
    res.json({message: "Hello from server!"});
});

app.listen(port, ipaddress, () => {
    console.log( "Listening on " + ipaddress + ", port " + port );
});
