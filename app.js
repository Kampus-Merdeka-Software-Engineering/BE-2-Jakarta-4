// backend/app.js
const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const hotelRoutes = require('./Routes/hotel');
const app = express();
const port = 3000;
var cors = require('cors')

const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinaja")

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

//rute hotel
app.use('/', hotelRoutes)

app.use(bodyParser.json());
app.use(cors())

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
