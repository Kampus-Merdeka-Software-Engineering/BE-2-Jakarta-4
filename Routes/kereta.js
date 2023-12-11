const express = require('express');
const keretaController = require('../Controllers/keretaController');
const router = express.Router();

router.get('/kereta', keretaController.searchTrain);
router.post('/kereta/createBookingKereta', keretaController.createBookingKereta);

module.exports = router;

