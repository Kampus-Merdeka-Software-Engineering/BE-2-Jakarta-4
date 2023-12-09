// controllers/bookingController.js
const Kereta = require('../Models/kereta');

//CRUD
const createHotel = async (req, res) => {
  try {
    const kereta = await Kereta.create(req.body);
    res.status(201).json(kereta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Maaf Server Sedang Sibuk' });
  }
};

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotels.findAll();
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Maaf Server Sedang Sibuk' });
  }
};

// Implementasikan fungsi update, delete, dll. sesuai kebutuhan

module.exports = {
  createHotel,
  getHotels,
  // tambahkan fungsi lainnya...
};
