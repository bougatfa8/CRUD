const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepSchema = new Schema({
    Email: String,
    Lastname : String,
    Firstname: String,
}, {timestamps: true})




module.exports = mongoose.model('deps', DepSchema)
