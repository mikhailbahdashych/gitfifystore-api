exports.up = function(knex) {
  return knex.schema.createTable('balances', table => {
    table.uuid('id').notNullable().defaultTo(knex.raw('gen_random_uuid ()')).primary()

    table.uuid('clientid').notNullable()
    table
      .foreign('clientid')
      .references('id')
      .inTable('clients')

    table.uuid('currencyid')
    table
      .foreign('currencyid')
      .references('id')
      .inTable('currencies')


    table.timestamp("createdat").defaultTo(knex.fn.now())
    table.timestamp("updatedat").defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('balances')
};
