const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('user', UserSchema);