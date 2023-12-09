// backend/app.js
const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var cors = require('cors')



const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinaja")

const hotelController = require('../Controllers/hotelController');
const router = express.Router();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json());
app.use(cors())

// Routes
const apiRoutes = require('./Routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Rute untuk mencari hotel berdasarkan daerah, check-in, dan check-out
router.get('/search', async (req, res) => {
  const { area, checkIn, checkOut } = req.query;

  try {
    const hotels = await hotelController.searchHotels({ area, checkIn, checkOut });
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
});

module.exports = router;
