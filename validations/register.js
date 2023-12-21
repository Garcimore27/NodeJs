const {check, validationResult} = require('express-validator');
let validation = [
    check('firstName').isLength({min: 3}),
    check('lastName').isLength({min: 3}),
    check('email').isEmail().withMessage('Email is not valid'),
    check('password')
    .isLength({min: 8}).withMessage('Password must be at least 8 characters long')
    .matches('[0-9]').withMessage('Password must contain at least one number')
    .matches('[A-Z]').withMessage('Password must contain at least one uppercase letter')
    .matches('[a-z]').withMessage('Password must contain at least one lowercase letter')
    .matches('[!@#$%^&*(),.?":{}|<>]').withMessage('Password must contain at least one special character')

]

module.exports = validation