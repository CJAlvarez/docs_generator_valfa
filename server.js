const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const session = require('express-session');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const https = require('http');

const app = express();

// ____________________________ APP ________________________________-

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.options('*', cors());
app.use(helmet());

// Statics
app.use(express.static(__dirname + '/dist/angular'));
app.use(express.static(__dirname + '/public'));

// Controllers
const AppController = require('./server/app');
app.use('', AppController);

// Errors
app.use(function (err, req, res, next) {
	console.error(err);
	res.status(500).send({ title: "Error interno del servidor", message: "Revise su conexión de internet o inténtelo más tarde" });
})

const port = process.env.PORT || '8000';
app.set('port', port);
app.set('host', '127.0.0.1');
const server = http.createServer(app);

process.on('uncaughtException', function (err) {
	console.error(err);
});
