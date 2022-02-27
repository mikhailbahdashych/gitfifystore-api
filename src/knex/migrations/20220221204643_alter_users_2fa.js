exports.up = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.text('twofa').nullable()
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.dropColumn('twofa')
  })
};
