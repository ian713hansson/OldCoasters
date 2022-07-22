const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is the home page'))

router.get('/:id', controllers.getCoasterById)

router.get('/state/:id', controllers.getStateById)

router.post('/newcoaster/:id', controllers.addCoaster)

router.get('/allcoasters', controllers.getAllCoasters)

router.get('/states', controllers.getAllStates)

module.exports = router
