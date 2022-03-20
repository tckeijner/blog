import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('blog_post', (t) => {
    t.increments('id').primary();
    t.integer('user_id').unsigned().notNullable();
    t.foreign('user_id').references('id').inTable('user');
    t.string('title').notNullable();
    t.text('content', 'longtext').notNullable();
    t.datetime('date_created').notNullable();
    t.datetime('date_published').nullable();
    t.timestamps(false, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('blog_post');
}
