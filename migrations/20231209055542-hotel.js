'use strict';

/** @type {import('sequelize-cli').Migration} */

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, sequelize) {
    await queryInterface.addColumn('hotel', {
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
