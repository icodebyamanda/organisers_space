'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, { foreignKey: 'UserId' });
      Profile.hasMany(models.Event, { foreignKey: 'ProfileId' });
      Profile.hasMany(models.Keyword, { foreignKey: 'ProfileId' });
    }
  };
  Profile.init({
    description: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    video: DataTypes.STRING,
    profile_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};