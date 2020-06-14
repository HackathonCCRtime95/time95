import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('points', table =>{
        table.increments('id').primary();
        table.decimal('lat').notNullable;
        table.decimal('long').notNullable;
        table.integer('start').notNullable;
    });

}
export async function down(knex: Knex){
    return knex.schema.dropTable('points');
}