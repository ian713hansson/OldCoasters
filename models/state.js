const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const State = new Schema(
    {
        name: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('states', State)
    