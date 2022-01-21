const knex = require('knex')(require('./knexfile'));
const crypto = require('crypto');

module.exports = {
  encryptPassword,

  registerUser({ email, password }) {
    const { salt, hash } = encryptPassword({ password });
    return knex('user').insert({
      email,
      salt,
      encrypted_password: hash,
    });
  },

  authenticate({ email, password }) {
    console.log(`Authenticating user ${email}`);
    return knex('user')
      .where({ email })
      .then(([user]) => {
        if (!user) return { success: false };
        const { hash } = encryptPassword({
          password,
          salt: user.salt,
        });
        return { success: hash === user.encrypted_password };
      });
  },
};

function encryptPassword({ password, salt = randomString() }) {
  const hash = crypto.createHmac('sha512', salt).update(password);
  return {
    salt,
    hash: hash.digest('hex'),
  };
}

function randomString() {
  return crypto.randomBytes(4).toString('hex');
}
