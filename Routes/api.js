// backend/routes/api.js

const express = require('express');
const router = express.Router();
const apiController = require('../Controllers/apiController');

router.get('/data', apiController.getData);
router.post('/data', apiController.addData);

module.exports = router;
