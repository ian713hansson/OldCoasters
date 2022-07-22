const db = require('./db')
const { State, Coaster } = require('./models')

const findOneState = async () => {
  const state = await Coaster.findById('62d9a32f82c0eb02d79b757c')
  console.log('state', state)
}

const getAllCoasters = async (req, res) => {
  let allCoasters = await Coaster.find()
  console.log(allCoasters)
}

const run = async () => {
  try {
    // await findOneState()
    await getAllCoasters()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

run()
