const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinAja")

const Hotel = require('./hotel');
const Pesawat = require('./pesawat');
const Liburan = require('./liburan');
const Kereta = require('./kereta');


const Bookings = sequelize.define('bookings', {
    booking_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,  
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'user_id',
      },
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Hotel', 
        key: 'hotel_id',
      },
    },
    flight_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Flights',
        key: 'flight_id',
      },
    },
    train_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Trains',
        key: 'train_id',
      },
    },
    holiday_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Holidays',
        key: 'holiday_id',
      },
    },
    booking_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

Bookings.belongsTo(Hotel, { foreignKey: 'hotel_id' });
Hotel.hasMany(Bookings, { foreignKey: 'hotel_id' });

Bookings.belongsTo(Pesawat, { foreignKey: 'flight_id' });
Pesawat.hasMany(Bookings, { foreignKey: 'flight_id' });

Bookings.belongsTo(Liburan, { foreignKey: 'holiday_id' });
Liburan.hasMany(Bookings, { foreignKey: 'holiday_id' });

Bookings.belongsTo(Kereta, { foreignKey: 'train_id' });
Kereta.hasMany(Bookings, { foreignKey: 'train_id' });

module.exports = Bookings;
