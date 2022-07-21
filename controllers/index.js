const { Coaster, State } = require('../models')

const getCoasterById = async (req, res) => {
  try {
    const { id } = req.params
    const currentCoaster = await Coaster.findById(id)
    if (!currentCoaster) {
      return res.status(404).send('This coaster does not exist')
    }
    return res.status(201).json({ currentCoaster })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addCoaster = async (req, res) => {
  try {
    const newCoaster = await new Coaster(req.body)
    await plant.save()
    return res.status(201).json({ newCoaster })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getCoasterById,
  addCoaster
}
