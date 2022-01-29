import { Knex } from 'knex';
import { encryptPassword } from '../store';

export async function up(knex: Knex) {
  await knex.schema.table('user', (t) => {
    t.string('salt').notNullable();
    t.string('encrypted_password').notNullable();
  });
  const users = await knex('user');
  await Promise.all(users.map(convertPassword));
  await knex.schema.table('user', (t) => {
    t.dropColumn('password');
  });
  function convertPassword(user) {
    const { salt, hash } = encryptPassword(user.password);
    return knex('user').where({ id: user.id }).update({
      salt,
      encrypted_password: hash,
    });
  }
}

export function down(knex: Knex) {
  return knex.schema.table('user', (t) => {
    t.dropColumn('salt');
    t.dropColumn('encrypted_password');
    t.string('password').notNullable();
  });
}
