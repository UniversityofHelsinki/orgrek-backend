const express = require('express');
const app = express();
const cors = require('cors')
const ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/api", (req, res) => {
    console.log("API CALL SUCCESSFUL")
    res.json({ message: "Hello from server!" });
});

app.listen(port, ipaddress, () => {
    console.log( "Listening on " + ipaddress + ", port " + port );
});
