const Liburan = require('../Models/liburan');
const Booking = require('../Models/booking');

const searchHolidays = async (req, res) => {

  const { destination } = req.query;

  try {
  
    // Cari tiket liburan berdasarkan destinasi / daerah
    const holidays = await Liburan.findAll({
      where: {
        destination: destination,
      },
    });

    return res.json(holidays);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Destinasi tidak di temukan.' });
  }
};

const createBookingLiburan = async (req, res) => {
    try {
      // Pastikan bahwa req.body ada dan sesuai properti yang diperlukan
      if (!req.body || !req.body.holiday_id ) {
        // console.error('Data tidak lengkap', req.body);
        return res.status(400).json({ success: false, message: 'Data tidak lengkap atau holiday_id tidak ditemukan.' });
      }
  
      // Cek dlu apakah hotel dengan ID yang diberikan ada
      const existingLiburan = await Liburan.findByPk(req.body.holiday_id);
      if (!existingLiburan) {
        return res.status(404).json({ success: false, message: 'Tiket Liburan tidak ditemukan.' });
      }
  
      // Simpan datanya ke database di tabel bookings
      const newBooking = await Booking.create({
        holiday_id: req.body.holiday_id,
      });
  
      // Kirim respons ke klien / user
      return res.status(201).json({ success: true, message: 'Tiket Liburan berhasil di booking.', data: newBooking });
    } catch (error) {
    //   console.error('Terjadi kesalahan server:', error);
      return res.status(500).json({ success: false, message: 'Terjadi kesalahan server.' });
    }
};

module.exports = {
  searchHolidays,
  createBookingLiburan
};