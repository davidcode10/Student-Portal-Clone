const express = require('express')
const router = express.Router()

const LearnUnit = require('./../models/learnUnit.model')
const User = require('./../models/user.model')

router.get('/selectLearnUnit/:id', (req, res) => {
    LearnUnit
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error finding learn unit', err }))
})

router.get('/getAllLearnUnits', (req, res) => {
    LearnUnit
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching learn unit', err }))
})

router.post('/newLearnUnit', (req, res) => {
    const learnUnit = { ...req.body }
    LearnUnit
        .create(learnUnit)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating learn unit', err }))
})

router.put('/editLearnUnit/:learnunit_id', (req, res) => {
    const { completed } = req.body
    LearnUnit
        .findByIdAndUpdate(req.params.learnunit_id, { completed })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing learn unit', err }))
})

router.put('/getLearnUnit/:learnunit_id', (req, res) => {
    const user = req.session.currentUser._id
    const id = req.params.learnunit_id
    User
        .findByIdAndUpdate(user, { $push: { completedUnits: id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing learn unit', err }))
})

router.post('/removeLearnUnit/:learnunit_id', (req, res) => {
    const user = req.session.currentUser._id
    const id = req.params.learnunit_id
    User
        .findByIdAndUpdate(user, { $pull: { completedUnits: id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing learn unit', err }))
})

module.exports = router