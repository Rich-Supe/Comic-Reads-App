'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    comicId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Comic, {foreignKey: 'comicId'});
  };
  return Review;
};
