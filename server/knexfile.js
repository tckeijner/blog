credentials = require('./mysql-credentials.json');

module.exports = {
  client: 'mysql',
  connection: {
    user: credentials.user,
    password: credentials.password,
    database: 'blog',
  },
};
