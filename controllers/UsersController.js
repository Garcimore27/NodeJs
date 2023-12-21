const User = require('../models/Users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { validationResult } = require('express-validator');

const createUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.errors.array() })
    }
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    let user = new User()
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.email = req.body.email
    user.password = hash
    
    user.save().then(savedUser => {
        res.json(savedUser)
    })
    .catch(err => {
        console.log(err)
    })

}

const getUsers = (req, res) => {
    User.find().then(data => {
        console.log(data)
        res.json(data)
    })
}

const getOneUser = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.errors.array() })
    }
    User.findOne({email: req.body.email}).then(async data => {
            const hashOK = await bcrypt.compare(req.body.password, data.password);
            console.log("DATA RETOURNEES : ", data)
            if(!hashOK){
                return res.status(422).json("Identifiants incorrects")
            }else{
                console.log("HASH OK : ", hashOK)
                res.json(data) 
            }

        }
    )
    .catch(err => {
        console.log(err)
    })
 
}

module.exports = {
    createUser,
    getUsers,
    getOneUser
}