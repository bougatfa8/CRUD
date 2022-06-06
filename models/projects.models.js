const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Email: String,
    Lastname : String,
    Firstname: String,
    date : String
}, {timestamps: true})




module.exports = mongoose.model('projects', UserSchema)