const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    traveler_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traveler_id: {
      type: DataTypes.INTEGER,
      REFERENCES:{
        model: 'traveler',
        key: 'id',
        unqiue: false,
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      REFERENCES:{
        model: 'location',
        key: 'id',
        unqiue: false,
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
  }
);

module.exports = Trip;
