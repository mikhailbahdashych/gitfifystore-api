exports.up = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.text('personaluuid')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.dropColumn('personaluuid')
  })
};
