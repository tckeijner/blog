import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('auth_token', (t) => {
    t.uuid('id').primary().unique();
    t.integer('user_id').unsigned().notNullable();
    t.foreign('user_id').references('id').inTable('user');
    t.timestamps(false, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('auth_token');
}
