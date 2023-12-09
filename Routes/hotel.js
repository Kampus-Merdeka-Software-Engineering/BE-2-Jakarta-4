const express = require('express');
const hotelController = require('../Controllers/hotelController');
const router = express.Router();

router.get('/hotel', hotelController.searchHotel);

module.exports = router;