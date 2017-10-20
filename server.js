var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

// returns a Compiler instance
webpack(webpackConfig, function(err, stats) {
    // ...
});


var express = require('express');
var app = express();
var path = require('path');

app.use('/resources', express.static(path.join(__dirname, 'resources')))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000);