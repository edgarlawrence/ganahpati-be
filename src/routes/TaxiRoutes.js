const express = require('express');
const { getTaxiData } = require('../controller/TaxiController');
const { TestExpress } = require('../controller/TestExpress')

const router = express.Router();

router.get('/yellow-taxi-data', getTaxiData);
router.get('/', TestExpress);

module.exports = router;
