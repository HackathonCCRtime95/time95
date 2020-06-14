import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('point_stars', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users');

        table.integer('star_id')
            .notNullable()
            .references('id')
            .inTable('stars');
    });

}
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_stars');
}