'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Keyword.init({
    event_id: DataTypes.INTEGER,
    profile_id: DataTypes.INTEGER,
    word: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Keyword',
  });
  return Keyword;
};