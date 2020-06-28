import Knex from 'knex';

export async function up(knex: Knex){
    //CRIAR A TABELA
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
    });
}

export async function down(Knex: Knex) {
    // VOLTAR (DELETAR A TABELA)
    return Knex.schema.dropTable('items');
}