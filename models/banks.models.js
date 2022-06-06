const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankSchema = new Schema({
    Email: String,
    Lastname : String,
    Firstname: String,
    Age: String
}, {timestamps: true})




module.exports = mongoose.model('Banks', BankSchema)
