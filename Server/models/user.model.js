const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['STUDENT', 'ADMIN'],
        default: 'STUDENT'
    },
    completedUnits: [{
        type: String
    }]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User