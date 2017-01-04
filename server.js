// function User(name) {
//     this.name = name;
// }

// User.prototype.hello = function(who) {
//     console.log("Hello, " + who.name);
// }

// var vasya = new User("Vasya");
// var petya = new User("Petya");

// vasya.hello(petya);

var express = require('express');
var path = require('path'); // модуль для парсинга пути
var app = express();
var config = require('./server/libs/config');

// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
app.use(express.static(path.join(__dirname, "server\\wwwroot")));

app.get('/api', function (req, res) {
    res.send('API is running');
});

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var NewsModel = require('./server/libs/mongoose').NewsModel;
app.get('/api/news', function(req, res) {
    //res.status(200);
    // res.send([ 
    //     {id: 1, date: new Date('2017-01-01'), title: "Let's get started", message: "Some good news here" }, 
    //     {id: 2, date: new Date('2017-01-03'), title: "Back to work", message: "Compile the new application" } 
    //     ]);
    return NewsModel.find(function (err, news) {
        if (!err) {
            return res.send(news);
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});

app.listen(config.get('port'), function() {
    console.log("Express on the port " + config.get('port') + "...");
});