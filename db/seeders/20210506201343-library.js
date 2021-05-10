'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Libraries', [
        {shelfId: 1, comicId: 4, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 23, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 17, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 10, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 21, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 36, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 47, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 52, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 66, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 95, createdAt: new Date(), updatedAt: new Date()},
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Libraries', null, {});
  }
};
