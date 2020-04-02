exports.seed = (knex) => {
  return knex('users').del().then(() => {
    return knex('users').insert([
      { name: 'Jefferson', email: 'jefferson@email.com' },
      { name: 'Marcos', email: 'marcos@email.com' },
      { name: 'Fernando', email: 'fernando@email.com' },
      { name: 'Maria', email: 'maria@email.com' },
      { name: 'Nicole', email: 'nicole@email.com' }
    ])
  })
}
