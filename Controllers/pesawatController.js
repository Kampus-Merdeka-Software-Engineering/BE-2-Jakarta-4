const Flight = require('../Models/pesawat');
const Booking = require('../Models/booking');

//cari data nya
const searchFlight = async (req, res) => {
  const { departure_city, arrival_city, departure_date, kelas } = req.query;

  try {
    //objek kondisi pencarian
    const searchKondisi = {
      departure_city: departure_city,
      arrival_city: arrival_city,
      departure_date: departure_date,
      kelas: kelas,
    }

    const kondisi ={};
    for (const key in searchKondisi){
      if(searchKondisi[key]) {
        kondisi[key] = searchKondisi[key];
      }
    }

    // Cari pesawat berdasarkan condition-term
    const flights = await Flight.findAll({
      where: kondisi,
    });

    return res.json(flights);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
};

const createBookingFlight = async (req, res) => {
  try {
    // Pastikan bahwa req.body ada dan sesuai properti yang diperlukan
    if (!req.body || !req.body.flight_id || !req.body.total_amount) {
      // console.error('Data tidak lengkap', req.body);
      return res.status(400).json({ success: false, message: 'Data tidak lengkap atau flight_id tidak ditemukan.' });
    }

    // Cek dlu apakah pesawat dengan ID yang diberikan ada
    const existingTrain = await Flight.findByPk(req.body.flight_id);
    if (!existingTrain) {
      return res.status(404).json({ success: false, message: 'Tiket pesawat tidak ditemukan.' });
    }

    // Simpan datanya ke database di tabel bookings
    const newBooking = await Booking.create({
      flight_id: req.body.flight_id,
      total_amount: req.body.total_amount,
    });

    // Kirim respons ke klien / user
    return res.status(201).json({ success: true, message: 'Tiket Train berhasil di booking.', data: newBooking });
  } catch (error) {
  //   console.error('Terjadi kesalahan server:', error);
    return res.status(500).json({ success: false, message: 'Terjadi kesalahan server.' });
  }
};

module.exports = {
  searchFlight,
  createBookingFlight,
};
