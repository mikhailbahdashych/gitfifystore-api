exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v4()'))
    table.text('email').notNullable()
    table.text('password').notNullable()

    table.timestamp("created_at").defaultTo(knex.fn.now())
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));

  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
