#!/bin/env node

// DEPS
var express = require('express')

///////////////
/// Config
///////////////
var Broadsheet = function() {
    var app = this;

    app.init = function() {
        app.server = express();

        app.server.use(express.static(__dirname + '/public'));
    }

    app.start = function() {
        var ipaddress = process.env.IP || "127.0.0.1";
        var port = process.env.PORT || 3000;
        app.server.listen(port, ipaddress);
        console.log('Unfurling at http://' + ipaddress + ":" + port);
    }
};

///////////////
/// Fire it up
///////////////
var instance = new Broadsheet();
instance.init();
instance.start();