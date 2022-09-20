const mongoose = require('mongoose')
const schema = mongoose.Schema;

const articleSchema = new schema({
    current_user: {type: String,require},
    title: {type: String,require},
    description: {type: String,require},
    date: {type: String,require}
});

const Article = mongoose.model('article', articleSchema);
module.exports = Article;