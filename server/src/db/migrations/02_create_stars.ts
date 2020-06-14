import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('stars', table =>{
        table.increments('id').primary();
        table.integer('star').notNullable();
    });

}
export async function down(knex: Knex){
    return knex.schema.dropTable('stars');
}