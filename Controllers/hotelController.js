const Hotel = require('../models/Hotel');

const searchHotel = async (req, res) => {
  const { city } = req.query;

  try {
  
    // Cari hotel berdasarkan daerah
    const hotel = await Hotel.findAll({
      where: {
        city: city,
      },
    });

    return res.json(hotel);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
};

module.exports = {
  searchHotel,
};



