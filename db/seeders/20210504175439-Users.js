'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Users",[
        {
          firstName: "DemoUser",
          lastName: "DemoUser",
          emailAddress : "demo@demo.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Egon",
          lastName: "Stetmann",
          emailAddress : "EgonStetmann@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Ariel",
          lastName: "Hanson",
          emailAddress : "Ariel_Hanson@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Rory",
          lastName: "Swann",
          emailAddress : "Rory_Swann@yahoo.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Matt",
          lastName: "Horner",
          emailAddress : "Matt.Horner@yahoo.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Arcturus",
          lastName: "Mengsk",
          emailAddress : "Arcturus.Mengsk420@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Samir",
          lastName: "Duran",
          emailAddress : "NotSamDuran69@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Jim",
          lastName: "Raynor",
          emailAddress : "Jimmy.Raynor34@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Sarah",
          lastName: "Kerrigan",
          emailAddress : "SarahK21@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Alexei",
          lastName: "Stukov",
          emailAddress : "Alexei.Stukov8@hotmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Tychus",
          lastName: "Findlay",
          emailAddress : "Tychus.Findlay@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Edmund",
          lastName: "Duke",
          emailAddress : "Edmund.Duke@gmail.com",
          hashedPassword: bcrypt.hashSync("password"),
        },
        ], {});
      },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Users", null, {});
  }
};
