const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assesmentSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    link: {
        type: String
    }
}, {
    timestamps: true
})

const assesment = mongoose.model('assessment', assesmentSchema)
module.exports = assesment