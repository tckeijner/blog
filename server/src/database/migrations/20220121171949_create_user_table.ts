import { Knex } from 'knex';

exports.up = function (knex: Knex) {
  return knex.schema.createTable('user', (t) => {
    t.increments('id').primary();
    t.string('email').notNullable();
    t.string('password').notNullable();
    t.timestamps(false, true);
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTableIfExists('user');
};
