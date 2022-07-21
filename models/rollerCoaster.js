const { Schema } = require('mongoose')

const Coaster = new Schema(
    {
        name: {type: String, required: true },
        location: {type: String, required: true},
        dateBuilt: {type: String, required: true},
        operating: {type: Boolean, required: true},
        themeOfRide: {type: String, required: true},
        topSpeed: {type: String},
        dropLength: {type: String},
        review: {type: String},
        image: {type: String, required: true},
        state: [{ type: Schema.Types.ObectId, ref: 'state'}]
    },
    { timestamps: true }
)

module.exports = Coaster
