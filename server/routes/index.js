const express = require('express');

const router = express.Router();

router.use('/trips', require('./trips'))

module.exports = router;
