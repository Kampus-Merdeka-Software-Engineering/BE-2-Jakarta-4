const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinAja")

const Flights = sequelize.define('Flights', {
    flight_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    maskapai: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departure_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival_city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departure_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    arrival_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
  
  module.exports = Flights;
