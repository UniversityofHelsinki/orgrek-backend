'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const apiGatewayHost = process.env.API_GATEWAY_HOST;
const hyOrganisationApiKey = process.env.HY_ORGANISATION_API_KEY;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/api/tree/:type", async (req, res) => {
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
        res.json({tree: data});
    } catch (err) {
        console.log(err);
        console.error(err.stack);
    }
});

app.listen(port, ipaddress, () => {
    console.log( "Listening on " + ipaddress + ", port " + port );
});
