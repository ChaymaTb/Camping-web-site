const express = require('express');
const bcrypt = require('bcrypt');
const userRouter = express.Router();
const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const { registerRules, loginRules, validation } = require('../middleware/authValidator')
const isAuth = require("../middleware/passport")
require("dotenv").config()


// register user and save it
userRouter.post('/register', registerRules(), validation, async (req, res) => {
    const { first_name, last_name, email, password, profile_img, phone_number, adress, isAdmin } = req.body;
    try {
        const newUser = new User({ first_name, last_name, email, password, profile_img, phone_number, adress, isAdmin });

        // check if email exists
        const searchedUser = await User.findOne({ email })
        if (searchedUser) {
            return res.status(400).send({ msg: "email already exists" })
        };

        //hash passwword
        const salt = 10;
        const genSalt = await bcrypt.genSalt(salt);
        const hashedPassword = await bcrypt.hash(password, genSalt);
        newUser.password = hashedPassword;

        // save user
        const result = await newUser.save();
        //generate a token
        const payload = {
            _id: result._id,
            name: result.first_name
        }
        const token = await jwt.sign(payload, process.env.SecretOrKey, {
            expiresIn: 1000 * 3600 * 24,        })
        res.status(200).send({ user: result, msg: "user is saved", token: `Bearer ${token}` })
    }
    catch (error) {
        res.status(500).send('can not save the user')
        console.log(error);
    }
})

//login
userRouter.post('/login', loginRules(), validation, async (req, res) => {
    const { email, password } = req.body
    try {
        //find if the user exists
        const searchdUser = await User.findOne({ email })
        // if user not existed
        if (!searchdUser) {
            return res.status(400).send({ msg: "bad credential" })
        }
        // check password equal
        const match = await bcrypt.compare(password, searchdUser.password)
        if (!match) {
            return res.status(400).send({ msg: "bad credential" })
        }
        //create token
        const payload = {
            _id: searchdUser._id,
            first_name: searchdUser.first_name,
        }
        const token = await jwt.sign(payload, process.env.SecretOrKey, {
            expiresIn: 1000 * 3600 * 24,
        })
        //send user
        res.status(200).send({ user: searchdUser, msg: "user is sent", token: `Bearer ${token}` })
    } catch (error) {
        res.status(500).send({ msg: 'can not get the user' })
    }
})
// get current user
userRouter.get('/current', isAuth(), (req, res) => {
    res.status(200).send({ user: req.user });
})

// get all users
userRouter.get('/all', async (req, res) => {
    try {
        let result = await User.find().sort(
            { _id: -1}
        );
        res.send({ users: result, msg: "all users" })
    }
    catch (error) {
        console.log(error);
    }
});

// Update user 
userRouter.put("/modify/:id", async (req, res) => {
    try {
        let result = await User.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: { ...req.body } },
            { new: true }
        );
        res.send({ newUser: result, msg: "user updated" });
    }
    catch (error) {
        console.log(error)
    }
});

// delete user
userRouter.delete("/deleteuser/:id", async (req, res) => {
    try {
        let result = await User.findOneAndRemove({
            _id: req.params.id,
        });
        res.send({ result, msg: "activity is deleted" })
    } catch (error) {
        console.log(error)
    }
});

module.exports = userRouter;