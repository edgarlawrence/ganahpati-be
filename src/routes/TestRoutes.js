const express = require('express');
const { TestExpress } = require('../controller/TestExpress')

const router = express.Router();

router.get('/', TestExpress);

module.exports = router;
