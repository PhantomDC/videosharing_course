const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, require: true, unique: true },
    login: { type: String, require: true },
    pass: { type: String, require: true }
});

const User = model('User', userSchema);

module.exports = User;