const mongoose = require('mongoose')
const schema = mongoose.Schema;

const activitySchema = new schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    url: { type: String, require: true },
    url_icon: { type: String, require: true },
    benefits: {type: Array, require:true, default:["Refresing to get such a personal touch.","Duis aute irure dolor in in voluptate.","Velit esse cillum eu fugiat pariatur.","Duis aute irure dolor in in voluptate."]}
});

const Activity = mongoose.model('activity', activitySchema);
module.exports = Activity;