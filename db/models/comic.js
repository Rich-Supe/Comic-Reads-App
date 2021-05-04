'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comic = sequelize.define('Comic', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    coverUrl: DataTypes.STRING
  }, {timestamps: false});
  Comic.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Collections',
      foreignKey: 'comicId',
      otherKey: 'userId'
    }

    const columnMapping2 = {
      through: 'Libraries',
      foreignKey: 'comicId',
      otherKey: 'shelfId'
    }

    Comic.belongsToMany( models.User, columnMapping);
    Comic.belongsToMany( models.Shelf, columnMapping2);
    Comic.hasMany(models.Review, { foreignKey: "comicId" });
  };
  return Comic;
};
