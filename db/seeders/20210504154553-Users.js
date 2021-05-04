'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Users",[
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          emailAddress : faker.internet.email(),
          hashedPassword: bcrypt.hashSync("password"),
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        ], {});
      },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Users", null, {});
  }
};
