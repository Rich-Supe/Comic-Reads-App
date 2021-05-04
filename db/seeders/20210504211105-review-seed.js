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
      return queryInterface.bulkInsert('Reviews', [
      {userId: 1, comicId: 4, review: "This is a review for The Sandman Dream Country", rating: 4},
      {userId: 1, comicId: 12, review: "This is a review for The Sandman Endless Nights", rating: 5},
      {userId: 1, comicId: 21, review: "This is a review for The X-Men Issue 9", rating: 2},
      {userId: 1, comicId: 26, review: "This is a review for The Amazing Spider Man Issue 4", rating: 5},
      {userId: 1, comicId: 8, review: "This is a review for The Sandman Brief Lives", rating: 3},
      {userId: 1, comicId: 23, review: "This is a review for The Amazing Spider Man Issue 1", rating: 4},
      {userId: 1, comicId: 1, review: "This is a review for The Sandman Overture", rating: 4},
      {userId: 1, comicId: 6, review: "This is a review for The Sandman A Game of You", rating: 1},
      {userId: 1, comicId: 17, review: "This is a review for The X-Men Issue 5", rating: 3},
      {userId: 3, comicId: 4, review: "This is a review for The Sandman Dream Country", rating: 1},
      {userId: 3, comicId: 20, review: "This is a review for The X-Men Issue 8", rating: 4},
      {userId: 5, comicId: 10, review: "This is a review for The Sandman The Kindly Ones", rating: 4},
      {userId: 5, comicId: 14, review: "This is a review for The X-Men Issue 2", rating: 3},
      {userId: 5, comicId: 9, review: "This is a review for The Sandman World's End", rating: 2}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
