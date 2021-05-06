'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shelves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isRecommended: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      comicId: {
        type: Sequelize.INTEGER,
        references: { model: 'Comics'}
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users'}
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shelves');
  }
};