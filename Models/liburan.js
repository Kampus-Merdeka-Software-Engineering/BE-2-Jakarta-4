const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinAja")

const Holidays = sequelize.define('holidays', {
    holiday_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    holiday_place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    holiday_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  
  module.exports = Holidays;