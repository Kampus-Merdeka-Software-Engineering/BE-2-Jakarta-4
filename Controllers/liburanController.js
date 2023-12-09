const liburan = require('../models/liburan');

const searchHolidays = async (req, res) => {
  const { destination } = req.query;

  try {
  
    // Cari hotel berdasarkan daerah
    const holidays = await Holidays.findAll({
      where: {
        destination: destination,
      },
    });

    return res.json(hotel);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
};

module.exports = {
  searchHolidays,
};