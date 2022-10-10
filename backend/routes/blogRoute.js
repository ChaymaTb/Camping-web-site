const express = require('express');
const blogRoute = express.Router();
const Blog = require('../models/blogModel');

// Create blog and save it
blogRoute.post('/addblog', async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        let result = await newBlog.save();
        res.send({ blog: result, msg: "blog is saved" });
    }
    catch (error) {
        console.log(error);
    }
});

// Get all blogs
blogRoute.get('/', async (req, res) => {
    try {
        let result = await Blog.find().sort(
            { _id: -1}
        );
        res.send({ blogs: result, msg: 'all blogs' })
    }
    catch (error) {
        console.log(error);
    }
});

// Update blog
blogRoute.put('/modifyblog/:id', async (req, res) => {
    try {
        let result = await Blog.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { ...req.body } },
            { new: true }
        )
        res.send(result)
    }
    catch (error) {
        console.log(error)
    }
});

// Delete blog
blogRoute.delete("/deleteblog/:id", async (req, res) => {
    try {
        let result = await Blog.findOneAndRemove({
            _id: req.params.id,
        });
        res.send({ result, msg: "activity is deleted" })
    } catch (error) {
        console.log(error)
    }
});

module.exports = blogRoute;