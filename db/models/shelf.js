'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    name: DataTypes.STRING,
    isRecommended: DataTypes.BOOLEAN,
    comicId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
    // Shelf.hasMany(models.Comic, { foreignKey: 'shelfId'});
    const columnMapping2 = {
      through: 'Libraries',
      foreignKey: 'shelfId',
      otherKey: 'comicId'
    }
    Shelf.belongsToMany( models.Comic, columnMapping2);

    Shelf.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Shelf;
};
