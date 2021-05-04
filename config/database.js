const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
development: {
  username,
  password,
  database,
  host,
  dialect: 'postgres',
  seederStorage: 'sequelize',
  },
};

// "development": {
//   "username": "app_academy",
//   "password": "password",
//   "database": "comic_reads",
//   "host": "127.0.0.1",
//   "dialect": 'postgres',
//   "seederStorage": 'sequelize',
// },
// };
