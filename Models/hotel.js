const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinAja")

const Hotel = sequelize.define('Hotel', {
    hotel_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    hotel_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    fasilitas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
  
  module.exports = Hotel;
