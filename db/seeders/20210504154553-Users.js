'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Users",[
        {emailAddress: 'yo@yo.com', firstName: 'Stephen', lastName: 'Choung', hashedPassword: 'asdf'}
        // {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        //   {
        //     username: faker.internet.userName(),
        //     email: faker.internet.email(),
        //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   },
        ], {});
      },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Users", null, {});
  }
};
