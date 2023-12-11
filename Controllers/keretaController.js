const Train = require('../Models/kereta');
const Booking = require('../Models/booking');

//cari data nya
const searchTrain = async (req, res) => {
  const { departure_station, arrival_station, kelas } = req.query;

  try {
    //objek kondisi pencarian
    const searchKondisi = {
      departure_station: departure_station,
      arrival_station: arrival_station,
      kelas: kelas,
    }

    const kondisi ={};
    for (const key in searchKondisi){
      if(searchKondisi[key]) {
        kondisi[key] = searchKondisi[key];
      }
    }

  
    // Cari kereta berdasarkan condition-term
    const trains = await Train.findAll({
      where: kondisi,
    });

    return res.json(trains);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
};

const createBookingKereta = async (req, res) => {
  try {
    // Pastikan bahwa req.body ada dan sesuai properti yang diperlukan
    if (!req.body || !req.body.train_id ) {
      // console.error('Data tidak lengkap', req.body);
      return res.status(400).json({ success: false, message: 'Data tidak lengkap atau train_id tidak ditemukan.' });
    }

    // Cek dlu apakah hotel dengan ID yang diberikan ada
    const existingTrain = await Train.findByPk(req.body.train_id);
    if (!existingTrain) {
      return res.status(404).json({ success: false, message: 'Tiket kereta tidak ditemukan.' });
    }

    // Simpan datanya ke database di tabel bookings
    const newBooking = await Booking.create({
      train_id: req.body.train_id,
    });

    // Kirim respons ke klien / user
    return res.status(201).json({ success: true, message: 'Tiket Train berhasil di booking.', data: newBooking });
  } catch (error) {
  //   console.error('Terjadi kesalahan server:', error);
    return res.status(500).json({ success: false, message: 'Terjadi kesalahan server.' });
  }
};

module.exports = {
  searchTrain,
  createBookingKereta,
};
