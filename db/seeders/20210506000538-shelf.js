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
      return queryInterface.bulkInsert('Shelves', [
        {name: 'Recommended 1', comicId: 4, userId: 1, isRecommended: true},
        {name: 'Recommended 1', comicId: 12, userId: 1, isRecommended: true},
        {name: 'Recommended 1', comicId: 21, userId: 1, isRecommended: true},
        {name: 'Recommended 1', comicId: 6, userId: 1, isRecommended: true},
        {name: 'Recommended 1', comicId: 17, userId: 1, isRecommended: true},
        {name: 'Recommended 2', comicId: 23, userId: 1, isRecommended: true},
        {name: 'Recommended 2', comicId: 10, userId: 1, isRecommended: true},
        {name: 'Recommended 2', comicId: 14, userId: 1, isRecommended: true},
        {name: 'Recommended 2', comicId: 21, userId: 1, isRecommended: true},
        {name: 'Recommended 2', comicId: 8, userId: 1, isRecommended: true},
        {name: 'Recommended 3', comicId: 9, userId: 1, isRecommended: true},
        {name: 'Recommended 3', comicId: 17, userId: 1, isRecommended: true},
        {name: 'Recommended 3', comicId: 4, userId: 1, isRecommended: true},
        {name: 'Recommended 3', comicId: 26, userId: 1, isRecommended: true},
        {name: 'Recommended 3', comicId: 12, userId: 1, isRecommended: true},
        {name: 'Recommended 4', comicId: 10, userId: 1, isRecommended: true},
        {name: 'Recommended 4', comicId: 1, userId: 1, isRecommended: true},
        {name: 'Recommended 4', comicId: 4, userId: 1, isRecommended: true},
        {name: 'Recommended 4', comicId: 21, userId: 1, isRecommended: true},
        {name: 'Recommended 4', comicId: 20, userId: 1, isRecommended: true},
        {name: 'Recommended 5', comicId: 14, userId: 1, isRecommended: true},
        {name: 'Recommended 5', comicId: 10, userId: 1, isRecommended: true},
        {name: 'Recommended 5', comicId: 26, userId: 1, isRecommended: true},
        {name: 'Recommended 5', comicId: 23, userId: 1, isRecommended: true},
        {name: 'Recommended 5', comicId: 17, userId: 1, isRecommended: true},
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Shelves', null, {});
  }
};
