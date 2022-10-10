const express = require('express');
const activityRouter = express.Router();
const Activity = require('../models/activity');

// Create activity and save it
activityRouter.post('/addactivity', async (req, res) => {
    try {
        const newActivity = new Activity(req.body);
        let result = await newActivity.save();
        res.send({ activity: result, msg: 'activity is added' });
    }
    catch (error) {
        console.log(error);
    }
});

// Get activity by id
activityRouter.get("/oneactivity/:id", async (req, res) => {
    try {
        const id = req.params.id;
        let result = await Activity.find({ _id: id });
        res.send({
            activities: result, msg: 'activity'
        });
    } catch (error) {
        console.log(error);
    }
})

// Get all activities
activityRouter.get('/', async (req, res) => {
    try {
        let result = await Activity.find().sort({
            _id: -1
        });
        res.send({ activities: result, msg: 'all activities' })
    }
    catch (error) {
        console.log(error);
    }
});

// Update activity
activityRouter.put('/modifyactivity/:id', async (req, res) => {
    try {
        let result = await Activity.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { ...req.body } },
            { new: true }
        );
        res.send({ activity: result, msg: 'your activity is updated' })
    }
    catch (error) {
        console.log(error)
    }
});

// Delete activity
activityRouter.delete("/delete/:id", async (req, res) => {
    try {
        let result = await Activity.findOneAndRemove({
            _id: req.params.id,
        });
        res.send({ msg: "activity is deleted" })
    } catch (error) {
        console.log(error)
    }
});

module.exports = activityRouter;