const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinAja")

const Users = sequelize.define('Users', {
    booking_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id',
      },
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hotel', // Ganti dari 'Hotels' ke 'Hotel'
        key: 'hotel_id',
      },
    },
    flight_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Flights',
        key: 'flight_id',
      },
    },
    train_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Trains',
        key: 'train_id',
      },
    },
    holiday_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Holidays',
        key: 'holiday_id',
      },
    },
    booking_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    other_booking_fields: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  
  module.exports = Users;
