const mongoose = require('mongoose')
const schema = mongoose.Schema;

const eventSchema = new schema({
    current_user: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: String, require: true },
    position: { type: Object, require: true }
});

const Event = mongoose.model('post', eventSchema);
module.exports = Event;