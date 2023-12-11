const express = require('express');
const pesawatController = require('../Controllers/pesawatController');
const router = express.Router();

router.get('/flight', pesawatController.searchFlight);
router.post('/flight/createBookingflight', pesawatController.createBookingFlight);

module.exports = router;