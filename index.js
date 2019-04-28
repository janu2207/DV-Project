/*
 *  (C) 2018, All rights reserved. This software constitutes the trade secrets and confidential and proprietary information
 *  It is intended solely for use by Sandip Salunke. This code may not be copied or redistributed to third parties without
 *  prior written authorization from Sandip Salunke
 */
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
const exec = require('child_process').exec;
var upload = multer({ dest: 'client/assets/uploads/', limits: { fieldSize: 5 * 1024 * 1024 } });

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

var onlineUsers = [];

app.get('/', function (req, res) {
  res.redirect('/dist/#')
});


// This will change in production since we'll be using the dist folder
app.use(express.static(path.join(__dirname, './client')));
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

// Listen application request on port OPENSHIFT_NODEJS_PORT OR 8080
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

http.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
  setInterval(function () {
    exec("rm -rf assets/uploads/* \;");
  }, 600000);
});
