const express = require('express');
const trips = require('../data/trips')

const router = express.Router();

router.get('/', function(req, res) {
    res.send(trips);
});

module.exports = router;
