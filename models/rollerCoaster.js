const { Schema } = require('mongoose')

const Coaster = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    dateBuilt: { type: String, required: true },
    themeOfRide: { type: String, required: true },
    topSpeed: { type: String },
    dropLength: { type: String },
    description: { type: String },
    image: { type: String, required: true },
    review: { type: String, required: false },
    state: [{ type: Schema.Types.ObjectId, ref: 'state' }]
  },
  { timestamps: true }
)

module.exports = Coaster
