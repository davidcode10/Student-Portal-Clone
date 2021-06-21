const mongoose = require('mongoose')
const Schema = mongoose.Schema

const learnUnitSchema = new Schema({
    title: {
        type: String
    },
    category: {
        type: String,
        enum: ['LESSON', 'LAB', 'SELF GUIDED']
    },
    content: {
        type: String
    },
    nextUnit: {
        type: String
    },
    previousUnit: {
        type: String
    }
}, {
    timestamps: true
})

const learnUnit = mongoose.model('LearnUnit', learnUnitSchema)
module.exports = learnUnit