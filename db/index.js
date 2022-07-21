const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://ianhansson:i2b434wm1zVaUecC@cluster0.6yptjno.mongodb.net/OldCoasters'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
