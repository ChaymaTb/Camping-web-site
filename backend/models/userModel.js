const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userSchema = new schema({
    fullname: {type: String,require},
    email: {type: String,require},
    password: {type: String,require},
    role: {type: String,require}
});

const User = mongoose.model('user', userSchema);
module.exports = User;