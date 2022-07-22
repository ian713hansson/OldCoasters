const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is the home page'))

router.get('/:id', controllers.getCoasterById)

router.post('/newcoaster/:id', controllers.addCoaster)

router.get('/allcoasters', controllers.getAllCoasters)

module.exports = router
