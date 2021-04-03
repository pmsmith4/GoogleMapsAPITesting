var express = require('express');

var path = require('path');


var app = express();

// Serve static assets from the /public folder
app.use('/', express.static(path.join(__dirname, '/')));

var port = process.env.PORT || 5000;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('app running on port ' + port + '.');
});