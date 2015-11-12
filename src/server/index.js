/**
 * A simple example of how to use Waterline v0.10 with Express
 */

var express = require('express'),
    app = express(),
    Waterline = require('waterline'),
    bodyParser = require('body-parser'),
    path = require('path'),
    methodOverride = require('method-override');



// Instantiate a new instance of the ORM
var orm = new Waterline();


/**
 * WATERLINE CONFIG
 */

// Require any waterline compatible adapters here
var mysqlAdapter = require('sails-mysql');
var config = require('./config/database')(mysqlAdapter);

/**
 * WATERLINE MODELS
 */

require('./models/__Entities')(orm);

// Load the Models into the ORM


/**
 * EXPRESS SETUP
 */

// Setup Express Application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Build Express Routes (CRUD routes for /users)
require('./routes/__Routes')(app);


/**
 * START WATERLINE
 */

// Start Waterline passing adapters in
orm.initialize(config, function(err, models) {
    if(err) throw err;

    app.models = models.collections;
    app.connections = models.connections;

    // Start Server
    var server = app.listen(3000, function () {
        console.log('Server started at http://localhost:' + server.address().port + '/');
    });
});