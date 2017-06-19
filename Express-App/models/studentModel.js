var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var StudentModelSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('student', StudentModelSchema,'student');