const express = require('express')
const router = express.Router()

const Assessment = require('../models/assessment.model')

router.post('/newAssessment', (req, res) => {
    const assessment = { ...req.body }
    Assessment
        .create(assessment)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating assessment', err }))
})

router.get('/getAllAssessments', (req, res) => {
    Assessment
        .find()
        .populate('student')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching assessments', err }))
})

module.exports = router