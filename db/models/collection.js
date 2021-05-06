'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    hasRead: DataTypes.BOOLEAN,
    wantsToRead: DataTypes.BOOLEAN,
    comicId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {timestamps: false});
  Collection.associate = function(models) {
    // associations can be defined here
  };
  return Collection;
};
