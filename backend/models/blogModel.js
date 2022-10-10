const mongoose = require('mongoose')
const schema = mongoose.Schema;

const blogSchema = new schema({
    current_user: { type: String, require: true },
    user_id: { type: String, required: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, require: true },
    position: { type: Object, require: true },
    img_url: { type: String, require: true }
});

const Blog = mongoose.model('post', blogSchema);
module.exports = Blog;