var mongoose = require("mongoose");
var log = require('./log')(module);
var config = require('./config');

mongoose.connect(config.get("mongoose:uri"));
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});

var Schema = mongoose.Schema;

var News = new Schema({
    date: Date,
    title: String,
    message: String
});

module.exports.NewsModel = mongoose.model("News", News);