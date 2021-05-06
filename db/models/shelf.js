'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    name: DataTypes.STRING,
    isRecommended: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, { timestamps: false });
  Shelf.associate = function(models) {
    // associations can be defined here
    // Shelf.hasMany(models.Comic, { foreignKey: 'shelfId'});
    const columnMapping = {
      through: 'Libraries',
      foreignKey: 'shelfId',
      otherKey: 'comicId'
    }
    Shelf.belongsToMany( models.Comic, columnMapping);

    Shelf.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Shelf;
};
