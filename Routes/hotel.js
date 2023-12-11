const express = require('express');
const hotelController = require('../Controllers/hotelController');
const router = express.Router();

router.get('/hotel', hotelController.searchHotel);
router.get('/hotel/hasil', hotelController.searchHotel);
router.post('/hotel/createBookingHotel', hotelController.createBookingHotel);

module.exports = router;

