const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
     phone: String,
     topic: String,
     timePreference: String,
     subscribe: Boolean
});

module.exports = mongoose.model('user',userSchema,'users');