'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    emailAddress: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    const columnMapping = {
      through: 'Collections',
      foreignKey: 'userId',
      otherKey: 'comicId'
    }

    // const columnMapping2 = {
    //   through: 'Libraries',
    //   foreignKey: 'userId',
    //   otherKey: 'shelfId'
    // }

    User.belongsToMany( models.Comic, columnMapping);
    User.belongsToMany( models.Shelf, columnMapping2);
    User.hasMany(models.Shelf, { foreignKey: "userId" }); 
  };
  return User;
};