import Knex from 'knex';

export async function up(knex: Knex){
    //CRIAR A TABELA
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();
    table.string('point_id')
    .notNullable()
    .references('id')
    .inTable('points');

    table.integer('item_id')
    .notNullable()
    .references('id')
    .inTable('items');
    });
}

export async function down(Knex: Knex) {
    // VOLTAR (DELETAR A TABELA)
    return Knex.schema.dropTable('point_items');
}