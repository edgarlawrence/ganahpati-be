const express = require('express');
const { getTaxiData } = require('../controller/TaxiController');

const router = express.Router();

router.get('/yellow-taxi-data', getTaxiData);

module.exports = router;
