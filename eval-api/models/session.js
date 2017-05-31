
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
    name: String,
    slot: String,
    presenter: String,
    level: String,
    abstract: String,
    event : String
});

module.exports = mongoose.model('Session', SessionSchema);

