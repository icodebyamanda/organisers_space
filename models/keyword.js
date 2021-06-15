'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keyword extends Model {
    
    static associate(models) {
      // define association here
      // Left empty as keywords don't belong to events or profiles
    }
  };
  Keyword.init({
    word: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Keyword',
  });
  return Keyword;
};