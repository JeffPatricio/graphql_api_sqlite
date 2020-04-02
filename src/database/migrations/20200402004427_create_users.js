exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('email').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
