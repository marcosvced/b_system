const express = require('express')

const router = express.Router()
const quickStart = require('../views/quick_start/routes')
const demos = require('../views/demos/routes')

router.use('/', quickStart)
router.use('/', demos)

module.exports = router
