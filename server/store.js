const knex = require('knex')(require('./knexfile'));

module.exports = {
  registerUser({ email, password }) {
    return knex('user')
      .insert({
        email,
        password,
      })
      .then(() => {
        console.log('Add user');
        console.log('email: ' + email);
        console.log('password: ' + password);
      });
  },
};
