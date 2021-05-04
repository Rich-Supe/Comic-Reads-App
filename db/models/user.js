'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    emailAddress: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {timestamps: false});
  User.associate = function(models) {
    // associations can be defined here

    const columnMapping = {
      through: 'Collections',
      foreignKey: 'userId',
      otherKey: 'comicId'
    }

    User.belongsToMany( models.Comic, columnMapping);
    User.hasMany( models.Shelf, { foreignKey: "userId"});
    User.hasMany( models.Review, { foreignKey: "userId" }); 
  };
  return User;
};