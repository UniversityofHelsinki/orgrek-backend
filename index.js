'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const routes = require('./api/routes');

const ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(cors());
app.use(compression());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const router = express.Router();
app.use('/api', router);
routes(router);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, ipaddress, () => {
    console.log( "Listening on " + ipaddress + ", port " + port );
});
