const express = require('express')

const router = express.Router()
const quickStart = require('../views/quick_start/routes')

router.use('/', quickStart)

module.exports = router
