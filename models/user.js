// properties and methos
// password: Testuno
// MONGODB CONNECTION: mongodb+srv://Piriya:<password>@cluster0.v0k8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');
const User = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    password: { type: String, required: true },
});
User.plugin(validator);
module.exports = mongoose.model('User', User);