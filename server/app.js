const express = require('express');
const path = require('path');
const app = express();

const ControllerApi = require('./controller');
app.use('/api', ControllerApi);

app.get('/ping', function (req, res) {
	res.status(200).json(true);
});

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname + '/../dist/angular/index.html'));
});

module.exports = app;