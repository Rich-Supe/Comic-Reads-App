'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comics', [
      {title: 'The Sandman Overture', author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1444878181l/18310944._SY475_.jpg'},
      {title: 'The Sandman Preludes and Nocturnes', author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1411609637l/23754.jpg'},
      {title: "The Sandman The Doll's House", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298566119l/25099.jpg'},
      {title: "The Sandman Dream Country", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1402485052l/25100.jpg'},
      {title: "The Sandman Season of Mists", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327937313l/25101.jpg'},
      {title: "The Sandman A Game of You", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1312279891l/25102.jpg'},
      {title: "The Sandman Fables & Reflections", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1311961999l/25106.jpg'},
      {title: "The Sandman Brief Lives", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339922078l/25105.jpg'},
      {title: "The Sandman World's End", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339922260l/25103.jpg'},
      {title: "The Sandman The Kindly Ones", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339922887l/71252.jpg'},
      {title: "The Sandman The Wake", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339922545l/25104.jpg'},
      {title: "The Sandman Endless Nights", author: 'Neil Gaiman', genre: 'Dark Fantasy', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327948224l/47720.jpg'},
      {title: 'The X-Men Issue 1', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Magnetodebut.png/250px-Magnetodebut.png'},
      {title: 'The X-Men Issue 2', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/677015.jpg'},
      {title: 'The X-Men Issue 3', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/675893.jpg'},
      {title: 'The X-Men Issue 4', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/675197.jpg'},
      {title: 'The X-Men Issue 5', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/677021.jpg'},
      {title: 'The X-Men Issue 6', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1080749.jpg'},
      {title: 'The X-Men Issue 7', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/871737.jpg'},
      {title: 'The X-Men Issue 8', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/873665.jpg'},
      {title: 'The X-Men Issue 9', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/675897.jpg'},
      {title: 'The X-Men Issue 10', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/675203.jpg'},
      {title: 'The Amazing Spider Man Issue 1', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/673435.jpg'},
      {title: 'The Amazing Spider Man Issue 2', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/675285.jpg'},
      {title: 'The Amazing Spider Man Issue 3', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/674087.jpg'},
      {title: 'The Amazing Spider Man Issue 4', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/675293.jpg'},
      {title: 'The Amazing Spider Man Issue 5', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/674091.jpg'},
      {title: 'The Amazing Spider Man Issue 6', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/673441.jpg'},
      {title: 'The Amazing Spider Man Issue 7', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/675299.jpg'},
      {title: 'The Amazing Spider Man Issue 8', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/674099.jpg'},
      {title: 'The Amazing Spider Man Issue 9', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/673445.jpg'},
      {title: 'The Amazing Spider Man Issue 10', author: 'Stan Lee', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/5597708.jpg'},
      {title: 'Spawn Issue 1', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/871499.jpg'},
      {title: 'Spawn Issue 2', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/799649.jpg'},
      {title: 'Spawn Issue 3', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/727833.jpg'},
      {title: 'Spawn Issue 4', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/872145.jpg'},
      {title: 'Spawn Issue 5', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/799785.jpg'},
      {title: 'Spawn Issue 6', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1080931.jpg'},
      {title: 'Spawn Issue 7', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/871493.jpg'},
      {title: 'Spawn Issue 8', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1080933.jpg'},
      {title: 'Spawn Issue 9', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/725809.jpg'},
      {title: 'Spawn Issue 10', author: 'Todd McFarlane', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/727895.jpg'},
      {title: 'Johnny The Homicidal Maniac Issue 1', author: 'Jhonen Vasquez', genre: 'Goth', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/739053.jpg'},
      {title: 'Johnny The Homicidal Maniac Issue 2', author: 'Jhonen Vasquez', genre: 'Goth', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/901097.jpg'},
      {title: 'Johnny The Homicidal Maniac Issue 3', author: 'Jhonen Vasquez', genre: 'Goth', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/739047.jpg'},
      {title: 'Johnny The Homicidal Maniac Issue 4', author: 'Jhonen Vasquez', genre: 'Goth', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/727479.jpg'},
      {title: 'Johnny The Homicidal Maniac Issue 5', author: 'Jhonen Vasquez', genre: 'Goth', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1073035.jpg'},
      {title: 'Johnny The Homicidal Maniac Issue 6', author: 'Jhonen Vasquez', genre: 'Goth', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/879321.jpg'},
      {title: 'Johnny The Homicidal Maniac Issue 7', author: 'Jhonen Vasquez', genre: 'Goth', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/879325.jpg'},
      {title: "Johnny The Homicidal Maniac: Director's Cut", author: 'Jhonen Vasquez', genre: 'Goth', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/602775.jpg'},
      {title: 'Evil Dead Issue 1', author: 'Mark Verheiden', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1118523.jpg'},
      {title: 'Evil Dead Issue 2', author: 'Mark Verheiden', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1119305.jpg'},
      {title: 'Evil Dead Issue 3', author: 'Mark Verheiden', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/946083.jpg'},
      {title: 'Evil Dead Issue 4', author: 'Mark Verheiden', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1121501.jpg'},
      {title: 'Evil Dead 2: Beyond Dead By Dawn Issue 1', author: 'Frank Hannah', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2793194.jpg'},
      {title: 'Evil Dead 2: Beyond Dead By Dawn Issue 2', author: 'Frank Hannah', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2915666.jpg'},
      {title: 'Evil Dead 2: Beyond Dead By Dawn Issue 3', author: 'Frank Hannah', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3044231.jpg'},
      {title: 'Evil Dead 2: Dark Ones Rising Issue 1', author: 'Frank Hannah', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3727025.jpg'},
      {title: 'Evil Dead 2: Dark Ones Rising Issue 2', author: 'Frank Hannah', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3738662.jpg'},
      {title: 'Evil Dead 2: Dark Ones Rising Issue 3', author: 'Frank Hannah', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3881588.jpg'},
      {title: 'Evil Ernie Issue 1', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/702975.jpg'},
      {title: 'Evil Ernie Issue 2', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/701475.jpg'},
      {title: 'Evil Ernie Issue 3', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/700629.jpg'},
      {title: 'Evil Ernie Issue 4', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/702079.jpg'},
      {title: 'Evil Ernie Issue 5', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/702087.jpg'},
      {title: 'Evil Ernie Issue 6', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/702985.jpg'},
      {title: 'Evil Ernie Issue 7', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/695471.jpg'},
      {title: 'Evil Ernie Issue 8', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/703899.jpg'},
      {title: 'Evil Ernie Issue 9', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/702977.jpg'},
      {title: 'Evil Ernie Issue 10', author: ' Brian Pulido and Philip Nutman', genre: 'Supervillain', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/702659.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 1', author: "Dennis O'Neil", genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/732069.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 2', author: "Dennis O'Neil", genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/862751.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 3', author: "Dennis O'Neil", genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/621543.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 4', author: "Dennis O'Neil", genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/623041.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 5', author: "Dennis O'Neil", genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/621995.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 6', author: 'Grant Morrison', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/732755.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 7', author: 'Grant Morrison', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/732829.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 8', author: 'Grant Morrison', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/730505.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 9', author: 'Grant Morrison', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/730511.jpg'},
      {title: 'Batman Legends of The Dark Knight Issue 10', author: 'Grant Morrison', genre: 'Superhero', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/737205.jpg'},
      {title: 'Mass Effect Foundation Issue 1', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1441322.jpg'},
      {title: 'Mass Effect Foundation Issue 2', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1488587.jpg'},
      {title: 'Mass Effect Foundation Issue 3', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1532528.jpg'},
      {title: 'Mass Effect Foundation Issue 4', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1577225.jpg'},
      {title: 'Mass Effect Foundation Issue 5', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1644218.jpg'},
      {title: 'Mass Effect Foundation Issue 6', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1671104.jpg'},
      {title: 'Mass Effect Foundation Issue 7', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1731251.jpg'},
      {title: 'Mass Effect Foundation Issue 8', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1815053.jpg'},
      {title: 'Mass Effect Foundation Issue 9', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1878857.jpg'},
      {title: 'Mass Effect Foundation Issue 10', author: 'Mac Walters', genre: 'Sci-Fi', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1913516.jpg'},
      {title: 'Hellraiser Issue 1', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/901921.jpg'},
      {title: 'Hellraiser Issue 2', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/640287.jpg'},
      {title: 'Hellraiser Issue 3', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/642381.jpg'},
      {title: 'Hellraiser Issue 4', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/642381.jpg'},
      {title: 'Hellraiser Issue 5', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/640297.jpg'},
      {title: 'Hellraiser Issue 6', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/640661.jpg'},
      {title: 'Hellraiser Issue 7', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/675513.jpg'},
      {title: 'Hellraiser Issue 8', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/626739.jpg'},
      {title: 'Hellraiser Issue 9', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/628113.jpg'},
      {title: 'Hellraiser Issue 10', author: 'Clive Barker', genre: 'Horror', coverUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/629657.jpg'}
    ], {});
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comics', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
