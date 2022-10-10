const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userSchema = new schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    profile_img: {type: String, require: true, default: '/assets/user_img.png'},
    phone_number: { type: String, require: true, default:'xx xxx xxx' },
    adress: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default: false }
});

const User = mongoose.model('user', userSchema);
module.exports = User;