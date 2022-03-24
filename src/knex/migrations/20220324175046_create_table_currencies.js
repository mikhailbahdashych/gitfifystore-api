exports.up = function(knex) {
  return knex.schema.createTable('currencies', table => {
    table.uuid('id').notNullable().defaultTo(knex.raw('gen_random_uuid ()')).primary()
    table.text('name').notNullable()
    table.text('shortname').notNullable()
    table.float('price').nullable()

    table.timestamp("createdat").defaultTo(knex.fn.now())
    table.timestamp("updatedat").defaultTo(knex.fn.now())

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('currencies')
};
