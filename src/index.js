const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/api/hello", async (req, res) => {
    try {
        console.log(req.headers);
        const response = await fetch('https://lataamo-dev.it.helsinki.fi/api/user', {
            method: 'GET',
            headers: req.headers
        });
        const data = await response.json();
        console.log(data);
        res.res.json({message: "Hello from server!"});
    } catch (err) {
        console.log(err);
        console.error(err.stack);
    }
});

app.listen(port, ipaddress, () => {
    console.log( "Listening on " + ipaddress + ", port " + port );
});
