import Knex from 'knex';
import knexConfig from './database/knexfile';
import { createHmac, randomBytes, randomUUID } from 'crypto';

const knex = Knex(knexConfig);

export function registerUser({ email, password }) {
  console.log('in register user');
  const { salt, hash } = encryptPassword({ password });
  return knex('user').insert({
    email,
    salt,
    encrypted_password: hash,
  });
}

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
  return {
    success: hash === user.encrypted_password,
    id: user.id,
  };
}

export async function getUserIdByAuthenticationToken(authToken: string) {
  return await knex('auth_token').where({ id: authToken }).select('user_id')[0];
}

export async function insertPost(post: BlogPost) {
  return knex('blog_post').insert(post);
}

export interface BlogPost {
  user_id: number,
  title: string,
  content: string,
  date_created: Date,
  date_published?: Date,
}

export async function generateAuthenticationToken({ id }) {
  console.log('Generating authentication token for user' + id);
  const uuid = randomUUID();
  console.log('UUID: ' + uuid);
  const authToken = await knex('auth_token').insert({
    id: uuid,
    user_id: id,
  });
  console.log('inserted in database');
  return uuid;
}

export function encryptPassword({ password, salt = randomString() }) {
  const hash = createHmac('sha512', salt).update(password);
  return {
    salt,
    hash: hash.digest('hex'),
  };
}

function randomString() {
  return randomBytes(4).toString('hex');
}
