const express = require('express');
const liburanController = require('../Controllers/liburanController');
const router = express.Router();

router.get('/liburan', liburanController.searchHolidays);
router.post('/liburan/createBookingLiburan', liburanController.createBookingLiburan);

module.exports = router;