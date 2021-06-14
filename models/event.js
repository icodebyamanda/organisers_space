'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    audience_capacity: DataTypes.INTEGER,
    if_underage: DataTypes.BOOLEAN,
    materials_needed: DataTypes.STRING,
    if_free: DataTypes.BOOLEAN,
    pricing: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};