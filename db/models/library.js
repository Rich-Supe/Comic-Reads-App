'use strict';
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('Library', {
    shelfId: DataTypes.INTEGER,
    comicId: DataTypes.INTEGER
  }, {});
  Library.associate = function(models) {
    // associations can be defined here
  };
  return Library;
};