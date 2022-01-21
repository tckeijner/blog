const knex = require('knex')(require('./knexfile'));

module.exports = {
  registerUser({ email, password }) {
    return knex('user').insert({
      email,
      password,
    });
  },
};
