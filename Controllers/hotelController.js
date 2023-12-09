// controllers/bookingController.js
// controllers/hotelController.js

const { Sequelize } = require('sequelize');
const Hotel = require('../Models/Hotel');
const Booking = require('../Models/booking');

async function searchHotels({ area, checkIn, checkOut }) {
  try {
    // Pastikan tanggal check-in dan check-out valid
    if (!checkIn || !checkOut) {
      throw new Error('Harap masukkan tanggal check-in dan check-out.');
    }

    // Cari hotel berdasarkan daerah, check-in, dan check-out
    const hotels = await Hotel.findAll({
      where: {
        area,
        checkIn: { [Sequelize.lte]: new Date(checkOut) },
        checkOut: { [Sequelize.gte]: new Date(checkIn) },
      },
    });

    return hotels;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  searchHotels,
};


