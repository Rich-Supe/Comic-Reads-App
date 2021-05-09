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
        {shelfId: 1, comicId: 13, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 14, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 15, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 16, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 17, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 18, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 19, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 20, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 21, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 22, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 23, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 24, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 25, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 26, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 27, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 28, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 29, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 30, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 31, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 32, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 71, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 72, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 73, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 74, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 75, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 76, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 77, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 78, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 79, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 1, comicId: 80, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 33, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 34, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 35, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 36, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 37, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 38, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 39, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 40, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 41, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 42, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 51, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 52, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 53, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 54, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 55, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 56, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 57, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 58, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 59, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 60, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 91, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 92, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 93, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 94, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 95, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 96, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 97, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 98, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 99, createdAt: new Date(), updatedAt: new Date()},
        {shelfId: 2, comicId: 100, createdAt: new Date(), updatedAt: new Date()}
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
