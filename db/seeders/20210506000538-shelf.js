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
        {name: 'Recommended 1', userId: 1, isRecommended: true},
        {name: 'Recommended 2', userId: 1, isRecommended: true},
        {name: 'Recommended 3', userId: 1, isRecommended: true},
        {name: 'Recommended 4', userId: 1, isRecommended: true},
        {name: 'Recommended 5', userId: 1, isRecommended: true},
        {name: 'My Shelf', userId: 1, isRecommended: false},
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
