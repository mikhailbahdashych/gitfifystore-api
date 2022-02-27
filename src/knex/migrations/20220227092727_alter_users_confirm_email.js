exports.up = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.boolean('confirm_email').notNullable().defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.dropColumn('confirm_email')
  })
};
