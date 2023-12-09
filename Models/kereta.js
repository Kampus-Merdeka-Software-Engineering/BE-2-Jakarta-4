const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost:3306/db_travelinAja")

const Trains = sequelize.define('Trains', {
    train_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    train_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departure_station: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival_station: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departure_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    arrival_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  
  module.exports = Trains;