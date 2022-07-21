const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is the home page'))

// router.get('./coasters/:id', controllers.getCoasterById)

// router.post('./coasters/:id', controllers.addCoaster)

module.exports = router
