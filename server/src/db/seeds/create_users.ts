import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert([
    {
      "name": "Mit",
      "phone": "585858585858"
    },
    {
      "name": "Sebastião",
      "phone": "1196385214"
    },
    {
      "name": "Zé",
      "phone": "118748523"
    },
    {
      "name": "Tuxão",
      "phone": "1178945612"
    },
    {
      "name": "Adrão",
      "phone": "6178958212"
    }
    ,
    {
      "name": "Russo",
      "phone": "6478958369"
    }
  ]);
}