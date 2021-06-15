'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    
    static associate(models) {
      // define association here
      Event.belongsTo(models.Profile, { foreignKey: 'ProfileId' });
      Event.hasMany(models.Keyword, { foreignKey: 'EventId' });
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