const { check, validationResult } = require("express-validator")


exports.registerRules = () => [
        check("first_name", "first name is required").notEmpty(),
        check("last_name", "last name is required").notEmpty(),
        check("email", "email is required").notEmpty(),
        check("email", "check your email again").notEmpty().isEmail(),
        check("password", "password must be from 8 to 16 character").isLength({
            min: 8, max: 16
        })
    ];

exports.loginRules = () => 
    [
    check("email", "email is required").notEmpty(),
    check("email", "check your email again").notEmpty().isEmail(),
    check("password", "password must be from 8 to 16 character").isLength({
        min: 8, max: 16
    })
];

exports.validation = (req, res, next) => {
    const errors = validationResult({req});
    if (!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array().map(el => { msg: el.msg })})
    }
    next()
};