const express = require('express')
const router = express.Router()
const validation = require('../validations/register')
const validationLogin = require('../validations/login')
const {
    createUser,
    getUsers,
    getOneUser
} = require('../controllers/UsersController')

router.post('/users', validation, createUser)
router.get('/users', getUsers)
router.post('/users/login',validationLogin, getOneUser)

module.exports = router