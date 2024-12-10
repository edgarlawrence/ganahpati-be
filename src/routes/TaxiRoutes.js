const express = require('express');
const { getTaxiData } = require('./TaxiController');
const { TestExpress } = require('/TestExpress')

const router = express.Router();

router.get('/yellow-taxi-data', getTaxiData);
router.get('/', TestExpress);

module.exports = router;
