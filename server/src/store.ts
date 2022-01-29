import Knex from 'knex';
import knexConfig from './knexfile';
import { createHmac, randomBytes } from 'crypto';

const knex = Knex(knexConfig);

export function registerUser({ email, password }) {
  console.log('in register user')
  const { salt, hash } = encryptPassword({ password });
  return knex('user').insert({
    email,
    salt,
    encrypted_password: hash,
  });
};

export async function authenticate({ email, password }) {
  console.log(`Authenticating user ${email}`);
  const [user] = await knex('user')
    .where({ email });
  if (!user)
    return { success: false };
  const { hash } = encryptPassword({
    password,
    salt: user.salt,
  });
  return { success: hash === user.encrypted_password };
};

export function encryptPassword({ password, salt = randomString() }) {
  const hash = createHmac('sha512', salt).update(password);
  return {
    salt,
    hash: hash.digest('hex'),
  };
};

function randomString() {
  return randomBytes(4).toString('hex');
};
