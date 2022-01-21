const knex = require('knex')(require('./knexfile'));
const crypto = require('crypto');

module.exports = {
  encryptPassword,
  registerUser({ email, password }) {
    return knex('user').insert({
      email,
      salt,
      encrypted_password: encryptPassword(password),
    });
  },
};

function encryptPassword(password) {
  const salt = crypto.randomBytes(4).toString('hex');
  const hash = crypto.createHmac('sha512', salt).update(password);
  return {
    salt,
    hash: hash.digest('hex'),
  };
}
