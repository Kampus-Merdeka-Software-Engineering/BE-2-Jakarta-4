const Hotel = require('../Models/hotel');
const Booking = require('../Models/booking');

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


const createBookingHotel = async (req, res) => {
  try {
    // Pastikan bahwa req.body ada dan memiliki properti yang diperlukan
    if (!req.body || !req.body.hotel_id ) {
      console.error('Data tidak lengkap atau hotel_id tidak ditemukan:', req.body);
      return res.status(400).json({ success: false, message: 'Data tidak lengkap atau hotel_id tidak ditemukan.' });
    }

    // Cek apakah hotel dengan ID yang diberikan ada
    const existingHotel = await Hotel.findByPk(req.body.hotel_id);
    if (!existingHotel) {
      return res.status(404).json({ success: false, message: 'Hotel tidak ditemukan.' });
    }

    // Simpan data booking ke database
    const newBooking = await Booking.create({
      hotel_id: req.body.hotel_id,
    });

    // Kirim respons ke klien
    return res.status(201).json({ success: true, message: 'Booking berhasil dibuat.', data: newBooking });
  } catch (error) {
    console.error('Terjadi kesalahan server:', error);
    return res.status(500).json({ success: false, message: 'Terjadi kesalahan server.' });
  }
};



module.exports = {
  searchHotel,
  createBookingHotel,
};



