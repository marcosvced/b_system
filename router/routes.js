const express = require('express');

const router = express.Router();
const quickStart = require('../views/quick_start/routes');
const demos = require('../views/demos/routes');
const pages = require('../views/pages/routes');
const transitions = require('../views/transitions/routes');

router.use('/', quickStart);
router.use('/', demos);
router.use('/', pages);
router.use('/', transitions);

module.exports = router;
