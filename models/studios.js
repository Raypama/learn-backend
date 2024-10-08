'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      studios.hasMany(models.movies, {
        foreignKey: 'studios_id'
      })
    }
  }
  studios.init({
    studioName: DataTypes.STRING,
    address: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'studios', 
  });
  return studios;
};