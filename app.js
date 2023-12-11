const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const hotelRoutes = require('./Routes/hotel');
const liburanRoutes = require('./Routes/liburan');
const keretaRoutes = require('./Routes/kereta');
const pesawatRoutes = require('./Routes/pesawat');

const app = express();
const port = 3000;
var cors = require('cors');

const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinaja");

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// rute layanan
app.use('/', hotelRoutes);
app.use('/hotel', hotelRoutes);
app.use('/', liburanRoutes);
app.use('/liburan', liburanRoutes);
app.use('/', keretaRoutes);
app.use('/kereta', keretaRoutes);
app.use('/', pesawatRoutes);
app.use('/flight', pesawatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});