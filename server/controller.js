const express = require('express');
var multer = require('multer');
var fs = require('fs');
const path = require('path');
var shell = require('shelljs');
var mysql = require('mysql');

var con = mysql.createPool({
	connectionLimit: 20,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_SCHEMA,
	insecureAuth: true,
	multipleStatements: true
});

module.exports = router;