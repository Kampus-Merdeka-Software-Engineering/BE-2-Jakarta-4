// controllers/bookingController.js
const Booking = require('../Models/booking');

//CRUD
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Maaf Server Sedang Sibuk' });
  }
};

const getBookings = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Maaf Server Sedang Sibuk' });
  }
};

// Implementasikan fungsi update, delete

module.exports = {
  createBooking,
  getBookings,
};
