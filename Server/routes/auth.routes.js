const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const bcryptSalt = 10

const User = require('../models/user.model')

router.post('/signup', (req, res) => {
    const { username, email, password } = req.body
    User
        .findOne({ username })
        .then(user => {
            if (user) {
                res.status(400).json({ code: 400, message: 'Username already exist' })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)
            User
                .create({ username, email, password: hashPass })
                .then(() => res.json({ code: 200, message: 'User created' }))
                .catch(err => res.status(500).json({ code: 500, message: 'Error while creating user in DataBase', err }))
        })
        .catch(err => res.status(500).json({ code: 500, message: 'Error while fetching user in DataBase', err }))
})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    User
        .findOne({ username })
        .then(user => {
            if (!user) {
                res.status(401).json({ code: 401, message: 'Username not registered', err })
                return
            }
            if (bcrypt.compareSync(password, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorrect password', err })
                return
            }
            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'Error while fetching the user in DataBase', err }))
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => res.json({ message: 'Logout successful' }))
})

router.post('/isloggedin', (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router