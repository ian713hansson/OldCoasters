const { model } = require('mongoose')
const CoasterSchema = require('./rollerCoaster')
const StateSchema = require('./state')

const Coaster = model('Coaster', CoasterSchema)
const State = model('State', StateSchema)

module.exports = {
  Coaster,
  State
}
