import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('stars').insert([
        { star: 1},
        { star: 2},
        { star: 3},
        { star: 4},      
        { star: 5},           
    ]);
}